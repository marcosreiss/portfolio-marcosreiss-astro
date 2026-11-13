// src/features/home/components/credibility/data/credibility.ts

export type Lang = "pt" | "en";

export type CredibilityItem = {
  question: string;
  answer: string;
  proof: {
    project: string;
    launch: string; // YYYY-MM-DD
    note?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    mock?: boolean; // some do build de produção quando false/ausente
  };
};

export type CredibilityCopy = {
  eyebrow: string;
  title: string;
  description: string;
  liveLabel: string; // "no ar há"
  daysUnit: string; // "dias"
  metaProjects: string; // "projetos em destaque"
  metaDays: string; // "dias de operação acumulados"
  items: CredibilityItem[];
  ledgerTitle: string;
  offlineNote: string;
  bridgeText: string;
  bridgeCta: string;
};

/** Projetos do relógio de produção (ordem cronológica). */
export const ledgerProjects = [
  { name: "Gestão Treinamento", launch: "2024-10-16" },
  { name: "Midas", launch: "2025-07-15" },
  { name: "Verto", launch: "2025-10-02" },
  { name: "Jardim di Berlim", launch: "2025-12-24" },
  { name: "Sindjusma", launch: "2026-03-30" },
  { name: "Staff Control", launch: "2026-06-11", private: true },
] as const;

export const credibilityCopy: Record<Lang, CredibilityCopy> = {
  pt: {
    eyebrow: "Projetos reais · Desde 2024",
    title: "Experiência construída em projetos reais.",
    description:
      "Atendi mais de 20 clientes desde 2024, e 10 desses projetos estão no ar hoje. Antes de contratar um desenvolvedor, quase todo mundo tem as mesmas dúvidas. Estas são elas, com o que já entreguei como resposta.",
    liveLabel: "no ar há",
    daysUnit: "dias",
    metaProjects: "projetos em destaque",
    metaDays: "dias de operação acumulados",
    items: [
      {
        question: "E se eu precisar de ajuda depois da entrega?",
        answer:
          "Todo projeto tem 30 dias de suporte gratuito, direto no WhatsApp, e costumo responder em menos de meia hora. Na Gestão Treinamento, desenvolvi um painel simples, sob medida, para gerenciar professores, cursos e categorias. Treinei o uso depois da entrega e, até hoje, quando surge uma dúvida, ele me chama e eu resolvo. Se o cliente quiser continuidade, existe plano mensal ou proposta para melhorias pontuais.",
        proof: { project: "Gestão Treinamento", launch: "2024-10-16" },
      },
      {
        question: "Vou depender de um programador para qualquer mudança?",
        answer:
          "No site do Sindjusma, a equipe do sindicato edita tudo, do menu ao rodapé, pelo próprio painel. Montei como um construtor de páginas porque o conteúdo muda toda semana e esperar por um programador não funciona. Depois da entrega, fiz reuniões para ensinar o uso, e hoje eles publicam cerca de 3 notícias por semana sozinhos.",
        proof: {
          project: "Sindjusma",
          launch: "2026-03-30",
          note: "~3 notícias por semana",
        },
        // MOCK: substituir pelo depoimento real e remover `mock`
        testimonial: {
          quote: "Depoimento do cliente a ser inserido.",
          author: "Nome do cliente",
          role: "Cargo, Organização",
          mock: true,
        },
      },
      {
        question: "Ele entende o meu negócio ou só programa?",
        answer:
          "No Jardim di Berlim, o sistema segue o jeito que a Appia Engenharia realmente vende: o administrador gera um link único, o corretor se cadastra e aguarda aprovação, reserva lotes e a gestão acompanha tudo com relatórios. Um mapa do loteamento mostra, entre 171 lotes, o que está livre, reservado ou vendido. A landing page seguiu o guia de estilo do marketing deles.",
        proof: {
          project: "Jardim di Berlim",
          launch: "2025-12-24",
          note: "171 lotes",
        },
      },
      {
        question: "Vai entregar no prazo e dar resultado?",
        answer:
          "Prefiro menos projetos, bem feitos. Reservo na agenda o tempo de cada um antes de fechar, então não assumo mais do que consigo entregar. A Midas recebeu um site institucional de alto padrão, que reflete sua identidade de tecnologia e negócio, dentro do prazo de 30 dias. O objetivo nunca é só entregar um site ou um sistema: é organizar processos, trazer clientes e ajudar a decidir melhor.",
        proof: {
          project: "Midas",
          launch: "2025-07-15",
          note: "prazo de 30 dias cumprido",
        },
      },
    ],
    ledgerTitle: "Relógio de produção",
    offlineNote:
      "Alguns sites que entreguei saíram do ar quando o cliente decidiu não renovar a hospedagem. O trabalho foi entregue e funcionou.",
    bridgeText:
      "Tudo começa com uma conversa sobre o que você precisa mudar no seu negócio.",
    bridgeCta: "Ver o que posso desenvolver",
  },

  en: {
    eyebrow: "Real projects · Since 2024",
    title: "Experience built on real projects.",
    description:
      "I've worked with 20+ clients since 2024, and 10 of those projects are live today. Before hiring a developer, almost everyone has the same doubts. Here they are, answered with what I've already delivered.",
    liveLabel: "live for",
    daysUnit: "days",
    metaProjects: "featured projects",
    metaDays: "days of operation combined",
    items: [
      {
        question: "What if I need help after delivery?",
        answer:
          "Every project includes 30 days of free support, straight on WhatsApp, and I usually reply in under half an hour. At Gestão Treinamento I built a simple, tailor-made panel to manage teachers, courses and categories. I trained the client after delivery and, to this day, when a question comes up he messages me and I sort it out. If a client wants ongoing help, there is a monthly plan or a quote for one-off improvements.",
        proof: { project: "Gestão Treinamento", launch: "2024-10-16" },
      },
      {
        question: "Will I depend on a developer for every change?",
        answer:
          "On the Sindjusma website, the union's team edits everything, from menu to footer, through their own panel. I built it as a page builder because the content changes every week and waiting for a developer doesn't work. After delivery I ran sessions to teach the team, and today they publish about 3 news posts a week on their own.",
        proof: {
          project: "Sindjusma",
          launch: "2026-03-30",
          note: "~3 posts per week",
        },
        testimonial: {
          quote: "Client testimonial to be added.",
          author: "Client name",
          role: "Role, Organization",
          mock: true,
        },
      },
      {
        question: "Does he understand my business, or just code?",
        answer:
          "At Jardim di Berlim, the system follows how Appia Engenharia actually sells: the admin generates a unique link, the broker signs up and waits for approval, reserves lots, and management tracks everything with reports. A map of the development shows, across 171 lots, what is available, reserved or sold. The landing page followed their marketing style guide.",
        proof: {
          project: "Jardim di Berlim",
          launch: "2025-12-24",
          note: "171 lots",
        },
      },
      {
        question: "Will it be delivered on time, and will it work?",
        answer:
          "I prefer fewer projects, done well. I block time in my schedule for each one before signing, so I don't take on more than I can deliver. Midas received a high-standard corporate website reflecting its technology and business identity, within the 30-day deadline. The goal is never just a website or a system: it is organizing processes, bringing in clients and supporting better decisions.",
        proof: {
          project: "Midas",
          launch: "2025-07-15",
          note: "30-day deadline met",
        },
      },
    ],
    ledgerTitle: "Production clock",
    offlineNote:
      "Some sites I delivered went offline when the client chose not to renew hosting. The work was delivered and it worked.",
    bridgeText:
      "It all starts with a conversation about what you need to change in your business.",
    bridgeCta: "See what I can build",
  },
};
