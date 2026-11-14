// src/features/home/data/featured-projects.ts

import { getCollection, type CollectionEntry } from "astro:content";

export const FEATURED_PROJECT_ORDER = [
  "jardim-di-berlim",
  "sindjus-ma",
  "prismaflow",
  "inflow-connect",
] as const;

export async function getFeaturedProjects(): Promise<
  CollectionEntry<"projects">[]
> {
  const entries = await getCollection(
    "projects",
    ({ data }) => data.published && data.featured,
  );

  return FEATURED_PROJECT_ORDER.map((slug) => {
    const entry = entries.find((project) => project.id === slug);

    if (!entry) {
      throw new Error(
        `Projeto em destaque não encontrado ou não publicado: "${slug}"`,
      );
    }

    return entry;
  });
}

/** Outros projetos do mesmo cliente (ex.: CONJUSMA 2025 junto do Sindjus-MA). */
export async function getSiblingProjects(entry: CollectionEntry<"projects">) {
  if (!entry.data.client) return [];

  const all = await getCollection("projects", ({ data }) => data.published);

  return all.filter(
    (project) =>
      project.id !== entry.id && project.data.client === entry.data.client,
  );
}
