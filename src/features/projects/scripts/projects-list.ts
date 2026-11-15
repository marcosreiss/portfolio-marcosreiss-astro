// src/features/projects/scripts/projects-list.ts

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

function initCatalog(root: HTMLElement): () => void {
  const controller = new AbortController();
  const { signal } = controller;

  const form = root.querySelector<HTMLFormElement>("[data-project-filters]");
  const search = root.querySelector<HTMLInputElement>("[data-project-search]");
  const category = root.querySelector<HTMLSelectElement>(
    "[data-project-category]",
  );
  const clear = root.querySelector<HTMLButtonElement>("[data-project-clear]");
  const count = root.querySelector<HTMLElement>("[data-project-count]");
  const status = root.querySelector<HTMLElement>("[data-project-status]");
  const empty = root.querySelector<HTMLElement>("[data-project-empty]");

  if (!form || !search || !category) return () => controller.abort();

  const items = Array.from(
    root.querySelectorAll<HTMLElement>("[data-project-item]"),
  ).map((element) => ({
    element,
    category: element.dataset.category,
    search: normalize(element.dataset.search ?? ""),
  }));

  let timer: number | undefined;

  const updateUrl = () => {
    const url = new URL(window.location.href);

    if (search.value.trim()) url.searchParams.set("q", search.value.trim());
    else url.searchParams.delete("q");

    if (category.value !== "all") {
      url.searchParams.set("category", category.value);
    } else {
      url.searchParams.delete("category");
    }

    window.history.replaceState(window.history.state, "", url);
  };

  const apply = (syncUrl: boolean, announce: boolean) => {
    const terms = normalize(search.value).split(/\s+/).filter(Boolean);
    let visible = 0;

    items.forEach((item) => {
      const matchesCategory =
        category.value === "all" || item.category === category.value;

      const matchesSearch = terms.every((term) => item.search.includes(term));
      const matches = matchesCategory && matchesSearch;

      item.element.hidden = !matches;
      if (matches) visible++;
    });

    const message = `${visible} ${root.dataset.resultsLabel ?? ""}`;

    if (count) count.textContent = message;
    if (empty) empty.hidden = visible > 0;

    if (clear) {
      clear.hidden = !search.value && category.value === "all";
    }

    if (status && announce) status.textContent = message;
    if (syncUrl) updateUrl();
  };

  const restore = () => {
    if (timer !== undefined) window.clearTimeout(timer);

    const params = new URL(window.location.href).searchParams;
    search.value = params.get("q") ?? "";

    const requestedCategory = params.get("category");
    const validCategory = Array.from(category.options).some(
      (option) => option.value === requestedCategory,
    );

    category.value = validCategory ? requestedCategory! : "all";
    apply(false, false);
  };

  search.addEventListener(
    "input",
    () => {
      if (timer !== undefined) window.clearTimeout(timer);
      timer = window.setTimeout(() => apply(true, true), 180);
    },
    { signal },
  );

  category.addEventListener("change", () => apply(true, true), { signal });

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      if (timer !== undefined) window.clearTimeout(timer);
      apply(true, true);
    },
    { signal },
  );

  clear?.addEventListener(
    "click",
    () => {
      if (timer !== undefined) window.clearTimeout(timer);

      search.value = "";
      category.value = "all";
      apply(true, true);
      search.focus();
    },
    { signal },
  );

  window.addEventListener("popstate", restore, { signal });

  restore();
  form.hidden = false;

  return () => {
    controller.abort();
    if (timer !== undefined) window.clearTimeout(timer);
  };
}

let cleanups: Array<() => void> = [];

function destroyCatalogs() {
  cleanups.forEach((cleanup) => cleanup());
  cleanups = [];
}

function initCatalogs() {
  destroyCatalogs();

  document
    .querySelectorAll<HTMLElement>("[data-projects-catalog]")
    .forEach((root) => cleanups.push(initCatalog(root)));
}

initCatalogs();

document.addEventListener("astro:page-load", initCatalogs);
document.addEventListener("astro:before-swap", destroyCatalogs);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    destroyCatalogs();
    document.removeEventListener("astro:page-load", initCatalogs);
    document.removeEventListener("astro:before-swap", destroyCatalogs);
  });
}
