// src/features/home/components/testimonials/scripts/testimonials.ts

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

function initTestimonials(root: HTMLElement): () => void {
  const controller = new AbortController();
  const { signal } = controller;

  const slides = Array.from(
    root.querySelectorAll<HTMLElement>("[data-testimonial]"),
  );

  const browser = root.querySelector<HTMLElement>("[data-testimonial-browser]");

  const previous = root.querySelector<HTMLButtonElement>(
    "[data-testimonial-previous]",
  );

  const next = root.querySelector<HTMLButtonElement>("[data-testimonial-next]");

  const position = root.querySelector<HTMLElement>(
    "[data-testimonial-position]",
  );

  const pickerToggle = root.querySelector<HTMLButtonElement>(
    "[data-testimonial-picker-toggle]",
  );

  const pickerLabel = root.querySelector<HTMLElement>(
    "[data-testimonial-picker-label]",
  );

  const picker = root.querySelector<HTMLElement>("[data-testimonial-picker]");

  const search = root.querySelector<HTMLInputElement>(
    "[data-testimonial-search]",
  );

  const clear = root.querySelector<HTMLButtonElement>(
    "[data-testimonial-clear]",
  );

  const empty = root.querySelector<HTMLElement>("[data-testimonial-empty]");

  const searchStatus = root.querySelector<HTMLElement>(
    "[data-testimonial-search-status]",
  );

  const status = root.querySelector<HTMLElement>("[data-testimonial-status]");

  const options = Array.from(
    root.querySelectorAll<HTMLElement>("[data-testimonial-option]"),
  );

  const selectionButtons = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-testimonial-select]"),
  );

  if (slides.length <= 1 || !browser || !picker || !pickerToggle) {
    return () => controller.abort();
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const searchIndex = options.map((element) => ({
    element,
    text: normalize(element.dataset.searchText ?? ""),
  }));

  let activeIndex = 0;
  let animationTimer: number | undefined;
  let searchTimer: number | undefined;

  const filterOptions = (announce = true) => {
    const query = normalize(search?.value ?? "");
    let matches = 0;

    searchIndex.forEach(({ element, text }) => {
      const visible = !query || text.includes(query);

      element.hidden = !visible;
      if (visible) matches++;
    });

    if (clear) clear.hidden = query.length === 0;
    if (empty) empty.hidden = matches > 0;

    if (searchTimer !== undefined) {
      window.clearTimeout(searchTimer);
    }

    if (searchStatus) {
      if (!announce) {
        searchStatus.textContent = "";
      } else {
        searchTimer = window.setTimeout(() => {
          searchStatus.textContent = `${matches} ${root.dataset.resultsLabel ?? ""}`;
        }, 200);
      }
    }
  };

  const setPicker = (open: boolean) => {
    picker.hidden = !open;
    pickerToggle.setAttribute("aria-expanded", String(open));

    if (pickerLabel) {
      pickerLabel.textContent = open
        ? (root.dataset.closeLabel ?? "")
        : (root.dataset.chooseLabel ?? "");
    }

    if (!open) return;

    if (search) search.value = "";
    filterOptions(false);

    const currentButton = selectionButtons[activeIndex];

    if (search) {
      search.focus();
    } else {
      currentButton?.focus();
    }

    // Mantém a opção atual acessível dentro da lista,
    // sem deslocar a página inteira.
    const list = currentButton?.closest<HTMLElement>(".tm-options");

    if (list && currentButton) {
      list.scrollTop = Math.max(0, currentButton.offsetTop - list.offsetTop);
    }
  };

  const updateControls = () => {
    if (previous) previous.disabled = activeIndex === 0;
    if (next) next.disabled = activeIndex === slides.length - 1;

    if (position) {
      position.textContent = String(activeIndex + 1).padStart(2, "0");
    }

    selectionButtons.forEach((button, index) => {
      if (index === activeIndex) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  };

  const show = (
    index: number,
    options: {
      animate?: boolean;
      announce?: boolean;
      focusAuthor?: boolean;
    } = {},
  ) => {
    if (index < 0 || index >= slides.length) return;

    if (animationTimer !== undefined) {
      window.clearTimeout(animationTimer);
    }

    const changed = index !== activeIndex;
    activeIndex = index;

    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== index;
      slide.classList.remove("is-entering");
    });

    const active = slides[index];

    updateControls();

    if (options.animate && changed && !reducedMotion.matches) {
      active.classList.add("is-entering");

      animationTimer = window.setTimeout(() => {
        active.classList.remove("is-entering");
      }, 350);
    }

    if (options.announce && status) {
      status.textContent =
        `${root.dataset.announcementLabel ?? ""} ` +
        `${index + 1} ${root.dataset.positionWord ?? ""} ` +
        `${slides.length}: ${active.dataset.author ?? ""}`;
    }

    if (options.focusAuthor) {
      const author = active.querySelector<HTMLElement>(
        "[data-testimonial-author]",
      );

      author?.focus({ preventScroll: true });

      // Selecionar pela lista é uma navegação explícita:
      // reposiciona no relato escolhido, sem animação de rolagem.
      author?.scrollIntoView({
        block: "center",
        behavior: "instant",
      });
    }
  };

  previous?.addEventListener(
    "click",
    () => {
      show(activeIndex - 1, {
        animate: true,
        announce: true,
      });
    },
    { signal },
  );

  next?.addEventListener(
    "click",
    () => {
      show(activeIndex + 1, {
        animate: true,
        announce: true,
      });
    },
    { signal },
  );

  pickerToggle.addEventListener("click", () => setPicker(Boolean(picker.hidden)), {
    signal,
  });

  selectionButtons.forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        const index = Number(button.dataset.testimonialSelect);

        if (!Number.isInteger(index)) return;

        setPicker(false);

        show(index, {
          animate: true,
          focusAuthor: true,
        });
      },
      { signal },
    );
  });

  search?.addEventListener("input", () => filterOptions(), { signal });

  clear?.addEventListener(
    "click",
    () => {
      if (search) {
        search.value = "";
        search.focus();
      }

      filterOptions();
    },
    { signal },
  );

  picker.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      setPicker(false);
      pickerToggle.focus();
    },
    { signal },
  );

  root.dataset.testimonialsReady = "";
  browser.hidden = false;

  show(0);

  return () => {
    controller.abort();

    if (animationTimer !== undefined) {
      window.clearTimeout(animationTimer);
    }

    if (searchTimer !== undefined) {
      window.clearTimeout(searchTimer);
    }

    slides.forEach((slide) => {
      slide.hidden = false;
      slide.classList.remove("is-entering");
    });

    options.forEach((option) => {
      option.hidden = false;
    });

    browser.hidden = true;
    picker.hidden = true;

    if (status) status.textContent = "";
    if (searchStatus) searchStatus.textContent = "";

    delete root.dataset.testimonialsReady;
  };
}

let cleanups: Array<() => void> = [];

function destroyTestimonials() {
  cleanups.forEach((cleanup) => cleanup());
  cleanups = [];
}

function initAllTestimonials() {
  destroyTestimonials();

  document
    .querySelectorAll<HTMLElement>("[data-testimonials]")
    .forEach((root) => {
      cleanups.push(initTestimonials(root));
    });
}

initAllTestimonials();

document.addEventListener("astro:page-load", initAllTestimonials);
document.addEventListener("astro:before-swap", destroyTestimonials);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    destroyTestimonials();

    document.removeEventListener("astro:page-load", initAllTestimonials);

    document.removeEventListener("astro:before-swap", destroyTestimonials);
  });
}
