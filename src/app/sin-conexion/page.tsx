import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

// Se muestra si, sin internet, se abre una página que no estaba guardada.
export const metadata: Metadata = {
  title: "Sin conexión",
  robots: { index: false },
};

export default function SinConexionPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
          Sin conexión
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Esta página aún no está guardada.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-ink-soft">
          Cuando vuelvas a tener internet se abrirá normalmente. Mientras tanto,
          puedes seguir explorando el resto de CHIA.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 bg-brand px-6 py-4 font-mono text-sm uppercase tracking-wide text-board transition-colors hover:bg-brand-dark"
        >
          Ir al inicio
        </Link>
      </section>
    </PageShell>
  );
}
