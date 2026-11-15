---
title: Sindjus-MA
kind: detailed
category: institutional-site
client: Sindjus-MA
apresentacao:
  subtitle: Site institucional com gestão de conteúdo independente.
  description: >
    Plataforma digital para centralizar sua comunicação institucional e dar autonomia total 
    à sua equipe para publicar notícias e editar páginas. Une identidade visual profissional 
    e estrutura pronta para escalar conforme a sua organização cresce.
presentation:
  title: Sindjus-MA
  subtitle: An institutional website with independent content management and room
    to grow.
  description: >
    A digital platform to centralize institutional communication and give your team full autonomy
     to publish news and edit pages. It combines professional visual consistency with a scalable 
     structure ready to grow with your organization.
caseStudy:
  pt:
    context: >
      O SINDJUS-MA precisava de uma presença digital capaz de acompanhar sua
      comunicação institucional e manter servidores, filiados e visitantes
      informados. A publicação frequente de notícias, a atualização das
      informações sobre as diretorias e a necessidade de manter diferentes
      páginas institucionais tornavam importante contar com uma plataforma que
      pudesse ser administrada pela própria equipe, sem depender constantemente
      de desenvolvedores.
    challenge: >
      Estruturar um site que atendesse às necessidades de comunicação do
      sindicato e, ao mesmo tempo, oferecesse autonomia para atualização dos
      conteúdos. Era necessário facilitar a publicação de notícias, a manutenção
      das informações institucionais e a atualização das páginas, preservando
      uma identidade visual consistente e permitindo que a plataforma
      continuasse evoluindo conforme novas demandas surgissem.
    solution: >
      Foi desenvolvida uma plataforma institucional que reúne notícias,
      informações, páginas e conteúdos do sindicato em um único ambiente. A
      equipe passou a contar com um painel administrativo para publicar
      notícias, atualizar informações e organizar páginas e seus conteúdos de
      forma independente. A solução também contempla a atualização das
      informações das diretorias e foi estruturada para receber novas
      funcionalidades sem exigir a reconstrução do site.
    features:
      - >
        Gestão independente de páginas institucionais, permitindo organizar e
        atualizar conteúdos conforme as necessidades de comunicação do
        sindicato.
      - >
        Publicação de notícias pelo painel administrativo, mantendo a equipe
        responsável pela atualização frequente do site.
      - >
        Gerenciamento das informações das diretorias, incluindo atualização de
        fotografias e dados de seus integrantes.
      - >
        Organização de documentos e informações institucionais para facilitar o
        acesso dos visitantes.
      - >
        Estrutura de navegação integrada às páginas e conteúdos, facilitando a
        organização das informações do sindicato.
      - >
        Gerenciamento de conteúdos de diferentes áreas do site por meio de um
        único ambiente administrativo.
    results:
      - >
        Média de aproximadamente 3 notícias publicadas por semana pela própria
        equipe do sindicato.
      - >
        Conteúdos do site integralmente gerenciáveis pelo painel administrativo,
        sem necessidade de alterações diretamente no código para atualizações
        editoriais.
      - >
        Fotografias dos integrantes de todas as diretorias atualizadas,
        facilitando a manutenção das informações institucionais.
      - >
        Maior autonomia da equipe na manutenção da presença digital, reduzindo a
        dependência de intervenções técnicas para tarefas editoriais do dia a
        dia.
      - >
        Plataforma em evolução contínua, com suporte técnico e planejamento de
        novas funcionalidades conforme as demandas do sindicato.
    role: >
      Responsável pelo desenvolvimento de praticamente toda a solução,
      abrangendo a implementação do frontend, integração com o sistema de
      gerenciamento de conteúdo, estruturação das funcionalidades e decisões de
      arquitetura. Também participo da manutenção e evolução da plataforma,
      oferecendo suporte contínuo por meio de um grupo de WhatsApp e reuniões
      online pontuais para alinhamento de necessidades, acompanhamento e
      planejamento de melhorias.
    architecture: >
      A plataforma utiliza Next.js com App Router no frontend e Strapi como CMS,
      integrados por meio da API REST. A arquitetura de páginas dinâmicas
      utiliza uma coleção centralizada de páginas, identificadas por slug, e uma
      Dynamic Zone que permite combinar componentes reutilizáveis em diferentes
      composições. No frontend, um renderizador central interpreta os
      componentes recebidos do CMS, enquanto interfaces TypeScript mantêm a
      tipagem dos dados. A camada de API centraliza consultas, normalização e
      configuração de populate para mídias e relações. Essa separação entre
      conteúdo, dados e apresentação facilita a manutenção e permite incorporar
      novos componentes e funcionalidades progressivamente.
    challenges:
      - >
        Permitir a criação de diferentes páginas sem desenvolver uma
        implementação exclusiva para cada uma. A solução utiliza rotas dinâmicas
        por slug e composição de páginas por componentes configurados no CMS.
      - >
        Manter a consistência visual mesmo com diferentes combinações de
        conteúdo. Foi estabelecido um conjunto de componentes reutilizáveis e
        padrões visuais compartilhados.
      - >
        Garantir a integração entre conteúdos, imagens e relações do CMS e suas
        respectivas apresentações no frontend. Para isso, foram estruturadas
        consultas específicas e uma configuração centralizada de carregamento de
        dados.
      - >
        Modernizar a plataforma sem interromper as páginas existentes. A
        migração foi organizada de forma gradual, permitindo a convivência entre
        páginas antigas e dinâmicas.
      - >
        Preparar a solução para novas demandas sem comprometer as
        funcionalidades existentes. A arquitetura prioriza componentes
        independentes, tipagem explícita e reutilização de estruturas
        compartilhadas.
  en:
    context: >
      SINDJUS-MA needed a digital presence capable of supporting its
      institutional communication and keeping public servants, members and
      visitors informed. Frequent news publishing, updates to board information
      and the need to maintain multiple institutional pages made it important to
      have a platform managed directly by the organization's team, without
      constant developer involvement.
    challenge: >
      Build a website that met the union's communication needs while giving its
      team greater control over content updates. The platform needed to simplify
      news publishing, maintain institutional information and update pages while
      preserving a consistent visual identity and supporting future growth.
    solution: >
      An institutional platform was developed to bring together the union's
      news, information, pages and content in one place. The team gained access
      to an administrative panel to publish news, update information and
      organize pages independently. The platform also supports updates to
      executive board information and was designed to accommodate new features
      without requiring the website to be rebuilt.
    features:
      - >
        Independent institutional page management, allowing content to be
        organized and updated according to the union's communication needs.
      - >
        News publishing through the administrative panel, keeping the team
        responsible for regular website updates.
      - >
        Executive board information management, including updates to member
        photographs and details.
      - >
        Organization of institutional documents and information to make them
        easier for visitors to access.
      - >
        Integrated navigation across pages and content, improving the
        organization of institutional information.
      - >
        Management of content across different website sections through a single
        administrative environment.
    results:
      - >
        Approximately 3 news articles published per week by the union's own team.
      - >
        All website content manageable through the administrative panel, without
        requiring direct code changes for editorial updates.
      - >
        Photographs of members across all executive boards updated, making
        institutional information easier to maintain.
      - >
        Greater autonomy for the team in maintaining its digital presence,
        reducing the need for technical intervention in everyday editorial
        tasks.
      - >
        An evolving platform supported by ongoing technical assistance and
        future feature planning based on the union's needs.
    role: >
      Responsible for developing practically the entire solution, including
      frontend implementation, CMS integration, functionality development and
      architectural decisions. I also contribute to the platform's ongoing
      maintenance and evolution, providing continuous support through a WhatsApp
      group and occasional online meetings to align requirements, monitor
      progress and plan improvements.
    architecture: >
      The platform uses Next.js with App Router on the frontend and Strapi as
      its CMS, integrated through the REST API. Its dynamic page architecture
      uses a centralized page collection identified by slugs and a Dynamic Zone
      that allows reusable components to be combined into different page
      layouts. On the frontend, a central renderer interprets components
      received from the CMS, while TypeScript interfaces maintain data
      contracts. The API layer centralizes queries, normalization and populate
      configuration for media and relations. This separation of content, data
      and presentation simplifies maintenance and enables new components and
      features to be introduced progressively.
    challenges:
      - >
        Enabling different pages to be created without developing a dedicated
        implementation for each one. The solution uses slug-based dynamic routes
        and page composition through CMS-configured components.
      - >
        Maintaining visual consistency across different content combinations.
        Reusable components and shared visual standards were established.
      - >
        Ensuring proper integration between CMS content, images and
        relationships and their frontend presentation. This required structured
        queries and centralized data-loading configuration.
      - >
        Modernizing the platform without disrupting existing pages. Migration
        was organized incrementally, allowing legacy and dynamic pages to
        coexist.
      - >
        Preparing the solution for future requirements without compromising
        existing functionality. The architecture prioritizes independent
        components, explicit typing and reusable shared structures.
