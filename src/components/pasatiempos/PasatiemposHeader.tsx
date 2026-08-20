export default function PasatiemposHeader() {
  return (
    <section className="border-b border-line bg-board">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
          03 / Pasatiempos educativos
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Aprender también
          <br />
          <span className="text-brand">puede ser un juego.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
          Explora juegos, actividades y plataformas interactivas para hacer
          del repaso y la participación experiencias más dinámicas.
        </p>
      </div>
    </section>
  );
}