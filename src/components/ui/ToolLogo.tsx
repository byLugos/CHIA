import Image from "next/image";
import type { Tool } from "@/data/areas";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/rutas";

interface ToolLogoProps {
  tool: Tool;
  tamano?: "sm" | "md" | "lg";
  className?: string;
}

const tamanos = {
  sm: { caja: "h-10 w-10 p-1.5", px: 28 },
  md: { caja: "h-14 w-14 p-2.5", px: 36 },
  lg: { caja: "h-20 w-20 p-3", px: 56 },
};

// Tiendas de apps: su ícono sería el de la tienda, no el de la herramienta.
const DOMINIOS_SIN_ICONO = ["play.google.com", "apps.apple.com"];

function iconoDelSitio(url: string): string | null {
  if (!url) return null;
  try {
    const dominio = new URL(url).hostname;
    if (DOMINIOS_SIN_ICONO.includes(dominio)) return null;
    return `https://www.google.com/s2/favicons?domain=${dominio}&sz=128`;
  } catch {
    return null;
  }
}

export default function ToolLogo({ tool, tamano = "md", className }: ToolLogoProps) {
  const { caja, px } = tamanos[tamano];
  const fuente = tool.logo ? asset(tool.logo) : iconoDelSitio(tool.url);

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center border border-line bg-white",
        caja,
        className,
      )}
    >
      {fuente ? (
        <Image
          src={fuente}
          alt=""
          width={px}
          height={px}
          className="h-full w-full object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className="font-display text-lg font-bold text-brand"
        >
          {tool.nombre.charAt(0)}
        </span>
      )}
    </div>
  );
}
