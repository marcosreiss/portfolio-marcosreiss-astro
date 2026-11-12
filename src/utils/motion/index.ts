// src/utils/motion/index.ts

export {
  MOTION_CLASSES,
  MOTION_DEFAULTS,
  MOTION_EVENTS,
  MOTION_GROUP_VARIANTS,
  MOTION_INTENSITIES,
  MOTION_VARIANTS,
} from "@/utils/motion/constants";

export {
  destroyMotion,
  initMotion,
  prefersReducedMotion,
  refreshMotion,
} from "@/utils/motion/observer";

export type {
  MotionGroupProps,
  MotionGroupVariant,
  MotionImageProps,
  MotionInitOptions,
  MotionIntensity,
  MotionOptions,
  MotionRevealProps,
  MotionTextProps,
  MotionVariant,
  MotionVisibilityDetail,
} from "@/utils/motion/types";
