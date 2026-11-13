import Link from "next/link";
import Migas from "@/components/ui/Migas";
import ToolLogo from "@/components/ui/ToolLogo";
import ToolCard from "@/components/ui/ToolCard";
import VideoEmbed, { VideoPendiente } from "@/components/ui/VideoEmbed";
import VideoAcciones from "@/components/ui/VideoAcciones";
import VisorPDF from "@/components/herramientas/VisorPDF";
import {
  herramientasRelacionadas,
  videosDeHerramienta,
  type HerramientaUbicada,
} from "@/lib/herramientas";
import { getAreaColor } from "@/lib/colores";
import { claveVideo } from "@/data/videos";
import { sitio } from "@/data/sitio";

const nombreSeccion = {
  areas: { label: "Áreas", href: "/areas" },
  "universo-ia": { label: "Universo IA", href: "/universo-ia" },
  pasatiempos: { label: "Pasatiempos", href: "/pasatiempos" },
};

// Página de una herramienta:
// 1) Video (lo primero que se ve)  2) al lado: descripción y botón a la herramienta
// 3) Guía en PDF  4) Más videos y herramientas relacionadas
export default function ToolDetail({ herramienta }: { herramienta: HerramientaUbicada }) {
  const { tool, seccion, grupo, subgrupo } = herramienta;
  const [videoPrincipal, ...otrosVideos] = videosDeHerramienta(herramienta.slug);
  const relacionadas = herramientasRelacionadas(herramienta);

  const migas =
    seccion === "pasatiempos"
      ? [nombreSeccion.pasatiempos, { label: tool.nombre }]
      : [nombreSeccion[seccion], { label: grupo.nombre, href: grupo.href }, { label: tool.nombre }];

  return (
    <>
      {/* Encabezado */}
      <section className="border-b border-line bg-board">
        {grupo.color && <div className={`h-2 w-full ${getAreaColor(grupo.color)}`} />}

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
          <Migas items={migas} />

          <div className="mt-6 flex items-center gap-5">
            <ToolLogo tool={tool} tamano="lg" />

            <div className="min-w-0">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                {tool.nombre}
              </h1>

              <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.15em] text-brand">
                {[subgrupo ?? (seccion === "pasatiempos" ? null : grupo.nombre), tool.etiqueta]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Video + panel lateral */}
        {/* En celular el orden es: video → panel con el botón → descripción.
            En computador el panel queda a la derecha del video. */}
        <div className="grid items-start gap-6 lg:grid-cols-[1.7fr_1fr]">
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="border border-line bg-board p-2 shadow-[6px_6px_0_var(--color-line)]">
              {videoPrincipal ? (
                <VideoEmbed video={videoPrincipal} />
              ) : (
                <div className="relative aspect-video bg-ink">
                  <VideoPendiente />
                </div>
              )}
            </div>

            {videoPrincipal && (
              <div className="mt-6">
                <h2 className="font-display text-2xl font-bold leading-tight text-ink">
                  {videoPrincipal.titulo}
                </h2>
                {videoPrincipal.docente && (
                  <p className="mt-2 font-mono text-[13px] uppercase tracking-wide text-ink-soft">
                    {videoPrincipal.docente}
                  </p>
                )}
              </div>
            )}
          </div>

          <aside className="border border-line bg-board p-6 lg:sticky lg:top-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:p-8">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
              Sobre la herramienta
            </p>

            <p className="mt-4 text-base leading-7 text-ink-soft">{tool.descripcion}</p>

            {tool.url ? (
              <a
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex w-full items-center justify-between gap-3 bg-brand px-5 py-4 font-mono text-sm uppercase tracking-wide text-board transition-colors hover:bg-brand-dark"
              >
                Ir a {tool.nombre}
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p className="mt-8 border border-dashed border-line px-5 py-4 text-center font-mono text-xs uppercase tracking-widest text-ink-soft">
                Enlace próximamente
              </p>
            )}

            {videoPrincipal && (
              <>
                <div className="my-8 h-px bg-line" />

                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
                  Video
                </p>
                <VideoAcciones video={videoPrincipal} className="mt-4" />
              </>
            )}

            {tool.pdf && (tool.pdf.archivo || tool.pdf.drive) && (
              <a
                href="#guia-pdf"
                className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest text-ink-soft underline-offset-4 hover:text-brand hover:underline"
              >
                Ver guía en PDF ↓
              </a>
            )}
          </aside>

          {videoPrincipal?.descripcion && (
            <p className="text-sm leading-7 text-ink-soft lg:col-start-1 lg:row-start-2">
              {videoPrincipal.descripcion}
            </p>
          )}
        </div>

        {/* Guía en PDF */}
        <div id="guia-pdf" className="mt-16 scroll-mt-28">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
            Material de apoyo
          </p>
          <h2 className="mb-6 mt-3 font-display text-3xl font-bold text-ink">
            Guía en PDF
          </h2>
          <VisorPDF documento={tool.pdf} nombreHerramienta={tool.nombre} />
        </div>

        {/* Más videos de la misma herramienta */}
        {otrosVideos.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-3xl font-bold text-ink">
              Más videos de {tool.nombre}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otrosVideos.map((video) => (
                <article key={claveVideo(video)} className="border border-line bg-board">
                  <VideoEmbed video={video} />
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-ink">{video.titulo}</h3>
                    {video.docente && (
                      <p className="mt-1 font-mono text-[12px] uppercase tracking-wide text-ink-soft">
                        {video.docente}
                      </p>
                    )}
                    <VideoAcciones video={video} className="mt-4" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Relacionadas */}
        {relacionadas.length > 0 && (
          <div className="mt-16 border-t border-line pt-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-3xl font-bold text-ink">
                Más herramientas de {grupo.nombre}
              </h2>
              <Link
                href={grupo.href}
                className="font-mono text-xs uppercase tracking-widest text-brand hover:underline"
              >
                Ver todas →
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relacionadas.map((h) => (
                <ToolCard
                  key={h.href}
                  tool={h.tool}
                  href={h.href}
                  tieneVideo={videosDeHerramienta(h.slug).length > 0}
                />
              ))}
            </div>
          </div>
        )}

        <p className="mt-16 text-center font-mono text-[11px] uppercase tracking-widest text-ink-soft">
          ¿Usas {tool.nombre} en tu clase?{" "}
          <a href={`mailto:${sitio.correo}`} className="text-brand hover:underline">
            Cuéntanos tu experiencia
          </a>
        </p>
      </section>
    </>
  );
}
