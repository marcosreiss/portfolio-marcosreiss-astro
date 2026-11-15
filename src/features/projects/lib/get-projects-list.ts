// src/features/projects/lib/get-projects-list.ts

import { getCollection, type CollectionEntry } from "astro:content";

import type { ProjectsLang } from "../data/projects-list";

type Project = CollectionEntry<"projects">;

export type ProjectListItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Project["data"]["category"];
  status: Project["data"]["status"];
  featured: boolean;
  client?: string;
  image: string;
  imageAlt: string;
  stack: string[];
  year?: string;
  href?: string;
  external: boolean;
  searchText: string;
};

function dateValue(value?: string): number {
  if (!value) return 0;

  const [day, month, year] = value.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
}

export async function getProjectsList(
  lang: ProjectsLang,
): Promise<ProjectListItem[]> {
  const entries = await getCollection("projects", ({ data }) => data.published);

  const collator = new Intl.Collator(lang === "en" ? "en" : "pt-BR", {
    sensitivity: "base",
    numeric: true,
  });

  entries.sort((a, b) => {
    return (
      Number(b.data.featured) - Number(a.data.featured) ||
      dateValue(b.data.launchDate ?? b.data.startDate) -
        dateValue(a.data.launchDate ?? a.data.startDate) ||
      collator.compare(a.data.title, b.data.title) ||
      a.id.localeCompare(b.id)
    );
  });

  const base = lang === "en" ? "/en/projects/" : "/projetos/";

  return entries.map(({ id, data }) => {
    const presentation = lang === "en" ? data.presentation : data.apresentacao;

    const title = lang === "en" ? data.presentation.title : data.title;
    const galleryCover = data.gallery[0];

    const external = data.kind === "external";

    const canVisit = data.status === "live" || data.status === "migrating";

    const href = external
      ? canVisit
        ? data.links.liveUrl || undefined
        : undefined
      : `${base}${id}/`;

    return {
      id,
      title,
      subtitle: presentation.subtitle,
      description: presentation.description ?? "",
      category: data.category,
      status: data.status,
      featured: data.featured,
      client: data.client,
      image: data.thumb.desktop || galleryCover?.src || "",
      imageAlt:
        data.thumb.desktop === galleryCover?.src
          ? galleryCover?.alt || title
          : title,
      stack: data.stack,
      year: data.launchDate?.split("-")[2],
      href,
      external,
      searchText: [
        title,
        presentation.subtitle,
        presentation.description,
        data.client,
        ...data.stack,
      ]
        .filter(Boolean)
        .join(" "),
    };
  });
}
