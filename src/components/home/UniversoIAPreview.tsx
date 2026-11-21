import Link from "next/link";
import { categoriasIA } from "@/lib/visibles";
import SectionHeading from "@/components/ui/SectionHeading";

export default function UniversoIAPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="02 / Universo IA"
        title="La inteligencia artificial también tiene un lugar en el aula."
        description="Descubre herramientas de IA para planear tus clases y crear audio, video, presentaciones e imágenes."
        href="/universo-ia"
        linkLabel="Explorar Universo IA"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {categoriasIA.map((categoria, index) => (
          <Link
            key={categoria.slug}
            href={`/universo-ia#${categoria.slug}`}
            className="border border-line bg-board p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[4px_4px_0_var(--color-line)]"
          >
            <span className="font-mono text-3xl text-highlight">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-8 font-display text-2xl font-bold text-ink">
              {categoria.nombre}
            </h3>

            <p className="mt-3 text-sm leading-6 text-ink-soft">
              {categoria.descripcion}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}