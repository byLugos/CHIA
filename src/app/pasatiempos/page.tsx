import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PasatiemposHeader from "@/components/pasatiempos/PasatiemposHeader";
import PasatiempoCard from "@/components/pasatiempos/PasatiempoCard";

import { pasatiempos } from "@/data/pasatiempos";

export default function PasatiemposPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="board-texture pointer-events-none absolute inset-0" />

      <div className="relative">
        <Navbar />

        <main>
          <PasatiemposHeader />

          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            {pasatiempos.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {pasatiempos.map((tool) => (
                  <PasatiempoCard
                    key={tool.nombre}
                    tool={tool}
                  />
                ))}
              </div>
            ) : (
              <div className="border border-line bg-board p-10 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                  No hay pasatiempos disponibles todavía.
                </p>
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}