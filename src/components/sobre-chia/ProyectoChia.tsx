import { proyectoChia, principiosChia } from "@/data/sobreChia";

export default function ProyectoChia() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
            01 / El proyecto
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Tecnología con intención pedagógica.
          </h2>
        </div>

        <div>
          <p className="text-m leading-7 text-ink-soft">
            {proyectoChia.descripcion}
          </p>

          <div className="mt-8 border-l-2 border-brand pl-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-brand">
              Objetivo
            </p>

            <p className="mt-3 text-m leading-6 text-ink-soft">
              {proyectoChia.objetivo}
            </p>
          </div>

          <p className="mt-8 text-m leading-6 text-ink-soft">
            {proyectoChia.contexto}
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principiosChia.map((principio, index) => (
          <article
            key={principio.titulo}
            className="border border-line bg-board p-6"
          >
            <span className="font-mono text-3xl text-highlight">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-8 font-display text-2xl font-bold text-ink">
              {principio.titulo}
            </h3>

            <p className="mt-3 text-m leading-6 text-ink-soft">
              {principio.descripcion}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}