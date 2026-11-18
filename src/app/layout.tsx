import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { goatcounter } from "@/lib/contador";
import RegistroPWA from "@/components/pwa/RegistroPWA";
import AvisoSinConexion from "@/components/pwa/AvisoSinConexion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Título, descripción e imagen que aparecen en Google y al compartir
// el enlace por WhatsApp, Facebook, correo, etc.
// La imagen para compartir es src/app/opengraph-image.jpg y el ícono
// de la pestaña es src/app/icon.png (se reemplazan con el mismo nombre).
export const metadata: Metadata = {
  metadataBase: new URL("https://bylugos.github.io"),
  title: {
    default: "CHIA · Caja de Herramientas para la Integración de Aprendizajes",
    template: "%s · CHIA",
  },
  description:
    "Herramientas digitales, inteligencia artificial, pasatiempos educativos y experiencias docentes para integrar la tecnología en el aula. Educación que conecta.",
  applicationName: "CHIA",
  // iPhone: nombre y aspecto al agregar CHIA a la pantalla de inicio
  appleWebApp: {
    capable: true,
    title: "CHIA",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "CHIA",
  },
};

// Color de la barra del navegador / de la app instalada
export const viewport: Viewport = {
  themeColor: "#1f6f5c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* PWA: instalación y uso sin conexión */}
        <RegistroPWA />
        <AvisoSinConexion />

        {/* Contador de visitas (solo si hay código en src/lib/contador.ts) */}
        {goatcounter && (
          <Script
            data-goatcounter={goatcounter.endpoint}
            src={goatcounter.script}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
