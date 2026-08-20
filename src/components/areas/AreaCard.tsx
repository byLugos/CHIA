import type { Area, Tool } from "@/data/areas";

interface AreaCardProps {
  area: Area;
}

const areaColors: Record<string, string> = {
  clay: "bg-clay",
  forest: "bg-forest",
  indigo: "bg-tag-indigo",
  teal: "bg-tag-teal",
  plum: "bg-plum",
  mustard: "bg-mustard",
  violet: "bg-violet",
  coral: "bg-coral",
};

function getAreaColor(color: string) {
  return areaColors[color] ?? "bg-brand";
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noreferrer"
      className="group border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[4px_4px_0_var(--color-line)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold text-ink">
          {tool.nombre}
        </h3>

        <span className="font-mono text-xs text-ink-soft transition-transform group-hover:translate-x-1">
          ↗
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-ink-soft">
        {tool.descripcion}
      </p>

      {tool.etiqueta && (
        <span className="mt-5 inline-block font-mono text-[12px] uppercase tracking-widest text-brand">
          {tool.etiqueta}
        </span>
      )}
    </a>
  );
}

export default function AreaCard({ area }: AreaCardProps) {
  const hasSubareas = Boolean(area.subareas?.length);

  return (
    <section className="border border-line bg-board">
      <div className={`h-2 w-full ${getAreaColor(area.color)}`} />

      <div className="p-6 lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              {area.nombre}
            </h2>

            <p className="mt-3 max-w-2xl text-s leading-6 text-ink-soft">
              {area.resumen}
            </p>
          </div>

          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-brand">
            {hasSubareas
              ? `${area.subareas?.length ?? 0} subáreas`
              : `${area.herramientas?.length ?? 0} herramientas`}
          </span>
        </div>

        {area.herramientas && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {area.herramientas.map((tool) => (
              <ToolCard key={tool.nombre} tool={tool} />
            ))}
          </div>
        )}

        {area.subareas && (
          <div className="mt-8 space-y-8">
            {area.subareas.map((subarea) => (
              <div key={subarea.slug}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-line" />

                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-brand">
                    {subarea.nombre}
                  </h3>

                  <div className="h-px flex-1 bg-line" />
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {subarea.herramientas.map((tool) => (
                    <ToolCard key={tool.nombre} tool={tool} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}