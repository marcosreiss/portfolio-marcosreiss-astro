// src/features/home/components/testimonials/lib/get-testimonials.ts

import { getCollection } from "astro:content";

export type TestimonialsLang = "pt" | "en";

export async function getTestimonials(lang: TestimonialsLang) {
  const language = lang === "en" ? "en" : "pt-br";
  const locale = lang === "en" ? "en" : "pt-BR";

  const entries = await getCollection(
    "testimonials",
    ({ data }) => data.published && data.language === language,
  );

  const collator = new Intl.Collator(locale, {
    sensitivity: "base",
    numeric: true,
  });

  return entries.sort((a, b) => {
    const featuredDifference =
      Number(b.data.featured) - Number(a.data.featured);

    if (featuredDifference !== 0) return featuredDifference;

    return (
      collator.compare(a.data.name, b.data.name) || collator.compare(a.id, b.id)
    );
  });
}
