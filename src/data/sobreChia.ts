export type Docente = {
  nombre: string;
  rol: string;
  descripcion: string;
};

export type ProyectoInfo = {
  nombre: string;
  nombreCompleto: string;
  descripcion: string;
  objetivo: string;
  contexto: string;
};

export const proyectoChia: ProyectoInfo = {
  nombre: "CHIA",
  nombreCompleto: "Caja de Herramientas para la Integración de Aprendizajes",
  descripcion:
    "CHIA es una estrategia tecno-pedagógica orientada a facilitar la integración intencionada de herramientas digitales en diferentes contextos de aprendizaje.",
  objetivo:
    "Proporcionar a docentes un espacio organizado para descubrir, explorar y seleccionar recursos digitales que puedan incorporarse a sus prácticas educativas.",
  contexto:
    "El proyecto reúne herramientas digitales, recursos de inteligencia artificial, actividades educativas y experiencias docentes con el propósito de fortalecer las competencias digitales y enriquecer los procesos de enseñanza y aprendizaje.",
};

export const docentesChia: Docente[] = [
  {
    nombre: "Ray Miller Carrillo Delgado",
    rol: "Docente / Investigador",
    descripcion:
      "Descripción breve de su participación, experiencia o aporte al desarrollo del proyecto CHIA.",
  },
  {
    nombre: "Carmen Liliana Puche Miranda",
    rol: "Docente / Investigador",
    descripcion:
      "Descripción breve de su participación, experiencia o aporte al desarrollo del proyecto CHIA.",
  },
  {
    nombre: "Gissell Velasquez Riaño",
    rol: "Docente / Investigador",
    descripcion:
      "Descripción breve de su participación, experiencia o aporte al desarrollo del proyecto CHIA.",
  },
];

export const principiosChia = [
  {
    titulo: "Explorar",
    descripcion:
      "Descubrir herramientas y recursos digitales que puedan responder a diferentes necesidades educativas.",
  },
  {
    titulo: "Seleccionar",
    descripcion:
      "Identificar recursos pertinentes según el contexto, los objetivos de aprendizaje y las características de los estudiantes.",
  },
  {
    titulo: "Integrar",
    descripcion:
      "Incorporar la tecnología de manera intencionada dentro de las estrategias de enseñanza.",
  },
  {
    titulo: "Compartir",
    descripcion:
      "Recoger y divulgar experiencias docentes que permitan aprender de la práctica.",
  },
];