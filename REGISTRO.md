# Registro de cambios — CHIA (RutaTic)

Fecha: 13 de noviembre de 2026 · Sitio: https://bylugos.github.io/RutaTic/

Este documento resume qué se agregó, cómo se hizo, con qué herramientas y qué queda pendiente. Los archivos van en `CHIA-cambios.zip` con la misma estructura de carpetas del proyecto: solo se copian encima. No se eliminó ningún archivo tuyo.

---

## 1. Cómo ponerlo a andar

1. Copia el contenido de `CHIA-cambios.zip` encima de tu proyecto, reemplazando los archivos.
2. Ejecuta `npm install`. Se agregó la librería `qrcode`, que genera los QR dentro de la página.
3. Ejecuta `npm run dev` y abre **http://localhost:3000/RutaTic/**. Ahora el sitio vive bajo `/RutaTic`, igual que en GitHub Pages.
4. Para publicar, `npm run build` genera la carpeta `out/` con el sitio estático.
   - **Opción automática (recomendada):** se incluye `.github/workflows/deploy.yml`. Activa en GitHub, en Settings → Pages → Source, la opción **GitHub Actions**. Desde ahí, cada `push` a `main` publica solo. Si tu rama principal tiene otro nombre, cámbialo en el archivo.
   - **Opción manual:** sube el contenido de `out/` a la rama que uses para Pages. Ya se incluye `public/.nojekyll`, necesario para que GitHub no esconda la carpeta `_next`.

---

## 2. Cambios por punto

### Configuración para GitHub Pages
GitHub Pages solo sirve archivos estáticos (no tiene servidor), así que se ajustó lo siguiente:
- En `next.config.ts` se agregó `output: "export"`, `basePath: "/RutaTic"`, `trailingSlash: true` e imágenes sin optimizador.
- `src/lib/rutas.ts` tiene la función `asset()`. Los `<Link>` de Next agregan `/RutaTic` solos, pero las imágenes, los PDF y los archivos de `/public` no; `asset()` les pone el prefijo.
- Se quitó la ruta `/api/visitas` de la versión anterior, porque en un sitio estático no funcionaría. El contador ahora usa GoatCounter (punto 8).
- El título, la descripción y la imagen al compartir apuntan a `https://bylugos.github.io`.

### Puntos 2 y 6 · Herramientas del PDF asignadas a su área

| # PDF | Herramienta | Dónde quedó | Video YouTube | Video Drive |
|---|---|---|---|---|
| 1 | GeoGebra | Áreas › Matemáticas (se cambió la URL por la del PDF) | ✅ 2 videos (ver pendientes) | ⚠️ no (ver pendientes) |
| 2 | Write & Improve | Áreas › Inglés | ✅ | ✅ |
| 3 | Baamboozle | Áreas › Inglés (estaba en Pasatiempos; tu lista de Drive la pone en Inglés) | ✅ | ✅ |
| 4 | AZ Screen Recorder | Pasatiempos | ✅ | ✅ |
| 5 | Libro de Biología | Áreas › Ciencias Naturales › Biología | ✅ | ⚠️ no (ver pendientes) |
| 6 | NotebookLM | Universo IA › Asistentes para docentes | ✅ | ✅ |
| 7 | CK-12 | Áreas › Ciencias Naturales (para todas las disciplinas) | ✅ | — |
| 8 | Founderz | Universo IA › Asistentes para docentes | ✅ | ✅ |
| 9 | Kokolikoko | Pasatiempos (URL de sopa de letras del PDF) | ✅ | ✅ |
| 10 | Canva Design School | Áreas › Competencias Comunicativas | ✅ | — |
| 11 | Wayground | Pasatiempos | ✅ | ✅ |
| 12 | Colombia Aprende | Áreas › Ciencias Sociales | ⚠️ no (ver pendientes) | — |
| 13 | Mathcenter | Áreas › Matemáticas (sin enlace todavía) | — | — |
| 14 | Didactalia | Áreas › Ciencias Sociales | — | — |
| 15 | Khan Academy | Ya estaba en Matemáticas | — | — |
| 16 | PhET | Ya estaba en Biología y Física | — | — |
| — | Desmos | Ya estaba en Matemáticas; se le agregó el video de Drive | — | ✅ |
| — | FlexiTeacher | Universo IA › Asistentes para docentes (sin enlace todavía) | — | ✅ |
| — | Códigos cortos ChatGPT | Universo IA › Asistentes para docentes | — | ✅ |

