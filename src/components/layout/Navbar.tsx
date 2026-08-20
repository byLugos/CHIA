import Link from "next/link";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/areas", label: "Áreas" },
  { href: "/universo-ia", label: "Universo IA" },
  { href: "/pasatiempos", label: "Pasatiempos" },
  { href: "/videos", label: "Videos" },
  { href: "/sobre-chia", label: "Sobre CHIA" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-board/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="CHIA - Inicio"
        >
          <div className="flex h-11 w-11 items-center justify-center border-2 border-brand bg-brand font-display text-xl font-bold text-board transition-transform group-hover:-rotate-2">
            C
          </div>

          <div className="hidden sm:block">
            <p className="font-display text-xl font-bold tracking-tight text-ink">
              CHIA
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-soft">
              Caja de herramientas
            </p>
          </div>
        </Link>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:bg-paper hover:text-brand sm:px-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}