import { areas } from "@/data/areas";
import SectionHeading from "@/components/ui/SectionHeading";

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

export default function AreasPreview() {
  return (
    <section className="border-y border-line bg-board">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="01 / Áreas de aprendizaje"
          title="Encuentra herramientas según tu área."
          description="Explora recursos digitales organizados por las áreas fundamentales del aprendizaje."
          href="/areas"
          linkLabel="Ver todas las áreas"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.slug}
              className="border border-line bg-paper p-6"
            >
              <div className={`mb-8 h-2 w-16 ${areaColors[area.color] ?? "bg-brand"}`} />

              <h3 className="font-display text-2xl font-bold text-ink">
                {area.nombre}
              </h3>

              <p className="mt-3 text-sm leading-6 text-ink-soft">
                {area.resumen}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}