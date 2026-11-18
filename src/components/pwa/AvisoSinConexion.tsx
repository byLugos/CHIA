"use client";

import { useConectado } from "@/lib/pwa";

// Franja que aparece abajo cuando no hay internet.
export default function AvisoSinConexion() {
  const conectado = useConectado();
  if (conectado) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-dark bg-brand px-6 py-3 text-center font-mono text-[11px] uppercase tracking-widest text-board"
    >
      Sin conexión · Puedes seguir navegando CHIA; los videos necesitan internet
    </div>
  );
}
