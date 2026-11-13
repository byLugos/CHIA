// Prefijo de GitHub Pages (/RutaTic), definido en next.config.ts.
// Los <Link> de Next lo agregan solos, pero las imágenes, PDF y archivos de
// /public NO: por eso se usa asset("/brand/logo.png") → "/RutaTic/brand/logo.png".
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(ruta: string): string {
  if (/^(https?:|data:|blob:)/.test(ruta)) return ruta;
  return `${basePath}${ruta.startsWith("/") ? ruta : `/${ruta}`}`;
}
