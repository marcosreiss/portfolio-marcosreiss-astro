export const languages = {
  "pt-br": "Português",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "pt-br";

export const ui = {
  "pt-br": {
    nav: {
      home: "Início",
      projects: "Projetos",
      about: "Sobre mim",
      contact: "Contato",
      talk: "Vamos conversar",
      switchLanguage: "Mudar para inglês",
    },
    hero: {
      eyebrow: "DESENVOLVIMENTO FULL STACK · SOLUÇÕES DIGITAIS",
      title: "Seu negócio precisa de mais do que um site.",
      highlight: "Precisa da solução certa.",
      description:
        "Desenvolvo sistemas web, sites e experiências digitais sob medida para empresas e empreendedores que querem organizar processos, fortalecer sua presença digital e tirar novos projetos do papel.",
      contact: "Conversar sobre meu projeto",
      projects: "Explorar projetos",
      portfolio: "PORTFÓLIO",
      location: "BRASIL · SÃO LUÍS, MA",
    },
    services: {
      eyebrow: "01 / O QUE EU FAÇO",
      title: "Tecnologia aplicada a",
      highlight: "problemas reais.",
      items: [
        {
          title: "Sites e landing pages",
          description:
            "Presença digital profissional, experiências responsivas e páginas focadas em conversão.",
        },
        {
          title: "Sistemas web",
          description:
            "Aplicações personalizadas para resolver problemas reais e otimizar processos.",
        },
        {
          title: "APIs e integrações",
          description:
            "Backends, integrações entre plataformas e automações para conectar seus sistemas.",
        },
        {
          title: "Plataformas digitais",
          description:
            "Soluções escaláveis, painéis administrativos e produtos digitais sob medida.",
        },
      ],
    },
    projects: {
      eyebrow: "02 / TRABALHOS SELECIONADOS",
      title: "Projetos que",
      highlight: "ganham vida.",
      count: "PROJETOS",
      caseStudy: "ESTUDO DE CASO",
      external: "PROJETO EXTERNO",
      viewCase: "Ver estudo de caso",
      visit: "Visitar projeto",
      viewAll: "Ver todos os projetos",
      listingEyebrow: "PORTFÓLIO / PROJETOS",
      listingTitle: "Ideias transformadas em",
      listingHighlight: "projetos reais.",
      listingDescription:
        "Uma seleção de aplicações, plataformas e experiências digitais desenvolvidas para resolver problemas e gerar valor.",
      allProjects: "TODOS OS PROJETOS",
      results: "RESULTADOS",
      empty: "Nenhum projeto publicado no momento.",
      back: "Voltar para o início",
      backToProjects: "Todos os projetos",
      aboutProject: "SOBRE O PROJETO",
      gallery: "GALERIA DO PROJETO",
      galleryTitle: "Detalhes da implementação",
      period: "PERÍODO",
      technologies: "TECNOLOGIAS",
      access: "Acessar projeto",
      repository: "Ver repositório",
      explore: "Explorar outros projetos",
      unavailable: "Informações sobre este projeto serão adicionadas em breve.",
    },
    about: {
      eyebrow: "03 / SOBRE MIM",
      title: "Mais do que escrever código, gosto de entender",
      highlight: "o problema que precisa ser resolvido.",
      paragraph1:
        "Sou desenvolvedor Full Stack, com experiência no desenvolvimento de aplicações web, APIs e soluções digitais. Minha atuação envolve diferentes etapas do desenvolvimento, desde a compreensão das necessidades até a implementação e evolução dos sistemas.",
      paragraph2:
        "Atualmente, concilio minha trajetória profissional com a formação em Sistemas de Informação no IFMA.",
      resume: "Conhecer meu currículo",
    },
    stack: {
      eyebrow: "04 / FERRAMENTAS",
      title: "Minha caixa de",
      highlight: "ferramentas.",
    },
    experience: {
      eyebrow: "05 / TRAJETÓRIA",
      title: "Experiência construída",
      highlight: "na prática.",
      professional: "EXPERIÊNCIA PROFISSIONAL",
      description:
        "Atuação no desenvolvimento de aplicações e soluções tecnológicas, trabalhando com tecnologias do ecossistema Java e JavaScript.",
    },
    contact: {
      eyebrow: "06 / PRÓXIMO PROJETO",
      title: "Tem uma ideia? Vamos transformar em",
      highlight: "realidade.",
      description:
        "Estou aberto a conversar sobre projetos, oportunidades e desafios interessantes.",
      cta: "Iniciar uma conversa",
    },
    footer: {
      description: "Construindo experiências digitais com propósito.",
      tagline: "Projetado e desenvolvido com cuidado.",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About me",
      contact: "Contact",
      talk: "Let's talk",
      switchLanguage: "Switch to Portuguese",
    },
    hero: {
      eyebrow: "FULL STACK DEVELOPMENT · DIGITAL SOLUTIONS",
      title: "Your business needs more than a website.",
      highlight: "It needs the right solution.",
      description:
        "I build custom web systems, websites, and digital experiences for businesses and entrepreneurs looking to streamline processes, strengthen their digital presence, and bring new projects to life.",
      contact: "Let's discuss your project",
      projects: "Explore projects",
      portfolio: "PORTFOLIO",
      location: "BRAZIL · SÃO LUÍS, MA",
    },
    services: {
      eyebrow: "01 / WHAT I DO",
      title: "Technology applied to",
      highlight: "real problems.",
      items: [
        {
          title: "Websites and landing pages",
          description:
            "Professional digital presence, responsive experiences, and conversion-focused pages.",
        },
        {
          title: "Web applications",
          description:
            "Custom applications designed to solve real problems and optimize processes.",
        },
        {
          title: "APIs and integrations",
          description:
            "Backends, platform integrations, and automations that connect your systems.",
        },
        {
          title: "Digital platforms",
          description:
            "Scalable solutions, administrative dashboards, and tailor-made digital products.",
        },
      ],
    },
    projects: {
      eyebrow: "02 / SELECTED WORK",
      title: "Projects brought",
      highlight: "to life.",
      count: "PROJECTS",
      caseStudy: "CASE STUDY",
      external: "EXTERNAL PROJECT",
      viewCase: "View case study",
      visit: "Visit project",
      viewAll: "View all projects",
      listingEyebrow: "PORTFOLIO / PROJECTS",
      listingTitle: "Ideas turned into",
      listingHighlight: "real projects.",
      listingDescription:
        "A selection of applications, platforms, and digital experiences built to solve problems and create value.",
      allProjects: "ALL PROJECTS",
      results: "RESULTS",
      empty: "No published projects at the moment.",
      back: "Back to home",
      backToProjects: "All projects",
      aboutProject: "ABOUT THE PROJECT",
      gallery: "PROJECT GALLERY",
      galleryTitle: "Implementation details",
      period: "PERIOD",
      technologies: "TECHNOLOGIES",
      access: "Visit project",
      repository: "View repository",
      explore: "Explore other projects",
      unavailable: "Information about this project will be added soon.",
    },
    about: {
      eyebrow: "03 / ABOUT ME",
      title: "More than writing code, I enjoy understanding",
      highlight: "the problem that needs to be solved.",
      paragraph1:
        "I'm a Full Stack Developer with experience building web applications, APIs, and digital solutions. My work covers different stages of development, from understanding requirements to implementing and evolving systems.",
      paragraph2:
        "I currently combine my professional journey with a degree in Information Systems at IFMA.",
      resume: "View my resume",
    },
    stack: {
      eyebrow: "04 / TOOLBOX",
      title: "My technology",
      highlight: "toolbox.",
    },
    experience: {
      eyebrow: "05 / JOURNEY",
      title: "Experience built",
      highlight: "through practice.",
      professional: "PROFESSIONAL EXPERIENCE",
      description:
        "Working on the development of applications and technology solutions using tools from the Java and JavaScript ecosystems.",
    },
    contact: {
      eyebrow: "06 / NEXT PROJECT",
      title: "Have an idea? Let's turn it into",
      highlight: "reality.",
      description:
        "I'm open to discussing projects, opportunities, and interesting challenges.",
      cta: "Start a conversation",
    },
    footer: {
      description: "Building digital experiences with purpose.",
      tagline: "Designed and developed with care.",
    },
  },
} as const;
