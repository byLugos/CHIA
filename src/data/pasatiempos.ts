import type { Tool } from "./areas";

// Los pasatiempos usan el mismo formato que las demás herramientas.
export type Pasatiempo = Tool;

export const pasatiempos: Pasatiempo[] = [
  {
    nombre: "Kahoot!",
    descripcion:
      "Concursos y trivias en vivo para repasar contenido de cualquier área de forma lúdica.",
    url: "https://kahoot.it/",
    etiqueta: "Freemium",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/1280px-Kahoot_Logo.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    nombre: "Wordwall",
    descripcion:
      "Sopas de letras, crucigramas y juegos de emparejar generados a partir de tu propio contenido.",
    url: "https://wordwall.net/es",
    etiqueta: "Freemium",
    logo:
      "https://www.google.com/s2/favicons?domain=wordwall.net&sz=128",
  },
  {
    nombre: "Blooket",
    descripcion:
      "Juegos tipo trivia con mecánicas de estrategia para repaso grupal.",
    url: "https://www.blooket.com/",
    etiqueta: "Freemium",
    logo:
      "https://www.google.com/s2/favicons?domain=blooket.com&sz=128",
  },
  {
    nombre: "Scratch",
    descripcion:
      "Creación de historias y juegos simples con programación por bloques.",
    url: "https://scratch.mit.edu/",
    etiqueta: "Gratis",
    logo:
      "https://www.google.com/s2/favicons?domain=scratch.mit.edu&sz=128",
  },
  {
    nombre: "Educaplay",
    descripcion:
      "Constructor de actividades interactivas: crucigramas, mapas y adivinanzas.",
    url: "https://www.educaplay.com/",
    etiqueta: "Freemium",
    logo:
      "https://www.google.com/s2/favicons?domain=educaplay.com&sz=128",
  },
  {
    // Del PDF de herramientas (#11). Wayground es el nuevo nombre de Quizizz.
    nombre: "Wayground",
    descripcion:
      "Cuestionarios y lecciones interactivas con dinámica de juego (antes Quizizz) para repasar en clase o en casa.",
    url: "https://wayground.com/?lng=es-ES",
    etiqueta: "Freemium",
  },
  {
    // Del PDF de herramientas (#9)
    nombre: "Kokolikoko",
    descripcion:
      "Generador de sopas de letras: crea y comparte sopas de letras con el vocabulario de tu clase.",
    url: "https://sopadeletras.kokolikoko.com/",
    etiqueta: "Gratis",
  },
  {
    // La lista no trae enlace: se usa la ficha de "AZ Screen Recorder" en Google Play
    nombre: "AZ Screen Recorder",
    slug: "az-screen",
    descripcion:
      "Grabador de pantalla para el celular: crea videotutoriales, explicaciones y retos para compartir con los estudiantes.",
    url: "https://play.google.com/store/apps/details?id=com.hecorat.screenrecorder.free",
    etiqueta: "App Android",
  },
];
