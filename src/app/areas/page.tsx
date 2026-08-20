import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AreasHeader from "@/components/areas/AreasHeader";
import AreaCard from "@/components/areas/AreaCard";

import { areas } from "@/data/areas";

export default function AreasPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="board-texture pointer-events-none absolute inset-0" />

      <div className="relative">
        <Navbar />

        <main>
          <AreasHeader />

          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="space-y-6">
              {areas.map((area) => (
                <AreaCard key={area.slug} area={area} />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}