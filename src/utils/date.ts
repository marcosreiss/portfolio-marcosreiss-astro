// src/utils/date.ts

export type DateLocale = "pt-BR" | "en-US";

export type DateInput = string | Date;

const BRAZILIAN_DATE_REGEX = /^(\d{2})-(\d{2})-(\d{4})$/;
const ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Converte DD-MM-YYYY em um objeto Date.
 * Retorna null quando a data for inválida.
 */
export function parseDate(value: string): Date | null {
  const match = value.match(BRAZILIAN_DATE_REGEX);

  if (!match) return null;

  const [, dayString, monthString, yearString] = match;

  const day = Number(dayString);
  const month = Number(monthString);
  const year = Number(yearString);

  if (year < 1000 || year > 9999) return null;

  const date = new Date(0);

  date.setHours(12, 0, 0, 0);
  date.setFullYear(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

/**
 * Verifica se uma string representa uma data válida em DD-MM-YYYY.
 */
export function isValidDateString(value: string): boolean {
  return parseDate(value) !== null;
}

/**
 * Converte DD-MM-YYYY para YYYY-MM-DD.
 */
export function toISODate(value: string): string | null {
  const date = parseDate(value);

  if (!date) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/**
 * Converte YYYY-MM-DD para DD-MM-YYYY.
 */
export function fromISODate(value: string): string | null {
  const match = value.match(ISO_DATE_REGEX);

  if (!match) return null;

  const [, year, month, day] = match;
  const brazilianDate = `${day}-${month}-${year}`;

  return isValidDateString(brazilianDate) ? brazilianDate : null;
}

/**
 * Converte DD-MM-YYYY ou Date para um objeto Date.
 */
export function toDate(value: DateInput): Date | null {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : new Date(value);
  }

  return parseDate(value);
}

/**
 * Formata uma data para exibição.
 *
 * Exemplos:
 * 15-11-2025 -> 15 de novembro de 2025 (pt-BR)
 * 15-11-2025 -> November 15, 2025 (en-US)
 */
export function formatDate(
  value: DateInput,
  locale: DateLocale = "pt-BR",
  options?: Intl.DateTimeFormatOptions,
): string {
  const date = toDate(value);

  if (!date) return "";

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    ...options,
  }).format(date);
}

/**
 * Compara duas datas no formato DD-MM-YYYY.
 *
 * Retorno:
 * -1: primeira data é anterior.
 *  0: datas iguais.
 *  1: primeira data é posterior.
 * null: alguma data é inválida.
 */
export function compareDates(first: string, second: string): -1 | 0 | 1 | null {
  const firstDate = parseDate(first);
  const secondDate = parseDate(second);

  if (!firstDate || !secondDate) return null;

  const firstTime = firstDate.getTime();
  const secondTime = secondDate.getTime();

  if (firstTime < secondTime) return -1;
  if (firstTime > secondTime) return 1;

  return 0;
}

/**
 * Verifica se a primeira data é anterior à segunda.
 */
export function isDateBefore(first: string, second: string): boolean {
  return compareDates(first, second) === -1;
}

/**
 * Verifica se a primeira data é posterior à segunda.
 */
export function isDateAfter(first: string, second: string): boolean {
  return compareDates(first, second) === 1;
}

/**
 * Retorna um valor numérico para ordenação cronológica.
 * Datas inválidas retornam 0.
 */
export function getDateTimestamp(value: string): number {
  return parseDate(value)?.getTime() ?? 0;
}

/**
 * Retorna a data mais recente entre a data final e inicial.
 * Útil para ordenar projetos pela última data de atividade.
 */
export function getLatestDate(startDate: string, endDate?: string): string {
  return endDate && isDateAfter(endDate, startDate) ? endDate : startDate;
}
