import { z } from "astro/zod";
import rawSettings from "./site-settings.json";

const optionalUrl = z.string().url().or(z.literal("")).optional();

export const siteSettingsSchema = z.object({
  personal: z.object({
    professionalName: z.string().min(1),
    professionalTitle: z.string().optional(),
    shortBio: z.string().optional(),
  }),

  contact: z.object({
    email: z.string().email().or(z.literal("")),
    whatsapp: z.string().optional(),
    whatsappMessage: z.string().optional(),
    resumeUrl: optionalUrl,
    social: z.object({
      linkedin: optionalUrl,
      github: optionalUrl,
      instagram: optionalUrl,
    }),
  }),

  location: z.object({
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    languages: z.array(z.enum(["pt", "en", "es"])).default(["pt", "en"]),
    serviceMode: z.enum(["remote", "onsite", "hybrid"]).default("remote"),
    serviceAreas: z.array(z.string()).default([]),
  }),

  availability: z.object({
    showBadge: z.boolean().default(true),
    status: z.enum(["available", "upcoming", "unavailable"]).default("available"),
    availableFrom: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/).optional(),
    contractTypes: z.array(z.enum(["freelance", "pj", "clt", "consulting"])).default(["freelance", "pj"]),
    message: z.string().optional(),
  }),

  branding: z.object({
    favicon: z.string().optional(),
    logoLight: z.string().optional(),
    logoDark: z.string().optional(),
    defaultOgImage: z.string().optional(),
  }),

  seo: z.object({
    siteTitle: z.string().min(1),
    siteDescription: z.string().min(1),
  }),

  analytics: z.object({
    googleAnalyticsId: z.string().optional(),
    metaPixelId: z.string().optional(),
  }),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;

export const siteSettings = siteSettingsSchema.parse(rawSettings);
