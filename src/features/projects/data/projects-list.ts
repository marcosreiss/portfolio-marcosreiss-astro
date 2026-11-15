// src/features/projects/data/projects-list.ts

import type { CollectionEntry } from "astro:content";

export type ProjectsLang = "pt" | "en";
export type ProjectCategory = CollectionEntry<"projects">["data"]["category"];

export const projectsListCopy = {
  pt: {
    title: "Projetos",
    description:
      "Sistemas, sites e experiências digitais construídos para necessidades reais de negócio.",
    eyebrow: "Trabalhos selecionados",
    heading: "Cada projeto começa com um problema diferente.",
    introduction:
      "Explore as entregas, os contextos e as soluções que fizeram parte do meu trabalho.",
    all: "Todas as categorias",
    category: "Categoria",
    search: "Buscar projetos",
    placeholder: "Nome, cliente ou tecnologia",
    results: "projetos encontrados",
    initialResults: "projetos publicados",
    clear: "Limpar filtros",
    empty: "Nenhum projeto corresponde à sua busca.",
    emptyHint: "Experimente outro termo ou selecione todas as categorias.",
    noProjects: "Novos projetos serão apresentados por aqui.",
    featured: "Destaque",
    details: "Conhecer o projeto",
    external: "Visitar o site",
    unavailable: "Acesso externo indisponível",
    imageFallback: "Apresentação do projeto",
    categories: {
      "web-system": "Sistemas web",
      "institutional-site": "Sites institucionais",
      "landing-page": "Landing pages",
      "saas-platform": "Plataformas SaaS",
      "api-integration": "APIs e integrações",
      "internal-application": "Aplicações internas",
      other: "Outros projetos",
    },
    status: {
      live: "No ar",
      migrating: "Em migração",
      private: "Acesso restrito",
      offline: "Fora do ar",
    },
  },

  en: {
    title: "Projects",
    description:
      "Systems, websites and digital experiences built for real business needs.",
    eyebrow: "Selected work",
    heading: "Every project starts with a different problem.",
    introduction:
      "Explore the work, the context and the solutions behind the projects.",
    all: "All categories",
    category: "Category",
    search: "Search projects",
    placeholder: "Name, client or technology",
    results: "projects found",
    initialResults: "published projects",
    clear: "Clear filters",
    empty: "No projects match your search.",
    emptyHint: "Try another term or select all categories.",
    noProjects: "New projects will be presented here.",
    featured: "Featured",
    details: "Explore the project",
    external: "Visit the website",
    unavailable: "External access unavailable",
    imageFallback: "Project preview",
    categories: {
      "web-system": "Web systems",
      "institutional-site": "Business websites",
      "landing-page": "Landing pages",
      "saas-platform": "SaaS platforms",
      "api-integration": "APIs and integrations",
      "internal-application": "Internal applications",
      other: "Other projects",
    },
    status: {
      live: "Live",
      migrating: "Migrating",
      private: "Restricted access",
      offline: "Offline",
    },
  },
};
