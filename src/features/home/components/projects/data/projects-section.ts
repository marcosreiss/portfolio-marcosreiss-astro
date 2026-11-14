// src/features/home/components/projects/data/projects-section.ts

export type Lang = "pt" | "en";

export type ProjectCategory =
  | "web-system"
  | "institutional-site"
  | "landing-page"
  | "saas-platform"
  | "api-integration"
  | "internal-application"
  | "other";

export type ProjectStatus = "live" | "migrating" | "private" | "offline";

export type ProjectsSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  ui: {
    outcome: string;
    sameClient: string;
    viewDetails: string;
    viewLive: string;
    chapter: string;
  };
  categories: Record<ProjectCategory, string>;
  status: Record<ProjectStatus, string>;
};

export const projectsSectionCopy: Record<Lang, ProjectsSectionCopy> = {
  pt: {
    eyebrow: "Projetos em destaque",
    title: "Quatro projetos, quatro problemas diferentes.",
    description:
      "Cada capítulo mostra o que o cliente precisava, o que eu construí e o que mudou.",
    ui: {
      outcome: "Resultado",
      sameClient: "Mesmo cliente",
      viewDetails: "Ver detalhes do projeto",
      viewLive: "Visitar o projeto",
      chapter: "Capítulo",
    },
    categories: {
      "web-system": "Sistema web",
      "institutional-site": "Site institucional",
      "landing-page": "Landing page",
      "saas-platform": "Plataforma SaaS",
      "api-integration": "API e integração",
      "internal-application": "Aplicação interna",
      other: "Projeto",
    },
    status: {
      live: "No ar",
      migrating: "Em migração",
      private: "Acesso restrito",
      offline: "Fora do ar",
    },
  },
  en: {
    eyebrow: "Featured projects",
    title: "Four projects, four different problems.",
    description:
      "Each chapter shows what the client needed, what I built and what changed.",
    ui: {
      outcome: "Outcome",
      sameClient: "Same client",
      viewDetails: "View project details",
      viewLive: "Visit the project",
      chapter: "Chapter",
    },
    categories: {
      "web-system": "Web system",
      "institutional-site": "Corporate website",
      "landing-page": "Landing page",
      "saas-platform": "SaaS platform",
      "api-integration": "API and integration",
      "internal-application": "Internal application",
      other: "Project",
    },
    status: {
      live: "Live",
      migrating: "Migrating",
      private: "Restricted access",
      offline: "Offline",
    },
  },
};
