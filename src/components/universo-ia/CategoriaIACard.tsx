import type { CategoriaIA } from "@/data/universoIA";
import type { Tool } from "@/data/areas";

interface CategoriaIACardProps {
  categoria: CategoriaIA;
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

        <span
          aria-hidden="true"
          className="font-mono text-xs text-ink-soft transition-transform group-hover:translate-x-1"
        >
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

export default function CategoriaIACard({
  categoria,
}: CategoriaIACardProps) {
  return (
    <section className="border border-line bg-board">
      <div className="h-2 w-full bg-brand" />

      <div className="p-6 lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              {categoria.nombre}
            </h2>

            <p className="mt-3 max-w-2xl text-s leading-6 text-ink-soft">
              {categoria.descripcion}
            </p>
          </div>

          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-brand">
            {categoria.herramientas.length} herramientas
          </span>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categoria.herramientas.map((tool) => (
            <ToolCard key={tool.nombre} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}