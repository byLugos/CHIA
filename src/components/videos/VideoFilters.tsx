// src/components/videos/VideoFilters.tsx
"use client";

import { useMemo, useState } from "react";
import VideoCard from "@/components/videos/VideoCard";
import type { VideoDocente } from "@/data/videos";

interface VideoFiltersProps {
  videos: VideoDocente[];
}

const TODOS = "Todos";

export default function VideoFilters({ videos }: VideoFiltersProps) {
  const categorias = useMemo(() => {
    const unicas = Array.from(new Set(videos.map((v) => v.areaNombre)));
    return [TODOS, ...unicas];
  }, [videos]);

  const [activa, setActiva] = useState(TODOS);

  const videosFiltrados =
    activa === TODOS ? videos : videos.filter((v) => v.areaNombre === activa);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-6">
        {categorias.map((categoria) => {
          const seleccionada = categoria === activa;
          return (
            <button
              key={categoria}
              type="button"
              onClick={() => setActiva(categoria)}
              aria-pressed={seleccionada}
              className={`border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                seleccionada
                  ? "border-brand bg-brand text-board"
                  : "border-line bg-board text-ink-soft hover:border-brand hover:text-brand"
              }`}
            >
              {categoria}
            </button>
          );
        })}
      </div>

      {videosFiltrados.length > 0 ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {videosFiltrados.map((video) => (
            <VideoCard key={`${video.id}-${video.titulo}`} video={video} />
          ))}
        </div>
      ) : (
        <div className="mt-8 border border-line bg-board p-10 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
            No hay videos en esta categoría todavía.
          </p>
        </div>
      )}
    </div>
  );
}