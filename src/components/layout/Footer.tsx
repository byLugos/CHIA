import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-board">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <Link
            href="/"
            className="font-display text-2xl font-bold text-brand"
          >
            CHIA
          </Link>

          <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">
            Caja de Herramientas para la Integración de Aprendizajes.
            Recursos digitales para fortalecer las competencias digitales
            docentes.
          </p>
        </div>

        <div className="text-left lg:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
            Diseño de una estrategia tecno-pedagógica
          </p>

          <p className="mt-2 text-xs text-ink-soft">
            Proyecto CHIA · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}