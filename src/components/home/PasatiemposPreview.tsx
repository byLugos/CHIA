import SectionHeading from "@/components/ui/SectionHeading";

export default function PasatiemposPreview() {
  return (
    <section className="border-y border-line bg-brand text-board">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="03 / Pasatiempos educativos"
          title="Aprender también puede ser un juego."
          description="Actividades, juegos y plataformas para convertir el repaso y la participación en experiencias más dinámicas."
          href="/pasatiempos"
          linkLabel="Ver pasatiempos"
          variant="dark"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="border border-board/20 bg-brand-dark/30 p-6">
            <p className="font-mono text-3xl text-highlight">Jugar</p>

            <p className="mt-4 text-sm leading-6 text-board/70">
              Actividades interactivas para reforzar contenidos de manera
              dinámica y participativa.
            </p>
          </div>

          <div className="border border-board/20 bg-brand-dark/30 p-6">
            <p className="font-mono text-3xl text-highlight">Practicar</p>

            <p className="mt-4 text-sm leading-6 text-board/70">
              Recursos para repasar conceptos mediante retos, preguntas y
              ejercicios.
            </p>
          </div>

          <div className="border border-board/20 bg-brand-dark/30 p-6">
            <p className="font-mono text-3xl text-highlight">Participar</p>

            <p className="mt-4 text-sm leading-6 text-board/70">
              Experiencias pensadas para fomentar la interacción y el trabajo
              con otros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}