import CodigoQR from "@/components/compartir/CodigoQR";
import { enlaceCorreo, sitio } from "@/data/sitio";

// Sección "Comparte CHIA": QR del sitio y QR del correo, listos para descargar
// e imprimir en afiches, presentaciones o guías.
export default function CompartirChia() {
  return (
    <section id="compartir" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
            03 / Comparte CHIA
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Lleva CHIA a tu institución.
          </h2>

          <p className="mt-5 text-base leading-7 text-ink-soft">
            Descarga estos códigos QR para ponerlos en afiches, presentaciones
            o guías. Al escanearlos se abre la página o se escribe un correo al
            equipo de CHIA.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:max-w-4xl">
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
      </div>
    </section>
  );
}