- **Categoría nueva en Universo IA: "Asistentes para docentes".** NotebookLM, Founderz, FlexiTeacher y Códigos cortos no son de audio, video, presentaciones ni imágenes: son asistentes para planear clases. La portada y el encabezado de Universo IA se actualizaron para incluirla, y la numeración ahora es automática.
- Las herramientas sin enlace muestran "Enlace próximamente" en lugar de un botón roto.
- Los enlaces de Drive y YouTube se pegaron completos, tal como venían. El código saca el id solo.
- En total el sitio tiene **54 herramientas**, cada una con su propia página. **14 tienen video.**

### Punto 4 · Página de cada herramienta (ejemplo: Matemáticas › GeoGebra)
- **Flujo:** Áreas → Matemáticas → GeoGebra (`/RutaTic/areas/matematicas/geogebra/`). Pasa lo mismo en Universo IA y en Pasatiempos.
- **Computador:** el video está a la izquierda y es lo primero que se ve. A la derecha va el panel con la descripción, el botón **"Ir a GeoGebra"** y los botones del video.
- **Celular:** el orden es video → botón → descripción.
- **Guía en PDF:** debajo del video. Por ahora dice "Guía en PDF próximamente". Para activarla, agrega a la herramienta en `src/data`:
  - un PDF propio: guárdalo en `public/pdfs/` y pon `pdf: { archivo: "/pdfs/geogebra.pdf" }`;
  - un PDF de Drive: `pdf: { drive: "enlace del archivo" }`. Este visor también funciona en celulares.
- Al final de la página aparecen "Más videos" (si la herramienta tiene varios) y "Más herramientas de Matemáticas".
- El índice de Áreas ahora muestra tarjetas por área. Dentro de cada área, las herramientas se agrupan por subárea.

### Punto 5 · Pasatiempos y Universo IA
- Pasatiempos queda con Kahoot!, Wordwall, Blooket, Scratch, Educaplay, **Wayground**, **Kokolikoko** y **AZ Screen Recorder**. Baamboozle pasó a Inglés.
- NotebookLM quedó en Universo IA.

### Puntos 7 y 9 · Códigos QR
- **En la página:** Sobre CHIA tiene una sección nueva, "03 / Comparte CHIA", con dos QR que se generan solos:
  - el del **sitio** (`https://bylugos.github.io/RutaTic/`);
  - el del **correo** (`chiatoolkit@gmail.com`, con el asunto "Contacto CHIA").
  - Los dos llevan el logo al centro y tienen botón de descarga y de copiar o compartir. El pie de página tiene el enlace "Compartir CHIA (QR)".
- **Archivos listos para imprimir:** `public/qr/qr-sitio-chia.png` y `public/qr/qr-correo-chia.png`, de 940×940 px. Ambos se validaron leyéndolos con un lector de QR.
- **Cómo generar otros QR:**
  - **Opción 1:** usa el componente `CodigoQR` con otro `valor` (ver `src/components/compartir/CompartirChia.tsx`).
  - **Opción 2:** cualquier generador web gratuito. Usa corrección de errores "H" si vas a poner un logo encima.

### Punto 8 · Contador de visitas (GoatCounter)
Funciona en sitios estáticos, es gratis para proyectos no comerciales y no usa cookies. Configuración, una sola vez:
1. Crea una cuenta en **https://www.goatcounter.com** y elige un código, por ejemplo `chia-rutatic`. Tu panel quedará en `https://chia-rutatic.goatcounter.com`.
2. En tu panel, entra a **Settings** y activa **"Allow adding visitor counts on your website"**. Guarda.
3. En `src/lib/contador.ts` pon `export const CODIGO_GOATCOUNTER = "chia-rutatic";`.
4. Haz push. El total aparece en el pie de página en cuanto haya visitas registradas.

