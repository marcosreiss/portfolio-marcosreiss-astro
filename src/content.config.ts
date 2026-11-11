import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { isValidDateString, isDateBefore } from "./utils/date";

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

      featured: z.boolean().default(false),
      published: z.boolean().default(true),
      stack: z.array(z.string()).default([]),

      startDate: dateSchema,
      endDate: dateSchema.optional(),

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

      if (project.endDate && isDateBefore(project.endDate, project.startDate)) {
        ctx.addIssue({
          code: "custom",
          path: ["endDate"],
          message: "A data final não pode ser anterior à data inicial.",
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
    language: z.enum(["pt", "en"]).default("pt"),
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
