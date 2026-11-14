// src/features/home/components/services/data/services.ts

export type Lang = "pt" | "en";
export type ServiceId = "systems" | "sites" | "apis";

export type Pricing =
  | { type: "custom"; text: string }
  | { type: "tiers"; tiers: { name: string; time: string; price: string }[] };

export type Service = {
  id: ServiceId;
  piece: 1 | 2 | 3;
  label: string;
  today: string; // ADAPTAR: situação do cliente (problema)
  headline: string;
  chips: string[];
  proof: { project: string; text: string };
  pricing: Pricing;
  cta: { label: string; message: string };
  pieceLabel: { outside: string; inside: string };
};

export type ServicesCopy = {
  eyebrow: string;
  title: string;
  description: string;
  ui: {
    today: string;
    proof: string;
    showInside: string;
    showOutside: string;
    lensHint: string;
    lensLabel: string;

  };
  services: Service[];
  closing: {
    text: string;
    cta: string;
    message: string;
    response: string;
  };
};

export const servicesCopy: Record<Lang, ServicesCopy> = {
  pt: {
    eyebrow: "O que posso desenvolver",
    title: "Tecnologia aplicada ao que seu negócio precisa.",
    description:
      "Cada projeto começa com um problema ou uma oportunidade. A solução nasce da sua operação e de quem vai usá-la.",
    ui: {
      today: "Hoje",
      proof: "Já fiz",
      showInside: "Ver por dentro",
      showOutside: "Ver resultado",
      lensHint: "Passe o mouse para ver por dentro",
      lensLabel: "por dentro",
    },
    services: [
      {
        id: "systems",
        piece: 1,
        label: "01 · Sistemas web personalizados",
        today:
          "A operação vive em planilhas, WhatsApp e na memória de quem trabalha.",
        headline: "Sistemas que acompanham a operação do seu negócio.",
        chips: [
          "Painéis administrativos",
          "Sistemas de gestão",
          "Vários perfis de acesso",
          "Cadastros e acompanhamento",
        ],
        proof: {
          project: "Jardim di Berlim",
          text: "corretores, administração e investidores no mesmo sistema, com mapa de 171 lotes.",
        },
        pricing: { type: "custom", text: "Conforme a complexidade" },
        cta: {
          label: "Conversar sobre sistemas",
          message:
            "Olá, Marcos! Vi seu portfólio e quero conversar sobre um sistema web para o meu negócio.",
        },
        pieceLabel: {
          outside:
            "Ilustração de um painel de gestão com mapa de lotes e aprovações pendentes",
          inside:
            "Esquema técnico do painel: perfis de acesso e relações entre as informações do sistema",
        },
      },
      {
        id: "sites",
        piece: 2,
        label: "02 · Sites e landing pages",
        today: "O cliente busca seu nome e encontra um site antigo, ou nada.",
        headline:
          "Uma presença digital que transmite confiança e gera oportunidades.",
        chips: [
          "Sites institucionais",
          "Landing pages",
          "Portais de conteúdo",
          "Páginas de produtos e serviços",
        ],
        proof: {
          project: "Midas",
          text: "site institucional de alto padrão, entregue em 30 dias.",
        },
        pricing: {
          type: "tiers",
          tiers: [
            {
              name: "Landing page",
              time: "a partir de 7 dias",
              price: "R$ 400",
            },
            {
              name: "Site institucional",
              time: "a partir de 15 dias",
              price: "R$ 800",
            },
          ],
        },
        cta: {
          label: "Conversar sobre meu site",
          message:
            "Olá, Marcos! Vi seu portfólio e quero conversar sobre um site ou landing page.",
        },
        pieceLabel: {
          outside: "Ilustração de um site aberto no navegador e no celular",
          inside:
            "Esquema técnico da página: seções, carregamento, SEO e blocos editáveis",
        },
      },
      {
        id: "apis",
        piece: 3,
        label: "03 · APIs e integrações",
        today: "Alguém copia dados de um sistema para outro todos os dias.",
        headline: "Sistemas conectados. Processos mais organizados.",
        chips: [
          "APIs REST",
          "Integração entre sistemas",
          "Serviços externos",
          "Automação de rotinas",
        ],
        proof: {
          project: "PrismaFlow",
          text: "a API de um sistema de gestão para óticas, com várias lojas no mesmo sistema, cada uma com seus próprios dados.",
        },
        pricing: { type: "custom", text: "Conforme a complexidade" },
        cta: {
          label: "Conversar sobre integrações",
          message:
            "Olá, Marcos! Vi seu portfólio e quero conversar sobre uma API ou integração entre sistemas.",
        },
        pieceLabel: {
          outside: "Ilustração de dois sistemas conectados e sincronizados",
          inside:
            "Esquema técnico da conexão: requisição, resposta e dados trafegando entre os sistemas",
        },
      },
    ],
    closing: {
      text: "Não sabe qual escolher? Me conte o problema que a gente descobre juntos.",
      cta: "Contar meu problema",
      message:
        "Olá, Marcos! Vi seu portfólio e quero te contar um problema do meu negócio para entender qual solução faz sentido.",
      response: "Costumo responder em menos de meia hora.",
    },
  },

  en: {
    eyebrow: "What I can build",
    title: "Technology applied to what your business needs.",
    description:
      "Every project starts with a problem or an opportunity. The solution grows from your operation and the people who will use it.",
    ui: {
      today: "Today",
      proof: "Done before",
      showInside: "See inside",
      showOutside: "See result",
      lensHint: "Move your mouse to see inside",
      lensLabel: "inside",
    },
    services: [
      {
        id: "systems",
        piece: 1,
        label: "01 · Custom web systems",
        today:
          "Operations live in spreadsheets, WhatsApp and in people's heads.",
        headline: "Systems that follow how your business actually runs.",
        chips: [
          "Admin panels",
          "Management systems",
          "Multiple access roles",
          "Records and tracking",
        ],
        proof: {
          project: "Jardim di Berlim",
          text: "brokers, admins and investors in the same system, with a map of 171 lots.",
        },
        pricing: { type: "custom", text: "Depends on complexity" },
        cta: {
          label: "Talk about systems",
          message:
            "Hi Marcos! I saw your portfolio and I'd like to talk about a web system for my business.",
        },
        pieceLabel: {
          outside:
            "Illustration of a management panel with a lot map and pending approvals",
          inside:
            "Technical diagram of the panel: access roles and how the data relates",
        },
      },
      {
        id: "sites",
        piece: 2,
        label: "02 · Websites and landing pages",
        today:
          "Customers search your name and find an outdated site, or nothing.",
        headline:
          "A digital presence that builds trust and creates opportunities.",
        chips: [
          "Corporate websites",
          "Landing pages",
          "Content portals",
          "Product and service pages",
        ],
        proof: {
          project: "Midas",
          text: "high-standard corporate website, delivered in 30 days.",
        },
        pricing: {
          type: "tiers",
          tiers: [
            { name: "Landing page", time: "from 7 days", price: "R$ 400" },
            { name: "Corporate site", time: "from 15 days", price: "R$ 800" },
          ],
        },
        cta: {
          label: "Talk about my website",
          message:
            "Hi Marcos! I saw your portfolio and I'd like to talk about a website or landing page.",
        },
        pieceLabel: {
          outside: "Illustration of a website open in a browser and on a phone",
          inside:
            "Technical diagram of the page: sections, loading, SEO and editable blocks",
        },
      },
      {
        id: "apis",
        piece: 3,
        label: "03 · APIs and integrations",
        today: "Someone copies data from one system to another every day.",
        headline: "Connected systems. More organized processes.",
        chips: [
          "REST APIs",
          "System integration",
          "External services",
          "Routine automation",
        ],
        proof: {
          project: "PrismaFlow",
          text: "the API behind a management system for optical shops, with many stores in one system, each with its own data.",
        },
        pricing: { type: "custom", text: "Depends on complexity" },
        cta: {
          label: "Talk about integrations",
          message:
            "Hi Marcos! I saw your portfolio and I'd like to talk about an API or system integration.",
        },
        pieceLabel: {
          outside: "Illustration of two connected, synchronized systems",
          inside:
            "Technical diagram of the connection: request, response and data flowing between systems",
        },
      },
    ],
    closing: {
      text: "Not sure which one fits? Tell me the problem and we'll figure it out together.",
      cta: "Tell me your problem",
      message:
        "Hi Marcos! I saw your portfolio and I'd like to tell you about a problem in my business to see which solution makes sense.",
      response: "I usually reply in under half an hour.",
    },
  },
};