Mientras el código esté vacío, el contador no se muestra ni carga nada. En el panel de GoatCounter además ves estadísticas por página, país y dispositivo.

### Puntos 10 y 11 · Videos: descargar o ir a Drive
- Si un video tiene enlace de Drive, aparecen **"Descargar video"** (descarga directa) y **"Ver en Drive"**.
- Si tiene enlace de YouTube, aparece **"Ver en YouTube"**. Si tiene los dos, se reproduce desde YouTube y se descarga desde Drive.
- Si solo tiene Drive (Desmos, FlexiTeacher, Códigos cortos), se reproduce con el reproductor de Drive.
- La página de Videos tiene el botón **"Descargar los videos desde Google Drive"**, que lleva a tu carpeta.
- ⚠️ **Importante:** cada archivo de Drive y la carpeta deben estar compartidos como **"Cualquier persona con el enlace"**. Si no, el reproductor y la descarga piden iniciar sesión.

### Logo
Se procesaron tus imágenes:
- se les quitó el fondo blanco (PNG transparente);
- se recortó solo el símbolo para el menú;
- se crearon los íconos de pestaña;
- el banner quedó como imagen al compartir en redes.

**Dónde reemplazarlo si quieres poner tus propias versiones:**

| Qué | Archivo | Dónde se usa |
|---|---|---|
| Símbolo (PNG transparente) | `public/brand/chia-logo.png` | Menú, portada, pie de página |
| Logo completo con texto | `public/brand/chia-logo-completo.png` | Sobre CHIA |
| Centro del QR (cuadrado, fondo blanco) | `public/brand/qr-centro.png` | QR generados en la página |
| Ícono de pestaña | `src/app/icon.png` (512×512) | Pestaña del navegador |
| Ícono de iPhone | `src/app/apple-icon.png` (180×180) | Acceso directo en iOS |
| Imagen al compartir | `src/app/opengraph-image.jpg` (1200×675) | WhatsApp, Facebook, etc. |

- Puedes reemplazar los archivos con el mismo nombre, o cambiar las rutas de los tres primeros en **`src/data/sitio.ts` → `logos`**. En cada componente hay un comentario `LOGO:` que señala de dónde sale.
- Los íconos de pestaña y la imagen al compartir son archivos con nombre fijo de Next.js: se reemplazan con el mismo nombre.
- Los logos de las herramientas van en `public/herramientas/`, con `logo: "/herramientas/geogebra.png"` en cada herramienta. Mientras tanto se muestra el ícono del sitio web de cada una.

---

## 3. ⚠️ Pendientes y dudas (necesito tu confirmación)

