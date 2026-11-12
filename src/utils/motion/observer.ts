const TARGET_SELECTOR = "[data-motion], [data-motion-group]";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -8% 0px",
};

let observer: IntersectionObserver | null = null;
let observedTargets = new WeakSet<HTMLElement>();

let motionPreference: MediaQueryList | null = null;
let preferenceListenerRegistered = false;

function getTargets(root: ParentNode): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(TARGET_SELECTOR));
}

function prepareGroup(target: HTMLElement): void {
  if (!target.hasAttribute("data-motion-group")) return;

  Array.from(target.children).forEach((child, index) => {
    if (!(child instanceof HTMLElement)) return;

    child.style.setProperty("--motion-index", String(index));
  });
}

function markVisible(target: HTMLElement): void {
  target.classList.add("is-visible");
}

function handleEntries(entries: IntersectionObserverEntry[]): void {
  for (const entry of entries) {
    const target = entry.target as HTMLElement;
    const once = target.dataset.motionOnce !== "false";

    if (entry.isIntersecting) {
      markVisible(target);

      if (once) {
        observer?.unobserve(target);
      }

      continue;
    }

    if (!once) {
      target.classList.remove("is-visible");
    }
  }
}

function createObserver(): IntersectionObserver | null {
  if (!("IntersectionObserver" in window)) {
    return null;
  }

  return new IntersectionObserver(handleEntries, OBSERVER_OPTIONS);
}

function handleMotionPreferenceChange(event: MediaQueryListEvent): void {
  const root = document.documentElement;

  if (event.matches) {
    observer?.disconnect();
    observer = null;
    observedTargets = new WeakSet<HTMLElement>();

    // Sem movimento: o conteúdo permanece visível.
    root.classList.remove("motion-ready");

    return;
  }

  // Ao reativar movimento, os elementos podem ser revelados novamente.
  getTargets(document).forEach((target) => {
    target.classList.remove("is-visible");
  });

  initMotion(document);
}

function registerPreferenceListener(): void {
  if (preferenceListenerRegistered) return;

  motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

  motionPreference.addEventListener("change", handleMotionPreferenceChange);

  preferenceListenerRegistered = true;
}

/**
 * Inicializa as animações dos elementos encontrados.
 *
 * Sem JavaScript, sem IntersectionObserver ou com movimento reduzido,
 * o conteúdo permanece visível.
 */
export function initMotion(root: ParentNode = document): void {
  if (typeof window === "undefined") return;

  const targets = getTargets(root);

  if (targets.length === 0) return;

  registerPreferenceListener();

  if (motionPreference?.matches) {
    document.documentElement.classList.remove("motion-ready");
    return;
  }

  if (!("IntersectionObserver" in window)) {
    document.documentElement.classList.remove("motion-ready");
    return;
  }

  if (!observer) {
    observer = createObserver();
  }

  if (!observer) return;

  for (const target of targets) {
    if (observedTargets.has(target)) continue;

    prepareGroup(target);

    observedTargets.add(target);
    observer.observe(target);
  }

  /*
   * A classe só é adicionada depois que os elementos
   * foram registrados no observer.
   */
  document.documentElement.classList.add("motion-ready");
}

/**
 * Permite limpar o observer quando necessário.
 */
export function destroyMotion(): void {
  observer?.disconnect();
  observer = null;

  observedTargets = new WeakSet<HTMLElement>();

  document.documentElement.classList.remove("motion-ready");
}

/*
 * Suporte à navegação do Astro com View Transitions.
 * A inicialização também é chamada pelos componentes
 * quando o script é carregado pela primeira vez.
 */
if (typeof document !== "undefined") {
  document.addEventListener("astro:page-load", () => {
    initMotion(document);
  });
}

if (typeof document !== "undefined") {
  document.addEventListener("astro:before-swap", () => {
    observer?.disconnect();
    observer = null;

    observedTargets = new WeakSet<HTMLElement>();

    document.documentElement.classList.remove("motion-ready");
  });

  document.addEventListener("astro:page-load", () => {
    initMotion(document);
  });
}
