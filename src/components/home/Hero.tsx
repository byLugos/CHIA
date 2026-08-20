import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 border border-line bg-board px-3 py-2 font-mono text-[12px] uppercase tracking-[0.15em] text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Recursos para docentes
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-8xl">
            La tecnología
            <br />
            <span className="text-brand">también se enseña.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
            Explora herramientas digitales, recursos educativos y
            experiencias docentes para integrar la tecnología de manera
            intencionada en el aula.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/areas"
              className="inline-flex items-center gap-3 bg-brand px-5 py-3 font-mono text-xs uppercase tracking-wide text-board transition-colors hover:bg-brand-dark"
            >
              Explorar herramientas
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/universo-ia"
              className="inline-flex items-center gap-3 border border-line bg-board px-5 py-3 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Explorar Universo IA
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="peg-tag rotate-2 border border-line bg-board px-8 pb-12 shadow-[8px_8px_0_var(--color-line)]">

            <h2 className="mt-8 font-display text-4xl font-bold leading-tight text-brand">
              Caja de
              <br />
              herramientas
            </h2>

            <div className="my-8 h-px bg-line" />

            <p className="text-sm leading-6 text-ink-soft">
              Un espacio para descubrir, explorar y llevar herramientas
              digitales a diferentes contextos de aprendizaje.
            </p>

            <div className="mt-8 flex items-center rotate-1 justify-between font-mono text-[9px] uppercase tracking-widest text-ink-soft">
              <span>Explorar</span>
              <span>Aprender</span>
              <span>Aplicar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}