highlight:
  pt:
    outcome: >
      Uma equipe com autonomia para manter notícias, páginas e informações
      institucionais sempre atualizadas.
    metrics:
      - value: "3"
        label: notícias publicadas por semana pela equipe
      - value: 100%
        label: do conteúdo gerenciável pelo painel administrativo
  en:
    outcome: >
      A team empowered to keep news, pages and institutional information up to
      date.
    metrics:
      - value: "3"
        label: news articles published weekly by the team
      - value: 100%
        label: of content manageable through the admin panel
showcase:
  variant: editorial
status: live
featured: true
published: true
stack:
  - Next.js
  - React
  - Strapi
  - TypeScript
  - Tailwind CSS
startDate: 05-12-2025
launchDate: 30-03-2026
thumb:
  desktop: /uploads/sindjusma-capa.png
links:
  liveUrl: https://sindjusma.com.br
gallery:
  - src: /uploads/sindjusma-capa.png
    title: Página inicial
    description: >
      A página inicial reúne os principais conteúdos e informações
      institucionais do sindicato em uma experiência organizada, facilitando o
      acesso dos visitantes às notícias e demais áreas do site.
    alt: Página inicial do site institucional do SINDJUS-MA, com cabeçalho,
      navegação e seções de conteúdo.
  - src: /uploads/sindjusma-cms.png
    title: Gestão de conteúdo
    description: >
      O painel administrativo permite que a equipe organize páginas e atualize
      seus conteúdos de maneira independente, mantendo a comunicação
      institucional sem depender de alterações diretamente no código.
    alt: Painel administrativo do Strapi exibindo a composição de uma página
      institucional por blocos e componentes.
---
