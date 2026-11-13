import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Estructura común de todas las páginas: textura de fondo, menú y pie.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="board-texture pointer-events-none absolute inset-0" />

      <div className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
