import { docentesChia } from "@/data/sobreChia";

export default function DocentesChia() {
  return (
    <section className="border-y border-line bg-board">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
            02 / Equipo docente
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Las personas detrás del proyecto.
          </h2>

          <p className="mt-5 text-s leading-6 text-ink-soft">
            Docentes y colaboradores que participan en la construcción y
            desarrollo de CHIA.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {docentesChia.map((docente) => (
            <article
              key={docente.nombre}
              className="border border-line bg-paper p-6 lg:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center border-2 border-brand bg-brand font-display text-lg font-bold text-board">
                {docente.nombre.charAt(0)}
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                {docente.nombre}
              </h3>

              <p className="mt-2 font-mono text-[12px] uppercase tracking-widest text-brand">
                {docente.rol}
              </p>

              <p className="mt-5 text-s leading-6 text-ink-soft">
                {docente.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}