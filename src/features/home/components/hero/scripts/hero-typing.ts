// src/features/home/components/hero/scripts/hero-typing.ts

/**
 * Digitação do título + liberação do restante do conteúdo.
 * Baseado em tempo (rAF): se um frame atrasar, as letras pendentes
 * são reveladas de uma vez, então nenhuma fica para trás.
 *
 * Controles em CSS (styles/copy.css): --hv-speed, --hv-start, --hv-after-ratio
 */

function readMs(el: HTMLElement, name: string, fallback: number) {
  const v = getComputedStyle(el).getPropertyValue(name).trim();
  if (v.endsWith("ms")) return parseFloat(v);
  if (v.endsWith("s")) return parseFloat(v) * 1000;
  return fallback;
}

function initHeroTyping() {
  const el = document.querySelector<HTMLElement>("[data-typing]");
  if (!el) return;

  const copy = el.closest<HTMLElement>("[data-hero-copy]");
  const chars = Array.from(el.querySelectorAll<HTMLElement>(".hv-ch"));
  const ticks = chars.map((c) => Number(c.dataset.c));
  const total = Number(el.dataset.total);

  const speed = readMs(el, "--hv-speed", 55);
  const start = readMs(el, "--hv-start", 500);

  const rawRatio = parseFloat(
    getComputedStyle(el).getPropertyValue("--hv-after-ratio"),
  );
  const ratio = Number.isFinite(rawRatio) ? rawRatio : 0.6;
  const revealAt = total * ratio;

  let revealed = false;

  const reveal = () => {
    if (revealed) return;
    revealed = true;
    if (copy) copy.dataset.revealed = "true";
  };

  const finish = () => {
    chars.forEach((c) => {
      c.classList.add("is-on");
      c.classList.remove("is-cur");
    });
    reveal();
    el.dataset.state = "done";
  };

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finish();
    return;
  }

  el.dataset.state = "running";

  const t0 = performance.now() + start;
  let next = 0;
  let cur: HTMLElement | null = null;

  const frame = (now: number) => {
    const tick = Math.floor((now - t0) / speed);

    while (next < chars.length && ticks[next] <= tick) {
      cur?.classList.remove("is-cur");
      cur = chars[next];
      cur.classList.add("is-on", "is-cur");
      next++;
    }

    if (tick >= revealAt) reveal();

    if (tick >= total) {
      finish();
      return;
    }

    requestAnimationFrame(frame);
  };

  requestAnimationFrame(frame);
}

initHeroTyping();
