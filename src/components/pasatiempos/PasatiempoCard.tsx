import type { Pasatiempo } from "@/data/pasatiempos";

interface PasatiempoCardProps {
  tool: Pasatiempo;
}

export default function PasatiempoCard({
  tool,
}: PasatiempoCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noreferrer"
      className="group flex gap-5 border border-line bg-board p-5 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[4px_4px_0_var(--color-line)]"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-line bg-paper p-3">
        <img
          src={tool.imagen}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-xl font-bold leading-tight text-ink">
            {tool.nombre}
          </h2>

          <span
            aria-hidden="true"
            className="shrink-0 font-mono text-xs text-ink-soft transition-transform group-hover:translate-x-1"
          >
            ↗
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-ink-soft">
          {tool.descripcion}
        </p>

        {tool.etiqueta && (
          <span className="mt-4 inline-block font-mono text-[12px] uppercase tracking-widest text-brand">
            {tool.etiqueta}
          </span>
        )}
      </div>
    </a>
  );
}