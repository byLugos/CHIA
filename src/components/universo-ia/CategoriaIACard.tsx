import type { CategoriaIA } from "@/data/universoIA";
import ToolCard from "@/components/ui/ToolCard";
import { getToolSlug, videosDeHerramienta } from "@/lib/herramientas";

interface CategoriaIACardProps {
  categoria: CategoriaIA;
}

export default function CategoriaIACard({ categoria }: CategoriaIACardProps) {
  return (
    <section id={categoria.slug} className="scroll-mt-28 border border-line bg-board">
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
          {categoria.herramientas.map((tool) => {
            const slug = getToolSlug(tool);
            return (
              <ToolCard
                key={slug}
                tool={tool}
                href={`/universo-ia/${slug}`}
                tieneVideo={videosDeHerramienta(slug).length > 0}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
