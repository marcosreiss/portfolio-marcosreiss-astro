// src/features/home/components/credibility/lib/days.ts

/** Dias corridos desde uma data ISO (YYYY-MM-DD), sem sofrer com fuso horário. */
export function daysSince(iso: string, now: Date = new Date()): number {
  const [y, m, d] = iso.split("-").map(Number);
  const start = Date.UTC(y, m - 1, d);
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.max(0, Math.round((today - start) / 86_400_000));
}
