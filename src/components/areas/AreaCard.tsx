import Link from "next/link";
import type { Area } from "@/data/areas";
import ToolLogo from "@/components/ui/ToolLogo";
import { getAreaColor } from "@/lib/colores";
import { herramientasDeArea } from "@/lib/herramientas";

interface AreaCardProps {
  area: Area;
}

// Tarjeta del índice de áreas: lleva a /areas/[area]
export default function AreaCard({ area }: AreaCardProps) {
  const herramientas = herramientasDeArea(area);
  const totalSubareas = area.subareas?.length ?? 0;

  return (
    <Link
      href={`/areas/${area.slug}`}
      className="group flex h-full flex-col border border-line bg-board transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[6px_6px_0_var(--color-line)]"
    >
      <div className={`h-2 w-full ${getAreaColor(area.color)}`} />

      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-3xl font-bold leading-tight text-ink">
            {area.nombre}
          </h2>
          <span
            aria-hidden="true"
            className="mt-2 font-mono text-sm text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-brand"
          >
            →
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-ink-soft">{area.resumen}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-8">
          <div className="flex -space-x-2" aria-hidden="true">
            {herramientas.slice(0, 4).map(({ tool }) => (
              <ToolLogo key={tool.nombre} tool={tool} tamano="sm" className="bg-white" />
            ))}
          </div>

          <span className="font-mono text-[11px] uppercase tracking-widest text-brand">
            {herramientas.length} herramientas
            {totalSubareas > 0 && ` · ${totalSubareas} subáreas`}
          </span>
        </div>
      </div>
    </Link>
  );
}
