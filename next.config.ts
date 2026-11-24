import type { NextConfig } from "next";

// El sitio se publica en GitHub Pages: https://bylugos.github.io/CHIA/
// - output "export": genera HTML estático en la carpeta /out
// - basePath: todas las rutas cuelgan de /CHIA (también en local:
//   http://localhost:3000/CHIA)
// Si algún día cambias de repositorio o de dominio, solo cambia BASE_PATH.
const BASE_PATH = "/CHIA";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: BASE_PATH,
  trailingSlash: true,
  images: {
    // GitHub Pages no tiene servidor para optimizar imágenes
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
    // Fecha de publicación: aparece en el pie de página para comparar que la
    // app instalada y el sitio estén en la misma versión
    NEXT_PUBLIC_VERSION: new Date().toISOString(),
  },
};

export default nextConfig;
