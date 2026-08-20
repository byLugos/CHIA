export default function AreasHeader() {
  return (
    <section className="border-b border-line bg-board">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
          01 / Áreas de aprendizaje
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Herramientas para
          <br />
          <span className="text-brand">cada área.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
          Explora recursos digitales seleccionados para diferentes áreas del
          aprendizaje. Encuentra herramientas para enseñar, practicar,
          experimentar y crear.
        </p>
      </div>
    </section>
  );
}