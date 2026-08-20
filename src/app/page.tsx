import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import AreasPreview from "@/components/home/AreasPreview";
import UniversoIAPreview from "@/components/home/UniversoIAPreview";
import PasatiemposPreview from "@/components/home/PasatiemposPreview";
import VideosPreview from "@/components/home/VideosPreview";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="board-texture pointer-events-none absolute inset-0" />

      <div className="relative">
        <Navbar />

        <main>
          <Hero />
          <AreasPreview />
          <UniversoIAPreview />
          <PasatiemposPreview />
          <VideosPreview />
        </main>

        <Footer />
      </div>
    </div>
  );
}