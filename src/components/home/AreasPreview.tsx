import Link from "next/link";
import { areas } from "@/data/areas";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAreaColor } from "@/lib/colores";

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
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[4px_4px_0_var(--color-line)]"
            >
              <div className={`mb-8 h-2 w-16 transition-all group-hover:w-24 ${getAreaColor(area.color)}`} />

              <h3 className="font-display text-2xl font-bold text-ink">
                {area.nombre}
              </h3>

              <p className="mt-3 text-sm leading-6 text-ink-soft">
                {area.resumen}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}