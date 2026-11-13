// Colores de acento por área (definidos en globals.css → @theme).
const coloresArea: Record<string, string> = {
  clay: "bg-clay",
  forest: "bg-forest",
  indigo: "bg-tag-indigo",
  teal: "bg-tag-teal",
  plum: "bg-plum",
  mustard: "bg-mustard",
  violet: "bg-violet",
  coral: "bg-coral",
};

export function getAreaColor(color?: string): string {
  return (color && coloresArea[color]) || "bg-brand";
}
