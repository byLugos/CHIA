import type { Tool } from "./areas";

export type Pasatiempo = Tool & {
  imagen: string;
};

export const pasatiempos: Pasatiempo[] = [
  {
    nombre: "Kahoot!",
    descripcion:
      "Concursos y trivias en vivo para repasar contenido de cualquier área de forma lúdica.",
    url: "https://kahoot.com/",
    etiqueta: "Freemium",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/1280px-Kahoot_Logo.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    nombre: "Wordwall",
    descripcion:
      "Sopas de letras, crucigramas y juegos de emparejar generados a partir de tu propio contenido.",
    url: "https://wordwall.net/es",
    etiqueta: "Freemium",
    imagen:
      "https://www.google.com/s2/favicons?domain=wordwall.net&sz=128",
  },
  {
    nombre: "Blooket",
    descripcion:
      "Juegos tipo trivia con mecánicas de estrategia para repaso grupal.",
    url: "https://www.blooket.com/",
    etiqueta: "Freemium",
    imagen:
      "https://www.google.com/s2/favicons?domain=blooket.com&sz=128",
  },
  {
    nombre: "Scratch",
    descripcion:
      "Creación de historias y juegos simples con programación por bloques.",
    url: "https://scratch.mit.edu/",
    etiqueta: "Gratis",
    imagen:
      "https://www.google.com/s2/favicons?domain=scratch.mit.edu&sz=128",
  },
  {
    nombre: "Baamboozle",
    descripcion:
      "Juegos de preguntas por equipos, ideales para el cierre de una clase.",
    url: "https://www.baamboozle.com/",
    etiqueta: "Gratis",
    imagen:
      "https://www.google.com/s2/favicons?domain=baamboozle.com&sz=128",
  },
  {
    nombre: "Educaplay",
    descripcion:
      "Constructor de actividades interactivas: crucigramas, mapas y adivinanzas.",
    url: "https://www.educaplay.com/",
    etiqueta: "Freemium",
    imagen:
      "https://www.google.com/s2/favicons?domain=educaplay.com&sz=128",
  },
];