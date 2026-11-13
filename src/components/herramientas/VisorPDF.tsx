import type { DocumentoPDF } from "@/data/areas";
import { drive } from "@/lib/media";
import { asset } from "@/lib/rutas";

const boton =
  "inline-flex items-center gap-2 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-colors";

// Lector de PDF dentro de la página.
// - PDF en Drive: se usa el visor de Google (también funciona en celulares).
// - PDF en /public/pdfs: visor del navegador + botones para abrir y descargar.
export default function VisorPDF({
  documento,
  nombreHerramienta,
}: {
  documento?: DocumentoPDF;
  nombreHerramienta: string;
}) {
  const titulo = documento?.titulo ?? `Guía de ${nombreHerramienta}`;

  if (!documento || (!documento.archivo && !documento.drive)) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center gap-3 border border-dashed border-line bg-board/60 p-10 text-center">
        <span aria-hidden="true" className="font-mono text-3xl text-highlight">
          PDF
        </span>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
          Guía en PDF próximamente
        </p>
        <p className="max-w-md text-sm leading-6 text-ink-soft">
          Aquí podrás leer y descargar el material de apoyo de{" "}
          {nombreHerramienta} sin salir de la página.
        </p>
      </div>
    );
  }

  const archivo = documento.archivo ? asset(documento.archivo) : undefined;
  const verUrl = documento.drive ? drive.ver(documento.drive) : archivo!;
  const descargarUrl = documento.drive ? drive.descargar(documento.drive) : archivo!;

  return (
    <div className="border border-line bg-board">
      <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg font-bold text-ink">{titulo}</p>

        <div className="flex flex-wrap gap-2">
          <a
            href={verUrl}
            target="_blank"
            rel="noreferrer"
            className={`${boton} border-line bg-board text-ink hover:border-brand hover:text-brand`}
          >
            Abrir <span aria-hidden="true">↗</span>
          </a>
          <a
            href={descargarUrl}
            download={documento.archivo ? "" : undefined}
            className={`${boton} border-brand bg-brand text-board hover:bg-brand-dark`}
          >
            <span aria-hidden="true">↓</span> Descargar
          </a>
        </div>
      </div>

      {documento.drive ? (
        <iframe
          src={drive.vistaPrevia(documento.drive)}
          title={titulo}
          loading="lazy"
          className="block h-[75vh] min-h-[480px] w-full bg-white"
        />
      ) : (
        <object
          data={archivo}
          type="application/pdf"
          aria-label={titulo}
          className="block h-[75vh] min-h-[480px] w-full bg-white"
        >
          {/* Se muestra si el navegador no puede mostrar PDF (algunos celulares) */}
          <div className="flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
            <p className="text-sm text-ink-soft">
              Tu navegador no puede mostrar el PDF aquí.
            </p>
            <a
              href={archivo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-brand underline"
            >
              Abrir el PDF
            </a>
          </div>
        </object>
      )}
    </div>
  );
}
