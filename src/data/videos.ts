export type VideoDocente = {
  id: string; // id del video de YouTube (lo que va después de v= en la URL)
  titulo: string;
  docente: string;
  areaSlug: string; // debe coincidir con un slug de areas.ts, universoIA.ts o "pasatiempos"
  areaNombre: string;
  descripcion: string;
};

// Contenido de ejemplo — reemplaza el campo "id" por el id real del video de YouTube
// de cada docente (ej: https://www.youtube.com/watch?v=XXXXXXXXXXX -> id: "XXXXXXXXXXX")
export const videos: VideoDocente[] = [
  {
    id: "XRv0E_pioHw",
    titulo: "Geogebra: Una herramienta para el aprendizaje activo en matemáticas",
    docente: "Prof. Ray Carrillo",
    areaSlug: "matematicas",
    areaNombre: "Matemáticas",
    descripcion: "GeoGebra es una plataforma digital interactiva gratuita que combina geometría, álgebra, hojas de cálculo y gráficos para transformar conceptos matemáticos abstractos en experiencias visuales. En este video de CHIA: Caja de herramientas para la integración del Aprendizaje, exploramos cómo integrar esta poderosa herramienta en tus clases para fomentar el aprendizaje activo, la experimentación y el seguimiento en tiempo real con tus estudiantes.",
  },
  {
    id: "Pu8-avw0p7Q",
    titulo: "LyricFluent: Aprende Inglés",
    docente: "Prof. Carmen Puche",
    areaSlug: "ingles",
    areaNombre: "Inglés",
    descripcion: "LyricFluent es una aplicación educativa que transforma las canciones en clases de idiomas. A través de las letras de canciones en inglés, francés, portugués e italiano, los estudiantes practican vocabulario, gramática, pronunciación y comprensión auditiva de manera natural y motivadora.",
  },
  {
    id: "zbUCnnj6V_4",
    titulo: "LingoClip: Idiomas en pequeñas dosis",
    docente: "Prof. Carmen Puche",
    areaSlug: "ingles",
    areaNombre: "Inglés",
    descripcion: "LingoClip es una aplicación educativa que enseña idiomas a través de videos cortos y clips reales. Los estudiantes practican vocabulario, expresiones cotidianas, pronunciación y comprensión auditiva viendo contenido breve y dinámico, similar al formato de los videos que ya consumen a diario.",
  },
  {
    id: "jaSgFVnqi3w",
    titulo: "LearnEnglish Podcast: inglés para escuchar y aprender",
    docente: "Prof. Carmen Puche",
    areaSlug: "ingles",
    areaNombre: "Inglés",
    descripcion: "LearnEnglish Podcast es un recurso educativo que enseña inglés a través de episodios de audio pensados para practicar comprensión auditiva, vocabulario y pronunciación. Los estudiantes escuchan conversaciones, historias o temas variados en inglés, mejorando su oído y fluidez de forma progresiva y a su propio ritmo.",
  },
];

export function getAreasDisponibles(): string[] {
  const areasUnicas = new Set(videos.map((v) => v.areaNombre));
  return Array.from(areasUnicas);
}