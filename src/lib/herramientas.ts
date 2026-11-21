// Índice central de herramientas: une Áreas, Universo IA y Pasatiempos
// para que cada herramienta tenga su propia página y sus videos.
import type { Area, Tool } from "@/data/areas";
import { areas, categoriasIA, pasatiempos } from "@/lib/visibles";
import { getToolSlug, slugify } from "@/lib/slug";
import { videos, type VideoDocente } from "@/data/videos";

export type Seccion = "areas" | "universo-ia" | "pasatiempos";

export type HerramientaUbicada = {
  tool: Tool;
  slug: string;
  seccion: Seccion;
  href: string;
  // Área, categoría IA o "Pasatiempos" a la que pertenece
  grupo: { slug: string; nombre: string; href: string; color?: string };
  // Para áreas con subáreas (ej: Biología dentro de Ciencias Naturales)
  subgrupo?: string;
};

export { getToolSlug, slugify };

export function herramientasDeArea(
  area: Area,
): Array<{ tool: Tool; subarea?: string }> {
  const directas = (area.herramientas ?? []).map((tool) => ({ tool }));
  const deSubareas = (area.subareas ?? []).flatMap((subarea) =>
    subarea.herramientas.map((tool) => ({ tool, subarea: subarea.nombre })),
  );
  return [...directas, ...deSubareas];
}

function construirIndice(): HerramientaUbicada[] {
  const deAreas = areas.flatMap((area) =>
    herramientasDeArea(area).map(({ tool, subarea }) => {
      const slug = getToolSlug(tool);
      return {
        tool,
        slug,
        seccion: "areas" as const,
        href: `/areas/${area.slug}/${slug}`,
        grupo: {
          slug: area.slug,
          nombre: area.nombre,
          href: `/areas/${area.slug}`,
          color: area.color,
        },
        subgrupo: subarea,
      };
    }),
  );

  const deIA = categoriasIA.flatMap((categoria) =>
    categoria.herramientas.map((tool) => {
      const slug = getToolSlug(tool);
      return {
        tool,
        slug,
        seccion: "universo-ia" as const,
        href: `/universo-ia/${slug}`,
        grupo: {
          slug: categoria.slug,
          nombre: categoria.nombre,
          href: `/universo-ia#${categoria.slug}`,
        },
      };
    }),
  );

  const dePasatiempos = pasatiempos.map((tool) => {
    const slug = getToolSlug(tool);
    return {
      tool,
      slug,
      seccion: "pasatiempos" as const,
      href: `/pasatiempos/${slug}`,
      grupo: { slug: "pasatiempos", nombre: "Pasatiempos", href: "/pasatiempos" },
    };
  });

  const todas = [...deAreas, ...deIA, ...dePasatiempos];

  if (process.env.NODE_ENV !== "production") {
    const vistos = new Set<string>();
    for (const h of todas) {
      if (vistos.has(h.slug)) {
        console.warn(
          `[CHIA] Hay dos herramientas con el slug "${h.slug}". ` +
            `Ponle un "slug" distinto a una de ellas en src/data.`,
        );
      }
      vistos.add(h.slug);
    }
  }

  return todas;
}

const indice = construirIndice();

export function todasLasHerramientas(): HerramientaUbicada[] {
  return indice;
}

export function herramientasDeSeccion(seccion: Seccion): HerramientaUbicada[] {
  return indice.filter((h) => h.seccion === seccion);
}

export function buscarHerramienta(
  seccion: Seccion,
  slug: string,
  grupoSlug?: string,
): HerramientaUbicada | undefined {
  return indice.find(
    (h) =>
      h.seccion === seccion &&
      h.slug === slug &&
      (grupoSlug === undefined || h.grupo.slug === grupoSlug),
  );
}

export function buscarHerramientaPorSlug(
  slug: string,
): HerramientaUbicada | undefined {
  return indice.find((h) => h.slug === slug);
}

export function videosDeHerramienta(slug: string): VideoDocente[] {
  return videos.filter((v) => v.herramienta === slug);
}

// Otras herramientas del mismo grupo, para "Más herramientas de…"
export function herramientasRelacionadas(
  actual: HerramientaUbicada,
  limite = 3,
): HerramientaUbicada[] {
  return indice
    .filter(
      (h) =>
        h.seccion === actual.seccion &&
        h.grupo.slug === actual.grupo.slug &&
        h.slug !== actual.slug,
    )
    .slice(0, limite);
}
