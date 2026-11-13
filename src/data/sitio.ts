// Datos generales del sitio. Cambia aquí el correo, la carpeta de Drive,
// los logos o el lema y se actualizan en todas las páginas.
export const sitio = {
  nombre: "CHIA",
  nombreCompleto: "Caja de Herramientas para la Integración de Aprendizajes",
  lema: "Educación que conecta",
  correo: "chiatoolkit@gmail.com",
  // URL pública del sitio (la usa el código QR del sitio)
  url: "https://bylugos.github.io/CHIA/",
  // Carpeta pública de Google Drive con todos los videos
  // (debe estar compartida como "Cualquier persona con el enlace").
  carpetaVideosDrive:
    "https://drive.google.com/drive/folders/159YyBwHpesMaVqBx_g09ME_EgRiU-kax",

  // ─── LOGOS ───────────────────────────────────────────────────────────
  // Para cambiar el logo: reemplaza estos archivos en /public/brand con el
  // mismo nombre, o cambia aquí la ruta. Se usan en menú, portada, pie de
  // página, Sobre CHIA y en el centro de los códigos QR.
  logos: {
    // Símbolo (sol + letras CHIA + libro), PNG con fondo transparente
    simbolo: "/brand/chia-logo.png",
    // Logo completo con el texto "Caja de herramientas...", PNG transparente
    completo: "/brand/chia-logo-completo.png",
    // Versión cuadrada con fondo blanco para el centro del QR
    centroQR: "/brand/qr-centro.png",
  },
  // Los íconos de pestaña y la imagen al compartir en redes NO van aquí:
  // son archivos con nombre fijo en src/app (icon.png, apple-icon.png,
  // opengraph-image.jpg). Reemplázalos con el mismo nombre.
};

export const enlaceCorreo = `mailto:${sitio.correo}?subject=${encodeURIComponent(
  "Contacto CHIA",
)}`;
