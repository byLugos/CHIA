/* Service worker de CHIA (PWA).
 * ESTE ARCHIVO ES UNA PLANTILLA: scripts/generar-sw.mjs lo completa después
 * de cada `npm run build` y lo guarda como out/sw.js. No se edita a mano en out/.
 *
 * Qué hace:
 * - Al instalarse guarda todo el sitio (páginas, estilos, logos, PDF de /public)
 *   para que CHIA se pueda navegar sin internet.
 * - Páginas: primero intenta la red (para ver siempre lo último); si no hay
 *   conexión o tarda más de 4 s, muestra la copia guardada.
 * - Archivos de Next (_next/static): se sirven desde la copia guardada.
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

// Páginas: red primero (con tiempo límite), luego copia guardada
async function pagina(evento) {
  const { request } = evento;
  const red = fetch(request).then((respuesta) => {
    evento.waitUntil(guardar(request.url, respuesta.clone()));
    return respuesta;
  });
  red.catch(() => {}); // si falla después de mostrar la copia, no es un error

  const limite = new Promise((resolver) => setTimeout(resolver, ESPERA_RED_MS));
  try {
    const primera = await Promise.race([red, limite]);
    if (primera) return primera;
    // La red está tardando: si hay copia, se muestra ya (la red sigue actualizando)
    const copia = await buscarEnCache(request.url);
    return copia || (await red);
  } catch {
    return (
      (await buscarEnCache(request.url)) ||
      (await buscarEnCache(PAGINA_SIN_CONEXION)) ||
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

// Lo demás (datos de navegación, imágenes, PDF): copia al instante y se
// actualiza en segundo plano
async function actualizable(evento) {
  const { request } = evento;
  const copia = await buscarEnCache(request.url);
  const red = fetch(request)
    .then(async (respuesta) => {
      await guardar(request.url, respuesta.clone());
      return respuesta;
    })
    .catch(() => undefined);
  if (copia) {
    evento.waitUntil(red);
    return copia;
  }
  return (await red) || Response.error();
}

self.addEventListener("fetch", (evento) => {
  const { request } = evento;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Solo el propio sitio; YouTube, Drive, GoatCounter, etc. van directo a internet
  if (url.origin !== self.location.origin || !url.pathname.startsWith(`${BASE}/`)) return;

  if (request.mode === "navigate") {
    evento.respondWith(pagina(evento));
  } else if (url.pathname.includes("/_next/static/")) {
    evento.respondWith(estatico(request));
  } else {
    evento.respondWith(actualizable(evento));
  }
});
