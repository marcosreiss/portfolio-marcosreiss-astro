// src/features/home/components/services/scripts/services-lens.ts

/**
 * Lente "ver por dentro".
 * - Mouse: o círculo acompanha o cursor e revela a camada interna.
 * - Botão: fixa a camada interna (toque, teclado, leitores de tela).
 * - Demonstração: uma varredura curta quando a peça entra na tela (uma vez).
 * A posição vai por CSS vars (--lx / --ly); o raio é animado pelo CSS (--lr).
 */

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);
const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

function initPiece(figure: HTMLElement, index: number) {
  const layers = figure.querySelector<HTMLElement>("[data-layers]");
  const outside = figure.querySelector<HTMLElement>(".svc-layer--outside");
  const inside = figure.querySelector<HTMLElement>(".svc-layer--inside");
  const toggle = figure.querySelector<HTMLButtonElement>("[data-toggle]");
  const toggleLabel = figure.querySelector<HTMLElement>("[data-toggle-label]");

  if (!layers || !outside || !inside) return;

  let cx = 0;
  let cy = 0;
  let tx = 0;
  let ty = 0;
  let raf = 0;
  let peekFrame = 0;
  let pinned = false;
  let interacted = false;

  const setPos = (x: number, y: number) => {
    layers.style.setProperty("--lx", `${x.toFixed(1)}px`);
    layers.style.setProperty("--ly", `${y.toFixed(1)}px`);
  };

  const setRadius = () => {
    const w = layers.getBoundingClientRect().width;
    layers.style.setProperty(
      "--lens-r",
      `${clamp(w * 0.17, 56, 120).toFixed(0)}px`,
    );
  };

  const local = (e: PointerEvent) => {
    const r = layers.getBoundingClientRect();
    return {
      x: clamp(e.clientX - r.left, 0, r.width),
      y: clamp(e.clientY - r.top, 0, r.height),
    };
  };

  const stopPeek = () => {
    if (peekFrame) cancelAnimationFrame(peekFrame);
    peekFrame = 0;
  };

  const markUsed = () => {
    interacted = true;
    figure.dataset.used = "true";
    stopPeek();
  };

  // Segue o cursor com suavização (sem suavização em reduced-motion)
  const follow = () => {
    cx += (tx - cx) * 0.22;
    cy += (ty - cy) * 0.22;
    setPos(cx, cy);

    raf =
      Math.abs(tx - cx) > 0.3 || Math.abs(ty - cy) > 0.3
        ? requestAnimationFrame(follow)
        : 0;
  };

  layers.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "touch" || pinned) return;

    markUsed();
    setRadius();

    const p = local(e);
    cx = tx = p.x;
    cy = ty = p.y;
    setPos(cx, cy);

    layers.dataset.lens = "on";
  });

  layers.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch" || pinned) return;

    const p = local(e);
    tx = p.x;
    ty = p.y;

    if (reducedMotion.matches) {
      cx = tx;
      cy = ty;
      setPos(cx, cy);
    } else if (!raf) {
      raf = requestAnimationFrame(follow);
    }
  });

  layers.addEventListener("pointerleave", (e) => {
    if (e.pointerType === "touch") return;
    layers.dataset.lens = "off";
  });

  // Botão: fixa/solta a camada interna
  toggle?.addEventListener("click", () => {
    pinned = !pinned;
    markUsed();

    layers.dataset.pinned = String(pinned);
    layers.dataset.lens = "off";

    toggle.setAttribute("aria-pressed", String(pinned));
    inside.setAttribute("aria-hidden", String(!pinned));
    outside.setAttribute("aria-hidden", String(pinned));

    if (toggleLabel) {
      toggleLabel.textContent = pinned
        ? (toggle.dataset.labelHide ?? "")
        : (toggle.dataset.labelShow ?? "");
    }
  });

  // Demonstração única: a lente atravessa a peça quando ela aparece
  const peek = () => {
    if (interacted || pinned) return;

    const r = layers.getBoundingClientRect();
    const from = { x: r.width * 0.2, y: r.height * 0.34 };
    const to = { x: r.width * 0.78, y: r.height * 0.66 };
    const duration = 1800;
    const t0 = performance.now();

    setRadius();
    setPos(from.x, from.y);
    layers.dataset.lens = "on";

    const step = (now: number) => {
      const t = clamp((now - t0) / duration, 0, 1);
      const e = easeInOut(t);

      cx = from.x + (to.x - from.x) * e;
      cy =
        from.y + (to.y - from.y) * e - Math.sin(t * Math.PI) * r.height * 0.06;
      setPos(cx, cy);

      if (t < 1) {
        peekFrame = requestAnimationFrame(step);
      } else {
        peekFrame = 0;
        layers.dataset.lens = "off";
      }
    };

    peekFrame = requestAnimationFrame(step);
  };

  if (!reducedMotion.matches) {
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        io.disconnect();
        window.setTimeout(peek, 350 + index * 450);
      },
      { threshold: 0.65 },
    );

    io.observe(layers);
  }
}

function initServicesLens() {
  document
    .querySelectorAll<HTMLElement>(".svc-figure")
    .forEach((figure, index) => initPiece(figure, index));
}

initServicesLens();
