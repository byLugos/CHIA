import Link from "next/link";
import type { Tool } from "@/data/areas";
import ToolLogo from "@/components/ui/ToolLogo";

interface ToolCardProps {
  tool: Tool;
  href: string;
  tieneVideo?: boolean;
}

// Tarjeta de herramienta: lleva a la página de detalle (video, guía PDF y enlace).
export default function ToolCard({ tool, href, tieneVideo = false }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[4px_4px_0_var(--color-line)]"
    >
      <div className="flex items-start gap-4">
        <ToolLogo tool={tool} tamano="sm" />

        <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold leading-tight text-ink">
            {tool.nombre}
          </h3>

          <span
            aria-hidden="true"
            className="font-mono text-xs text-ink-soft transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-ink-soft">{tool.descripcion}</p>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
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
    </Link>
  );
}
