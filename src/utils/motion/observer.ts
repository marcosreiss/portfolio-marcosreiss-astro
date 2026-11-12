/* src/utils/motion/observer.ts */

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
  const targets: HTMLElement[] = [];

  if (root instanceof HTMLElement && root.matches(TARGET_SELECTOR)) {
    targets.push(root);
  }

  targets.push(
    ...Array.from(root.querySelectorAll<HTMLElement>(TARGET_SELECTOR)),
  );

  return targets;
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

function showAllTargets(root: ParentNode = document): void {
  getTargets(root).forEach(markVisible);
}

function handleMotionPreferenceChange(event: MediaQueryListEvent): void {
  if (event.matches) {
    observer?.disconnect();
    observer = null;
    observedTargets = new WeakSet<HTMLElement>();

    showAllTargets();
    document.documentElement.classList.remove("motion-ready");

    return;
  }

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
    showAllTargets(root);
    document.documentElement.classList.remove("motion-ready");
    return;
  }

  if (!("IntersectionObserver" in window)) {
    showAllTargets(root);
    document.documentElement.classList.remove("motion-ready");
    return;
  }

  if (!observer) {
    observer = createObserver();
  }

  if (!observer) {
    showAllTargets(root);
    document.documentElement.classList.remove("motion-ready");
    return;
  }

  for (const target of targets) {
    if (observedTargets.has(target)) continue;

    prepareGroup(target);

    // Evita herdar estado de uma inicialização anterior.
    target.classList.remove("is-visible");

    observedTargets.add(target);
    observer.observe(target);
  }

  // Ativa as regras de ocultação somente após registrar os elementos.
  document.documentElement.classList.add("motion-ready");
}

/**
 * Limpa o observer e restaura a visibilidade dos elementos.
 */
export function destroyMotion(): void {
  observer?.disconnect();
  observer = null;

  observedTargets = new WeakSet<HTMLElement>();

  showAllTargets();
  document.documentElement.classList.remove("motion-ready");
}

/*
 * Integração com a navegação do Astro.
 * Os listeners são registrados uma única vez.
 */
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
