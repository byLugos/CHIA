import Image from "next/image";
import Link from "next/link";
import ContadorVisitas from "@/components/layout/ContadorVisitas";
import { enlaceCorreo, sitio } from "@/data/sitio";
import { asset } from "@/lib/rutas";

// Fecha y hora de la publicación (hora de Colombia), definida en next.config.ts
const versionPublicada = process.env.NEXT_PUBLIC_VERSION
  ? new Intl.DateTimeFormat("es-CO", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Bogota",
    }).format(new Date(process.env.NEXT_PUBLIC_VERSION))
  : null;

export default function Footer() {
  return (
    <footer className="border-t border-line bg-board">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          {/* LOGO: se cambia en src/data/sitio.ts → logos.simbolo */}
          <Image
            src={asset(sitio.logos.simbolo)}
            alt=""
            width={80}
            height={71}
            className="h-16 w-auto shrink-0"
          />

          <div>
            <Link href="/" className="font-display text-2xl font-bold text-brand">
              CHIA
            </Link>

            <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">
              Caja de Herramientas para la Integración de Aprendizajes.
              Recursos digitales para fortalecer las competencias digitales
              docentes.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-widest">
              <a href={enlaceCorreo} className="text-brand normal-case tracking-normal hover:underline">
                {sitio.correo}
              </a>
              <Link href="/sobre-chia#compartir" className="text-ink-soft hover:text-brand">
                Compartir CHIA (QR)
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-left lg:items-end lg:text-right">
          <ContadorVisitas />

          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
            Diseño de una estrategia tecno-pedagógica
          </p>

          <p className="text-xs text-ink-soft">
            Proyecto CHIA · {sitio.lema} · 2026
          </p>

          {versionPublicada && (
            <p className="font-mono text-[10px] text-ink-soft/80">
              Versión del {versionPublicada}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
