import { categoriasIA } from "@/data/universoIA";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryNumbers: Record<string, string> = {
  audio: "01",
  video: "02",
  presentaciones: "03",
  imagenes: "04",
};

function getCategoryNumber(slug: string) {
  return categoryNumbers[slug] ?? "00";
}

export default function UniversoIAPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="02 / Universo IA"
        title="La inteligencia artificial también tiene un lugar en el aula."
        description="Descubre herramientas de IA para crear audio, video, presentaciones e imágenes."
        href="/universo-ia"
        linkLabel="Explorar Universo IA"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoriasIA.map((categoria) => (
          <article
            key={categoria.slug}
            className="border border-line bg-board p-6"
          >
            <span className="font-mono text-3xl text-highlight">
              {getCategoryNumber(categoria.slug)}
            </span>

            <h3 className="mt-8 font-display text-2xl font-bold text-ink">
              {categoria.nombre}
            </h3>

            <p className="mt-3 text-sm leading-6 text-ink-soft">
              {categoria.descripcion}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}