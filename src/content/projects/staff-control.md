---
title: StaffControl
kind: detailed
category: web-system
client: Cliente confidencial

apresentacao:
  subtitle: Gestão de equipes freelancers e controle operacional de eventos em uma única plataforma.
  description: Sistema desenvolvido para substituir processos manuais de recrutamento e organização de equipes, centralizando inscrições, informações dos colaboradores e controle de presença.

presentation:
  title: StaffControl
  subtitle: Freelancer workforce management and event operations in one platform.
  description: A system designed to replace manual recruitment and workforce organization processes, centralizing registrations, staff information and attendance tracking.

caseStudy:
  pt:
    context: Uma empresa de segurança para eventos realizava todo o processo de recrutamento e organização de colaboradores freelancers manualmente. A gestão das inscrições, conferência de informações e controle de presença exigia tempo e atenção constantes, tornando especialmente difícil acompanhar a operação durante os eventos.
    challenge: Substituir esse processo manual por uma ferramenta centralizada, simples de operar e acessível pelo celular. O sistema precisava controlar automaticamente prazos, capacidade de equipes e cotas femininas, além de disponibilizar rapidamente as informações e fotografias dos colaboradores para identificação no local do evento.
    solution: Desenvolvimento Full Stack de uma plataforma de gestão de eventos e colaboradores freelancers. Administradores podem criar eventos, definir limites de participantes, estabelecer cotas femininas e configurar prazos de inscrição. Cada evento possui um link público exclusivo para cadastro dos colaboradores. O sistema valida automaticamente o prazo, a disponibilidade de vagas e as cotas antes de aceitar uma inscrição. A área administrativa permite consultar os inscritos, visualizar fotografias, pesquisar colaboradores, registrar presença, adicionar observações sobre a atuação durante o evento e exportar relatórios. A interface foi desenvolvida com abordagem mobile first e experiência semelhante à de um aplicativo nativo, facilitando o uso durante a operação.
    role: Responsável individual por todo o projeto, incluindo arquitetura, desenvolvimento frontend e backend, modelagem do banco de dados, implementação das regras de negócio e experiência mobile first.
    architecture: Aplicação Full Stack desenvolvida em Next.js, com frontend e backend centralizados no mesmo projeto. O backend utiliza endpoints em app/api e Prisma ORM para comunicação com PostgreSQL. O sistema possui uma área administrativa com nível único de acesso e páginas públicas de inscrição vinculadas individualmente a cada evento por meio de slugs. A interface utiliza Tailwind CSS e foi estruturada com abordagem mobile first, priorizando navegação e interação semelhantes às de um aplicativo mobile. A aplicação está hospedada na Vercel, evitando custos adicionais de infraestrutura para o cliente.
    challenges:
      - Digitalizar um processo de recrutamento e organização de equipes que anteriormente era realizado manualmente.
      - Desenvolver uma experiência mobile first adequada ao uso durante a execução dos eventos.
      - Implementar regras automáticas de capacidade, prazo de inscrição e cotas femininas.
      - Garantir que cada formulário público esteja associado exclusivamente ao evento correspondente.
      - Facilitar a identificação dos colaboradores por meio de fotografias e informações pessoais.
      - Centralizar o controle de presença e as observações operacionais em uma única interface.
    results:
      - 12 eventos cadastrados e gerenciados pela plataforma.
      - Até 90 colaboradores gerenciados em um único evento.
      - Inscrições centralizadas por meio de formulários públicos exclusivos para cada evento.
      - Controle automático de prazos, disponibilidade de vagas e cotas femininas.
      - Consulta de informações e fotografias dos colaboradores durante a operação.
      - Substituição do processo manual por uma ferramenta centralizada de gestão.

  en:
    context: A private event security company previously handled freelancer recruitment and workforce organization entirely through manual processes. Managing registrations, checking information and tracking attendance required constant time and attention, making it especially difficult to oversee operations during events.
    challenge: Replacing manual processes with a centralized tool that was simple to operate and accessible on mobile devices. The system needed to automatically manage deadlines, team capacity and female participation quotas, while making staff information and photographs readily available for identification at event locations.
    solution: Full Stack development of an event and freelance workforce management platform. Administrators can create events, define participant limits, establish female participation quotas and configure registration deadlines. Each event receives a unique public registration link. The system automatically validates deadlines, available positions and quotas before accepting registrations. The administrative interface allows users to review registrations, view photographs, search for staff members, record attendance, add performance notes and export reports. The interface follows a mobile-first approach with a native-app-like experience, making it easier to use during event operations.
    role: Sole developer responsible for the entire project, including architecture, frontend and backend development, database modeling, business rules implementation and mobile-first experience.
    architecture: Full Stack application developed with Next.js, with frontend and backend centralized in the same project. The backend uses endpoints in app/api and Prisma ORM to communicate with PostgreSQL. The system includes an administrative area with a single access level and public registration pages individually associated with events through slugs. The interface uses Tailwind CSS and follows a mobile-first approach, prioritizing navigation and interactions similar to a native mobile application. The application is hosted on Vercel, avoiding additional infrastructure costs for the client.
    challenges:
      - Digitizing a workforce recruitment and organization process previously handled manually.
      - Building a mobile-first experience suitable for use during live event operations.
      - Implementing automatic rules for participant capacity, registration deadlines and female participation quotas.
      - Ensuring each public registration form is exclusively associated with its corresponding event.
      - Facilitating staff identification through photographs and personal information.
      - Centralizing attendance tracking and operational notes in a single interface.
    results:
      - 12 events registered and managed through the platform.
      - Up to 90 staff members managed in a single event.
      - Registrations centralized through event-specific public forms.
      - Automatic management of deadlines, available positions and female participation quotas.
      - Access to staff information and photographs during event operations.
      - Replacement of manual processes with a centralized management tool.

