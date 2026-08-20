import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import UniversoIAHeader from "@/components/universo-ia/UniversoIAHeader";
import CategoriaIACard from "@/components/universo-ia/CategoriaIACard";

import { categoriasIA } from "@/data/universoIA";

export default function UniversoIAPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="board-texture pointer-events-none absolute inset-0" />

      <div className="relative">
        <Navbar />

        <main>
          <UniversoIAHeader />

          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="space-y-6">
              {categoriasIA.map((categoria) => (
                <CategoriaIACard
                  key={categoria.slug}
                  categoria={categoria}
                />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}