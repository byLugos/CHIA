"use client";

import { useEffect } from "react";
import { basePath } from "@/lib/rutas";

// Activa el service worker (lo que permite instalar CHIA y usarla sin internet).
// Solo en el sitio publicado: en `npm run dev` no se activa para no guardar
// copias viejas mientras programas.
export default function RegistroPWA() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker
      .register(`${basePath}/sw.js`, { scope: `${basePath}/` })
      .catch(() => {});
  }, []);

  return null;
}
