import type { NextConfig } from "next";

// El sitio se publica en GitHub Pages: https://bylugos.github.io/RutaTic/
// - output "export": genera HTML estático en la carpeta /out
// - basePath: todas las rutas cuelgan de /RutaTic (también en local:
//   http://localhost:3000/RutaTic)
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
  },
};

export default nextConfig;