highlight:
  pt:
    outcome: Uma operação antes manual transformada em uma plataforma centralizada, acessível pelo celular e preparada para acompanhar eventos em tempo real.
    metrics:
      - label: Eventos gerenciados
        value: "12"
      - label: Colaboradores em um evento
        value: "90"
  en:
    outcome: A previously manual operation transformed into a centralized, mobile-first platform designed to support live event operations.
    metrics:
      - label: Managed events
        value: "12"
      - label: Staff members in one event
        value: "90"

showcase:
  variant: cover

status: private
featured: false
published: true

stack:
  - Next.js
  - React
  - API Routes
  - Prisma ORM
  - PostgreSQL
  - Tailwind CSS
  - Vercel

startDate: 04-06-2026
launchDate: 26-06-2026

thumb:
  desktop: /uploads/staffcontrol-painel.png

gallery:
  - src: /uploads/staffcontrol-painel.png
    title: Painel de eventos
    description: Visão centralizada dos eventos, prazos de inscrição, ocupação de vagas, cotas femininas e links públicos.
    alt: Painel administrativo de gerenciamento de eventos do StaffControl.

  - src: /uploads/staffcontrol-formulario-colaborador.png
    title: Inscrição de colaboradores
    description: Formulário público exclusivo para cada evento, com coleta de dados pessoais, fotografia e informações profissionais.
    alt: Formulário mobile de inscrição de colaboradores freelancers.

  - src: /uploads/staffcontrol-detalhes-evento.png
    title: Operação do evento
    description: Listagem de colaboradores inscritos, consulta de informações, controle de presença e acesso rápido aos dados necessários durante o evento.
    alt: Tela de detalhes de um evento com gerenciamento de colaboradores e presença.

  - src: /uploads/staffcontrol-colaborador-detalhes.png
    title: Ficha do colaborador
    description: Visualização dos dados individuais, fotografia, chave PIX, registro de presença e observações sobre a atuação do freelancer.
    alt: Tela de detalhes de um colaborador no StaffControl.
---
