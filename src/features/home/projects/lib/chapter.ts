// src/features/home/components/projects/lib/chapter.ts

import type { CollectionEntry } from "astro:content";

import {
  getFeaturedProjects,
  getSiblingProjects,
} from "@/features/home/data/featured-projects";
import { SHOWCASE_SLOTS, type ShowcaseVariant } from "@/utils/showcase";

import type { Lang } from "../data/projects-section";

type Project = CollectionEntry<"projects">;

const BASE_PATH: Record<Lang, string> = {
  pt: "/projetos/",
  en: "/en/projects/",
};

export type Chapter = {
  id: string;
  index: number;
  variant: ShowcaseVariant;
  category: Project["data"]["category"];
  status: Project["data"]["status"];
  title: string;
  headline: string;
  description?: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  images: { src: string; alt: string }[];
  mobile?: string;
  /** Data de lançamento em ISO (YYYY-MM-DD), para o "no ar há X dias". */
  launchDate?: string;
  cta: { href: string; external: boolean };
  siblings: { title: string; href: string }[];
};

/** DD-MM-YYYY -> YYYY-MM-DD */
const toIso = (date: string) => date.split("-").reverse().join("-");

const projectTitle = (entry: Project, lang: Lang) =>
  lang === "en" ? entry.data.presentation.title : entry.data.title;

const projectHref = (entry: Project, lang: Lang) => ({
  href:
    entry.data.kind === "detailed"
      ? `${BASE_PATH[lang]}${entry.id}/`
      : (entry.data.links.liveUrl ?? "#"),
  external: entry.data.kind === "external",
});

function toChapter(
  entry: Project,
  lang: Lang,
  index: number,
  siblings: Project[],
): Chapter {
  const { data } = entry;
  const highlight = data.highlight?.[lang];

  if (!highlight?.outcome || !data.showcase) {
    throw new Error(
      `Projeto "${entry.id}" está em destaque sem highlight (${lang}) ou showcase.`,
    );
  }

  const copy = lang === "en" ? data.presentation : data.apresentacao;
  const slots = SHOWCASE_SLOTS[data.showcase.variant];

  return {
    id: entry.id,
    index,
    variant: data.showcase.variant,
    category: data.category,
    status: data.status,
    title: projectTitle(entry, lang),
    headline: copy.subtitle,
    description: copy.description,
    outcome: highlight.outcome,
    metrics: highlight.metrics,
    stack: data.stack.slice(0, 4),
    images: data.gallery.slice(0, slots).map((image) => ({
      src: image.src,
      alt: image.alt ?? "",
    })),
    mobile: data.thumb.mobile,
    launchDate: data.launchDate ? toIso(data.launchDate) : undefined,
    cta: projectHref(entry, lang),
    siblings: siblings.map((sibling) => ({
      title: projectTitle(sibling, lang),
      href: projectHref(sibling, lang).href,
    })),
  };
}

export async function getChapters(lang: Lang): Promise<Chapter[]> {
  const featured = await getFeaturedProjects();

  return Promise.all(
    featured.map(async (entry, index) =>
      toChapter(entry, lang, index, await getSiblingProjects(entry)),
    ),
  );
}
