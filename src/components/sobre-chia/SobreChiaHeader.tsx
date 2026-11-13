import Image from "next/image";
import { proyectoChia } from "@/data/sobreChia";
import { sitio } from "@/data/sitio";
import { asset } from "@/lib/rutas";

export default function SobreChiaHeader() {
  return (
    <section className="border-b border-line bg-board">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-20">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
            Sobre CHIA
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Una caja de herramientas
            <br />
            <span className="text-brand">para aprender.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
            {proyectoChia.nombreCompleto}.
          </p>

          <p className="mt-3 font-display text-xl italic text-brand">
            {sitio.lema}.
          </p>
        </div>

        {/* LOGO: se cambia en src/data/sitio.ts → logos.completo */}
        <Image
          src={asset(sitio.logos.completo)}
          alt="Logo de CHIA: Caja de Herramientas para la Integración de Aprendizajes"
          width={800}
          height={885}
          priority
          sizes="(min-width: 1024px) 400px, 80vw"
          className="mx-auto h-auto w-full max-w-[340px]"
        />
      </div>
    </section>
  );
}
