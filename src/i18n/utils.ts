import { defaultLang, ui, languages } from "./ui";
import type { Language } from "./ui";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");

  if (lang === "en") return "en";

  return defaultLang;
}

export function useTranslations(lang: Language) {
  return ui[lang];
}

export function getLanguageLabel(lang: Language) {
  return languages[lang];
}
