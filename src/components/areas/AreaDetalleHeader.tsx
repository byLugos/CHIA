import type { Area } from "@/data/areas";
import Migas from "@/components/ui/Migas";
import { getAreaColor } from "@/lib/colores";
import { herramientasDeArea } from "@/lib/herramientas";

export default function AreaDetalleHeader({ area }: { area: Area }) {
  const total = herramientasDeArea(area).length;

  return (
    <section className="border-b border-line bg-board">
      <div className={`h-2 w-full ${getAreaColor(area.color)}`} />

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <Migas items={[{ label: "Áreas", href: "/areas" }, { label: area.nombre }]} />

        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl">
          {area.nombre}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
          {area.resumen}
        </p>

        <p className="mt-6 font-mono text-[12px] uppercase tracking-widest text-brand">
          {total} herramientas · Selecciona una para ver su video y su guía
        </p>
      </div>
    </section>
  );
}
