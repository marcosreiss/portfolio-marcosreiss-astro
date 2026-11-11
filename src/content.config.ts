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

  schema: z.object({
    kind: z.enum(["external", "detailed"]),

    translations: z.object({
      pt: localizedContentSchema,
      en: localizedContentSchema.optional(),
    }),

    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    order: z.number().int().default(0),

    stack: z.array(z.string()),

    startDate: z.string().regex(/^\d{4}-\d{2}$/),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}$/)
      .optional(),

    thumb: z.object({
      desktop: z.string(),
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
          alt: z.string(),
        }),
      )
      .default([]),

    video: z
      .object({
        src: z.string().optional(),
        poster: z.string().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  projects,
};
