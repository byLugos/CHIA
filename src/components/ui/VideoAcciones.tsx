import type { VideoDocente } from "@/data/videos";
import { drive, youtube } from "@/lib/media";
import { sitio } from "@/data/sitio";
import { cn } from "@/lib/utils";

const boton =
  "inline-flex items-center justify-center gap-2 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-colors";
const principal = "border-brand bg-brand text-board hover:bg-brand-dark";
const secundario =
  "border-line bg-board text-ink hover:border-brand hover:text-brand";

// Botones para descargar o abrir el video en Drive / YouTube.
export default function VideoAcciones({
  video,
  className,
}: {
  video: VideoDocente;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {video.drive ? (
        <>
          <a href={drive.descargar(video.drive)} className={cn(boton, principal)}>
            <span aria-hidden="true">↓</span> Descargar video
          </a>
          <a
            href={drive.ver(video.drive)}
            target="_blank"
            rel="noreferrer"
            className={cn(boton, secundario)}
          >
            Ver en Drive <span aria-hidden="true">↗</span>
          </a>
        </>
      ) : (
        <a
          href={sitio.carpetaVideosDrive}
          target="_blank"
          rel="noreferrer"
          className={cn(boton, secundario)}
        >
          <span aria-hidden="true">↓</span> Descargar desde Drive
        </a>
      )}

      {video.youtube && (
        <a
          href={youtube.ver(video.youtube)}
          target="_blank"
          rel="noreferrer"
          className={cn(boton, secundario)}
        >
          Ver en YouTube <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}
