// Los tesoros que salen del cofre en la portada.
// Cambia aquí el texto, la descripción o a dónde lleva cada uno.
export type IconoTesoro = "areas" | "ia" | "pasatiempos" | "videos" | "recursos";

export type Tesoro = {
  titulo: string;
  descripcion: string;
  href: string;
  icono: IconoTesoro;
};

export const tesoros: Tesoro[] = [
  {
    titulo: "Áreas",
    descripcion: "Herramientas para cada área del conocimiento, con video y guía.",
    href: "/areas",
    icono: "areas",
  },
  {
    titulo: "Universo IA",
    descripcion: "Inteligencia artificial para planear clases y crear audio, video e imágenes.",
    href: "/universo-ia",
    icono: "ia",
  },
  {
    titulo: "Pasatiempos",
    descripcion: "Juegos y retos para repasar, practicar y participar en clase.",
    href: "/pasatiempos",
    icono: "pasatiempos",
  },
  {
    titulo: "Videos",
    descripcion: "Docentes que muestran cómo usar cada herramienta en el aula.",
    href: "/videos",
    icono: "videos",
  },
  {
    titulo: "Recursos",
    descripcion: "Material para llevar: videos descargables, códigos QR y guías.",
    href: "/recursos",
    icono: "recursos",
  },
];

export const textosTesoros = {
  bienvenida: "Bienvenido a CHIA",
  subtituloBienvenida: "Caja de Herramientas para la Integración del Aprendizaje",
  textoBienvenida:
    "Un espacio creado para descubrir recursos, explorar tecnologías y fortalecer tus prácticas pedagógicas.",
  boton: "Descubre los tesoros de CHIA",
  titulo: "Descubre los tesoros de",
  complemento:
    "Elige un tesoro y comienza tu recorrido por nuevas posibilidades de enseñanza y aprendizaje.",
  cinta: "Selecciona un tesoro para explorar",
};
