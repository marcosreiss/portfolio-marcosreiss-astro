// src/utils/showcase.ts

export const SHOWCASE_VARIANTS = [
  "cover",
  "editorial",
  "diagram",
  "device",
] as const;

export type ShowcaseVariant = (typeof SHOWCASE_VARIANTS)[number];

/** Quantas imagens da `gallery` (em ordem) cada composição consome. */
export const SHOWCASE_SLOTS: Record<ShowcaseVariant, number> = {
  cover: 3,
  editorial: 2,
  diagram: 1,
  device: 1,
};
