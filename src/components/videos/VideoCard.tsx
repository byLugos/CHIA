import Link from "next/link";
import type { VideoDocente } from "@/data/videos";
import VideoEmbed from "@/components/ui/VideoEmbed";
import VideoAcciones from "@/components/ui/VideoAcciones";
import { buscarHerramientaPorSlug } from "@/lib/herramientas";

interface VideoCardProps {
  video: VideoDocente;
}

export default function VideoCard({ video }: VideoCardProps) {
  const herramienta = video.herramienta
    ? buscarHerramientaPorSlug(video.herramienta)
    : undefined;

  return (
    <article className="group flex flex-col overflow-hidden border border-line bg-board transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[6px_6px_0_var(--color-line)]">
      <VideoEmbed video={video} />

      <div className="flex flex-1 flex-col p-6">
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

        {video.docente && (
          <p className="mt-3 font-mono text-[14px] uppercase tracking-wide text-ink-soft">
            {video.docente}
          </p>
        )}

        {video.descripcion && (
          <>
            <div className="my-5 h-px bg-line" />
            <p className="text-sm leading-6 text-ink-soft">{video.descripcion}</p>
          </>
        )}

        <div className="mt-auto pt-6">
          <VideoAcciones video={video} />

          {herramienta && (
            <Link
              href={herramienta.href}
              className="mt-4 inline-block font-mono text-[11px] uppercase tracking-widest text-brand underline-offset-4 hover:underline"
            >
              Ver la herramienta {herramienta.tool.nombre} →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
