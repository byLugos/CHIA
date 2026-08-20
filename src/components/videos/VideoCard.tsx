import type { VideoDocente } from "@/data/videos";

interface VideoCardProps {
  video: VideoDocente;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="group overflow-hidden border border-line bg-board transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[6px_6px_0_var(--color-line)]">
      <div className="relative aspect-video overflow-hidden bg-ink">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.titulo}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-brand">
            {video.areaNombre}
          </p>

          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
            Video
          </span>
        </div>

        <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-ink">
          {video.titulo}
        </h2>

        <p className="mt-3 font-mono text-[14px] uppercase tracking-wide text-ink-soft">
          {video.docente}
        </p>

        <div className="my-5 h-px bg-line" />

        <p className="text-sm leading-6 text-ink-soft">
          {video.descripcion}
        </p>
      </div>
    </article>
  );
}