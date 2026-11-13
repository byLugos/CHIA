import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

import SobreChiaHeader from "@/components/sobre-chia/SobreChiaHeader";
import ProyectoChia from "@/components/sobre-chia/ProyectoChia";
import DocentesChia from "@/components/sobre-chia/DocentesChia";
import CompartirChia from "@/components/compartir/CompartirChia";

export const metadata: Metadata = {
  title: "Sobre CHIA",
  description:
    "Conoce el proyecto CHIA, el equipo docente detrás de la caja de herramientas y descarga los códigos QR para compartirla.",
};

export default function SobreChiaPage() {
  return (
    <PageShell>
      <SobreChiaHeader />
      <ProyectoChia />
      <DocentesChia />
      <CompartirChia />
    </PageShell>
  );
}
