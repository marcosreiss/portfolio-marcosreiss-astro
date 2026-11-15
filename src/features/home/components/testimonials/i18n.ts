// src/features/home/components/testimonials/i18n.ts

export type Lang = "pt" | "en";

export const testimonialsCopy = {
  pt: {
    eyebrow: "Quem já trabalhou comigo",
    title: "A experiência de quem esteve do outro lado.",
    context: "Contexto do trabalho",
    project: "Conhecer o projeto",
    source: "Consultar depoimento original",
    previous: "Anterior",
    next: "Próximo",
    choose: "Escolher depoimento",
    close: "Fechar lista",
    search: "Buscar por nome, empresa ou contexto",
    selected: "Selecionado",
    empty: "Nenhum depoimento encontrado para essa busca.",
    clear: "Limpar busca",
    navigation: "Navegação dos depoimentos",
    position: "de",
    testimonial: "Depoimento",
    results: "depoimentos encontrados",
  },

  en: {
    eyebrow: "People I've worked with",
    title: "The experience from the other side.",
    context: "Project context",
    project: "Explore the project",
    source: "Read the original testimonial",
    previous: "Previous",
    next: "Next",
    choose: "Choose a testimonial",
    close: "Close list",
    search: "Search by name, company or context",
    selected: "Selected",
    empty: "No testimonials match your search.",
    clear: "Clear search",
    navigation: "Testimonial navigation",
    position: "of",
    testimonial: "Testimonial",
    results: "testimonials found",
  },
} satisfies Record<Lang, Record<string, string>>;
