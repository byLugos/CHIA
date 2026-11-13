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

export const videos: VideoDocente[] = [
    {
    youtube: "https://www.youtube.com/watch?v=Ptx65KRhxfo",
    herramienta: "geogebra",
    titulo: "Geogebra: Una herramienta para el aprendizaje activo en matemáticas",
    docente: "Prof. Ray Carrillo",
    areaSlug: "matematicas",
    areaNombre: "Matemáticas",
    descripcion: "GeoGebra es una plataforma digital interactiva gratuita que combina geometría, álgebra, hojas de cálculo y gráficos para transformar conceptos matemáticos abstractos en experiencias visuales. En este video de CHIA: Caja de herramientas para la integración del Aprendizaje, exploramos cómo integrar esta poderosa herramienta en tus clases para fomentar el aprendizaje activo, la experimentación y el seguimiento en tiempo real con tus estudiantes.",
  },
  {
    youtube: "Pu8-avw0p7Q",
    herramienta: "lyricfluent",
    titulo: "LyricFluent: Aprende Inglés",
    docente: "Prof. Carmen Puche",
    areaSlug: "ingles",
    areaNombre: "Inglés",
    descripcion: "LyricFluent es una aplicación educativa que transforma las canciones en clases de idiomas. A través de las letras de canciones en inglés, francés, portugués e italiano, los estudiantes practican vocabulario, gramática, pronunciación y comprensión auditiva de manera natural y motivadora.",
  },
  {
    youtube: "zbUCnnj6V_4",
    herramienta: "lingoclip",
    titulo: "LingoClip: Idiomas en pequeñas dosis",
    docente: "Prof. Carmen Puche",
    areaSlug: "ingles",
    areaNombre: "Inglés",
    descripcion: "LingoClip es una aplicación educativa que enseña idiomas a través de videos cortos y clips reales. Los estudiantes practican vocabulario, expresiones cotidianas, pronunciación y comprensión auditiva viendo contenido breve y dinámico, similar al formato de los videos que ya consumen a diario.",
  },
  {
    youtube: "jaSgFVnqi3w",
    herramienta: "learnenglish-podcast",
    titulo: "LearnEnglish Podcast: inglés para escuchar y aprender",
    docente: "Prof. Carmen Puche",
    areaSlug: "ingles",
    areaNombre: "Inglés",
    descripcion: "LearnEnglish Podcast es un recurso educativo que enseña inglés a través de episodios de audio pensados para practicar comprensión auditiva, vocabulario y pronunciación. Los estudiantes escuchan conversaciones, historias o temas variados en inglés, mejorando su oído y fluidez de forma progresiva y a su propio ritmo.",
  },
  {
    // TODO: ¿Este es el mismo video de GeoGebra de arriba o uno distinto? (viene del PDF). poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=Ptx65KRhxfo",
    herramienta: "geogebra",
    titulo: "GeoGebra en el aula",
    areaSlug: "matematicas",
    areaNombre: "Matemáticas",
  },
  {
    // TODO: poner título y docente reales
    drive: "https://drive.google.com/file/d/1lngYz8TINc8dMS-um4-E7wpRrqtk1pI_/view",
    herramienta: "desmos",
    titulo: "Desmos en el aula",
    areaSlug: "matematicas",
    areaNombre: "Matemáticas",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=n1Ibl6eTRzQ",
    drive: "https://drive.google.com/file/d/1TCMmhYKCbxE6o5pSyS5P29Jwck3Fo5Dz/view",
    herramienta: "write-improve",
    titulo: "Write & Improve: escritura en inglés con retroalimentación",
    areaSlug: "ingles",
    areaNombre: "Inglés",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=9fjQG3ss3lY",
    drive: "https://drive.google.com/file/d/1CboLHM7-F_-ykc6OcwPz3Zg-8OLnzNl1/view",
    herramienta: "baamboozle",
    titulo: "Baamboozle: juegos de preguntas por equipos",
    areaSlug: "ingles",
    areaNombre: "Inglés",
  },
  {
    // TODO: falta el enlace de Drive (el de la lista es el mismo de GeoGebra). poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=bkSvOzyn5Hk",
    herramienta: "libro-de-biologia",
    titulo: "Libro de Biología: estudiar desde el celular",
    areaSlug: "ciencias-naturales",
    areaNombre: "Ciencias Naturales",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=rAwlg_8nkgs",
    herramienta: "ck-12",
    titulo: "CK-12: recursos de ciencias para docentes",
    areaSlug: "ciencias-naturales",
    areaNombre: "Ciencias Naturales",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=jTMTACBByoA",
    herramienta: "canva-design-school",
    titulo: "Canva Design School: aprende a diseñar materiales",
    areaSlug: "competencias-comunicativas",
    areaNombre: "Competencias Comunicativas",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=RjJ8fmZhF2Y",
    drive: "https://drive.google.com/file/d/1LuNd0nTWs_Rrr7ytVhzQ77SOzrpdcDoP/view",
    herramienta: "wayground",
    titulo: "Wayground: cuestionarios interactivos",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=IvQkmFHuzQ4",
    drive: "https://drive.google.com/file/d/10TRbZA-Q7ftAfhnfZGUR4kMHO4S_LcOX/view",
    herramienta: "kokolikoko",
    titulo: "Kokolikoko: crea sopas de letras",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=tPDIwim1Yq8",
    drive: "https://drive.google.com/file/d/1_l-MhvhItG18L94TWjeNa3z4kC-LlRTc/view",
    herramienta: "az-screen",
    titulo: "AZ Screen Recorder: graba tu pantalla",
    areaSlug: "pasatiempos",
    areaNombre: "Pasatiempos",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=Y1_YMEA_T30",
    drive: "https://drive.google.com/file/d/1OW5Ggy2P5kZ7x4ReJVc5hxkdi4UHvcQ8/view",
    herramienta: "notebooklm",
    titulo: "NotebookLM: estudia tus documentos con IA",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
  {
    // TODO: poner título y docente reales
    youtube: "https://www.youtube.com/watch?v=P6ARqkX6Kfw",
    drive: "https://drive.google.com/file/d/1-euLX1YOK1tx-DQmrXlWJirGPpJs2ZyT/view",
    herramienta: "founderz",
    titulo: "Founderz: generador de prompts para docentes",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
  {
    // TODO: poner título y docente reales
    drive: "https://drive.google.com/file/d/1zkh15R4aM88MT5oo9ANUFDNYdVSuYVoj/view",
    herramienta: "flexiteacher",
    titulo: "FlexiTeacher: IA para docentes",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
  {
    // TODO: poner título y docente reales
    drive: "https://drive.google.com/file/d/1JUrk9-Vgrw71DwaXzGGnbCpA5Ar7RH5o/view",
    herramienta: "codigos-cortos-chatgpt",
    titulo: "Códigos cortos para ChatGPT",
    areaSlug: "universo-ia",
    areaNombre: "Universo IA",
  },
];

export function getAreasDisponibles(): string[] {
  const areasUnicas = new Set(videos.map((v) => v.areaNombre));
  return Array.from(areasUnicas);
}

export function claveVideo(video: VideoDocente): string {
  return `${video.youtube ?? video.drive ?? ""}-${video.titulo}`;
}
