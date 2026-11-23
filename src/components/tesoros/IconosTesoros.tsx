import type { IconoTesoro } from "@/data/tesoros";

// Ilustraciones de los tesoros (SVG dibujado a mano, sin imágenes externas).
// Paleta: azul petróleo de CHIA, dorado y madera.

function Areas() {
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="ic-globo" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#7cc4e4" />
          <stop offset="1" stopColor="#1f5f8a" />
        </radialGradient>
      </defs>
      {/* libros */}
      <rect x="10" y="74" width="62" height="14" rx="2" fill="#c99a2e" />
      <rect x="10" y="74" width="62" height="3" fill="#e3bd5c" />
      <rect x="14" y="60" width="56" height="14" rx="2" fill="#1f5f8a" />
      <rect x="14" y="60" width="56" height="3" fill="#3f86b5" />
      <rect x="18" y="62.5" width="2" height="9" fill="#e3bd5c" />
      <rect x="64" y="62.5" width="2" height="9" fill="#e3bd5c" />
      {/* lápices */}
      <rect x="20" y="40" width="16" height="20" rx="2" fill="#2f4d6b" />
      <rect x="23" y="26" width="3" height="16" fill="#e2704f" />
      <rect x="28" y="22" width="3" height="20" fill="#c99a2e" />
      <rect x="32" y="28" width="3" height="14" fill="#2f7355" />
      <path d="M23 26 l1.5 -4 1.5 4z M28 22 l1.5 -4 1.5 4z M32 28 l1.5 -4 1.5 4z" fill="#3b2a1a" />
      {/* globo terráqueo */}
      <rect x="84" y="86" width="22" height="4" rx="2" fill="#6b4226" />
      <rect x="93" y="72" width="4" height="15" fill="#6b4226" />
      <path d="M78 38 a20 20 0 0 0 34 18" fill="none" stroke="#c99a2e" strokeWidth="3" strokeLinecap="round" />
      <circle cx="95" cy="42" r="18" fill="url(#ic-globo)" />
      <path d="M86 32 q6 -4 9 2 q-2 6 -8 6 q-4 -3 -1 -8z M98 44 q6 -2 8 4 q-3 7 -9 6 q-2 -5 1 -10z M90 50 q3 0 3 4 q-3 2 -5 -1z" fill="#5fae6a" />
    </svg>
  );
}

function IA() {
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true" className="h-full w-full">
      <defs>
        <linearGradient id="ic-ia-fondo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b2a5e" />
          <stop offset="1" stopColor="#3a1f6b" />
        </linearGradient>
        <filter id="ic-ia-brillo" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="8" y="4" width="104" height="92" rx="14" fill="url(#ic-ia-fondo)" />
      {[[20, 18], [98, 22], [16, 78], [102, 80], [60, 10], [30, 50], [92, 52]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="#bfe8ff" opacity="0.8" />
      ))}
      <g filter="url(#ic-ia-brillo)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* hemisferio izquierdo */}
        <path d="M58 22 c-10 -6 -22 0 -22 10 c-8 2 -10 12 -4 18 c-6 6 -2 16 6 17 c2 8 12 12 20 6 z" stroke="#4fd8ff" strokeWidth="2.5" />
        {/* hemisferio derecho */}
        <path d="M62 22 c10 -6 22 0 22 10 c8 2 10 12 4 18 c6 6 2 16 -6 17 c-2 8 -12 12 -20 6 z" stroke="#b67cff" strokeWidth="2.5" />
        <path d="M44 36 h8 v8 M40 58 h10 M76 36 h-8 v8 M80 58 h-10" stroke="#9fe9ff" strokeWidth="1.6" />
      </g>
      <rect x="48" y="40" width="24" height="18" rx="4" fill="#0f1a3d" stroke="#4fd8ff" strokeWidth="2" />
      <text x="60" y="53.5" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="11" fill="#e8f8ff">IA</text>
      <path d="M60 73 v12 M54 85 h12" stroke="#7fdcff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const pieza =
  "M0 0 h12 a6 6 0 1 1 12 0 h12 v12 a6 6 0 1 0 0 12 v12 h-12 a6 6 0 1 1 -12 0 h-12 v-12 a6 6 0 1 0 0 -12 z";