1. **Enlace de Drive repetido.** `1pXCnEWCGSbWLmwixVAb1lWudNhsD9QWh` aparece para GeoGebra y para "Libro de química". No se usó en ninguna de las dos para no ofrecer un video equivocado. Mientras tanto, el botón lleva a la carpeta de Drive. Pásame el enlace correcto de cada una.
2. **YouTube repetido.** `9fjQG3ss3lY` aparece para Baamboozle (#3) y para Colombia Aprende (#12). Se asignó solo a Baamboozle, que coincide con el video de Drive de Inglés. A Colombia Aprende le falta su video.
3. **GeoGebra tiene dos videos de YouTube:** el que ya estaba (`XRv0E_pioHw`, del Prof. Ray Carrillo) y el del PDF (`Ptx65KRhxfo`). Se muestran los dos, con el original como principal. ¿Son distintos o uno reemplaza al otro?
4. **¿Biología o química?** El PDF dice "Libro de biología" y el enlace de Play Store es de biología, pero la lista de Drive dice "Libro de química". Quedó en Biología.
5. **Faltan enlaces:** Mathcenter y FlexiTeacher. Además hay que confirmar AZ Screen Recorder (se usó la app "AZ Screen Recorder" de Google Play), Didactalia (`didactalia.net`) y Códigos cortos ChatGPT (`chatgpt.com`).
6. **Áreas que elegí yo** (el PDF no las indicaba): CK-12 → Ciencias Naturales; Canva Design School → Competencias Comunicativas; Colombia Aprende y Didactalia → Ciencias Sociales.
7. **Títulos y docentes de los videos nuevos:** son provisionales. Están marcados con `// TODO` en `src/data/videos.ts`.
8. **Descripciones de herramientas nuevas:** las redacté yo a partir del nombre y el enlace. Están marcadas con `TODO` donde había menos certeza (FlexiTeacher, Códigos cortos, Mathcenter).
9. **Videos de LyricFluent, LingoClip y LearnEnglish Podcast:** ya estaban en el sitio pero no están en el PDF. Siguen en la página de Videos sin página de herramienta propia. ¿Las agrego como herramientas de Inglés?

**Observaciones (no se cambiaron):**
- **Google Jamboard** (Competencias Comunicativas) fue descontinuado por Google. Conviene reemplazarlo.
- Del primer mensaje siguen pendientes: las fuentes Bitter / IBM Plex declaradas en `globals.css` no se cargan, y las clases `text-s` y `text-m` no existen en Tailwind.

---

## 4. Cómo agregar contenido de ahora en adelante

- **Herramienta:** agrégala en `src/data/areas.ts`, `universoIA.ts` o `pasatiempos.ts` (`nombre`, `descripcion`, `url`, `etiqueta`). Su página, tarjeta y enlace se crean solos. La URL sale del nombre ("Write & Improve" → `write-improve`), o puedes fijarla con `slug`.
- **Video:** agrégalo en `src/data/videos.ts` con `youtube` y/o `drive` (enlaces completos) y `herramienta: "slug-de-la-herramienta"`.
- **PDF:** usa `pdf: { archivo: "/pdfs/x.pdf" }` o `pdf: { drive: "enlace" }` en la herramienta.
- **Correo, carpeta de Drive, lema o logos:** se cambian en `src/data/sitio.ts`.
- En modo desarrollo, si dos herramientas quedan con la misma URL, la consola avisa.

---

## 5. Herramientas usadas y verificación

- **Extracción del proyecto:** `node-unrar-js` (WASM), porque el entorno no tenía `unrar`.
- **Procesamiento de logos:** Python con Pillow y NumPy. Se hizo eliminación de fondo tipo "color to alpha" contra blanco, con umbral para el ruido del papel, el recorte del símbolo y el escalado de íconos.
- **QR estáticos:** librería `qrcode` de Python con corrección de errores H y logo centrado. Se validaron decodificándolos con OpenCV.
- **QR en la página:** librería `qrcode` de npm (1.5.4) dibujada en un canvas con el logo encima. Se verificó decodificando los QR generados en el navegador.
- **Código:** se verificó con TypeScript (`tsc --noEmit`) y ESLint (configuración del proyecto) sin errores ni advertencias, y con `next build` en modo export (71 páginas estáticas).
- **Prueba como en GitHub Pages:** se sirvió `out/` bajo `/RutaTic/` y se recorrieron 10 páginas en Chromium (Playwright), en escritorio (1440 px) y en celular (390 px). No hubo ningún archivo interno con error 404. El flujo Áreas → Matemáticas → GeoGebra se probó con clics reales.
- **Prompts:** no se usó IA para generar imágenes. Los logos son los tuyos, solo procesados. Los textos nuevos los redacté directamente; los que necesitan confirmación tienen `TODO`.
- **Limitación del entorno de prueba:** no tenía acceso a internet, así que YouTube, Drive y los íconos externos no cargaron en las capturas. Su funcionamiento depende de esos servicios y debe verse en tu navegador.
