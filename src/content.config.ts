// src/content.config.ts

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localizedContentSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().optional(),
  content: z.string().optional(),
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

      translations: z.object({
        pt: z.object({
          subtitle: z.string().min(1),
          description: z.string().optional(),
          content: z.string().optional(),
        }),

        en: localizedContentSchema,
      }),

      featured: z.boolean().default(false),
      published: z.boolean().default(true),

      stack: z.array(z.string()).default([]),

      startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      endDate: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .optional(),

      thumb: z.object({
        desktop: z.string().default(""),
        mobile: z.string().optional(),
      }),

      links: z.object({
        liveUrl: z.string().url().or(z.literal("")).optional(),
        repoUrl: z.string().url().or(z.literal("")).optional(),
      }),

      gallery: z
        .array(
          z.object({
            src: z.string(),
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

      if (project.endDate && project.endDate < project.startDate) {
        ctx.addIssue({
          code: "custom",
          path: ["endDate"],
          message: "A data final não pode ser anterior à data inicial.",
        });
      }
    }),
});

export const collections = { projects };
