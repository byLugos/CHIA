import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/layout/PageShell";
import ToolDetail from "@/components/herramientas/ToolDetail";
import { buscarHerramienta, herramientasDeSeccion } from "@/lib/herramientas";

type Props = { params: Promise<{ area: string; herramienta: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return herramientasDeSeccion("areas").map((h) => ({
    area: h.grupo.slug,
    herramienta: h.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area, herramienta } = await params;
  const h = buscarHerramienta("areas", herramienta, area);
  if (!h) return {};
  return { title: `${h.tool.nombre} · ${h.grupo.nombre}`, description: h.tool.descripcion };
}

export default async function HerramientaAreaPage({ params }: Props) {
  const { area, herramienta } = await params;
  const h = buscarHerramienta("areas", herramienta, area);
  if (!h) notFound();

  return (
    <PageShell>
      <ToolDetail herramienta={h} />
    </PageShell>
  );
}
