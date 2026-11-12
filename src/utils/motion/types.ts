// src/utils/motion/types.ts

import type { HTMLTag } from "astro/types";

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
  /** Executa a animação apenas na primeira entrada no viewport. */
  once?: boolean;
}

interface MotionBaseProps extends MotionOptions {
  /** Tag HTML renderizada. */
  as?: HTMLTag;
  /** Atraso inicial, em ms. */
  delay?: number;
  /** Duração personalizada, em ms. */
  duration?: number;
  /** Distância do movimento, em px. */
  distance?: number;
  /** Classes adicionais. */
  className?: string;
}

export interface MotionRevealProps extends MotionBaseProps {
  variant?: MotionVariant;
  intensity?: MotionIntensity;
}

export interface MotionGroupProps extends MotionBaseProps {
  variant?: MotionGroupVariant;
  /** Intervalo entre filhos, em ms. */
  stagger?: number;
}

export interface MotionImageProps extends MotionOptions {
  reveal?: boolean;
  hoverZoom?: boolean;
  className?: string;
}

export interface MotionTextProps extends MotionOptions {
  as?: HTMLTag;
  /** Linhas do texto; cada item vira uma linha animada. */
  lines: string[];
  stagger?: number;
  delay?: number;
  className?: string;
}

export interface MotionVisibilityDetail {
  target: HTMLElement;
}

export interface MotionInitOptions {
  /** Observa elementos adicionados depois da inicialização. */
  watchMutations?: boolean;
}
