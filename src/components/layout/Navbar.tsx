"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/areas", label: "Áreas" },
  { href: "/universo-ia", label: "Universo IA" },
  { href: "/pasatiempos", label: "Pasatiempos" },
  { href: "/videos", label: "Videos" },
  { href: "/sobre-chia", label: "Sobre CHIA" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-board/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="CHIA - Inicio"
          onClick={() => setAbierto(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center border-2 border-brand bg-brand font-display text-xl font-bold text-board transition-transform group-hover:-rotate-2">
            C
          </div>

          <div className="hidden sm:block">
            <p className="font-display text-xl font-bold tracking-tight text-ink">
              CHIA
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-soft">
              Caja de herramientas
            </p>
          </div>
        </Link>

        {/* Nav de escritorio */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:bg-paper hover:text-brand sm:px-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón hamburguesa, solo móvil */}
        <button
          type="button"
          onClick={() => setAbierto((valor) => !valor)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:bg-paper md:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-ink transition-transform ${
                abierto ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-ink transition-opacity ${
                abierto ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-ink transition-transform ${
                abierto ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Panel de menú móvil desplegable */}
      <nav
        id="menu-movil"
        aria-label="Navegación móvil"
        className={`overflow-hidden border-t border-line bg-board transition-[max-height] duration-300 ease-in-out md:hidden ${
          abierto ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {navigation.map((item) => {
            const activo = pathname === item.href;
            return (
              <li key={item.href} className="border-b border-line last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setAbierto(false)}
                  className={`block py-3 font-mono text-xs uppercase tracking-wide transition-colors ${
                    activo ? "text-brand" : "text-ink-soft hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}