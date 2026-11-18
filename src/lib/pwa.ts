"use client";

import { useSyncExternalStore } from "react";

// ¿Hay conexión a internet? Se actualiza solo cuando cambia.
function suscribirConexion(avisar: () => void) {
  window.addEventListener("online", avisar);
  window.addEventListener("offline", avisar);
  return () => {
    window.removeEventListener("online", avisar);
    window.removeEventListener("offline", avisar);
  };
}

export function useConectado(): boolean {
  return useSyncExternalStore(
    suscribirConexion,
    () => navigator.onLine,
    () => true, // en el HTML generado se asume que hay conexión
  );
}

// ─── Instalación ──────────────────────────────────────────────────────────
// Chrome, Edge y Android avisan con "beforeinstallprompt" que CHIA se puede
// instalar. Se guarda ese aviso para mostrar el botón "Instalar CHIA".
type AvisoInstalacion = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

let avisoGuardado: AvisoInstalacion | null = null;
const oyentes = new Set<() => void>();
const avisarCambio = () => oyentes.forEach((oyente) => oyente());

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (evento) => {
    evento.preventDefault(); // no mostrar el aviso automático del navegador
    avisoGuardado = evento as AvisoInstalacion;
    avisarCambio();
  });
  window.addEventListener("appinstalled", () => {
    avisoGuardado = null;
    avisarCambio();
  });
}

function suscribirInstalacion(avisar: () => void) {
  oyentes.add(avisar);
  return () => {
    oyentes.delete(avisar);
  };
}

export function usePuedeInstalar(): boolean {
  return useSyncExternalStore(
    suscribirInstalacion,
    () => avisoGuardado !== null,
    () => false,
  );
}

export async function instalar(): Promise<boolean> {
  if (!avisoGuardado) return false;
  await avisoGuardado.prompt();
  const { outcome } = await avisoGuardado.userChoice;
  avisoGuardado = null;
  avisarCambio();
  return outcome === "accepted";
}

// iPhone/iPad: Safari no tiene botón de instalar; se hace desde Compartir.
function suscribirNada() {
  return () => {};
}

export function useEsIOSSinInstalar(): boolean {
  return useSyncExternalStore(
    suscribirNada,
    () => {
      const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
      const instalada =
        window.matchMedia("(display-mode: standalone)").matches ||
        (navigator as Navigator & { standalone?: boolean }).standalone === true;
      return ios && !instalada;
    },
    () => false,
  );
}
