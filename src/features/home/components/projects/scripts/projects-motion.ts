// src/features/home/components/projects/scripts/projects-motion.ts

type LayerState = {
  element: HTMLElement;
  distance: number;
};

type ChapterState = {
  element: HTMLElement;
  showcase: HTMLElement | null;
  layers: LayerState[];
};

type RevealState = {
  element: HTMLElement;
  timer?: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function initProjectsSection(root: HTMLElement): () => void {
  const controller = new AbortController();
  const { signal } = controller;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const mobile = window.matchMedia("(max-width: 767px)");

  const navLinks = Array.from(
    root.querySelectorAll<HTMLAnchorElement>("[data-project-nav]"),
  );

  const progressFill = root.querySelector<HTMLElement>(
    "[data-project-progress-fill]",
  );

  const distances: Record<string, number> = {
    main: 10,
    secondary: -16,
    detail: 20,
    diagram: -12,
    mobile: 16,
  };

  const chapters: ChapterState[] = Array.from(
    root.querySelectorAll<HTMLElement>("[data-project-chapter]"),
  ).map((element) => ({
    element,
    showcase: element.querySelector<HTMLElement>("[data-showcase]"),
    layers: Array.from(
      element.querySelectorAll<HTMLElement>("[data-project-layer]"),
    ).map((layer) => ({
      element: layer,
      distance: distances[layer.dataset.projectLayer ?? ""] ?? 0,
    })),
  }));

  if (!chapters.length) return () => controller.abort();

  const reveals: RevealState[] = [];
  let revealObserver: IntersectionObserver | undefined;
  let frame = 0;
  let activeId = "";

  const finishReveal = (state: RevealState) => {
    if (state.timer !== undefined) {
      window.clearTimeout(state.timer);
      state.timer = undefined;
    }

    state.element.classList.add("is-visible");
  };

  const revealEverything = () => {
    revealObserver?.disconnect();
    reveals.forEach(finishReveal);
  };

  const setupReveals = () => {
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const state = reveals.find((item) => item.element === entry.target);

          if (state) finishReveal(state);
          revealObserver?.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -32px 0px",
      },
    );

    const candidates = chapters.flatMap((chapter) =>
      Array.from(
        chapter.element.querySelectorAll<HTMLElement>(
          ".prj-chapter-header, [data-project-layer], .prj-chapter-bottom",
        ),
      ),
    );

    candidates.forEach((element) => {
      const rect = element.getBoundingClientRect();

      element.dataset.projectReveal = "";

      // Não esconde conteúdo que já está visível ou acima da tela.
      if (rect.top < window.innerHeight) {
        element.classList.add("is-visible");
        return;
      }

      const state: RevealState = { element };

      element.classList.add("is-prepared");

      // Segurança: nenhuma informação permanece escondida indefinidamente.
      state.timer = window.setTimeout(() => finishReveal(state), 8000);

      reveals.push(state);
      revealObserver?.observe(element);
    });
  };

  const setActive = (id: string) => {
    if (id === activeId) return;
    activeId = id;

    navLinks.forEach((link) => {
      if (link.dataset.projectNav === id) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const resetLayers = () => {
    chapters.forEach((chapter) => {
      chapter.layers.forEach(({ element }) => {
        element.style.removeProperty("--prj-layer-y");
      });
    });
  };

  const update = () => {
    frame = 0;

    const viewport = window.innerHeight;
    const anchor = viewport * 0.42;

    const chapterRects = chapters.map((chapter) => ({
      chapter,
      rect: chapter.element.getBoundingClientRect(),
    }));

    // Seleciona o último capítulo cujo início passou pela linha de leitura.
    let active = chapterRects[0];

    chapterRects.forEach((item) => {
      if (item.rect.top <= anchor) active = item;
    });

    setActive(active.chapter.element.dataset.projectId ?? "");

    const first = chapterRects[0].rect;
    const last = chapterRects[chapterRects.length - 1].rect;

    const progress = clamp(
      (anchor - first.top) / Math.max(1, last.bottom - first.top),
      0,
      1,
    );

    progressFill?.style.setProperty("--prj-progress", progress.toFixed(4));

    if (reducedMotion.matches) return;

    const styles = getComputedStyle(root);
    const rawAmplitude = Number.parseFloat(
      styles.getPropertyValue("--prj-motion-amplitude"),
    );

    const amplitude = Number.isFinite(rawAmplitude)
      ? Math.max(0, rawAmplitude)
      : 1;

    const deviceFactor = mobile.matches ? 0.35 : 1;

    const visibleShowcases = chapterRects
      .filter(({ rect }) => rect.bottom > 0 && rect.top < viewport)
      .map(({ chapter }) => ({
        chapter,
        rect: chapter.showcase?.getBoundingClientRect(),
      }));

    visibleShowcases.forEach(({ chapter, rect }) => {
      if (!rect) return;

      const center = rect.top + rect.height / 2;
      const travel = clamp(
        (viewport / 2 - center) / ((viewport + rect.height) / 2),
        -1,
        1,
      );

      chapter.layers.forEach(({ element, distance }) => {
        const offset = travel * distance * amplitude * deviceFactor;

        element.style.setProperty("--prj-layer-y", `${offset.toFixed(2)}px`);
      });
    });
  };

  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };

  const onMotionChange = () => {
    if (reducedMotion.matches) {
      revealEverything();
      resetLayers();
    }

    schedule();
  };

  root.dataset.motionReady = "true";

  setupReveals();
  schedule();

  window.addEventListener("scroll", schedule, {
    passive: true,
    signal,
  });

  window.addEventListener("resize", schedule, {
    passive: true,
    signal,
  });

  // Atualiza as medições quando imagens terminarem de carregar.
  root.addEventListener("load", schedule, {
    capture: true,
    signal,
  });

  reducedMotion.addEventListener("change", onMotionChange);
  mobile.addEventListener("change", schedule);

  const resizeObserver =
    typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(schedule)
      : undefined;

  resizeObserver?.observe(root);

  return () => {
    controller.abort();
    reducedMotion.removeEventListener("change", onMotionChange);
    mobile.removeEventListener("change", schedule);

    revealObserver?.disconnect();
    resizeObserver?.disconnect();

    if (frame) window.cancelAnimationFrame(frame);

    reveals.forEach((state) => {
      if (state.timer !== undefined) {
        window.clearTimeout(state.timer);
      }

      state.element.classList.remove("is-prepared", "is-visible");
      delete state.element.dataset.projectReveal;
    });

    resetLayers();
    delete root.dataset.motionReady;
  };
}

let cleanups: Array<() => void> = [];

function destroyProjectsMotion() {
  cleanups.forEach((cleanup) => cleanup());
  cleanups = [];
}

function initProjectsMotion() {
  destroyProjectsMotion();

  document
    .querySelectorAll<HTMLElement>("[data-projects-section]")
    .forEach((root) => {
      cleanups.push(initProjectsSection(root));
    });
}

// Carga inicial e navegação com ClientRouter do Astro.
initProjectsMotion();

document.addEventListener("astro:page-load", initProjectsMotion);
document.addEventListener("astro:before-swap", destroyProjectsMotion);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    destroyProjectsMotion();
    document.removeEventListener("astro:page-load", initProjectsMotion);
    document.removeEventListener("astro:before-swap", destroyProjectsMotion);
  });
}
