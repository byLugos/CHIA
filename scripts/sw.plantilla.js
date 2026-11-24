/* Service worker de CHIA (PWA).
 * ESTE ARCHIVO ES UNA PLANTILLA: scripts/generar-sw.mjs lo completa después
 * de cada `npm run build` y lo guarda como out/sw.js. No se edita a mano en out/.
 *
 * Qué hace:
 * - Al instalarse guarda todo el sitio (páginas, estilos, logos, PDF de /public)
 *   para que CHIA se pueda navegar sin internet.
 * - Páginas y datos de navegación: SIEMPRE primero internet (sin caché del
 *   navegador), así la app instalada muestra lo mismo que el sitio. Si no hay
 *   conexión o tarda más de 4 s, se muestra la copia guardada.
 * - Código de Next (_next/static): nombre único por versión → copia guardada.
 * - YouTube, Drive y otros sitios externos no se tocan: necesitan internet.
 */
const VERSION = "__VERSION__";
const BASE = "__BASE__";
const PRECACHE = __PRECACHE__;

const CACHE = `chia-${VERSION}`;
const PAGINA_SIN_CONEXION = `${BASE}/sin-conexion/`;
const ESPERA_RED_MS = 4000;

// Guarda una URL sin el "?..." para que coincida aunque Next agregue parámetros
const clave = (url) => {
  const u = new URL(url, self.location.origin);
  return u.origin + u.pathname;
};

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // De a 20 archivos; si uno falla, los demás se guardan igual
      for (let i = 0; i < PRECACHE.length; i += 20) {
        await Promise.allSettled(
          PRECACHE.slice(i, i + 20).map(async (url) => {
            const respuesta = await fetch(url, { cache: "reload" });
            if (respuesta.ok) await cache.put(clave(url), respuesta);
          }),
        );
      }
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    (async () => {
      // Borra las copias de versiones anteriores del sitio
      const nombres = await caches.keys();
      await Promise.all(
        nombres
          .filter((nombre) => nombre.startsWith("chia-") && nombre !== CACHE)
          .map((nombre) => caches.delete(nombre)),
      );
      await self.clients.claim();
    })(),
  );
});

async function buscarEnCache(url) {
  const cache = await caches.open(CACHE);
  const k = clave(url);
  return (
    (await cache.match(k)) ||
    // /CHIA/areas y /CHIA/areas/ son la misma página
    (!k.endsWith("/") ? await cache.match(`${k}/`) : undefined)
  );
}

async function guardar(url, respuesta) {
  if (!respuesta || !respuesta.ok || respuesta.type !== "basic") return;
  const cache = await caches.open(CACHE);
  await cache.put(clave(url), respuesta);
}

// Pide a internet sin usar la caché HTTP del navegador (GitHub Pages pide
// guardar 10 min; así siempre llega la última versión publicada)
function pedirFresco(request) {
  return fetch(new Request(request, { cache: "no-cache" }));
}

// Internet primero (con tiempo límite); si no hay, la copia guardada
async function redPrimero(evento) {
  const { request } = evento;
  const esPagina = request.mode === "navigate";
  const red = pedirFresco(request).then((respuesta) => {
    evento.waitUntil(guardar(request.url, respuesta.clone()));
    return respuesta;
  });
  red.catch(() => {}); // si falla después de mostrar la copia, no es un error

  const limite = new Promise((resolver) => setTimeout(resolver, ESPERA_RED_MS));
  try {
    const primera = await Promise.race([red, limite]);
    if (primera) return primera;
    // Internet está tardando: si hay copia se muestra ya (la red sigue actualizando)
    return (await buscarEnCache(request.url)) || (await red);
  } catch {
    return (
      (await buscarEnCache(request.url)) ||
      (esPagina ? await buscarEnCache(PAGINA_SIN_CONEXION) : undefined) ||
      Response.error()
    );
  }
}

// Archivos con nombre único (_next/static): copia guardada primero
async function estatico(request) {
  const copia = await buscarEnCache(request.url);
  if (copia) return copia;
  const respuesta = await fetch(request);
  await guardar(request.url, respuesta.clone());
  return respuesta;
}

// La página puede preguntar qué versión está activa
self.addEventListener("message", (evento) => {
  if (evento.data === "version" && evento.ports[0]) evento.ports[0].postMessage(VERSION);
});

self.addEventListener("fetch", (evento) => {
  const { request } = evento;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Solo el propio sitio; YouTube, Drive, GoatCounter, etc. van directo a internet
  if (url.origin !== self.location.origin || !url.pathname.startsWith(`${BASE}/`)) return;

  if (url.pathname.includes("/_next/static/")) {
    evento.respondWith(estatico(request));
  } else {
    evento.respondWith(redPrimero(evento));
  }
});
