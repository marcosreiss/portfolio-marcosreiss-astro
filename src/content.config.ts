// src/content.config.ts

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { isValidDateString, isDateBefore } from "./utils/date";
import { SHOWCASE_SLOTS, SHOWCASE_VARIANTS } from "./utils/showcase";

const dateSchema = z.string().refine(isValidDateString, {
  message: "Informe uma data válida no formato DD-MM-YYYY.",
});

const localizedCaseSchema = z.object({
  context: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  role: z.string().optional(),
  features: z.array(z.string()).default([]),
  architecture: z.string().optional(),
  challenges: z.array(z.string()).default([]),
  results: z.array(z.string()).default([]),
});

// Resultado curto usado nos capítulos da Home (a participação continua em caseStudy.role)
const localizedHighlightSchema = z.object({
  outcome: z.string().default(""),
  metrics: z
    .array(
      z.object({
        value: z.string().min(1),
        label: z.string().min(1),
      }),
    )
    .max(3)
    .default([]),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),
  schema: z
    .object({
      title: z.string().min(1),
      kind: z.enum(["external", "detailed"]),
      category: z
        .enum([
          "web-system",
          "institutional-site",
          "landing-page",
          "saas-platform",
          "api-integration",
          "internal-application",
          "other",
        ])
        .default("other"),
      client: z.string().optional(),

      // Conteúdo principal em português.
      apresentacao: z.object({
        subtitle: z.string().min(1),
        description: z.string().optional(),
      }),

      // Conteúdo principal em inglês.
      presentation: z.object({
        title: z.string().min(1),
        subtitle: z.string().min(1),
        description: z.string().optional(),
      }),

      // Narrativa do case localizada por idioma.
      caseStudy: z
        .object({
          pt: localizedCaseSchema.default({
            features: [],
            challenges: [],
            results: [],
          }),
          en: localizedCaseSchema.default({
            features: [],
            challenges: [],
            results: [],
          }),
        })
        .default({
          pt: { features: [], challenges: [], results: [] },
          en: { features: [], challenges: [], results: [] },
        }),

      // Resultado curto por idioma (obrigatório para projetos em destaque).
      highlight: z
        .object({
          pt: localizedHighlightSchema.default({ outcome: "", metrics: [] }),
          en: localizedHighlightSchema.default({ outcome: "", metrics: [] }),
        })
        .optional(),

      // Escolhe a composição do capítulo na Home. As imagens vêm da `gallery`.
      showcase: z
        .object({
          variant: z.enum(SHOWCASE_VARIANTS),
        })
        .optional(),

      status: z
        .enum(["live", "migrating", "private", "offline"])
        .default("live"),

      featured: z.boolean().default(false),
      published: z.boolean().default(true),
      stack: z.array(z.string()).default([]),

      startDate: dateSchema,
      launchDate: dateSchema.optional(),

      thumb: z.object({
        desktop: z.string().default(""),
        mobile: z.string().optional(),
      }),

      links: z
        .object({
          liveUrl: z.string().url().or(z.literal("")).optional(),
          repoUrl: z.string().url().or(z.literal("")).optional(),
        })
        .default({}),

      gallery: z
        .array(
          z.object({
            src: z.string().min(1),
            title: z.string().optional(),
            description: z.string().optional(),
            alt: z.string().optional(),
          }),
        )
        .default([]),

      video: z
        .object({
          src: z.string().optional(),
          poster: z.string().optional(),
        })
        .optional(),
    })
    .superRefine((project, ctx) => {
      if (project.kind === "external" && !project.links.liveUrl) {
        ctx.addIssue({
          code: "custom",
          path: ["links", "liveUrl"],
          message: "Projetos externos precisam de um link publicado.",
        });
      }

      if (project.kind === "external" && project.links.repoUrl) {
        ctx.addIssue({
          code: "custom",
          path: ["links", "repoUrl"],
          message: "Projetos externos não devem possuir link de repositório.",
        });
      }

      if (
        project.launchDate &&
        isDateBefore(project.launchDate, project.startDate)
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["launchDate"],
          message: "A data de lançamento não pode ser anterior à data inicial.",
        });
      }

      if (project.kind === "detailed" && project.published) {
        if (
          !project.caseStudy.pt.context &&
          !project.caseStudy.pt.challenge &&
          !project.caseStudy.pt.solution
        ) {
          ctx.addIssue({
            code: "custom",
            path: ["caseStudy", "pt"],
            message:
              "Projetos detalhados devem possuir ao menos contexto, desafio ou solução em português.",
          });
        }
      }

      // Projetos em destaque precisam ter tudo que a Home consome
      if (project.featured) {
        if (!project.highlight) {
          ctx.addIssue({
            code: "custom",
            path: ["highlight"],
            message: "Projetos em destaque precisam de highlight (PT e EN).",
          });
        }

        if (!project.highlight?.pt.outcome || !project.highlight?.en.outcome) {
          ctx.addIssue({
            code: "custom",
            path: ["highlight"],
            message:
              "Projetos em destaque precisam de highlight.outcome em PT e EN.",
          });
        }

        if (!project.showcase) {
          ctx.addIssue({
            code: "custom",
            path: ["showcase"],
            message: "Projetos em destaque precisam de showcase.variant.",
          });
        } else {
          const { variant } = project.showcase;
          const slots = SHOWCASE_SLOTS[variant];

          if (project.gallery.length < slots) {
            ctx.addIssue({
              code: "custom",
              path: ["gallery"],
              message: `A composição "${variant}" usa as ${slots} primeira(s) imagem(ns) da galeria.`,
            });
          }

          project.gallery.slice(0, slots).forEach((image, index) => {
            if (!image.alt) {
              ctx.addIssue({
                code: "custom",
                path: ["gallery", index, "alt"],
                message: "Imagens usadas na Home precisam de alt.",
              });
            }
          });

          if (variant === "device" && !project.thumb.mobile) {
            ctx.addIssue({
              code: "custom",
              path: ["thumb", "mobile"],
              message: 'A composição "device" usa thumb.mobile como celular.',
            });
          }
        }
      }
    }),
});

const testimonials = defineCollection({
  loader: glob({
    base: "./src/content/testimonials",
    pattern: "**/*.md",
  }),
  schema: z.object({
    name: z.string().min(1),
    role: z.string().optional(),
    company: z.string().optional(),
    quote: z.string().min(1),
    language: z.enum(["pt-br", "en"]).default("pt-br"),
    clientWebsite: z.string().url().or(z.literal("")).optional(),
    projectSlug: z.string().optional(),
    avatar: z.string().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    order: z.number().int().default(0),
  }),
});

export const collections = {
  projects,
  testimonials,
};
