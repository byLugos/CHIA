import type { Tool } from "./areas";

export type CategoriaIA = {
  slug: string;
  nombre: string;
  descripcion: string;
  herramientas: Tool[];
};

export const categoriasIA: CategoriaIA[] = [
  {
    slug: "audio",
    nombre: "Audio",
    descripcion:
      "Narración, música y voces sintéticas generadas por IA para enriquecer material didáctico.",
    herramientas: [
      {
        nombre: "ElevenLabs",
        descripcion: "Conversión de texto a voz con narraciones realistas en varios idiomas.",
        url: "https://elevenlabs.io/",
        etiqueta: "Freemium",
      },
      {
        nombre: "Suno",
        descripcion: "Generación de canciones originales a partir de una descripción de texto.",
        url: "https://suno.com/",
        etiqueta: "Freemium",
      },
      {
        nombre: "Soundraw",
        descripcion: "Música de fondo generada por IA para videos y presentaciones.",
        url: "https://soundraw.io/",
        etiqueta: "Freemium",
      },
    ],
  },
  {
    slug: "video",
    nombre: "Video",
    descripcion:
      "Generación y edición de video asistida por IA, desde avatares hasta clips animados.",
    herramientas: [
      {
        nombre: "Synthesia",
        descripcion: "Videos con avatares digitales que narran el contenido de la clase.",
        url: "https://www.synthesia.io/",
        etiqueta: "Freemium",
      },
      {
        nombre: "Runway",
        descripcion: "Edición y generación de video con inteligencia artificial.",
        url: "https://runwayml.com/",
        etiqueta: "Freemium",
      },
      {
        nombre: "CapCut",
        descripcion: "Edición de video con herramientas de IA para subtítulos y efectos.",
        url: "https://www.capcut.com/",
        etiqueta: "Gratis",
      },
    ],
  },
  {
    slug: "presentaciones",
    nombre: "Presentaciones",
    descripcion:
      "Generación automática de diapositivas y recursos visuales para exponer contenido de clase.",
    herramientas: [
      {
        nombre: "Gamma",
        descripcion: "Presentaciones generadas a partir de un texto o esquema inicial.",
        url: "https://gamma.app/",
        etiqueta: "Freemium",
      },
      {
        nombre: "Tome",
        descripcion: "Narrativas visuales generadas por IA para clases y proyectos.",
        url: "https://tome.app/",
        etiqueta: "Freemium",
      },
      {
        nombre: "Canva IA",
        descripcion: "Plantillas y diseño asistido por IA para presentaciones educativas.",
        url: "https://www.canva.com/es_mx/",
        etiqueta: "Freemium",
      },
    ],
  },
  {
    slug: "imagenes",
    nombre: "Imágenes",
    descripcion:
      "Creación de ilustraciones e imágenes originales para materiales de clase.",
    herramientas: [
      {
        nombre: "DALL-E",
        descripcion: "Generación de imágenes originales a partir de descripciones de texto.",
        url: "https://openai.com/dall-e-3",
        etiqueta: "Freemium",
      },
      {
        nombre: "Adobe Firefly",
        descripcion: "Generación y edición de imágenes con IA integrada a herramientas Adobe.",
        url: "https://firefly.adobe.com/",
        etiqueta: "Freemium",
      },
      {
        nombre: "Ideogram",
        descripcion: "Imágenes con texto legible integrado, útil para infografías.",
        url: "https://ideogram.ai/",
        etiqueta: "Freemium",
      },
    ],
  },
];

export function getCategoriaBySlug(slug: string): CategoriaIA | undefined {
  return categoriasIA.find((c) => c.slug === slug);
}