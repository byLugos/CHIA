import Link from "next/link";
import type { Pasatiempo } from "@/data/pasatiempos";
import ToolLogo from "@/components/ui/ToolLogo";
import { getToolSlug, videosDeHerramienta } from "@/lib/herramientas";

interface PasatiempoCardProps {
  tool: Pasatiempo;
}

export default function PasatiempoCard({ tool }: PasatiempoCardProps) {
  const slug = getToolSlug(tool);
  const tieneVideo = videosDeHerramienta(slug).length > 0;

  return (
    <Link
      href={`/pasatiempos/${slug}`}
      className="group flex gap-5 border border-line bg-board p-5 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[4px_4px_0_var(--color-line)]"
    >
      <ToolLogo tool={tool} tamano="lg" className="h-16 w-16 bg-paper" />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-xl font-bold leading-tight text-ink">
            {tool.nombre}
          </h2>

          <span
            aria-hidden="true"
            className="shrink-0 font-mono text-xs text-ink-soft transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-ink-soft">{tool.descripcion}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {tool.etiqueta && (
            <span className="font-mono text-[12px] uppercase tracking-widest text-brand">
              {tool.etiqueta}
            </span>
          )}
          {tieneVideo && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
              <span aria-hidden="true" className="text-highlight">▶</span>
              Video
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
