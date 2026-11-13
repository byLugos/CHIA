"use client";

import { useEffect, useState } from "react";
import { goatcounter } from "@/lib/contador";

// Muestra el total de visitas del sitio que lleva GoatCounter.
// Si GoatCounter no está configurado o no responde, no se muestra nada.
export default function ContadorVisitas() {
  const [visitas, setVisitas] = useState<number | null>(null);

  useEffect(() => {
    if (!goatcounter) return;
    const controlador = new AbortController();

    fetch(goatcounter.total, { signal: controlador.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((datos: { count?: string | number } | null) => {
        // GoatCounter devuelve el número con separadores, ej: "1,234"
        const total = Number(String(datos?.count ?? "").replace(/\D/g, ""));
        if (total > 0) setVisitas(total);
      })
      .catch(() => {});

    return () => controlador.abort();
  }, []);

  if (visitas === null) return null;

  return (
    <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-highlight" />
      {visitas.toLocaleString("es-CO")} {visitas === 1 ? "visita" : "visitas"}
    </p>
  );
}