function Pasatiempos() {
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true" className="h-full w-full">
      {/* crucigrama */}
      <g transform="translate(66 14) rotate(8)">
        <rect width="42" height="42" fill="#fffaf0" stroke="#3b3b3b" strokeWidth="1.5" />
        {[0, 1, 2, 3].map((f) =>
          [0, 1, 2, 3].map((c) => (
            <rect
              key={`${f}${c}`}
              x={c * 10.5}
              y={f * 10.5}
              width="10.5"
              height="10.5"
              fill={(f + c * 3) % 5 === 0 ? "#2b2b2b" : "none"}
              stroke="#3b3b3b"
              strokeWidth="0.8"
            />
          )),
        )}
      </g>
      {/* piezas de rompecabezas */}
      <path d={pieza} transform="translate(10 40) rotate(-12) scale(0.9)" fill="#3f86b5" stroke="#1f5f8a" strokeWidth="1.5" />
      <path d={pieza} transform="translate(34 12) rotate(10) scale(0.85)" fill="#e3b445" stroke="#b08024" strokeWidth="1.5" />
      <path d={pieza} transform="translate(30 58) rotate(-4) scale(0.8)" fill="#e3b445" stroke="#b08024" strokeWidth="1.5" />
      {/* peón de ajedrez */}
      <g fill="#d4a53a" stroke="#9c7420" strokeWidth="1.2">
        <circle cx="74" cy="60" r="7" />
        <path d="M68 68 h12 l3 16 h-18 z" />
        <rect x="62" y="84" width="24" height="6" rx="2" />
      </g>
      {/* lápiz */}
      <g transform="translate(88 56) rotate(35)">
        <rect width="6" height="34" fill="#e3b445" stroke="#9c7420" strokeWidth="1" />
        <path d="M0 34 l3 7 3 -7z" fill="#3b2a1a" />
        <rect y="-4" width="6" height="4" fill="#e2704f" />
      </g>
    </svg>
  );
}

function Videos() {
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true" className="h-full w-full">
      {/* claqueta */}
      <g transform="rotate(-10 20 30)">
        <rect x="14" y="20" width="84" height="16" rx="2" fill="#2b3440" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${20 + i * 16} 20 h8 l-6 16 h-8 z`} fill="#f2f2f2" />
        ))}
      </g>
      <rect x="14" y="38" width="88" height="54" rx="4" fill="#2b3440" />
      <rect x="20" y="44" width="76" height="42" rx="3" fill="#4a5a6c" />
      <rect x="20" y="44" width="76" height="42" rx="3" fill="url(#ic-video-brillo)" />
      <defs>
        <linearGradient id="ic-video-brillo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M52 54 l20 11 -20 11 z" fill="#f6f5ee" />
    </svg>
  );
}

function Recursos() {
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true" className="h-full w-full">
      {/* documentos */}
      <g transform="rotate(-8 40 30)">
        <rect x="26" y="10" width="34" height="28" rx="2" fill="#dfe9f2" stroke="#4a6a8a" strokeWidth="1.5" />
        <path d="M30 32 l8 -10 6 7 4 -4 8 7z" fill="#6aa5d0" />
        <circle cx="52" cy="17" r="3" fill="#e3b445" />
      </g>
      <g transform="rotate(10 80 30)">
        <rect x="62" y="8" width="32" height="40" rx="2" fill="#ffffff" stroke="#8a8a8a" strokeWidth="1.2" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="67" y={15 + i * 6} width={i === 4 ? 14 : 22} height="2" fill="#a9b4bf" />
        ))}
      </g>
      {/* carpeta */}
      <path d="M8 36 h30 l6 7 h50 a4 4 0 0 1 4 4 v39 a4 4 0 0 1 -4 4 h-82 a4 4 0 0 1 -4 -4 z" fill="#d4a53a" />
      <path d="M8 50 h90 v36 a4 4 0 0 1 -4 4 h-82 a4 4 0 0 1 -4 -4 z" fill="#e8bd55" />
      {/* engranaje */}
      <g transform="translate(96 76)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <rect key={a} x="-3.5" y="-17" width="7" height="8" rx="1.5" fill="#1f4f6e" transform={`rotate(${a})`} />
        ))}
        <circle r="12" fill="#1f4f6e" />
        <circle r="5" fill="#e8bd55" />
      </g>
    </svg>
  );
}

const iconos: Record<IconoTesoro, () => React.JSX.Element> = {
  areas: Areas,
  ia: IA,
  pasatiempos: Pasatiempos,
  videos: Videos,
  recursos: Recursos,
};

export default function IconoTesoroSVG({ icono }: { icono: IconoTesoro }) {
  const Icono = iconos[icono];
  return <Icono />;
}
