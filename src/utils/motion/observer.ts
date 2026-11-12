/* src/utils/motion/observer.ts */

import { MOTION_CLASSES, MOTION_EVENTS } from "@/utils/motion/constants";
import type {
  MotionInitOptions,
  MotionVisibilityDetail,
} from "@/utils/motion/types";

const TARGET_SELECTOR = "[data-motion], [data-motion-group]";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -8% 0px",
};

let observer: IntersectionObserver | null = null;
let mutationObserver: MutationObserver | null = null;
let observedTargets = new WeakSet<HTMLElement>();

let motionPreference: MediaQueryList | null = null;
let preferenceListenerRegistered = false;
let navigationListenersRegistered = false;
let mutationsRequested = false;

/* ========================================
   Helpers
======================================== */

function getRootElement(): HTMLElement {
  return document.documentElement;
}

function enableMotionReady(): void {
  getRootElement().classList.add(MOTION_CLASSES.ready);
}

function disableMotionReady(): void {
  getRootElement().classList.remove(MOTION_CLASSES.ready);
}

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

function prepareLines(target: HTMLElement): void {
  target
    .querySelectorAll<HTMLElement>("[data-motion-line]")
    .forEach((line, index) => {
      line.style.setProperty("--motion-index", String(index));
    });
}

function dispatchVisibility(
  target: HTMLElement,
  type: (typeof MOTION_EVENTS)[keyof typeof MOTION_EVENTS],
): void {
  target.dispatchEvent(
    new CustomEvent<MotionVisibilityDetail>(type, {
      detail: { target },
      bubbles: true,
    }),
  );
}

function markVisible(target: HTMLElement): void {
  if (target.classList.contains(MOTION_CLASSES.visible)) return;

  target.classList.add(MOTION_CLASSES.visible);
  dispatchVisibility(target, MOTION_EVENTS.visible);
}

function markHidden(target: HTMLElement): void {
  if (!target.classList.contains(MOTION_CLASSES.visible)) return;

  target.classList.remove(MOTION_CLASSES.visible);
  dispatchVisibility(target, MOTION_EVENTS.hidden);
}

function showAllTargets(root: ParentNode = document): void {
  getTargets(root).forEach(markVisible);
}

function releaseObservers(): void {
  observer?.disconnect();
  observer = null;

  mutationObserver?.disconnect();
  mutationObserver = null;

  observedTargets = new WeakSet<HTMLElement>();
}

/* ========================================
   Intersection handling
======================================== */

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
      markHidden(target);
    }
  }
}

function createObserver(): IntersectionObserver | null {
  if (!("IntersectionObserver" in window)) {
    return null;
  }

  return new IntersectionObserver(handleEntries, OBSERVER_OPTIONS);
}

function observeTargets(targets: HTMLElement[]): void {
  if (!observer) return;

  for (const target of targets) {
    if (observedTargets.has(target)) continue;

    prepareGroup(target);
    prepareLines(target);

    // Evita herdar estado de uma inicialização anterior.
    target.classList.remove(MOTION_CLASSES.visible);

    observedTargets.add(target);
    observer.observe(target);
  }
}

/* ========================================
   Mutation handling
======================================== */

function startMutationObserver(): void {
  if (mutationObserver || !("MutationObserver" in window)) return;

  mutationObserver = new MutationObserver((records) => {
    const added: HTMLElement[] = [];

    for (const record of records) {
      record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          added.push(...getTargets(node));
        }
      });
    }

    if (added.length > 0) {
      observeTargets(added);
    }
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

/* ========================================
   Reduced motion preference
======================================== */

function fallbackToVisible(root: ParentNode = document): void {
  showAllTargets(root);
  disableMotionReady();
}

function handleMotionPreferenceChange(event: MediaQueryListEvent): void {
  if (event.matches) {
    releaseObservers();
    fallbackToVisible();

    return;
  }

  getTargets(document).forEach((target) => {
    target.classList.remove(MOTION_CLASSES.visible);
  });

  initMotion(document, { watchMutations: mutationsRequested });
}

function registerPreferenceListener(): void {
  if (preferenceListenerRegistered) return;

  motionPreference = window.matchMedia(REDUCED_MOTION_QUERY);
  motionPreference.addEventListener("change", handleMotionPreferenceChange);

  preferenceListenerRegistered = true;
}

/* ========================================
   Public API
======================================== */

/**
 * Indica se o usuário prefere movimento reduzido.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;

  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Inicializa as animações dos elementos encontrados.
 *
 * Sem JavaScript, sem IntersectionObserver ou com movimento reduzido,
 * o conteúdo permanece visível.
 */
export function initMotion(
  root: ParentNode = document,
  options: MotionInitOptions = {},
): void {
  if (typeof window === "undefined") return;

  registerPreferenceListener();
  registerNavigationListeners();

  if (options.watchMutations) {
    mutationsRequested = true;
  }

  const targets = getTargets(root);

  if (targets.length === 0) return;

  if (motionPreference?.matches) {
    fallbackToVisible(root);
    return;
  }

  if (!observer) {
    observer = createObserver();
  }

  if (!observer) {
    fallbackToVisible(root);
    return;
  }

  observeTargets(targets);

  if (mutationsRequested) {
    startMutationObserver();
  }

  // Ativa as regras de ocultação somente após registrar os elementos.
  enableMotionReady();
}

/**
 * Reavalia o DOM atual, útil após inserções dinâmicas de conteúdo.
 */
export function refreshMotion(root: ParentNode = document): void {
  initMotion(root);
}

/**
 * Limpa o observer e restaura a visibilidade dos elementos.
 */
export function destroyMotion(): void {
  if (typeof document === "undefined") return;

  releaseObservers();
  showAllTargets();
  disableMotionReady();
}

/* ========================================
   Astro navigation
======================================== */

/*
 * Integração com a navegação do Astro.
 * Os listeners são registrados uma única vez.
 */
function registerNavigationListeners(): void {
  if (navigationListenersRegistered) return;

  document.addEventListener("astro:before-swap", () => {
    releaseObservers();
    disableMotionReady();
  });

  document.addEventListener("astro:page-load", () => {
    initMotion(document);
  });

  navigationListenersRegistered = true;
}

if (typeof document !== "undefined") {
  registerNavigationListeners();
}
