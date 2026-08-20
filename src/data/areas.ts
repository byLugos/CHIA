export type Tool = {
  nombre: string;
  descripcion: string;
  url: string;
  etiqueta?: string; // ej: "Gratis", "Freemium", "Requiere cuenta"
};

export type SubArea = {
  slug: string;
  nombre: string;
  herramientas: Tool[];
};

export type Area = {
  slug: string;
  nombre: string;
  color: string; // clase de acento tailwind, ej "clay"
  resumen: string;
  // Si el área no tiene subáreas, usar "herramientas" directamente
  herramientas?: Tool[];
  // Si el área sí tiene subáreas (caso Ciencias Naturales), usar "subareas"
  subareas?: SubArea[];
};

export const areas: Area[] = [
  {
    slug: "ciencias-sociales",
    nombre: "Ciencias Sociales",
    color: "clay",
    resumen:
      "Herramientas para explorar geografía, historia y sociedad con mapas interactivos, líneas de tiempo y archivos documentales.",
    herramientas: [
      {
        nombre: "Google Earth",
        descripcion: "Recorridos geográficos y capas históricas del planeta en 3D.",
        url: "https://earth.google.com/",
        etiqueta: "Gratis",
      },
      {
        nombre: "TimelineJS",
        descripcion: "Construcción de líneas de tiempo interactivas para procesos históricos.",
        url: "https://timeline.knightlab.com/",
        etiqueta: "Gratis",
      },
      {
        nombre: "Padlet",
        descripcion: "Mural colaborativo para debates, fuentes primarias y trabajo en equipo.",
        url: "https://padlet.com/",
        etiqueta: "Freemium",
      },
      {
        nombre: "Biblioteca Digital Mundial",
        descripcion: "Archivos históricos y culturales digitalizados de todo el mundo.",
        url: "https://www.wdl.org/",
        etiqueta: "Gratis",
      },
    ],
  },
  {
    slug: "ciencias-naturales",
    nombre: "Ciencias Naturales",
    color: "forest",
    resumen:
      "Simuladores y laboratorios virtuales agrupados por disciplina: Biología, Química y Física.",
    subareas: [
      {
        slug: "biologia",
        nombre: "Biología",
        herramientas: [
          {
            nombre: "PhET Simulaciones",
            descripcion: "Simulaciones interactivas de procesos biológicos y celulares.",
            url: "https://phet.colorado.edu/es/",
            etiqueta: "Gratis",
          },
          {
            nombre: "BioDigital Human",
            descripcion: "Modelo 3D del cuerpo humano para explorar anatomía y sistemas.",
            url: "https://www.biodigital.com/",
            etiqueta: "Freemium",
          },
        ],
      },
      {
        slug: "quimica",
        nombre: "Química",
        herramientas: [
          {
            nombre: "ChemCollective",
            descripcion: "Laboratorio virtual de química con experimentos guiados.",
            url: "http://chemcollective.org/",
            etiqueta: "Gratis",
          },
          {
            nombre: "Molview",
            descripcion: "Editor y visualizador de moléculas en 2D y 3D.",
            url: "https://molview.org/",
            etiqueta: "Gratis",
          },
        ],
      },
      {
        slug: "fisica",
        nombre: "Física",
        herramientas: [
          {
            nombre: "Algodoo",
            descripcion: "Simulador de física 2D para experimentar con mecánica y movimiento.",
            url: "http://www.algodoo.com/",
            etiqueta: "Gratis",
          },
          {
            nombre: "PhET - Física",
            descripcion: "Simulaciones de ondas, electricidad, óptica y energía.",
            url: "https://phet.colorado.edu/es/simulations/category/physics",
            etiqueta: "Gratis",
          },
        ],
      },
    ],
  },
  {
    slug: "espanol",
    nombre: "Español",
    color: "indigo",
    resumen:
      "Recursos para lectura crítica, producción escrita y análisis literario.",
    herramientas: [
      {
        nombre: "StoryboardThat",
        descripcion: "Creación de historietas y storyboards para narrativa y comprensión lectora.",
        url: "https://www.storyboardthat.com/es",
        etiqueta: "Freemium",
      },
      {
        nombre: "Genially",
        descripcion: "Presentaciones y textos interactivos para análisis de obras literarias.",
        url: "https://genially.com/",
        etiqueta: "Freemium",
      },
      {
        nombre: "LanguageTool",
        descripcion: "Corrector de ortografía, gramática y estilo en español.",
        url: "https://languagetool.org/es",
        etiqueta: "Gratis",
      },
    ],
  },
  {
    slug: "ingles",
    nombre: "Inglés",
    color: "teal",
    resumen:
      "Plataformas para práctica de comprensión oral, vocabulario y gramática en inglés.",
    herramientas: [
      {
        nombre: "Duolingo",
        descripcion: "Práctica gamificada de vocabulario y gramática por niveles.",
        url: "https://www.duolingo.com/",
        etiqueta: "Freemium",
      },
      {
        nombre: "BBC Learning English",
        descripcion: "Audios, videos y ejercicios auténticos para comprensión oral.",
        url: "https://www.bbc.co.uk/learningenglish",
        etiqueta: "Gratis",
      },
      {
        nombre: "Quizlet",
        descripcion: "Tarjetas de estudio para vocabulario y práctica de repaso espaciado.",
        url: "https://quizlet.com/",
        etiqueta: "Freemium",
      },
    ],
  },
  {
    slug: "competencias-comunicativas",
    nombre: "Competencias Comunicativas",
    color: "plum",
    resumen:
      "Herramientas transversales para fortalecer expresión oral, escritura y trabajo colaborativo.",
    herramientas: [
      {
        nombre: "Flip",
        descripcion: "Videos cortos de estudiantes y docentes para práctica de expresión oral.",
        url: "https://info.flip.com/",
        etiqueta: "Gratis",
      },
      {
        nombre: "Mentimeter",
        descripcion: "Encuestas y nubes de palabras en vivo para retroalimentación grupal.",
        url: "https://www.mentimeter.com/",
        etiqueta: "Freemium",
      },
      {
        nombre: "Google Jamboard",
        descripcion: "Pizarra colaborativa para lluvias de ideas en tiempo real.",
        url: "https://jamboard.google.com/",
        etiqueta: "Gratis",
      },
    ],
  },
  {
    slug: "matematicas",
    nombre: "Matemáticas",
    color: "mustard",
    resumen:
      "Calculadoras gráficas, geometría dinámica y práctica de razonamiento matemático.",
    herramientas: [
      {
        nombre: "GeoGebra",
        descripcion: "Geometría dinámica, álgebra y cálculo en un solo entorno visual.",
        url: "https://www.geogebra.org/?lang=es",
        etiqueta: "Gratis",
      },
      {
        nombre: "Desmos",
        descripcion: "Calculadora gráfica interactiva para funciones y datos.",
        url: "https://www.desmos.com/calculator?lang=es",
        etiqueta: "Gratis",
      },
      {
        nombre: "Khan Academy",
        descripcion: "Ejercicios secuenciados y video-explicaciones por nivel escolar.",
        url: "https://es.khanacademy.org/",
        etiqueta: "Gratis",
      },
    ],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}