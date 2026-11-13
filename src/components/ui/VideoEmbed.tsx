import type { VideoDocente } from "@/data/videos";
import { drive, youtube } from "@/lib/media";
import { sitio } from "@/data/sitio";

// Reproductor: usa YouTube si existe; si no, el reproductor de Google Drive.
export default function VideoEmbed({ video }: { video: VideoDocente }) {
  const src = video.youtube
    ? youtube.embed(video.youtube)
    : video.drive
      ? drive.vistaPrevia(video.drive)
      : null;

  return (
    <div className="relative aspect-video overflow-hidden bg-ink">
      {src ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={video.titulo}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <VideoPendiente />
      )}
    </div>
  );
}

export function VideoPendiente() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border border-dashed border-board/30 p-6 text-center">
      <span aria-hidden="true" className="font-mono text-4xl text-highlight">
        ▶
      </span>
      <p className="font-mono text-xs uppercase tracking-widest text-board/80">
        Video próximamente
      </p>
      <a
        href={sitio.carpetaVideosDrive}
        target="_blank"
        rel="noreferrer"
        className="font-mono text-[11px] uppercase tracking-widest text-board/60 underline-offset-4 hover:text-board hover:underline"
      >
        Ver la carpeta de videos en Drive ↗
      </a>
    </div>
  );
}
