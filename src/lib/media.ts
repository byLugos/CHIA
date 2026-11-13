// Utilidades para YouTube y Google Drive.
// Todas aceptan tanto el id como el enlace completo, así puedes pegar
// directamente el link que copias del navegador o del botón "Compartir".

export function extraerIdYoutube(valor: string): string {
  const texto = valor.trim();
  const patrones = [
    /youtu\.be\/([\w-]{6,})/,
    /[?&]v=([\w-]{6,})/,
    /youtube\.com\/(?:embed|shorts|live)\/([\w-]{6,})/,
  ];
  for (const patron of patrones) {
    const coincidencia = texto.match(patron);
    if (coincidencia) return coincidencia[1];
  }
  return texto;
}

export function extraerIdDrive(valor: string): string {
  const texto = valor.trim();
  const coincidencia =
    texto.match(/\/d\/([\w-]{10,})/) ?? texto.match(/[?&]id=([\w-]{10,})/);
  return coincidencia ? coincidencia[1] : texto;
}

export const youtube = {
  embed: (valor: string) =>
    `https://www.youtube-nocookie.com/embed/${extraerIdYoutube(valor)}?rel=0`,
  ver: (valor: string) =>
    `https://www.youtube.com/watch?v=${extraerIdYoutube(valor)}`,
};

export const drive = {
  // Reproductor / visor embebido de Drive (funciona para videos y PDF)
  vistaPrevia: (valor: string) =>
    `https://drive.google.com/file/d/${extraerIdDrive(valor)}/preview`,
  // Abre el archivo en Drive (desde ahí también se puede descargar)
  ver: (valor: string) =>
    `https://drive.google.com/file/d/${extraerIdDrive(valor)}/view`,
  // Descarga directa del archivo
  descargar: (valor: string) =>
    `https://drive.google.com/uc?export=download&id=${extraerIdDrive(valor)}`,
};
