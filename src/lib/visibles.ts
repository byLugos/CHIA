// Herramientas que se muestran en el sitio.
//
// ─── INTERRUPTOR ─────────────────────────────────────────────────────────
// true  → solo se ven las herramientas que tienen video (para la presentación).
// false → se ven todas las herramientas de src/data.
// Las que se ocultan NO se borran: siguen en src/data y vuelven al poner false.
export const SOLO_CON_VIDEO = true;
// ─────────────────────────────────────────────────────────────────────────
//
// Las páginas usan estas listas en lugar de importar directamente src/data.
// Si un área, subárea o categoría queda sin herramientas, también se oculta.
import { areas as todasLasAreas, type Area, type Tool } from "@/data/areas";
import { categoriasIA as todasLasCategorias, type CategoriaIA } from "@/data/universoIA";
import { pasatiempos as todosLosPasatiempos, type Pasatiempo } from "@/data/pasatiempos";
import { videos } from "@/data/videos";
import { getToolSlug } from "@/lib/slug";

const conVideo = new Set(videos.map((v) => v.herramienta).filter(Boolean));

function visible(tool: Tool): boolean {
  return !SOLO_CON_VIDEO || conVideo.has(getToolSlug(tool));
}

export const areas: Area[] = todasLasAreas
  .map((area) => ({
    ...area,
    herramientas: area.herramientas?.filter(visible),
    subareas: area.subareas
      ?.map((subarea) => ({ ...subarea, herramientas: subarea.herramientas.filter(visible) }))
      .filter((subarea) => subarea.herramientas.length > 0),
  }))
  .filter(
    (area) => (area.herramientas?.length ?? 0) > 0 || (area.subareas?.length ?? 0) > 0,
  );

export const categoriasIA: CategoriaIA[] = todasLasCategorias
  .map((categoria) => ({ ...categoria, herramientas: categoria.herramientas.filter(visible) }))
  .filter((categoria) => categoria.herramientas.length > 0);

export const pasatiempos: Pasatiempo[] = todosLosPasatiempos.filter(visible);

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
