"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { asset } from "@/lib/rutas";
import { sitio } from "@/data/sitio";

interface CodigoQRProps {
  titulo: string;
  descripcion: string;
  nombreArchivo: string; // ej: "qr-sitio-chia.png"
  // Texto a codificar. Si se omite, se usa la URL del sitio.
  valor?: string;
  // Texto visible bajo el QR (ej: el correo). Por defecto, el valor codificado.
  textoVisible?: string;
  // Texto que copia/comparte el botón secundario.
  textoCompartir?: string;
}

const COLOR_QR = "#14483d"; // brand-dark
// LOGO del centro: se cambia en src/data/sitio.ts → logos.centroQR
const LOGO = asset(sitio.logos.centroQR);

function cargarImagen(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Genera el QR con corrección de errores alta (H) para poder poner el logo
// en el centro sin que deje de leerse.
async function generarQR(texto: string): Promise<string> {
  const canvas = document.createElement("canvas");
  await QRCode.toCanvas(canvas, texto, {
    errorCorrectionLevel: "H",
    margin: 3,
    width: 900,
    color: { dark: COLOR_QR, light: "#ffffff" },
  });

  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas.toDataURL("image/png");

  try {
    const logo = await cargarImagen(LOGO);
    const lado = canvas.width * 0.22;
    const margen = lado * 0.08;
    const x = (canvas.width - lado) / 2;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.roundRect(x - margen, x - margen, lado + margen * 2, lado + margen * 2, margen * 2);
    ctx.fill();
    ctx.drawImage(logo, x, x, lado, lado);
  } catch {
    // Si el logo no carga, el QR queda sin logo (sigue funcionando)
  }

  return canvas.toDataURL("image/png");
}

export default function CodigoQR({
  titulo,
  descripcion,
  nombreArchivo,
  valor,
  textoVisible,
  textoCompartir,
}: CodigoQRProps) {
  const [imagen, setImagen] = useState<string | null>(null);
  const [texto, setTexto] = useState<string>(valor ?? "");
  const [aviso, setAviso] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;
    const destino = valor ?? (sitio.url || window.location.href);

    generarQR(destino)
      .then((url) => {
        if (cancelado) return;
        setTexto(destino);
        setImagen(url);
      })
      .catch(() => {});

    return () => {
      cancelado = true;
    };
  }, [valor]);

  async function compartir() {
    const contenido = textoCompartir ?? texto;
    try {
      if (navigator.share && !valor) {
        await navigator.share({ title: "CHIA", text: titulo, url: contenido });
        return;
      }
      await navigator.clipboard.writeText(contenido);
      setAviso("¡Copiado!");
      setTimeout(() => setAviso(null), 2000);
    } catch {
      // El usuario canceló o el navegador no lo permite
    }
  }

  const visible = textoVisible ?? texto.replace(/^https?:\/\//, "");

  return (
    <article className="flex flex-col border border-line bg-paper p-6 lg:p-8">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
        {titulo}
      </p>
      <p className="mt-3 min-h-12 text-sm leading-6 text-ink-soft">{descripcion}</p>

      <div className="mx-auto mt-6 w-full max-w-[260px] border border-line bg-white p-3 shadow-[6px_6px_0_var(--color-line)]">
        {imagen ? (
          // eslint-disable-next-line @next/next/no-img-element -- imagen generada en el navegador
          <img src={imagen} alt={`Código QR: ${titulo}`} className="aspect-square w-full" />
        ) : (
          <div className="aspect-square w-full animate-pulse bg-paper" />
        )}
      </div>

      <p className="mt-6 break-all text-center font-mono text-xs text-ink">{visible}</p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <a
          href={imagen ?? undefined}
          download={nombreArchivo}
          aria-disabled={!imagen}
          className="inline-flex items-center gap-2 border border-brand bg-brand px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-board transition-colors hover:bg-brand-dark aria-disabled:pointer-events-none aria-disabled:opacity-50"
        >
          <span aria-hidden="true">↓</span> Descargar QR
        </a>
        <button
          type="button"
          onClick={compartir}
          className="inline-flex items-center gap-2 border border-line bg-board px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-ink transition-colors hover:border-brand hover:text-brand"
        >
          {aviso ?? (valor ? "Copiar" : "Compartir enlace")}
        </button>
      </div>
    </article>
  );
}
