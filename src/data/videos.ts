export type VideoDocente = {
  titulo: string;
  docente?: string;
  areaSlug: string; // debe coincidir con un slug de areas.ts, "universo-ia" o "pasatiempos"
  areaNombre: string; // nombre que aparece en los filtros de la página de Videos
  descripcion?: string;
  // Video en YouTube: id o enlace completo (ej: "https://www.youtube.com/watch?v=XXXX").
  youtube?: string;
  // Archivo del video en Google Drive: id o enlace completo del ARCHIVO.
  // Si está, aparecen los botones "Descargar video" y "Ver en Drive".
  drive?: string;
  // Slug de la herramienta que explica el video (ej: "geogebra").
  // Así el video aparece en la página de esa herramienta.
  // Si una herramienta tiene varios videos, el primero de esta lista es el principal.
  herramienta?: string;
};

// Cada video necesita al menos "youtube" o "drive".
// Los enlaces se pegan completos, tal como se copian de YouTube o de Drive.
// Si tiene los dos, se reproduce desde YouTube y se descarga desde Drive.
// La portada muestra los 3 primeros de esta lista.
export const videos: VideoDocente[] = [
  {
    youtube: "https://www.youtube.com/watch?v=Ptx65KRhxfo",
    drive: "https://drive.google.com/file/d/1NvYzjCPzF_L6x8Q2qFZrOAviO3wDYRQM/view",
    herramienta: "geogebra",
    titulo: "Geogebra: Una herramienta para el aprendizaje activo en matemáticas",
    docente: "Prof. Ray Carrillo",
    areaSlug: "matematicas",
    areaNombre: "Matemáticas",
    descripcion: "GeoGebra es una plataforma digital interactiva gratuita que combina geometría, álgebra, hojas de cálculo y gráficos para transformar conceptos matemáticos abstractos en experiencias visuales. En este video de CHIA: Caja de herramientas para la integración del Aprendizaje, exploramos cómo integrar esta poderosa herramienta en tus clases para fomentar el aprendizaje activo, la experimentación y el seguimiento en tiempo real con tus estudiantes.",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=n1Ibl6eTRzQ",
    drive: "https://drive.google.com/file/d/1TCMmhYKCbxE6o5pSyS5P29Jwck3Fo5Dz/view",
    herramienta: "write-improve",
    titulo: "Write & Improve: escritura en inglés con retroalimentación",
    areaSlug: "ingles",
    areaNombre: "Inglés",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=9fjQG3ss3lY",
    drive: "https://drive.google.com/file/d/1CboLHM7-F_-ykc6OcwPz3Zg-8OLnzNl1/view",
    herramienta: "baamboozle",
    titulo: "Baamboozle: juegos de preguntas por equipos",
    areaSlug: "ingles",
    areaNombre: "Inglés",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=tPDIwim1Yq8",
    drive: "https://drive.google.com/file/d/1_l-MhvhItG18L94TWjeNa3z4kC-LlRTc/view",
    herramienta: "az-screen",
    titulo: "AZ Screen Recorder: graba tu pantalla",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: este enlace de Drive es el mismo de Anatomy 3D Atlas: confirmar cuál es el correcto
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=bkSvOzyn5Hk",
    drive: "https://drive.google.com/file/d/1pXCnEWCGSbWLmwixVAb1lWudNhsD9QWh/view",
    herramienta: "libro-de-biologia",
    titulo: "Libro de Biología: estudiar desde el celular",
    areaSlug: "ciencias-naturales",
    areaNombre: "Ciencias Naturales",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=Y1_YMEA_T30",
    drive: "https://drive.google.com/file/d/1OW5Ggy2P5kZ7x4ReJVc5hxkdi4UHvcQ8/view",
    herramienta: "notebooklm",
    titulo: "NotebookLM: estudia tus documentos con IA",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=rAwlg_8nkgs",
    drive: "https://drive.google.com/file/d/1zkh15R4aM88MT5oo9ANUFDNYdVSuYVoj/view",
    herramienta: "ck-12",
    titulo: "CK-12: recursos y tutor de IA para docentes",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=P6ARqkX6Kfw",
    drive: "https://drive.google.com/file/d/1-euLX1YOK1tx-DQmrXlWJirGPpJs2ZyT/view",
    herramienta: "founderz",
    titulo: "Founderz: generador de prompts para docentes",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=IvQkmFHuzQ4",
    drive: "https://drive.google.com/file/d/10TRbZA-Q7ftAfhnfZGUR4kMHO4S_LcOX/view",
    herramienta: "kokolikoko",
    titulo: "Kokolikoko: crea sopas de letras",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=jTMTACBByoA",
    drive: "https://drive.google.com/file/d/1TtXgZune26OAdlJkj47HxreaX_dadWUb/view",
    herramienta: "canva-design-school",
    titulo: "Canva Design School: aprende a diseñar materiales",
    areaSlug: "competencias-comunicativas",
    areaNombre: "Competencias Comunicativas",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=RjJ8fmZhF2Y",
    drive: "https://drive.google.com/file/d/1LuNd0nTWs_Rrr7ytVhzQ77SOzrpdcDoP/view",
    herramienta: "wayground",
    titulo: "Wayground: cuestionarios interactivos",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: este enlace de Drive es el mismo de Libro de Biología: confirmar cuál es el correcto
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=LW78j_4ENTo",
    drive: "https://drive.google.com/file/d/1pXCnEWCGSbWLmwixVAb1lWudNhsD9QWh/view",
    herramienta: "anatomy-3d-atlas",
    titulo: "Anatomy 3D Atlas: el cuerpo humano en 3D",
    areaSlug: "ciencias-naturales",
    areaNombre: "Ciencias Naturales",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=lKPPNtso8Bo",
    drive: "https://drive.google.com/file/d/1PF43X_6sp15gGjMiRmjEiNIr2CmexzW1/view",
    herramienta: "bbc-learning-english",
    titulo: "BBC Learning English: inglés con la BBC",
    areaSlug: "ingles",
    areaNombre: "Inglés",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=lNOZFM-4Mjc",
    drive: "https://drive.google.com/file/d/1XwaWG3jUQo890fz-h5849PSvXbZ7JeXB/view",
    herramienta: "blooket",
    titulo: "Blooket: repasar jugando",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/shorts/BgclgpybAkk",
    drive: "https://drive.google.com/file/d/1JUrk9-Vgrw71DwaXzGGnbCpA5Ar7RH5o/view",
    herramienta: "codigos-cortos-chatgpt",
    titulo: "Códigos cortos para ChatGPT",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=3e2uyQsQXUU",
    drive: "https://drive.google.com/file/d/1PNCOLPkI0OWwdUt-mSIVBY03_U27fZYE/view",
    herramienta: "biodigital-human",
    titulo: "BioDigital Human: anatomía interactiva",
    areaSlug: "ciencias-naturales",
    areaNombre: "Ciencias Naturales",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=-ciPWFXs3OI",
    drive: "https://drive.google.com/file/d/1y85R-TBFzqIBqR4cii_yRxtE-DUcuyxE/view",
    herramienta: "kahoot",
    titulo: "Kahoot!: cuestionarios en vivo",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=uEjvsDRsEx8",
    drive: "https://drive.google.com/file/d/11fQ7RsKLBDH8tDoh3AdyqauR4U8X8xmE/view",
    herramienta: "languagetool",
    titulo: "LanguageTool: revisa tu escritura",
    areaSlug: "espanol",
    areaNombre: "Español",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=oOjnw-3hFjQ",
    drive: "https://drive.google.com/file/d/1JM70Dn0vHTBC9CSoZ8vxAmeoYNOVU-sI/view",
    herramienta: "storyboard-con-chatgpt",
    titulo: "Storyboard con ChatGPT",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=GwdBbv9Jm_A",
    drive: "https://drive.google.com/file/d/1nYvuQnTTZ2Ej7jT9NdTed2eFA1q32JHe/view",
    herramienta: "storyweaver",
    titulo: "StoryWeaver: cuentos para leer en otros idiomas",
    areaSlug: "ingles",
    areaNombre: "Inglés",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/shorts/dr_QSq1Iw5M",
    drive: "https://drive.google.com/file/d/1N6Y6ZoW05acEZeMwNYQpjB3pr0He7PTI/view",
    herramienta: "unrealchemist",
    titulo: "Unrealchemist: química jugando",
    areaSlug: "ciencias-naturales",
    areaNombre: "Ciencias Naturales",
  },
  {
    // TODO: poner el título y el docente reales
    youtube: "https://www.youtube.com/watch?v=5f-q4WIHw_Y",
    drive: "https://drive.google.com/file/d/17wqTcXYY7h1H6Kq-RlHK_za5k_1ETxV8/view",
    herramienta: "wordwall",
    titulo: "Wordwall: actividades interactivas",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: no está en la lista nueva; se deja de la lista anterior
    // TODO: poner el título y el docente reales
    drive: "https://drive.google.com/file/d/1lngYz8TINc8dMS-um4-E7wpRrqtk1pI_/view",
    herramienta: "desmos",
    titulo: "Desmos en el aula",
    areaSlug: "matematicas",
    areaNombre: "Matemáticas",
  },
];

export function getAreasDisponibles(): string[] {
  const areasUnicas = new Set(videos.map((v) => v.areaNombre));
  return Array.from(areasUnicas);
}

export function claveVideo(video: VideoDocente): string {
  return `${video.youtube ?? video.drive ?? ""}-${video.titulo}`;
}
