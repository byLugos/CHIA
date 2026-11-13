import Link from "next/link";

interface Miga {
  label: string;
  href?: string;
}

// Ruta de navegación: Áreas / Matemáticas / GeoGebra
export default function Migas({ items }: { items: Miga[] }) {
  return (
    <nav aria-label="Ruta de navegación">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[12px] uppercase tracking-[0.15em]">
        {items.map((item, index) => {
          const ultimo = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !ultimo ? (
                <Link href={item.href} className="text-brand hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink-soft" aria-current={ultimo ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!ultimo && (
                <span aria-hidden="true" className="text-line">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
