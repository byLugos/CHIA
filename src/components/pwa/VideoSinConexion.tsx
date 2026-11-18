"use client";

import { useConectado } from "@/lib/pwa";

// Se pone encima del reproductor cuando no hay internet, en lugar del
// error del navegador dentro del video.
export default function VideoSinConexion() {
  const conectado = useConectado();
  if (conectado) return null;

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-ink p-6 text-center">
      <span aria-hidden="true" className="font-mono text-3xl text-highlight">
        ▶
      </span>
      <p className="font-mono text-xs uppercase tracking-widest text-board/80">
        Video disponible con conexión
      </p>
      <p className="max-w-xs text-xs leading-5 text-board/60">
        Conéctate a internet para verlo o descárgalo para tenerlo sin conexión.
      </p>
    </div>
  );
}
