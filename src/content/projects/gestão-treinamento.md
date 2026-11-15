---
title: Gestão Treinamento
kind: detailed
category: institutional-site
client: Gestão Treinamento

apresentacao:
  subtitle: Uma plataforma de capacitação com gestão própria e foco em conversão.
  description: Desenvolvimento de uma plataforma institucional para comercialização de cursos voltados à administração pública, com catálogo dinâmico, CMS próprio e captação de inscrições.

presentation:
  title: Gestão Treinamento
  subtitle: A training platform with custom management and a focus on conversion.
  description: Development of an institutional platform for selling courses aimed at public administration, featuring a dynamic catalog, custom CMS and registration capture.

caseStudy:
  pt:
    context: A Gestão Treinamento precisava de uma presença digital capaz de apresentar seu portfólio de capacitações, fortalecer sua atuação no mercado de treinamento para a administração pública e facilitar a captação de novas inscrições.
    challenge: Desenvolver uma solução que unisse apresentação institucional, catálogo de cursos e captação de inscrições, oferecendo autonomia de gerenciamento para uma equipe com pouca familiaridade com tecnologia. O desafio também envolvia construir uma experiência administrativa simples sem depender de um CMS externo.
    solution: Desenvolvimento Full Stack de uma plataforma institucional com catálogo de cursos, páginas individuais, professores, categorias e formulário de inscrição. Foi desenvolvido um CMS próprio dentro do mesmo projeto Next.js, com interface simplificada para gerenciamento dos conteúdos. O backend utiliza rotas de API do Next.js, Prisma ORM e PostgreSQL para persistência dos dados. O armazenamento de arquivos é realizado pelo Cloudflare R2. A experiência visual conta com animações implementadas utilizando Framer Motion.
    role: Responsável individual por todo o projeto, desde a estruturação da solução até o desenvolvimento frontend, backend, CMS próprio, modelagem e integração com banco de dados e armazenamento de arquivos.
    architecture: Aplicação Full Stack centralizada em um único projeto Next.js. O frontend apresenta as páginas institucionais, catálogo e detalhes dos cursos. O backend é implementado por meio de endpoints em app/api, utilizando Prisma ORM para comunicação com o PostgreSQL. O CMS próprio compartilha a mesma aplicação e permite administrar cursos, professores e categorias. O Cloudflare R2 é utilizado para armazenamento de arquivos. Framer Motion é utilizado para animações e transições da interface.
    challenges:
      - Criar um CMS próprio com experiência simplificada para usuários com pouca familiaridade tecnológica.
      - Integrar frontend, endpoints de API e persistência de dados em uma única aplicação.
      - Estruturar o gerenciamento de cursos, professores e categorias para alimentar dinamicamente o catálogo público.
      - Implementar o armazenamento de arquivos utilizando Cloudflare R2.
      - Construir uma experiência visual responsiva e com animações sem comprometer a navegação.
    results:
      - 56 cursos cadastrados e disponíveis na plataforma.
      - 22 professores apresentados no catálogo.
      - Mais de 10 inscrições recebidas mensalmente por meio do site.
      - CMS próprio que permite ao cliente gerenciar conteúdos sem depender de alterações no código.
      - Plataforma publicada e utilizada na operação comercial da empresa.

  en:
    context: Gestão Treinamento needed a digital presence capable of showcasing its training portfolio, strengthening its position in the public administration training market and facilitating new registrations.
    challenge: Building a solution that combined institutional presentation, a course catalog and registration capture while providing management autonomy to a team with limited technical experience. The project also required a simple administrative experience without relying on an external CMS.
    solution: Full Stack development of an institutional platform featuring a course catalog, individual course pages, instructors, categories and a registration form. A custom CMS was developed within the same Next.js project, with a simplified interface for content management. The backend uses Next.js API routes, Prisma ORM and PostgreSQL for data persistence. File storage is handled by Cloudflare R2. The visual experience includes animations implemented with Framer Motion.
    role: Sole developer responsible for the entire project, from solution architecture to frontend and backend development, custom CMS implementation, data modeling, database integration and file storage.
    architecture: Full Stack application centralized in a single Next.js project. The frontend provides institutional pages, the course catalog and individual course pages. The backend is implemented through endpoints in app/api, using Prisma ORM to communicate with PostgreSQL. The custom CMS shares the same application and manages courses, instructors and categories. Cloudflare R2 handles file storage. Framer Motion is used for interface animations and transitions.
    challenges:
      - Building a custom CMS with a simplified experience for users with limited technical knowledge.
      - Integrating the frontend, API endpoints and data persistence within a single application.
      - Structuring course, instructor and category management to dynamically power the public catalog.
      - Implementing file storage through Cloudflare R2.
      - Creating a responsive visual experience with animations without compromising navigation.
    results:
      - 56 courses registered and available on the platform.
      - 22 instructors featured in the catalog.
      - More than 10 registrations received monthly through the website.
      - Custom CMS allowing the client to manage content without code changes.
      - Published platform actively supporting the company's commercial operations.

highlight:
  pt:
    outcome: Uma plataforma de capacitação com gestão simplificada, catálogo estruturado e captação recorrente de inscrições.
    metrics:
      - label: Cursos cadastrados
        value: "56"
      - label: Professores
        value: "22"
      - label: Inscrições mensais
        value: "+10"
  en:
    outcome: A training platform with simplified management, a structured catalog and recurring registration capture.
    metrics:
      - label: Registered courses
        value: "56"
      - label: Instructors
        value: "22"
      - label: Monthly registrations
        value: "+10"

showcase:
  variant: cover

status: live
featured: false
published: true

stack:
  - Next.js
  - React
  - API Routes
  - Prisma ORM
  - PostgreSQL
  - Framer Motion
  - Cloudflare R2

startDate: 16-10-2024
launchDate: 20-11-2024

thumb:
  desktop: /uploads/gt-capa.png

links:
  liveUrl: https://gestaotreinamento.com.br/

gallery:
  - src: /uploads/gt-cursos.png
    title: Catálogo de cursos
    description: Vitrine dinâmica de capacitações com apresentação do portfólio de cursos disponíveis.
    alt: Página de catálogo de cursos da Gestão Treinamento.

  - src: /uploads/gt-in-company.png
    title: Soluções de treinamento In Company
    description: Página dedicada à apresentação de treinamentos personalizados para empresas e órgãos públicos.
    alt: Página de apresentação dos treinamentos In Company.

  - src: /uploads/gt-painel.png
    title: CMS personalizado
    description: Painel administrativo integrado à aplicação para gerenciamento de cursos, professores e categorias.
    alt: Painel administrativo da Gestão Treinamento.
---
