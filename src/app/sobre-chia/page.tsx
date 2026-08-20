import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SobreChiaHeader from "@/components/sobre-chia/SobreChiaHeader";
import ProyectoChia from "@/components/sobre-chia/ProyectoChia";
import DocentesChia from "@/components/sobre-chia/DocentesChia";

export default function SobreChiaPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="board-texture pointer-events-none absolute inset-0" />

      <div className="relative">
        <Navbar />

        <main>
          <SobreChiaHeader />
          <ProyectoChia />
          <DocentesChia />
        </main>

        <Footer />
      </div>
    </div>
  );
}