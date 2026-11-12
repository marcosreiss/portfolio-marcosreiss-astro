export type MotionVariant =
  | "fade-in"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "reveal-up"
  | "reveal-mask";

export type MotionGroupVariant =
  | "fade-in"
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale-in";

export type MotionIntensity = "subtle" | "moderate" | "expressive";

export interface MotionOptions {
  once?: boolean;
}

export interface MotionRevealProps extends MotionOptions {
  variant?: MotionVariant;
  intensity?: MotionIntensity;
  delay?: number;
  duration?: number;
  distance?: number;
}

export interface MotionGroupProps extends MotionOptions {
  variant?: MotionGroupVariant;
  stagger?: number;
  delay?: number;
  duration?: number;
  distance?: number;
}
