import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/layout/PageShell";
import ToolDetail from "@/components/herramientas/ToolDetail";
import { buscarHerramienta, herramientasDeSeccion } from "@/lib/herramientas";

type Props = { params: Promise<{ herramienta: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return herramientasDeSeccion("pasatiempos").map((h) => ({ herramienta: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const h = buscarHerramienta("pasatiempos", (await params).herramienta);
  if (!h) return {};
  return { title: h.tool.nombre, description: h.tool.descripcion };
}

export default async function HerramientaPasatiempoPage({ params }: Props) {
  const h = buscarHerramienta("pasatiempos", (await params).herramienta);
  if (!h) notFound();

  return (
    <PageShell>
      <ToolDetail herramienta={h} />
    </PageShell>
  );
}
