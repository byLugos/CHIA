import type { Area, Tool } from "@/data/areas";
import ToolCard from "@/components/ui/ToolCard";
import { getToolSlug, videosDeHerramienta } from "@/lib/herramientas";

function Grilla({ area, herramientas }: { area: Area; herramientas: Tool[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {herramientas.map((tool) => {
        const slug = getToolSlug(tool);
        return (
          <ToolCard
            key={slug}
            tool={tool}
            href={`/areas/${area.slug}/${slug}`}
            tieneVideo={videosDeHerramienta(slug).length > 0}
          />
        );
      })}
    </div>
  );
}

function Separador({ titulo }: { titulo: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="h-px flex-1 bg-line" />
      <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-brand">{titulo}</h2>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}

// Herramientas de un área (con sus subáreas si las tiene)
export default function AreaHerramientas({ area }: { area: Area }) {
  return (
    <div className="space-y-12">
      {area.herramientas && area.herramientas.length > 0 && (
        <div>
          {/* Si el área tiene subáreas, estas herramientas son para todas */}
          {area.subareas && area.subareas.length > 0 && <Separador titulo="Para todas las disciplinas" />}
          <Grilla area={area} herramientas={area.herramientas} />
        </div>
      )}

      {area.subareas?.map((subarea) => (
        <div key={subarea.slug} id={subarea.slug} className="scroll-mt-28">
          <Separador titulo={subarea.nombre} />
          <Grilla area={area} herramientas={subarea.herramientas} />
        </div>
      ))}
    </div>
  );
}
