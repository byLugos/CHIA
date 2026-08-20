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
];

export function getAreasDisponibles(): string[] {
  const areasUnicas = new Set(videos.map((v) => v.areaNombre));
  return Array.from(areasUnicas);
}