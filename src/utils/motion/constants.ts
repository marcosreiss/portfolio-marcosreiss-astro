// src/utils/motion/constants.ts

import type {
  MotionGroupVariant,
  MotionIntensity,
  MotionVariant,
} from "@/utils/motion/types";

export const MOTION_VARIANTS = [
  "fade-in",
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "scale-in",
  "reveal-up",
  "reveal-mask",
] as const satisfies readonly MotionVariant[];

export const MOTION_GROUP_VARIANTS = [
  "fade-in",
  "fade-up",
  "fade-left",
  "fade-right",
  "scale-in",
] as const satisfies readonly MotionGroupVariant[];

export const MOTION_INTENSITIES = [
  "subtle",
  "moderate",
  "expressive",
] as const satisfies readonly MotionIntensity[];

export const MOTION_DEFAULTS = {
  variant: "fade-up",
  groupVariant: "fade-up",
  intensity: "moderate",
  delay: 0,
  stagger: 80,
  once: true,
} as const;

export const MOTION_EVENTS = {
  visible: "motion:visible",
  hidden: "motion:hidden",
} as const;

export const MOTION_CLASSES = {
  ready: "motion-ready",
  visible: "is-visible",
} as const;
