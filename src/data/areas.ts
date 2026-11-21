// Documento PDF de apoyo de una herramienta.
// Usa "archivo" para un PDF guardado en /public/pdfs (ej: "/pdfs/geogebra.pdf")
// o "drive" para un PDF en Google Drive (id o enlace completo).
export type DocumentoPDF = {
  titulo?: string;
  archivo?: string;
  drive?: string;
};

export type Tool = {
  // Opcional: si no se pone, se genera a partir del nombre ("GeoGebra" → "geogebra").
  // Es la parte final de la URL: /areas/matematicas/geogebra
  slug?: string;
  nombre: string;
  descripcion: string;
  // Enlace a la herramienta. Si aún no se tiene, se deja vacío ("") y en su
  // página aparece "Enlace próximamente" en lugar del botón.
  url: string;
  etiqueta?: string; // ej: "Gratis", "Freemium", "Requiere cuenta"
  // Enlace opcional para descargar la app (Google Play, App Store…).
  // Aparece como un segundo botón "Descargar la app" en la página de la herramienta.
  app?: string;
  // Logo de la herramienta. Guárdalo en /public/herramientas y pon la ruta,
  // ej: "/herramientas/geogebra.png". También acepta un enlace https.
  // Si no hay logo, se muestra el ícono del sitio web de la herramienta.
  logo?: string;
  // Guía en PDF (opcional). Si no hay, se muestra el espacio "Próximamente".
  pdf?: DocumentoPDF;
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
        nombre: "Biblioteca Digital Mundial",
        descripcion: "Archivos históricos y culturales digitalizados de todo el mundo.",
        url: "https://www.wdl.org/",
        etiqueta: "Gratis",
      },
      {
        // Del PDF de herramientas (#12)
        nombre: "Colombia Aprende",
        descripcion:
          "Portal del Ministerio de Educación con colecciones de recursos educativos digitales por área y grado.",
        url: "https://colombiaaprende.edu.co/recurso-coleccion",
        etiqueta: "Gratis",
      },
      {
        nombre: "Didactalia",
        descripcion:
          "Comunidad con miles de recursos educativos: mapas interactivos, juegos y actividades para el aula.",
        url: "https://didactalia.net/comunidad/materialeducativo",
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
            url: "https://human.biodigital.com/login?returnUrl=/explore",
            etiqueta: "Freemium",
          },
          {
            nombre: "Libro de Biología",
            descripcion:
              "App de LiteraturApps con un libro de biología para estudiar desde el celular, organizado por temas.",
            url: "https://play.google.com/store/apps/details?id=biology.book",
            etiqueta: "App Android",
          },
          {
            nombre: "Anatomy 3D Atlas",
            descripcion:
              "Atlas de anatomía humana en 3D para explorar huesos, músculos y órganos desde cualquier ángulo.",
            url: "https://anatomy3datlas.com/",
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
          {
            nombre: "Unrealchemist",
            descripcion:
              "Juego de química para combinar elementos, descubrir compuestos y aprender cómo reaccionan.",
            url: "https://www.unrealchemist.com/",
            app: "https://play.google.com/store/apps/details?id=com.PixelMiller.UnrealChemist",
            etiqueta: "App Android",
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
      {
        // Estaba en Ciencias Sociales; en el Drive está en Español
        nombre: "Padlet",
        descripcion: "Mural colaborativo para compartir ideas, textos, imágenes y videos, y trabajar en equipo.",
        url: "https://es.padlet.com/",
        etiqueta: "Freemium",
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
      {
        // Del PDF de herramientas (#2)
        nombre: "Write & Improve",
        descripcion:
          "Herramienta de Cambridge para practicar la escritura en inglés con corrección y retroalimentación al instante.",
        url: "https://writeandimprove.com/",
        etiqueta: "Gratis",
      },
      {
        nombre: "Baamboozle",
        descripcion:
          "Juegos de preguntas por equipos para repasar vocabulario y estructuras de forma divertida.",
        url: "https://www.baamboozle.com/",
        etiqueta: "Gratis",
      },
      {
        nombre: "StoryWeaver",
        descripcion:
          "Biblioteca gratuita de cuentos ilustrados en inglés y muchos otros idiomas, para leer, escuchar y traducir.",
        url: "https://storyweaver.org.in/en",
        etiqueta: "Gratis",
      },
      {
        nombre: "ELLLO",
        descripcion:
          "Miles de audios y videos gratuitos con conversaciones reales en inglés de personas de todo el mundo, con transcripción y ejercicios.",
        url: "https://www.elllo.org/",
        etiqueta: "Gratis",
      },
      {
        nombre: "LearnEnglish (British Council)",
        slug: "learnenglish-british-council",
        descripcion:
          "Sitio del British Council con lecciones, ejercicios, pódcast y videos para practicar inglés por niveles.",
        url: "https://learnenglish.britishcouncil.org/",
        etiqueta: "Gratis",
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
      {
        // Del PDF de herramientas (#10). TODO: confirmar área
        nombre: "Canva Design School",
        descripcion:
          "Cursos y tutoriales gratuitos de Canva para aprender diseño y crear materiales de clase más claros y atractivos.",
        url: "https://www.canva.com/es_419/design-school/",
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
        url: "https://www.geogebra.org/math",
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
      {
        // Del PDF de herramientas (#13). TODO: el PDF no trae enlace ni descripción
        nombre: "Mathcenter",
        descripcion: "Recursos y práctica para el aprendizaje de las matemáticas.",
        url: "",
      },
    ],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}