import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import VideosHeader from "@/components/videos/VideosHeader";
import VideoCard from "@/components/videos/VideoCard";

import { videos } from "@/data/videos";

export default function VideosPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="board-texture pointer-events-none absolute inset-0" />

      <div className="relative">
        <Navbar />

        <main>
          <VideosHeader />

          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            {videos.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {videos.map((video) => (
                  <VideoCard
                    key={`${video.id}-${video.titulo}`}
                    video={video}
                  />
                ))}
              </div>
            ) : (
              <div className="border border-line bg-board p-10 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                  No hay videos disponibles todavía.
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