import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageShell from "@/components/layout/PageShell";
import AreaDetalleHeader from "@/components/areas/AreaDetalleHeader";
import AreaHerramientas from "@/components/areas/AreaHerramientas";

import { areas, getAreaBySlug } from "@/lib/visibles";

type Props = { params: Promise<{ area: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getAreaBySlug((await params).area);
  if (!area) return {};
  return { title: area.nombre, description: area.resumen };
}

export default async function AreaPage({ params }: Props) {
  const area = getAreaBySlug((await params).area);
  if (!area) notFound();

  const otrasAreas = areas.filter((a) => a.slug !== area.slug);

  return (
    <PageShell>
      <AreaDetalleHeader area={area} />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <AreaHerramientas area={area} />

        <nav aria-label="Otras áreas" className="mt-20 border-t border-line pt-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
            Otras áreas
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {otrasAreas.map((otra) => (
              <li key={otra.slug}>
                <Link
                  href={`/areas/${otra.slug}`}
                  className="block border border-line bg-board px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:border-brand hover:text-brand"
                >
                  {otra.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </PageShell>
  );
}
