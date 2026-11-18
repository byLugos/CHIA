"use client";

import { useState } from "react";
import { instalar, useEsIOSSinInstalar, usePuedeInstalar } from "@/lib/pwa";
import { cn } from "@/lib/utils";

// Botón "Instalar CHIA". Solo aparece cuando el navegador permite instalarla
// (y no está instalada ya). En iPhone muestra cómo hacerlo desde Safari.
export default function BotonInstalar({ className }: { className?: string }) {
  const puedeInstalar = usePuedeInstalar();
  const esIOS = useEsIOSSinInstalar();
  const [ayudaIOS, setAyudaIOS] = useState(false);

  if (!puedeInstalar && !esIOS) return null;

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => (puedeInstalar ? instalar() : setAyudaIOS((v) => !v))}
        aria-expanded={esIOS ? ayudaIOS : undefined}
        className="inline-flex items-center gap-2 border border-brand bg-brand px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-board transition-colors hover:bg-brand-dark"
      >
        <span aria-hidden="true">↓</span> Instalar CHIA
      </button>

      {esIOS && ayudaIOS && (
        <p
          role="status"
          className="absolute right-0 top-full z-50 mt-2 w-64 border border-line bg-board p-4 text-left text-xs leading-5 text-ink shadow-[4px_4px_0_var(--color-line)]"
        >
          En Safari, toca <strong>Compartir</strong> (el cuadro con la flecha
          hacia arriba) y luego <strong>“Agregar a inicio”</strong>.
        </p>
      )}
    </div>
  );
}
