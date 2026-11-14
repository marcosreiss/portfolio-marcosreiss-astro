// src/features/home/components/process/data/process.ts

export type Lang = "pt" | "en";

export type ProcessId = "landing" | "website" | "system";

export type ProcessStep = {
  title: string;
  description: string;
  delivery: string;
};

type ProcessOption = {
  id: ProcessId;
  label: string;
  time: string;
  price: string;
  note: string;
  steps: ProcessStep[];
  message: string;
};

type ProcessCopy = {
  eyebrow: string;
  title: string;
  description: string;
  selectorLabel: string;
  deliveryLabel: string;
  timeLabel: string;
  priceLabel: string;
  stepsLabel: string;
  conversation: {
    title: string;
    description: string;
  };
  agreements: {
    title: string;
    description: string;
  }[];
  cta: string;
  options: ProcessOption[];
};

export const processCopy: Record<Lang, ProcessCopy> = {
  pt: {
    eyebrow: "Como vamos trabalhar",
    title: "Você acompanha o projeto. Não precisa adivinhar o próximo passo.",
    description:
      "Escolha o que pretende desenvolver e veja como saímos da primeira conversa até a entrega.",
    selectorLabel: "Tipo de projeto",
    deliveryLabel: "Você recebe",
    timeLabel: "Prazo inicial",
    priceLabel: "Investimento inicial",
    stepsLabel: "Etapas do projeto",
    conversation: {
      title: "Primeiro, uma conversa sem compromisso.",
      description:
        "Agendamos pelo WhatsApp uma chamada de vídeo gratuita. Geralmente dura de 50 minutos a 1 hora, com o tempo necessário para entender seu negócio. O que conversamos vira um resumo para alinhar os próximos passos.",
    },
    agreements: [
      {
        title: "Como funciona o pagamento?",
        description:
          "O pagamento acompanha o cronograma: cada parcela é feita antes do início da etapa correspondente. Os valores podem ser iguais ou proporcionais ao peso de cada entrega. Tudo fica definido na proposta, antes de começar.",
      },
      {
        title: "E se eu quiser mudar alguma coisa?",
        description:
          "Ajustamos cada funcionalidade dentro do escopo até sua aprovação. Depois de aprovada, alterações e novos pedidos recebem um novo orçamento. Os prazos de retorno são combinados de acordo com o projeto.",
      },
    ],
    cta: "Agendar a primeira conversa",
    options: [
      {
        id: "landing",
        label: "Landing page",
        time: "A partir de 7 dias",
        price: "A partir de R$ 400",
        note: "Prazo e valor finais definidos após o alinhamento do escopo.",
        message:
          "Olá, Marcos! Vi como funciona seu processo e gostaria de agendar uma conversa gratuita sobre uma landing page.",
        steps: [
          {
            title: "Entender a oferta",
            description:
              "Conversamos sobre o que você vende, quem precisa alcançar e qual ação a página deve incentivar.",
            delivery: "Objetivo, público e mensagem principal alinhados.",
          },
          {
            title: "Definir a página",
            description:
              "Organizo as seções, os materiais necessários e o que entra na entrega. Você revisa antes de fecharmos.",
            delivery: "Escopo, prazo, valor e etapas de pagamento.",
          },
          {
            title: "Construir e validar",
            description:
              "Desenvolvo a página e apresento a evolução para validar conteúdo, visual e funcionamento no celular.",
            delivery: "Uma versão para revisar e testar.",
          },
          {
            title: "Publicar e acompanhar",
            description:
              "Faço os ajustes finais e a publicação conforme o combinado. Depois, você conta com 30 dias de suporte gratuito.",
            delivery: "Página publicada e orientações previstas no escopo.",
          },
        ],
      },
      {
        id: "website",
        label: "Site institucional",
        time: "A partir de 15 dias",
        price: "A partir de R$ 800",
        note: "Quantidade de páginas, conteúdo e painel de edição influenciam o escopo.",
        message:
          "Olá, Marcos! Vi como funciona seu processo e gostaria de agendar uma conversa gratuita sobre um site institucional.",
        steps: [
          {
            title: "Conhecer o negócio",
            description:
              "Entendo sua empresa, seu público e o que o site precisa comunicar. Também conversamos sobre quem vai atualizar o conteúdo.",
            delivery: "Necessidades e objetivos registrados.",
          },
          {
            title: "Organizar a estrutura",
            description:
              "Defino páginas, funcionalidades e necessidades de edição, com uma proposta escrita na linguagem do seu negócio.",
            delivery: "Escopo, prazo, valor e responsabilidades definidos.",
          },
          {
            title: "Desenvolver em conjunto",
            description:
              "Construo o site e valido com você as páginas e funcionalidades, incluindo o painel de conteúdo quando contratado.",
            delivery: "Versões para revisar, testar e aprovar.",
          },
          {
            title: "Entregar com autonomia",
            description:
              "Preparo a publicação, os acessos e as orientações combinadas. Quando previsto, faço o treinamento do painel.",
            delivery: "Site publicado e 30 dias de suporte gratuito.",
          },
        ],
      },
      {
        id: "system",
        label: "Sistema personalizado",
        time: "A partir de 30 dias",
        price: "A partir de R$ 1.500",
        note: "Sistemas complexos, APIs e integrações são dimensionados conforme as regras e necessidades do projeto.",
        message:
          "Olá, Marcos! Vi como funciona seu processo e gostaria de agendar uma conversa gratuita sobre um sistema personalizado ou uma integração.",
        steps: [
          {
            title: "Entender a operação",
            description:
              "Conversamos sobre os processos, as pessoas envolvidas e o que precisa melhorar. Você não precisa chegar com tudo definido.",
            delivery: "Problemas, objetivos e prioridades registrados.",
          },
          {
            title: "Combinar antes de construir",
            description:
              "Documento funcionalidades, limites e entregas. Você lê, tira dúvidas e aprova o escopo antes de fecharmos.",
            delivery: "Escopo, cronograma, valor e pagamentos por etapa.",
          },
          {
            title: "Construir por entregas",
            description:
              "Desenvolvo por etapas, documento as decisões e disponibilizo funcionalidades para você testar e aprovar.",
            delivery: "Entregas parciais e acompanhamento direto.",
          },
          {
            title: "Entregar e dar continuidade",
            description:
              "Publicação, documentação, acessos e treinamento seguem o escopo aprovado. Depois dos 30 dias gratuitos, podemos combinar suporte mensal ou melhorias pontuais.",
            delivery: "Solução entregue e próximos passos definidos.",
          },
        ],
      },
    ],
  },

  en: {
    eyebrow: "How we'll work",
    title: "Follow your project without guessing what happens next.",
    description:
      "Choose what you want to build and see how we move from the first conversation to delivery.",
    selectorLabel: "Project type",
    deliveryLabel: "You receive",
    timeLabel: "Starting timeline",
    priceLabel: "Starting investment",
    stepsLabel: "Project stages",
    conversation: {
      title: "First, a conversation with no commitment.",
      description:
        "We schedule a free video call over WhatsApp. It usually takes 50 minutes to an hour, with enough time to understand your business. The conversation becomes a written summary to align the next steps.",
    },
    agreements: [
      {
        title: "How does payment work?",
        description:
          "Payments follow the schedule: each installment is paid before its corresponding stage starts. Amounts may be equal or proportional to the work involved. Everything is agreed in the proposal before we begin.",
      },
      {
        title: "What if I want to change something?",
        description:
          "We refine each feature within the agreed scope until you approve it. After approval, changes and new requests receive a separate quote. Feedback timelines are agreed according to the project.",
      },
    ],
    cta: "Schedule the first conversation",
    options: [
      {
        id: "landing",
        label: "Landing page",
        time: "From 7 days",
        price: "From R$ 400",
        note: "Final timeline and price are defined after agreeing on the scope.",
        message:
          "Hi Marcos! I saw how your process works and would like to schedule a free conversation about a landing page.",
        steps: [
          {
            title: "Understand the offer",
            description:
              "We discuss what you sell, who you need to reach and which action the page should encourage.",
            delivery: "An agreed goal, audience and core message.",
          },
          {
            title: "Define the page",
            description:
              "I organize the sections, required materials and deliverables. You review everything before we agree.",
            delivery: "Scope, timeline, price and payment stages.",
          },
          {
            title: "Build and validate",
            description:
              "I develop the page and share progress to validate the content, design and mobile experience.",
            delivery: "A version to review and test.",
          },
          {
            title: "Publish and support",
            description:
              "I make the final adjustments and publish as agreed. You then receive 30 days of free support.",
            delivery: "A published page and the agreed guidance.",
          },
        ],
      },
      {
        id: "website",
        label: "Business website",
        time: "From 15 days",
        price: "From R$ 800",
        note: "Page count, content and editing tools affect the scope.",
        message:
          "Hi Marcos! I saw how your process works and would like to schedule a free conversation about a business website.",
        steps: [
          {
            title: "Understand the business",
            description:
              "I learn about your company, audience and what the website needs to communicate, including who will update its content.",
            delivery: "Documented needs and goals.",
          },
          {
            title: "Organize the structure",
            description:
              "I define pages, features and editing needs in a written proposal using language that suits your business.",
            delivery: "Agreed scope, timeline, price and responsibilities.",
          },
          {
            title: "Develop together",
            description:
              "I build the website and validate its pages and features with you, including the content panel when included.",
            delivery: "Versions to review, test and approve.",
          },
          {
            title: "Deliver with autonomy",
            description:
              "I prepare publication, access and agreed guidance. Training for the content panel is included when specified.",
            delivery: "A published website and 30 days of free support.",
          },
        ],
      },
      {
        id: "system",
        label: "Custom system",
        time: "From 30 days",
        price: "From R$ 1,500",
        note: "Complex systems, APIs and integrations are scoped according to the project's rules and requirements.",
        message:
          "Hi Marcos! I saw how your process works and would like to schedule a free conversation about a custom system or integration.",
        steps: [
          {
            title: "Understand operations",
            description:
              "We discuss processes, people and what needs to improve. You don't need to arrive with everything already defined.",
            delivery: "Documented problems, goals and priorities.",
          },
          {
            title: "Agree before building",
            description:
              "I document features, boundaries and deliverables. You read, ask questions and approve the scope before we agree.",
            delivery: "Scope, schedule, price and staged payments.",
          },
          {
            title: "Build through milestones",
            description:
              "I develop in stages, document decisions and provide features for you to test and approve.",
            delivery: "Incremental deliveries and direct communication.",
          },
          {
            title: "Deliver and continue",
            description:
              "Publication, documentation, access and training follow the approved scope. After the 30 free days, we can arrange monthly support or individual improvements.",
            delivery: "A delivered solution and agreed next steps.",
          },
        ],
      },
    ],
  },
};
