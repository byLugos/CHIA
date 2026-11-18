import type { MetadataRoute } from "next";
import { basePath } from "@/lib/rutas";
import { sitio } from "@/data/sitio";

// Manifiesto de la PWA: nombre, colores e íconos con los que CHIA
// se instala en el celular o el computador.
// Íconos en /public/pwa (para cambiarlos, reemplaza los archivos con el mismo nombre).
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: `${basePath}/`,
    name: `CHIA · ${sitio.nombreCompleto}`,
    short_name: "CHIA",
    description:
      "Herramientas digitales, inteligencia artificial y experiencias docentes para integrar la tecnología en el aula.",
    lang: "es",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    orientation: "any",
    background_color: "#f6f5ee",
    theme_color: "#1f6f5c",
    categories: ["education"],
    icons: [
      { src: `${basePath}/pwa/icono-192.png`, sizes: "192x192", type: "image/png", purpose: "any" },
      { src: `${basePath}/pwa/icono-512.png`, sizes: "512x512", type: "image/png", purpose: "any" },
      { src: `${basePath}/pwa/icono-maskable-512.png`, sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    // Accesos directos al mantener presionado el ícono (Android) o clic derecho (escritorio)
    shortcuts: [
      { name: "Áreas", url: `${basePath}/areas/` },
      { name: "Universo IA", url: `${basePath}/universo-ia/` },
      { name: "Videos", url: `${basePath}/videos/` },
    ],
  };
}
