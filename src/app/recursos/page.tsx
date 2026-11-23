import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import CodigoQR from "@/components/compartir/CodigoQR";
import BotonInstalar from "@/components/pwa/BotonInstalar";
import { enlaceCorreo, sitio } from "@/data/sitio";
import { todasLasHerramientas } from "@/lib/herramientas";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Material de CHIA para llevar: todos los videos para descargar, guías en PDF, códigos QR y la app instalable.",
};

const tarjeta = "flex flex-col border border-line bg-board p-6 lg:p-8";
const eyebrow = "font-mono text-[12px] uppercase tracking-[0.18em] text-brand";
const botonPrincipal =
  "inline-flex items-center gap-2 bg-brand px-5 py-3 font-mono text-xs uppercase tracking-wide text-board transition-colors hover:bg-brand-dark";

export default function RecursosPage() {
  const conGuia = todasLasHerramientas().filter((h) => h.tool.pdf?.archivo || h.tool.pdf?.drive);

  return (
    <PageShell>
      <section className="border-b border-line bg-board">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className={eyebrow}>05 / Recursos</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Recursos
            <br />
            <span className="text-brand">para llevar.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
            Descarga los videos, consulta las guías, comparte CHIA con códigos
            QR o instálala en tu celular o computador.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-16 md:grid-cols-2 lg:px-8 lg:py-20">
        <article className={tarjeta}>
          <p className={eyebrow}>Videos</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink">Todos los videos</h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            La carpeta de Google Drive tiene todos los videos de CHIA. Ábrela y
            pulsa <strong>“Descargar todo”</strong> (arriba a la derecha) para
            bajarlos en un solo archivo. También puedes descargar cada video
            desde la página de su herramienta.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={sitio.carpetaVideosDrive} target="_blank" rel="noreferrer" className={botonPrincipal}>
              <span aria-hidden="true">↓</span> Abrir la carpeta de videos
            </a>
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Ver videos en CHIA →
            </Link>
          </div>
        </article>

        <article className={tarjeta}>
          <p className={eyebrow}>Guías</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink">Guías en PDF</h2>
          {conGuia.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {conGuia.map((h) => (
                <li key={h.href}>
                  <Link href={`${h.href}#guia-pdf`} className="text-sm text-brand underline-offset-4 hover:underline">
                    {h.tool.pdf?.titulo ?? `Guía de ${h.tool.nombre}`}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              Pronto encontrarás aquí las guías de apoyo de cada herramienta,
              para leerlas en línea o descargarlas.
            </p>
          )}
        </article>

        <article className={tarjeta}>
          <p className={eyebrow}>App</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink">Instala CHIA</h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            Instálala en tu celular o computador: queda con su ícono, abre como
            una app y puedes navegarla sin internet (los videos sí necesitan
            conexión). En iPhone: Safari → Compartir → “Agregar a inicio”.
          </p>
          <BotonInstalar className="mt-6 w-fit" />
        </article>

        <article className={tarjeta}>
          <p className={eyebrow}>Contacto</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink">Escríbenos</h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            ¿Tienes una experiencia con alguna herramienta o una sugerencia para
            CHIA? Nos encantaría leerte.
          </p>
          <a href={enlaceCorreo} className={`${botonPrincipal} mt-6 w-fit normal-case tracking-normal`}>
            {sitio.correo}
          </a>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <p className={eyebrow}>Comparte</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Códigos QR</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:max-w-4xl">
          <CodigoQR
            titulo="Sitio web de CHIA"
            descripcion="Escanéalo con la cámara del celular para abrir la caja de herramientas."
            nombreArchivo="qr-sitio-chia.png"
          />
          <CodigoQR
            titulo="Escríbenos"
            descripcion="Abre un correo nuevo dirigido al equipo de CHIA."
            nombreArchivo="qr-correo-chia.png"
            valor={enlaceCorreo}
            textoVisible={sitio.correo}
            textoCompartir={sitio.correo}
          />
        </div>
      </section>
    </PageShell>
  );
}
