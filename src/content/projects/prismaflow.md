---
title: PrismaFlow
kind: detailed
category: saas-platform

apresentacao:
  subtitle: Gestão completa para pequenas óticas.
  description: >
    Um sistema de gestão desenvolvido para micro e pequenas óticas
    que precisam organizar clientes, estoque, vendas e financeiro
    sem depender de plataformas complexas e caras.

presentation:
  title: PrismaFlow
  subtitle: Complete management for small optical shops.
  description: >
    A management system built for small optical businesses
    looking to organize customers, inventory, sales and finances
    without relying on expensive and overly complex platforms.

caseStudy:
  pt:
    context: >
      Micro e pequenas óticas precisam administrar diferentes
      áreas do negócio, desde o relacionamento com clientes
      até o controle financeiro e de estoque. Muitas vezes,
      essas atividades são realizadas por meio de controles
      manuais ou sistemas que não atendem adequadamente às
      necessidades do negócio, seja pela falta de funcionalidades
      essenciais ou pelo excesso de complexidade e custo.

    challenge: >
      Criar uma solução acessível e completa para a realidade
      de pequenas óticas, reunindo as principais atividades
      da operação sem reproduzir a complexidade de plataformas
      empresariais maiores. A aplicação também precisava atender
      diferentes empresas de forma independente, permitindo
      que cada uma gerenciasse suas próprias filiais, usuários
      e informações.

    solution: >
      Foi desenvolvido o PrismaFlow, um SaaS de gestão que reúne
      as principais operações de uma ótica em uma única plataforma.
      O sistema permite administrar clientes, produtos, estoque,
      atendimentos, vendas, pagamentos, despesas e indicadores
      financeiros. A proposta é oferecer os recursos necessários
      para uma gestão organizada e eficiente, com uma experiência
      adequada à realidade de micro e pequenas empresas.
      Cada ótica possui seu próprio ambiente de gestão, podendo
      administrar diferentes filiais e controlar os acessos
      de seus colaboradores.

    features:
      - >
        Cadastro de clientes com histórico de compras,
        atendimentos e informações relevantes para o relacionamento.
      - >
        Gerenciamento de produtos, marcas e estoque,
        facilitando o controle dos itens comercializados.
      - >
        Cadastro de serviços ópticos, como ajustes,
        consertos e demais serviços oferecidos pela ótica.
      - >
        Gestão de atendimentos e vendas com registro de produtos,
        serviços, receitas e informações específicas das armações.
      - >
        Controle de pagamentos e recebimentos, incluindo
        diferentes métodos e condições de parcelamento.
      - >
        Gerenciamento de despesas para organizar os compromissos
        financeiros da empresa.
      - >
        Controle de receitas ópticas, com acompanhamento
        de prescrições e identificação de receitas vencidas.
      - >
        Dashboard gerencial com indicadores de vendas,
        pagamentos, produtos e clientes.
      - >
        Gestão de múltiplas filiais, permitindo organizar
        diferentes unidades de uma mesma ótica.
      - >
        Administração de usuários e permissões, adequando
        os acessos às responsabilidades de cada colaborador.

    results:
      - >
        Duas empresas independentes utilizando a plataforma,
        cada uma com seu próprio ambiente de gestão.
      - >
        Aproximadamente 7.500 clientes cadastrados nas duas
        óticas, reunindo informações e históricos em um
        ambiente centralizado.
      - >
        Centralização das principais atividades administrativas,
        comerciais e financeiras em uma única plataforma.
      - >
        Organização do relacionamento com clientes por meio
        do histórico de compras, atendimentos e prescrições.
      - >
        Maior visibilidade da operação por meio de indicadores
        gerenciais e financeiros.

    role: >
      Responsável individual por todo o desenvolvimento do
      PrismaFlow, desde a estruturação da solução até a
      implementação do frontend e backend. Atuação na definição
      da arquitetura, modelagem de dados, desenvolvimento das
      funcionalidades, regras de negócio, autenticação,
      controle de permissões, integração entre as aplicações
      e organização dos módulos do sistema.

    architecture: >
      O PrismaFlow foi desenvolvido como uma aplicação SaaS
      com backend em Node.js, Express e TypeScript, utilizando
      Prisma ORM para comunicação com MySQL. A arquitetura
      é organizada por módulos de domínio, separando rotas,
      controllers, services, repositories e DTOs. O isolamento
      multi-tenant garante a separação dos dados de cada empresa,
      enquanto a estrutura multi-branch permite administrar
      diferentes filiais dentro de um mesmo tenant. A autenticação
      utiliza JWT e o controle de acesso é baseado em RBAC,
      considerando perfis e escopos de atuação. A aplicação
      também possui auditoria de operações, validação de dados,
      respostas padronizadas e listagens paginadas. No frontend,
      a organização modular agrupa páginas, hooks, controllers
      e componentes por domínio, facilitando manutenção e
      evolução independente das funcionalidades.

    challenges:
      - >
        Atender diferentes empresas em uma única aplicação
        sem misturar suas informações. Foi implementada uma
        arquitetura multi-tenant com isolamento dos dados
        por empresa.
      - >
        Permitir que uma mesma empresa administre várias filiais
        com diferentes responsabilidades. A estrutura multi-branch
        associa usuários e operações às respectivas unidades.
      - >
        Controlar o acesso de administradores, gerentes e
        colaboradores. Foi implementado um modelo de permissões
        baseado em papéis, com restrições de acesso conforme
        o perfil e a filial do usuário.
      - >
        Organizar diferentes operações comerciais e financeiras
        sem concentrar todas as regras em uma única camada.
        A aplicação foi dividida em módulos de domínio,
        com responsabilidades separadas entre controllers,
        services e repositories.
      - >
        Garantir a rastreabilidade das operações realizadas
        pelos usuários. Foi implementada uma estrutura de
        auditoria que registra quem criou e atualizou os dados.
      - >
        Manter uma experiência de gestão completa sem tornar
        a utilização excessivamente complexa. A organização
        por módulos permite apresentar as funcionalidades
        de acordo com cada área da operação.

  en:
    context: >
      Small optical businesses need to manage several areas
      of their operations, from customer relationships to
      inventory and financial control. These activities are
      often handled through manual processes or systems that
      do not properly match their needs, either because
      essential features are missing or because the platforms
      are too complex and expensive.

    challenge: >
      Build an accessible and comprehensive solution for
      small optical businesses, bringing together their main
      operations without reproducing the complexity of larger
      enterprise platforms. The application also needed to
      serve multiple independent businesses, allowing each
      one to manage its own branches, users and information.

    solution: >
      PrismaFlow was developed as a SaaS management platform
      that brings together the main operations of an optical
      shop. It allows businesses to manage customers, products,
      inventory, appointments, sales, payments, expenses and
      financial indicators. Its goal is to provide the tools
      needed for organized and efficient management, with
      an experience suited to small businesses. Each optical
      shop has its own management environment and can
      administer multiple branches and control employee access.

    features:
      - >
        Customer registration with purchase history,
        service records and relevant relationship information.
      - >
        Product, brand and inventory management to keep
        track of items available for sale.
      - >
        Optical service management, including adjustments,
        repairs and other services offered by the shop.
      - >
        Appointment and sales management with products,
        services, prescriptions and frame-specific details.
      - >
        Payment management, including different methods
        and installment options.
      - >
        Expense management to organize business financial
        commitments.
      - >
        Optical prescription management, including tracking
        and identification of expired prescriptions.
      - >
        Management dashboard with sales, payment,
        product and customer indicators.
      - >
        Multi-branch management, allowing businesses
        to organize different locations.
      - >
        User and permission management, tailoring access
        to each employee's responsibilities.

    results:
      - >
        Two independent businesses using the platform,
        each with its own management environment.
      - >
        Approximately 7,500 customers registered across
        both optical shops, with information and history
        maintained in a centralized environment.
      - >
        Centralization of the main administrative, commercial
        and financial activities in a single platform.
      - >
        Better customer relationship management through
        purchase history, service records and prescriptions.
      - >
        Greater operational visibility through management
        and financial indicators.

    role: >
      Sole developer of the entire PrismaFlow solution,
      from initial architecture and planning to frontend
      and backend implementation. Responsible for data
      modeling, feature development, business rules,
      authentication, access control, application integration
      and modular system organization.

    architecture: >
      PrismaFlow was developed as a SaaS application with
      a backend built using Node.js, Express and TypeScript,
      with Prisma ORM providing access to MySQL. Its
      architecture is organized into domain modules,
      separating routes, controllers, services, repositories
      and DTOs. Multi-tenant isolation ensures that each
      business's data remains separate, while the
      multi-branch structure supports multiple locations
      within the same tenant. Authentication uses JWT
      and access control is based on RBAC, considering
      user roles and operational scope. The application
      also includes operation auditing, data validation,
      standardized responses and paginated listings.
      On the frontend, modular organization groups pages,
      hooks, controllers and components by domain,
      supporting easier maintenance and independent
      feature evolution.

    challenges:
      - >
        Serving multiple businesses through a single
        application without mixing their information.
        A multi-tenant architecture was implemented to
        isolate data by business.
      - >
        Allowing a business to manage multiple branches
        with different responsibilities. The multi-branch
        structure associates users and operations with
        their respective locations.
      - >
        Managing access for administrators, managers
        and employees. A role-based permission model
        was implemented with restrictions according
        to user role and branch.
      - >
        Organizing different commercial and financial
        operations without concentrating all business
        rules in a single layer. The application was
        divided into domain modules with separate
        controller, service and repository responsibilities.
      - >
        Ensuring traceability of user operations.
        An auditing structure was implemented to record
        who created and updated data.
      - >
        Providing comprehensive management capabilities
        without making the experience unnecessarily
        complex. Modular organization allows features
        to be structured around each operational area.

highlight:
  pt:
    outcome: >
      Gestão completa e acessível, pensada para a realidade
      das pequenas óticas.
    metrics:
      - value: "2"
        label: empresas independentes em operação
      - value: "7.500"
        label: clientes cadastrados na plataforma

  en:
    outcome: >
      Complete and accessible management designed for
      the needs of small optical businesses.
    metrics:
      - value: "2"
        label: independent businesses using the platform
      - value: "7,500"
        label: customers registered on the platform

showcase:
  variant: diagram

status: live
featured: true
published: true

stack:
  - Node.js
  - Express
  - TypeScript
  - Prisma ORM
  - MySQL
  - React
  - JWT

startDate: 01-06-2025
launchDate: 20-10-2025

thumb:
  desktop: /uploads/prismaflow-painel.png

links: {}

gallery:
  - src: /uploads/prismaflow-painel.png
    title: Gestão da ótica
    description: >
      Visão administrativa da plataforma, reunindo informações
      importantes da operação e facilitando o acompanhamento
      das atividades comerciais e financeiras.
    alt: Painel do PrismaFlow com indicadores de vendas
      e fluxo de caixa.
---
