// src/utils/motion/styles.ts

type StyleValue = string | number | undefined | null | false;

export function toNonNegative(value: number | undefined): number | undefined {
  if (value === undefined || !Number.isFinite(value)) return undefined;

  return Math.max(0, value);
}

/**
 * Monta uma string de style inline ignorando valores vazios.
 * Ex.: buildMotionStyle({ "--motion-delay": "120ms" })
 */
export function buildMotionStyle(entries: Record<string, StyleValue>): string {
  return Object.entries(entries)
    .filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== false &&
        value !== "",
    )
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

export function oneOf<T extends string>(
  value: string | undefined,
  allowed: readonly T[],
  fallback: T,
): T {
  return allowed.includes(value as T) ? (value as T) : fallback;
}
