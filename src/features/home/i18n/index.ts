/* src/features/home/i18n/index.ts */

const translations = {
  "pt-br": {
    hero: {
      eyebrow: "DESENVOLVIMENTO FULL STACK · SOLUÇÕES DIGITAIS",
      title: "Seu negócio precisa de mais do que um site.",
      highlight: "Precisa da solução certa.",
      description:
        "Desenvolvo sistemas web, sites e experiências digitais sob medida para empresas e empreendedores que querem organizar processos, fortalecer sua presença digital e tirar novos projetos do papel.",
      contact: "Conversar sobre meu projeto",
      projects: "Explorar projetos",
      whatsappMessage:
        "Olá! Encontrei seu portfólio e gostaria de conversar sobre um projeto.",
    },

    availability: {
      available: "Disponível para projetos",
      upcoming: "Disponível em breve",
      unavailable: "Indisponível no momento",
    },

    credibility: {
      eyebrow: "EXPERIÊNCIA E CONFIANÇA",
      title: "Experiência construída em projetos reais.",
      description:
        "Mais do que desenvolver interfaces, trabalho na construção de soluções que fazem parte da operação de empresas, organizações e negócios de diferentes segmentos.",
      indicators: {
        clients: {
          value: "20+",
          label: "Clientes atendidos",
        },
        expertise: {
          value: "Full Stack",
          label: "Atuação completa",
        },
        projects: {
          value: "Diversos",
          label: "Projetos e soluções",
        },
        delivery: {
          value: "End-to-end",
          label: "Da concepção à entrega",
        },
      },
      projectsLabel: "Projetos",
      testimonialsLabel: "Depoimentos",
    },

    services: {
      eyebrow: "O QUE EU DESENVOLVO",
      title: "Tecnologia aplicada ao que seu negócio precisa.",
      description:
        "Cada projeto começa com um problema ou uma oportunidade. A solução é construída considerando os objetivos, a operação e as necessidades de quem vai utilizá-la.",

      items: {
        systems: {
          number: "01",
          title: "Sistemas web personalizados",
          highlight: "Sistemas que acompanham a operação do seu negócio.",
          description:
            "Desenvolvimento de plataformas e sistemas administrativos para centralizar informações, organizar processos e facilitar a gestão do negócio.",
          examples: [
            "Painéis administrativos",
            "Sistemas de gestão",
            "Plataformas com múltiplos perfis de acesso",
            "Sistemas de cadastro e acompanhamento operacional",
          ],
        },

        websites: {
          number: "02",
          title: "Sites e landing pages",
          highlight:
            "Uma presença digital que transmite confiança e gera oportunidades.",
          description:
            "Criação de sites institucionais e páginas comerciais com identidade visual profissional, conteúdo estratégico e experiência responsiva.",
          examples: [
            "Sites institucionais",
            "Landing pages comerciais",
            "Portais de conteúdo",
            "Páginas de apresentação de produtos e serviços",
          ],
        },

        integrations: {
          number: "03",
          title: "APIs e integrações",
          highlight: "Sistemas conectados. Processos mais organizados.",
          description:
            "Desenvolvimento e integração de APIs para conectar plataformas, compartilhar informações e reduzir atividades manuais.",
          examples: [
            "APIs REST",
            "Integração entre sistemas",
            "Comunicação com serviços externos",
            "Automatização de fluxos de informação",
          ],
        },
      },
    },

    projects: {
      eyebrow: "PORTFÓLIO SELECIONADO",
      title: "Projetos que transformam necessidades em soluções.",
      description:
        "Cada projeto representa um desafio diferente, decisões técnicas e soluções desenvolvidas para necessidades reais.",
      featuredLabel: "PROJETO EM DESTAQUE",
      viewProject: "Ver projeto",
      viewDetails: "Conhecer projeto",
      viewAll: "Ver todos os projetos",
      technologies: "TECNOLOGIAS",
      role: "PARTICIPAÇÃO",
      items: {
        jardimDiBerlim: {
          slug: "jardim-di-berlim",
          category: "Sistema imobiliário · Plataforma web",
          title:
            "Uma plataforma digital para conectar imobiliárias, investidores e a gestão do empreendimento.",
          description:
            "Desenvolvimento de uma solução que integra a apresentação comercial do empreendimento a um sistema interno de gestão imobiliária, organizando o acompanhamento dos lotes e o fluxo de oportunidades comerciais.",
          highlights: [
            "Landing page premium do empreendimento",
            "Mapa dinâmico do loteamento",
            "Identificação visual de lotes disponíveis, reservados e vendidos",
            "Cadastro e aprovação de imobiliárias",
            "Cadastro de leads pelas imobiliárias",
            "Perfis de administrador, imobiliária e investidor",
          ],
          participation: "Desenvolvimento em dupla · Frontend e Backend",
        },

        sindjus: {
          slug: "sindjus-ma",
          category: "Site institucional · CMS · Plataforma de conteúdo",
          title:
            "Um site institucional com autonomia para evoluir e gerenciar conteúdo.",
          description:
            "Desenvolvimento de uma plataforma institucional moderna, com gerenciamento de conteúdo integrado ao Strapi e uma estrutura flexível para construção e edição de páginas.",
          highlights: [
            "Design institucional moderno",
            "Gerenciamento de notícias",
            "Integração entre Strapi e Next.js",
            "Page Builder baseado em componentes",
            "Dynamic Zones para composição flexível das páginas",
            "Conteúdo editável pelo painel administrativo",
          ],
          participation:
            "Desenvolvimento da plataforma e integração entre frontend e CMS",
        },

        staffControl: {
          slug: "staffcontrol",
          category: "Sistema de gestão · Automação operacional",
          title:
            "Do controle manual em planilhas a uma gestão digital de equipes para eventos.",
          description:
            "Sistema desenvolvido para substituir o gerenciamento manual de colaboradores por planilhas Excel, centralizando inscrições, informações dos eventos e acompanhamento operacional.",
          highlights: [
            "Criação e gerenciamento de eventos",
            "Links públicos para inscrição de colaboradores",
            "Controle de vagas e cotas femininas",
            "Identificação de colaboradores por fotografia",
            "Marcação de presença",
            "Visualização centralizada das informações",
            "Exportação de dados para Excel e PDF",
          ],
          participation: "Desenvolvimento individual · Frontend e Backend",
          benefit:
            "Redução do trabalho manual e maior facilidade para visualizar e administrar informações dos eventos.",
        },

        inflowConnect: {
          slug: "inflow-connect",
          category: "Landing page · Experiência digital",
          title:
            "Uma experiência comercial construída para apresentar valor e gerar oportunidades.",
          description:
            "Landing page desenvolvida para apresentar um serviço de forma estratégica, combinando narrativa comercial, composição visual, animações e elementos interativos.",
          highlights: [
            "Hero com dashboard demonstrativo",
            "Narrativa visual para apresentação do método",
            "Animações e transições",
            "Composição responsiva",
            "Integração com CTA de contato",
          ],
          participation: "Desenvolvimento frontend",
        },
      },
    },

    process: {
      eyebrow: "COMO FUNCIONA",
      title: "Do problema à solução, com clareza em cada etapa.",
      description:
        "Um processo de desenvolvimento organizado para que cada decisão técnica esteja conectada ao objetivo do projeto.",

      steps: {
        understanding: {
          number: "01",
          title: "Entendimento",
          description:
            "Conversar sobre o negócio, identificar necessidades, compreender os problemas e definir objetivos.",
        },
        planning: {
          number: "02",
          title: "Planejamento",
          description:
            "Definir escopo, funcionalidades, prioridades e a abordagem técnica mais adequada.",
        },
        development: {
          number: "03",
          title: "Desenvolvimento",
          description:
            "Construir a solução, validar funcionalidades e acompanhar a evolução do projeto.",
        },
        delivery: {
          number: "04",
          title: "Entrega e evolução",
          description:
            "Realizar os ajustes finais, preparar a publicação e orientar os próximos passos de evolução.",
        },
      },
    },

    about: {
      eyebrow: "SOBRE MIM",
      title: "Tecnologia é o meio. Resolver problemas é o objetivo.",
      name: "Marcos Vinícius Reis",
      role: "Desenvolvedor Full Stack",
      description:
        "Sou Marcos Vinícius Reis, desenvolvedor Full Stack e estudante de Sistemas de Informação.",
      paragraphs: [
        "Atuo no desenvolvimento de soluções digitais, desde sites e experiências comerciais até sistemas web que ajudam empresas a organizar processos e gerenciar informações.",
        "Gosto de compreender o problema antes de pensar na implementação. Acredito que uma boa solução não depende apenas de tecnologia, mas também de decisões bem planejadas, experiência de uso e atenção aos detalhes.",
        "Meu objetivo é construir produtos digitais que façam sentido para quem utiliza e gerem valor para quem investe neles.",
      ],
      locationLabel: "LOCALIZAÇÃO",
      location: "São Luís, Maranhão · Brasil",
      educationLabel: "FORMAÇÃO",
      education: "Sistemas de Informação",
      socialLabel: "ME ENCONTRE",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    testimonials: {
      eyebrow: "DEPOIMENTOS",
      title: "A experiência de quem já trabalhou comigo.",
      description:
        "Cada projeto também é uma relação de confiança, colaboração e compromisso com resultados.",
      viewAll: "Ver todos os depoimentos",
      empty: "Novos depoimentos serão adicionados em breve.",
    },

    contact: {
      eyebrow: "VAMOS CONVERSAR?",
      title: "Tem um projeto em mente? Vamos conversar.",
      description:
        "Se você precisa desenvolver um sistema, criar uma presença digital ou melhorar processos do seu negócio, podemos conversar sobre o que faz sentido para sua necessidade.",
      whatsapp: "Vamos conversar pelo WhatsApp",
      email: "Enviar uma mensagem por e-mail",
      whatsappMessage:
        "Olá! Encontrei seu portfólio e gostaria de conversar sobre um projeto.",
      availability: "Aberto a novas oportunidades",
    },
  },

  en: {
    hero: {
      eyebrow: "FULL STACK DEVELOPMENT · DIGITAL SOLUTIONS",
      title: "Your business needs more than a website.",
      highlight: "It needs the right solution.",
      description:
        "I build custom web systems, websites, and digital experiences for businesses and entrepreneurs looking to streamline processes, strengthen their digital presence, and bring new projects to life.",
      contact: "Let's discuss your project",
      projects: "Explore projects",
      whatsappMessage:
        "Hello! I found your portfolio and would like to discuss a project.",
    },

    availability: {
      available: "Available for projects",
      upcoming: "Available soon",
      unavailable: "Currently unavailable",
    },

    credibility: {
      eyebrow: "EXPERIENCE & TRUST",
      title: "Experience built through real projects.",
      description:
        "Beyond building interfaces, I develop solutions that become part of the operations of businesses, organizations, and companies across different industries.",
      indicators: {
        clients: {
          value: "20+",
          label: "Clients served",
        },
        expertise: {
          value: "Full Stack",
          label: "End-to-end development",
        },
        projects: {
          value: "Various",
          label: "Projects and solutions",
        },
        delivery: {
          value: "End-to-end",
          label: "From concept to delivery",
        },
      },
      projectsLabel: "Projects",
      testimonialsLabel: "Testimonials",
    },

    services: {
      eyebrow: "WHAT I BUILD",
      title: "Technology tailored to your business needs.",
      description:
        "Every project starts with a problem or an opportunity. The solution is built around your goals, operations, and the needs of the people who will use it.",

      items: {
        systems: {
          number: "01",
          title: "Custom web systems",
          highlight: "Systems designed to support your business operations.",
          description:
            "Development of platforms and administrative systems to centralize information, organize processes, and simplify business management.",
          examples: [
            "Administrative dashboards",
            "Management systems",
            "Platforms with multiple access levels",
            "Registration and operational tracking systems",
          ],
        },

        websites: {
          number: "02",
          title: "Websites and landing pages",
          highlight:
            "A digital presence that builds trust and creates opportunities.",
          description:
            "Creation of corporate websites and commercial landing pages with professional visual identity, strategic content, and responsive experiences.",
          examples: [
            "Corporate websites",
            "Commercial landing pages",
            "Content portals",
            "Product and service presentation pages",
          ],
        },

        integrations: {
          number: "03",
          title: "APIs and integrations",
          highlight: "Connected systems. More organized processes.",
          description:
            "Development and integration of APIs to connect platforms, share information, and reduce manual tasks.",
          examples: [
            "REST APIs",
            "System integrations",
            "External service communication",
            "Information workflow automation",
          ],
        },
      },
    },

    projects: {
      eyebrow: "SELECTED WORK",
      title: "Projects that turn needs into solutions.",
      description:
        "Each project represents a different challenge, technical decisions, and solutions built to address real needs.",
      featuredLabel: "FEATURED PROJECT",
      viewProject: "View project",
      viewDetails: "Explore project",
      viewAll: "View all projects",
      technologies: "TECHNOLOGIES",
      role: "MY ROLE",
      items: {
        jardimDiBerlim: {
          slug: "jardim-di-berlim",
          category: "Real estate system · Web platform",
          title:
            "A digital platform connecting real estate agencies, investors, and property management.",
          description:
            "Development of a solution combining the project's commercial presentation with an internal real estate management system, organizing lot tracking and commercial opportunities.",
          highlights: [
            "Premium property landing page",
            "Dynamic subdivision map",
            "Visual identification of available, reserved, and sold lots",
            "Real estate agency registration and approval",
            "Lead registration by agencies",
            "Administrator, agency, and investor profiles",
          ],
          participation: "Collaborative development · Frontend and Backend",
        },

        sindjus: {
          slug: "sindjus-ma",
          category: "Corporate website · CMS · Content platform",
          title:
            "An institutional website with the flexibility to evolve and manage content.",
          description:
            "Development of a modern institutional platform with content management integrated with Strapi and a flexible structure for building and editing pages.",
          highlights: [
            "Modern institutional design",
            "News management",
            "Strapi and Next.js integration",
            "Component-based Page Builder",
            "Dynamic Zones for flexible page composition",
            "Content management through the administrative panel",
          ],
          participation:
            "Institutional platform development and frontend-to-CMS integration",
        },

        staffControl: {
          slug: "staffcontrol",
          category: "Management system · Operational automation",
          title:
            "From manual spreadsheets to digital workforce management for events.",
          description:
            "A system built to replace manual employee management through Excel spreadsheets, centralizing registrations, event information, and operational tracking.",
          highlights: [
            "Event creation and management",
            "Public employee registration links",
            "Vacancy and female quota management",
            "Employee identification through photographs",
            "Attendance tracking",
            "Centralized information",
            "Excel and PDF data exports",
          ],
          participation: "Individual development · Frontend and Backend",
          benefit:
            "Less manual work and an easier way to view and manage event information.",
        },

        inflowConnect: {
          slug: "inflow-connect",
          category: "Landing page · Digital experience",
          title:
            "A commercial experience designed to communicate value and generate opportunities.",
          description:
            "A landing page developed to present a service strategically, combining commercial storytelling, visual composition, animations, and interactive elements.",
          highlights: [
            "Hero section with a demonstrative dashboard",
            "Visual storytelling to present the method",
            "Animations and transitions",
            "Responsive composition",
            "Contact CTA integration",
          ],
          participation: "Frontend development",
        },
      },
    },

    process: {
      eyebrow: "HOW IT WORKS",
      title: "From problem to solution, with clarity at every step.",
      description:
        "An organized development process that connects every technical decision to the project's goals.",

      steps: {
        understanding: {
          number: "01",
          title: "Understanding",
          description:
            "Discuss your business, identify needs, understand challenges, and define objectives.",
        },
        planning: {
          number: "02",
          title: "Planning",
          description:
            "Define scope, features, priorities, and the most suitable technical approach.",
        },
        development: {
          number: "03",
          title: "Development",
          description:
            "Build the solution, validate features, and monitor the project's progress.",
        },
        delivery: {
          number: "04",
          title: "Delivery and evolution",
          description:
            "Complete final adjustments, prepare the release, and guide the next steps for future improvements.",
        },
      },
    },

    about: {
      eyebrow: "ABOUT ME",
      title: "Technology is the means. Solving problems is the goal.",
      name: "Marcos Vinícius Reis",
      role: "Full Stack Developer",
      description:
        "I'm Marcos Vinícius Reis, a Full Stack Developer and Information Systems student.",
      paragraphs: [
        "I work on digital solutions, from websites and commercial experiences to web systems that help businesses organize processes and manage information.",
        "I believe in understanding the problem before thinking about implementation. A good solution depends not only on technology but also on thoughtful decisions, user experience, and attention to detail.",
        "My goal is to build digital products that make sense to the people who use them and create value for those who invest in them.",
      ],
      locationLabel: "LOCATION",
      location: "São Luís, Maranhão · Brazil",
      educationLabel: "EDUCATION",
      education: "Information Systems",
      socialLabel: "FIND ME",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    testimonials: {
      eyebrow: "TESTIMONIALS",
      title: "The experience of those who have worked with me.",
      description:
        "Every project is also a relationship built on trust, collaboration, and commitment to results.",
      viewAll: "View all testimonials",
      empty: "New testimonials will be added soon.",
    },

    contact: {
      eyebrow: "LET'S TALK",
      title: "Have a project in mind? Let's talk.",
      description:
        "If you need to build a system, establish a digital presence, or improve your business processes, let's discuss what makes sense for your needs.",
      whatsapp: "Let's talk on WhatsApp",
      email: "Send an email",
      whatsappMessage:
        "Hello! I found your portfolio and would like to discuss a project.",
      availability: "Open to new opportunities",
    },
  },
} as const;

export type HomeLanguage = keyof typeof translations;
export type HomeTranslations = (typeof translations)[HomeLanguage];

export function getHomeTranslations(lang: string): HomeTranslations {
  return translations[lang === "en" ? "en" : "pt-br"];
}
