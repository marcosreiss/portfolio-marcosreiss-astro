// src/features/projects/lib/get-project-detail.ts

import type { CollectionEntry } from "astro:content";

import type { ProjectsLang } from "../data/projects-list";
import { getProjectsList } from "./get-projects-list";

type Project = CollectionEntry<"projects">;

export async function getProjectDetail(entry: Project, lang: ProjectsLang) {
  const { data } = entry;

  const title = lang === "en" ? data.presentation.title : data.title;

  const presentation = lang === "en" ? data.presentation : data.apresentacao;

  const caseStudy = data.caseStudy[lang];
  const highlight = data.highlight?.[lang];

  const gallery = data.gallery;
  const cover = gallery[0];

  const coverSrc = cover?.src || data.thumb.desktop;
  const coverAlt = cover?.src ? cover.alt || cover.title || title : title;

  // A primeira imagem já aparece na abertura.
  const remainingImages = cover?.src ? gallery.slice(1) : gallery;

  const canVisit = data.status === "live" || data.status === "migrating";

  const all = await getProjectsList(lang);

  // detailed tem destino interno; external não participa dessa sequência.
  const detailed = all.filter((project) => !project.external);
  const currentIndex = detailed.findIndex((project) => project.id === entry.id);

  const next =
    detailed.length > 1 && currentIndex >= 0
      ? detailed[(currentIndex + 1) % detailed.length]
      : undefined;

  const date = data.launchDate;

  const isoDate = date ? date.split("-").reverse().join("-") : undefined;

  return {
    id: entry.id,
    title,
    presentation,
    caseStudy,
    highlight,
    category: data.category,
    status: data.status,
    client: data.client,
    stack: data.stack,
    launchDate: date?.replaceAll("-", "/"),
    isoDate,
    coverSrc,
    coverAlt,
    images: remainingImages,
    liveUrl: canVisit ? data.links.liveUrl : undefined,
    repoUrl: data.links.repoUrl,
    video: data.video,
    next,
  };
}
