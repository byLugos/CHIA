import { asset } from "@/lib/rutas";
import { sitio } from "@/data/sitio";

// Cofre / caja de herramientas de CHIA dibujado en SVG.
// Tiene dos tapas: la cerrada (con el logo) y la abierta (interior); el CSS
// de globals.css (.cofre-tapa…) anima el paso de una a otra.
export default function Cofre({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} role="img" aria-label="Caja de herramientas de CHIA">
      <defs>
        <linearGradient id="cofre-madera" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a6438" />
          <stop offset="1" stopColor="#6b4226" />
        </linearGradient>
        <linearGradient id="cofre-madera-tapa" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a86e3f" />
          <stop offset="1" stopColor="#80522d" />
        </linearGradient>
        <linearGradient id="cofre-interior" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7a4d2b" />
          <stop offset="1" stopColor="#4a2e18" />
        </linearGradient>
        <linearGradient id="cofre-oro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3d27a" />
          <stop offset="1" stopColor="#b8862c" />
        </linearGradient>
        <radialGradient id="cofre-brillo-interior" cx="50%" cy="100%" r="70%">
          <stop offset="0" stopColor="#ffe9a8" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffd36b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sombra en el piso */}
      <ellipse cx="300" cy="388" rx="250" ry="10" fill="#6b4a22" opacity="0.18" />

      {/* TAPA ABIERTA (interior de la tapa, se ve detrás de los tesoros) */}
      <g className="cofre-tapa cofre-tapa-abierta">
        <path d="M84 152 L62 34 Q60 12 86 12 L514 12 Q540 12 538 34 L516 152 Z" fill="url(#cofre-interior)" stroke="url(#cofre-oro)" strokeWidth="8" strokeLinejoin="round" />
        <path d="M80 60 H520 M76 100 H524" stroke="#3f2614" strokeWidth="2" opacity="0.5" />
        <rect x="96" y="136" width="44" height="18" rx="3" fill="url(#cofre-oro)" />
        <rect x="460" y="136" width="44" height="18" rx="3" fill="url(#cofre-oro)" />
      </g>

      {/* interior de la caja, con la luz */}
      <path d="M84 152 H516 L560 192 H40 Z" fill="#3a2414" />
      <path d="M84 152 H516 L560 192 H40 Z" fill="url(#cofre-brillo-interior)" className="cofre-luz" />

      {/* CUERPO */}
      <rect x="40" y="190" width="520" height="192" rx="14" fill="url(#cofre-madera)" />
      <path d="M40 252 H560 M40 318 H560" stroke="#4f2f19" strokeWidth="3" opacity="0.45" />
      <path d="M40 254 H560 M40 320 H560" stroke="#b9804c" strokeWidth="1.5" opacity="0.5" />
      <rect x="40" y="188" width="520" height="12" rx="4" fill="url(#cofre-oro)" />
      {/* esquineras doradas */}
      <path d="M40 228 V204 Q40 196 48 196 H76 V210 H54 V228 Z" fill="url(#cofre-oro)" />
      <path d="M560 228 V204 Q560 196 552 196 H524 V210 H546 V228 Z" fill="url(#cofre-oro)" />
      <path d="M40 344 V368 Q40 382 54 382 H80 V368 H54 V344 Z" fill="url(#cofre-oro)" />
      <path d="M560 344 V368 Q560 382 546 382 H520 V368 H546 V344 Z" fill="url(#cofre-oro)" />
      {/* cerradura con herramientas cruzadas */}
      <path d="M252 200 H348 V250 Q348 282 300 296 Q252 282 252 250 Z" fill="#3a3530" stroke="url(#cofre-oro)" strokeWidth="6" />
      <circle cx="266" cy="214" r="4" fill="url(#cofre-oro)" />
      <circle cx="334" cy="214" r="4" fill="url(#cofre-oro)" />
      <g stroke="url(#cofre-oro)" strokeWidth="7" strokeLinecap="round">
        <path d="M282 230 L318 266" />
        <path d="M318 230 L282 266" />
      </g>
      <circle cx="279" cy="227" r="8" fill="none" stroke="url(#cofre-oro)" strokeWidth="5" />
      <rect x="312" y="222" width="12" height="10" rx="2" fill="url(#cofre-oro)" />

      {/* TAPA CERRADA (con el logo de CHIA) */}
      <g className="cofre-tapa cofre-tapa-cerrada">
        <path d="M40 196 V122 Q40 70 100 70 H500 Q560 70 560 122 V196 Z" fill="url(#cofre-madera-tapa)" />
        <path d="M44 120 H556" stroke="#5c3a1f" strokeWidth="2" opacity="0.4" />
        <rect x="40" y="182" width="520" height="14" rx="4" fill="url(#cofre-oro)" />
        <path d="M70 72 V196 M530 72 V196" stroke="url(#cofre-oro)" strokeWidth="14" />
        {/* placa con el logo — LOGO: src/data/sitio.ts → logos.simbolo */}
        <rect x="222" y="84" width="156" height="92" rx="12" fill="#fbf4e2" stroke="url(#cofre-oro)" strokeWidth="6" />
        <image
          href={asset(sitio.logos.simbolo)}
          x="232"
          y="90"
          width="136"
          height="80"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>
  );
}
