"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Cofre from "@/components/tesoros/Cofre";
import IconoTesoroSVG from "@/components/tesoros/IconosTesoros";
import { tesoros, textosTesoros as t } from "@/data/tesoros";

// «Los tesoros de CHIA»: portada interactiva.
// Escena 1: cofre cerrado + bienvenida + botón.
// Escena 2: la tapa se abre y salen los tesoros (cada uno es un enlace).
// Si ya se abrió en esta visita, al volver a la portada aparece abierto.
const CLAVE = "chia-cofre-abierto";

function suscribir() {
  return () => {};
}
function leerYaAbierto() {
  try {
    return sessionStorage.getItem(CLAVE) === "1";
  } catch {
    return false;
  }
}

// Inclinación y altura de cada tesoro en escritorio (forman un arco)
const arco = [
  { giro: "-7deg", alto: "34px" },
  { giro: "-3deg", alto: "8px" },
  { giro: "0deg", alto: "0px" },
  { giro: "3deg", alto: "8px" },
  { giro: "7deg", alto: "34px" },
];

export default function TesorosChia() {
  const yaAbierto = useSyncExternalStore(suscribir, leerYaAbierto, () => false);
  const [abiertoAhora, setAbiertoAhora] = useState(false);
  const abierto = abiertoAhora || yaAbierto;
  const estado = abierto ? "abierta" : "cerrada";

  function abrir() {
    setAbiertoAhora(true);
    try {
      sessionStorage.setItem(CLAVE, "1");
    } catch {}
  }

  return (
    <section
      aria-label="Los tesoros de CHIA"
      data-estado={estado}
      data-instantaneo={yaAbierto && !abiertoAhora ? "true" : undefined}
      className="tesoros-fondo relative overflow-hidden border-b border-line"
    >
      <Decoracion />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-10 pt-10 text-center sm:px-6 lg:pb-14 lg:pt-12">
        {/* Textos: bienvenida ↔ título de los tesoros (misma celda, sin saltos) */}
        <div className="grid w-full max-w-4xl">
          <div
            className={`col-start-1 row-start-1 transition-opacity duration-300 ${abierto ? "pointer-events-none opacity-0" : "opacity-100"}`}
            aria-hidden={abierto}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
              {t.subtituloBienvenida}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">
              {t.bienvenida}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ink-soft sm:text-lg">
              {t.textoBienvenida}
            </p>
          </div>

          {abierto && (
            <div className="col-start-1 row-start-1 self-center">
              <h2 className="tesoros-cinta tesoros-aparecer mx-auto inline-block bg-brand-dark px-10 py-3 font-display text-3xl font-bold text-board shadow-[0_6px_0_#0d302a] sm:px-14 sm:text-4xl lg:text-5xl">
                {t.titulo} <span className="text-highlight">CHIA</span>
              </h2>
              <p
                className="tesoros-aparecer mx-auto mt-5 max-w-xl text-base leading-7 text-ink-soft sm:text-lg"
                style={{ "--retraso": "0.25s" } as React.CSSProperties}
              >
                {t.complemento}
              </p>
            </div>
          )}
        </div>

        {/* Escenario: botón (cerrado) ↔ tesoros (abierto), encima del cofre */}
        <div className="relative z-10 mt-8 grid w-full max-w-5xl">
          <div
            className={`col-start-1 row-start-1 flex items-center justify-center pb-6 transition-opacity duration-300 ${abierto ? "pointer-events-none opacity-0 max-sm:hidden" : "opacity-100 max-sm:pb-2"}`}
          >
            <button
              type="button"
              onClick={abrir}
              aria-expanded={abierto}
              aria-controls="tesoros-lista"
              tabIndex={abierto ? -1 : 0}
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#e9c46a] bg-brand-dark px-7 py-4 font-display text-lg font-bold text-board shadow-[0_6px_0_#0d302a,0_14px_30px_rgb(20_72_61/0.35)] transition hover:-translate-y-0.5 hover:bg-brand active:translate-y-1 active:shadow-[0_2px_0_#0d302a] sm:text-xl"
            >
              <span aria-hidden="true" className="text-highlight transition-transform group-hover:rotate-12">✦</span>
              {t.boton}
            </button>
          </div>

          <nav
            id="tesoros-lista"
            aria-label="Tesoros de CHIA"
            className={`col-start-1 row-start-1 ${abierto ? "" : "invisible max-sm:hidden"}`}
          >
            <ul className="flex flex-wrap items-start justify-center gap-3 sm:gap-4 lg:flex-nowrap">
              {tesoros.map((tesoro, i) => (
                <li
                  key={tesoro.href}
                  className={`w-[30%] sm:w-[18%] lg:mt-[var(--alto)] lg:[rotate:var(--giro)] ${abierto ? "tesoro-entrada" : ""}`}
                  style={{ "--orden": i, "--giro": arco[i]?.giro, "--alto": arco[i]?.alto } as React.CSSProperties}
                >
                  <Link
                    href={tesoro.href}
                    tabIndex={abierto ? 0 : -1}
                    className="group relative flex flex-col items-center rounded-2xl border-2 border-[#d9b45f] bg-gradient-to-b from-[#fffaf0] to-[#f3e1b6] p-2 shadow-[0_5px_0_#b88a34,0_12px_24px_rgb(120_80_20/0.25)] transition duration-200 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-[0_5px_0_#b88a34,0_0_0_4px_rgb(255_215_120/0.6),0_18px_36px_rgb(201_154_46/0.45)] focus-visible:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-highlight sm:p-3"
                  >
                    <span className="block aspect-[6/5] w-full rounded-xl bg-white/50 p-1.5 sm:p-2">
                      <IconoTesoroSVG icono={tesoro.icono} />
                    </span>
                    <span className="mt-2 block w-full rounded-lg border-2 border-[#d9b45f] bg-[#fff4d6] px-1 py-1 font-display text-[11px] font-extrabold uppercase leading-tight tracking-wide text-ink sm:text-sm lg:text-base">
                      {tesoro.titulo}
                    </span>
                    {/* Descripción: siempre visible en celular; al pasar el cursor en computador */}
                    <span className="mt-1.5 block text-[10px] leading-snug text-ink-soft md:hidden">
                      {tesoro.descripcion}
                    </span>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 hidden w-52 -translate-x-1/2 rounded-lg bg-brand-dark px-4 py-3 text-xs leading-5 text-board opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
                    >
                      {tesoro.descripcion}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Cofre */}
        <div className={`relative w-full max-w-3xl sm:-mt-[12%] lg:-mt-[10%] ${abierto ? "-mt-[14%]" : "mt-4"}`}>
          <div aria-hidden="true" className="cofre-luz pointer-events-none absolute inset-x-[-15%] top-[-45%] h-[90%]">
            <div className="cofre-rayos absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgb(255_226_150/0.7),transparent_65%)]" />
          </div>
          <Cofre className={`relative w-full ${abierto ? "" : "cofre-invitar"}`} />
          {abierto && (
            <p
              className="tesoros-aparecer absolute inset-x-0 bottom-[7%] mx-auto w-fit rounded-full border-2 border-[#e9c46a] bg-[#fff4d6] px-4 py-1.5 font-display text-xs font-bold italic text-ink shadow-[0_3px_0_#b88a34] sm:px-6 sm:py-2 sm:text-base"
              style={{ "--retraso": "1.4s" } as React.CSSProperties}
            >
              {t.cinta}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// Detalles del "mapa del tesoro" en el fondo (solo pantallas medianas y grandes)
function Decoracion() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1600 900"
    >
      <path d="M0 120 C 180 60, 260 260, 120 330 S 60 560, 260 640" fill="none" stroke="#c9a46a" strokeWidth="3" strokeDasharray="10 12" opacity="0.5" />
      <path d="M1600 760 C 1430 700, 1380 520, 1500 430 S 1560 220, 1420 120" fill="none" stroke="#c9a46a" strokeWidth="3" strokeDasharray="10 12" opacity="0.5" />
      <g transform="translate(150 230)" opacity="0.55">
        <path d="M0 -26 C 14 -26 22 -16 22 -4 C 22 12 0 32 0 32 C 0 32 -22 12 -22 -4 C -22 -16 -14 -26 0 -26 Z" fill="#c99a2e" />
        <circle cy="-5" r="8" fill="#f8f1e1" />
      </g>
      <g transform="translate(1450 200)" opacity="0.35" stroke="#a8803a" fill="none" strokeWidth="2">
        <circle r="70" />
        <circle r="52" strokeDasharray="4 6" />
        <path d="M0 -95 L12 -12 L95 0 L12 12 L0 95 L-12 12 L-95 0 L-12 -12 Z" fill="#e7c98a" />
      </g>
    </svg>
  );
}
