// Genera out/sw.js (service worker de la PWA) después de `next build`.
// Se ejecuta solo gracias al script "postbuild" de package.json.
// Lista todos los archivos del sitio exportado para guardarlos sin conexión.
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = fileURLToPath(new URL("..", import.meta.url));
const salida = join(raiz, "out");

// Mismo BASE_PATH que next.config.ts
const config = readFileSync(join(raiz, "next.config.ts"), "utf8");
const base = config.match(/const BASE_PATH = ["']([^"']*)["']/)?.[1] ?? "";

// Archivos que no se guardan para usar sin conexión
const MAX_BYTES = 3 * 1024 * 1024; // archivos de más de 3 MB (ej: PDF pesados)
const EXCLUIR = new Set(["sw.js", ".nojekyll"]);
// Imágenes que solo usan las redes sociales o el navegador, no la página
const EXCLUIR_PATRON = /(^|\/)(opengraph-image|twitter-image|icon|apple-icon)[^/]*\.(png|jpe?g)$|^qr\//;
// Datos de navegación interna de Next (.txt): pesan mucho y no hacen falta,
// porque sin conexión se navega con las páginas HTML guardadas. Las que se
// visitan con internet se guardan solas.
const EXCLUIR_TXT = /\.txt$/;

function recorrer(carpeta) {
  return readdirSync(carpeta).flatMap((nombre) => {
    const ruta = join(carpeta, nombre);
    return statSync(ruta).isDirectory() ? recorrer(ruta) : [ruta];
  });
}

const archivos = recorrer(salida)
  .filter((ruta) => !EXCLUIR.has(relative(salida, ruta)))
  .filter((ruta) => {
    const rel = relative(salida, ruta).split(sep).join("/");
    return !EXCLUIR_PATRON.test(rel) && !EXCLUIR_TXT.test(rel);
  })
  .filter((ruta) => statSync(ruta).size <= MAX_BYTES)
  .sort();

const hash = createHash("sha256");
const urls = archivos.map((ruta) => {
  hash.update(relative(salida, ruta));
  hash.update(readFileSync(ruta));
  const rel = relative(salida, ruta).split(sep).join("/");
  // Las páginas se piden como /CHIA/areas/ y no como /CHIA/areas/index.html
  const url = rel === "index.html" ? "" : rel.endsWith("/index.html") ? rel.slice(0, -10) : rel;
  return `${base}/${url}`;
});

const version = hash.digest("hex").slice(0, 12);
const plantilla = readFileSync(join(raiz, "scripts", "sw.plantilla.js"), "utf8");
const sw = plantilla
  .replace("__VERSION__", version)
  .replace("__BASE__", base)
  .replace("__PRECACHE__", JSON.stringify(urls));

writeFileSync(join(salida, "sw.js"), sw);

const total = archivos.reduce((suma, ruta) => suma + statSync(ruta).size, 0);
console.log(
  `✓ PWA: sw.js generado (versión ${version}) · ${urls.length} archivos · ${(total / 1024 / 1024).toFixed(1)} MB para uso sin conexión`,
);
