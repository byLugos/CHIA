"use client";

import { useEffect, useState } from "react";
import { basePath } from "@/lib/rutas";

// Activa el service worker (instalar CHIA y usarla sin internet) y mantiene
// la app instalada en la MISMA versión que el sitio publicado:
// - busca versión nueva al abrir, al volver a la app y cada 30 minutos;
// - cuando llega una versión nueva: si la app está en segundo plano se
//   recarga sola; si la estás usando, aparece el aviso "Actualizar".
// Solo en el sitio publicado: en `npm run dev` no se activa.
const CADA_30_MIN = 30 * 60 * 1000;

export default function RegistroPWA() {
  const [hayNueva, setHayNueva] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;

    let registro: ServiceWorkerRegistration | undefined;
    // Si no había service worker antes, es la primera instalación: no es una "versión nueva"
    const yaHabia = Boolean(navigator.serviceWorker.controller);
    const buscarVersion = () => registro?.update().catch(() => {});

    const alLlegarVersion = () => {
      if (!yaHabia) return;
      if (document.visibilityState === "hidden") window.location.reload();
      else setHayNueva(true);
    };
    const alVolver = () => {
      if (document.visibilityState === "visible") buscarVersion();
    };

    navigator.serviceWorker.addEventListener("controllerchange", alLlegarVersion);
    document.addEventListener("visibilitychange", alVolver);
    window.addEventListener("online", buscarVersion);
    const intervalo = window.setInterval(buscarVersion, CADA_30_MIN);

    navigator.serviceWorker
      .register(`${basePath}/sw.js`, { scope: `${basePath}/`, updateViaCache: "none" })
      .then((r) => {
        registro = r;
        buscarVersion();
      })
      .catch(() => {});

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", alLlegarVersion);
      document.removeEventListener("visibilitychange", alVolver);
      window.removeEventListener("online", buscarVersion);
      window.clearInterval(intervalo);
    };
  }, []);

  if (!hayNueva) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-4 bottom-16 z-50 mx-auto flex max-w-md items-center justify-between gap-4 border border-brand-dark bg-board px-5 py-4 shadow-[6px_6px_0_var(--color-line)]"
    >
      <p className="text-sm text-ink">Hay una versión nueva de CHIA.</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="shrink-0 bg-brand px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-board transition-colors hover:bg-brand-dark"
      >
        Actualizar
      </button>
    </div>
  );
}
