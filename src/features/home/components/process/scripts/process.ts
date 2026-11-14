// src/features/home/components/process/scripts/process.ts

function initProcess(root: HTMLElement): () => void {
  const controller = new AbortController();
  const { signal } = controller;

  const tablist = root.querySelector<HTMLElement>("[data-process-tabs]");

  const tabs = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-process-tab]"),
  );

  const panels = Array.from(
    root.querySelectorAll<HTMLElement>("[data-process-panel]"),
  );

  if (!tablist || !tabs.length || tabs.length !== panels.length) {
    return () => controller.abort();
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const timers = new Map<HTMLElement, number>();
  let activeId = "";

  const select = (id: string, animate: boolean) => {
    if (id === activeId) return;

    const selectedTab = tabs.find((tab) => tab.dataset.processTab === id);
    const selectedPanel = panels.find(
      (panel) => panel.dataset.processPanel === id,
    );

    if (!selectedTab || !selectedPanel) return;

    activeId = id;

    tabs.forEach((tab) => {
      const selected = tab === selectedTab;

      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });

    panels.forEach((panel) => {
      const timer = timers.get(panel);

      if (timer !== undefined) {
        window.clearTimeout(timer);
        timers.delete(panel);
      }

      panel.classList.remove("is-entering");
      panel.hidden = panel !== selectedPanel;
    });

    if (animate && !reducedMotion.matches) {
      selectedPanel.classList.add("is-entering");

      timers.set(
        selectedPanel,
        window.setTimeout(() => {
          selectedPanel.classList.remove("is-entering");
          timers.delete(selectedPanel);
        }, 750),
      );
    }
  };

  panels.forEach((panel) => {
    const id = panel.dataset.processPanel;
    const tab = tabs.find((item) => item.dataset.processTab === id);

    if (!tab) return;

    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    panel.tabIndex = 0;
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener(
      "click",
      () => {
        select(tab.dataset.processTab ?? "", true);
      },
      { signal },
    );

    tab.addEventListener(
      "keydown",
      (event) => {
        let target: number;

        switch (event.key) {
          case "ArrowRight":
            target = (index + 1) % tabs.length;
            break;

          case "ArrowLeft":
            target = (index - 1 + tabs.length) % tabs.length;
            break;

          case "Home":
            target = 0;
            break;

          case "End":
            target = tabs.length - 1;
            break;

          default:
            return;
        }

        event.preventDefault();

        const nextTab = tabs[target];

        select(nextTab.dataset.processTab ?? "", true);
        nextTab.focus();
      },
      { signal },
    );
  });

  const initial =
    tabs.find((tab) => tab.getAttribute("aria-selected") === "true") ?? tabs[0];

  select(initial.dataset.processTab ?? "", false);

  tablist.hidden = false;
  root.dataset.processReady = "";

  return () => {
    controller.abort();

    timers.forEach((timer) => window.clearTimeout(timer));
    timers.clear();

    panels.forEach((panel) => {
      panel.hidden = false;
      panel.classList.remove("is-entering");
      panel.removeAttribute("role");
      panel.removeAttribute("aria-labelledby");
      panel.removeAttribute("tabindex");
    });

    tablist.hidden = true;
    delete root.dataset.processReady;
  };
}

let cleanups: Array<() => void> = [];

function destroyProcesses() {
  cleanups.forEach((cleanup) => cleanup());
  cleanups = [];
}

function initProcesses() {
  destroyProcesses();

  document
    .querySelectorAll<HTMLElement>("[data-process]")
    .forEach((root) => cleanups.push(initProcess(root)));
}

initProcesses();

document.addEventListener("astro:page-load", initProcesses);
document.addEventListener("astro:before-swap", destroyProcesses);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    destroyProcesses();
    document.removeEventListener("astro:page-load", initProcesses);
    document.removeEventListener("astro:before-swap", destroyProcesses);
  });
}
