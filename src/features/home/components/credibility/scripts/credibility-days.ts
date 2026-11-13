// src/features/home/components/credibility/scripts/credibility-days.ts

/**
 * Recalcula os "dias no ar" no navegador.
 * O HTML já sai do build com valores corretos para a data do build;
 * aqui eles são atualizados para o dia real da visita (sem animação de contagem).
 */

import { daysSince } from "../lib/days";

function initCredibilityDays() {
  const root = document.querySelector<HTMLElement>("[data-credibility]");
  if (!root) return;

  const nf = new Intl.NumberFormat(
    root.dataset.lang === "en" ? "en-US" : "pt-BR",
  );

  root.querySelectorAll<HTMLElement>("[data-days]").forEach((el) => {
    const iso = el.dataset.days;
    if (iso) el.textContent = nf.format(daysSince(iso));
  });

  const total = Array.from(
    root.querySelectorAll<HTMLElement>(".cr-ledger [data-days]"),
  ).reduce((sum, el) => sum + daysSince(el.dataset.days ?? ""), 0);

  root.querySelectorAll<HTMLElement>("[data-days-total]").forEach((el) => {
    el.textContent = nf.format(total);
  });
}

initCredibilityDays();
