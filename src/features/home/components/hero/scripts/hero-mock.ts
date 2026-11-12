// src/features/home/components/hero/scripts/hero-mock.ts

/**
 * Comportamento interno do mock: contadores, ticker de req/min
 * e destaque rotativo na "Live activity".
 * O movimento dos painéis é 100% CSS (styles/mock-motion.css).
 */

const fmt = (v: number, d: number) =>
  v.toLocaleString("en-US", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });

function initCounters(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const to = Number(el.dataset.count);
    const decimals = Number(el.dataset.decimals ?? 0);
    const prefix = el.dataset.prefix ?? "";
    const suffix = el.dataset.suffix ?? "";
    const delay = 700;
    const duration = 1500;
    const t0 = performance.now() + delay;

    el.textContent = `${prefix}${fmt(0, decimals)}${suffix}`;

    const step = (now: number) => {
      const p = Math.min(Math.max((now - t0) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${prefix}${fmt(to * eased, decimals)}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  });
}

function initTicker(root: HTMLElement) {
  const ticker = root.querySelector<HTMLElement>("[data-ticker]");
  if (!ticker) return;

  const base = Number(ticker.dataset.base);

  setInterval(() => {
    ticker.textContent = fmt(base + Math.round((Math.random() - 0.5) * 140), 0);
  }, 1600);
}

function initActivity(root: HTMLElement) {
  const rows = root.querySelectorAll<HTMLElement>("[data-activity] .hm-row");
  if (!rows.length) return;

  let i = 0;

  setInterval(() => {
    rows.forEach((row, idx) => (row.dataset.active = String(idx === i)));
    i = (i + 1) % rows.length;
  }, 2400);
}

function initHeroMock() {
  const root = document.querySelector<HTMLElement>("[data-hero-mock]");
  if (!root) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  initCounters(root);
  initTicker(root);
  initActivity(root);
}

initHeroMock();
