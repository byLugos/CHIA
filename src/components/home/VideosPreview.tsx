import { videos } from "@/data/videos";

import SectionHeading from "@/components/ui/SectionHeading";

export default function VideosPreview() {
  const featuredVideos = videos.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="04 / Experiencias docentes"
        title="Aprende de quienes ya están usando estas herramientas."
        description="Videos y experiencias de docentes aplicando recursos digitales en diferentes contextos de aprendizaje."
        href="/videos"
        linkLabel="Ver todos los videos"
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {featuredVideos.map((video) => (
          <article
            key={`${video.id}-${video.titulo}`}
            className="border border-line bg-board p-5"
          >
            <p className="font-mono text-[9px] uppercase tracking-widest text-brand">
              {video.areaNombre}
            </p>

            <h3 className="mt-3 font-display text-xl font-bold text-ink">
              {video.titulo}
            </h3>

            <p className="mt-2 text-xs text-ink-soft">
              {video.docente}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}