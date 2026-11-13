import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import AreasHeader from "@/components/areas/AreasHeader";
import AreaCard from "@/components/areas/AreaCard";

import { areas } from "@/data/areas";

export const metadata: Metadata = {
  title: "Áreas de aprendizaje",
  description:
    "Herramientas digitales organizadas por áreas: Ciencias Sociales, Ciencias Naturales, Español, Inglés, Competencias Comunicativas y Matemáticas.",
};

export default function AreasPage() {
  return (
    <PageShell>
      <AreasHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
