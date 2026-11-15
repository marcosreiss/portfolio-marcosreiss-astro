---
title: Jardim di Berlim
kind: detailed
category: web-system
client: Appia Engenharia

apresentacao:
  subtitle: Divulgação e gestão comercial em uma única solução.
  description: >
    Uma plataforma para apresentar o empreendimento e organizar
    sua operação comercial. Imobiliárias cadastram interessados,
    solicitam reservas e acompanham negociações em um ambiente
    centralizado.

presentation:
  title: Jardim di Berlim
  subtitle: Marketing and sales management in one solution.
  description: >
    A platform to showcase the development and organize its
    sales operation. Real estate agencies register potential
    buyers, request reservations and manage sales opportunities
    through a centralized environment.

caseStudy:
  pt:
    context: >
      A Appia Engenharia precisava estruturar a comercialização
      do Jardim di Berlim, um condomínio de lotes em São José de
      Ribamar. Além de apresentar o empreendimento ao público,
      era necessário organizar a atuação das imobiliárias parceiras,
      acompanhar o interesse dos compradores e controlar a
      disponibilidade dos terrenos.

    challenge: >
      Reunir a divulgação do empreendimento e a operação comercial
      em soluções integradas. O processo precisava oferecer uma
      visão clara dos lotes disponíveis, reservados e vendidos,
      organizar os cadastros de imobiliárias e potenciais clientes
      e estabelecer um fluxo controlado para solicitação e aprovação
      de reservas.

    solution: >
      Foi desenvolvida uma solução composta por uma landing page
      de apresentação do empreendimento e um sistema de gestão
      comercial. Enquanto o site apresenta o projeto, seus
      diferenciais e áreas de lazer, o ambiente interno permite
      acompanhar os lotes em um mapa interativo, administrar
      imobiliárias parceiras e gerenciar interessados, reservas
      e vendas. As imobiliárias podem cadastrar leads e solicitar
      a reserva de lotes, enquanto os administradores avaliam
      e aprovam as solicitações. A plataforma também reúne
      indicadores comerciais e financeiros para acompanhar
      a operação.

    features:
      - >
        Landing page comercial com apresentação do empreendimento,
        localização, diferenciais, infraestrutura e áreas de lazer.
      - >
        Mapa interativo com 171 lotes, permitindo visualizar
        disponibilidade, reservas e vendas.
      - >
        Cadastro e aprovação de imobiliárias parceiras,
        organizando o acesso à operação comercial.
      - >
        Gestão de três perfis de acesso, com permissões
        adequadas às diferentes responsabilidades do sistema.
      - >
        Cadastro de leads pelas imobiliárias, permitindo
        registrar interessados e relacioná-los aos lotes.
      - >
        Solicitação de reservas pelas imobiliárias, com
        aprovação dos administradores antes da confirmação.
      - >
        Gerenciamento de reservas e vendas para acompanhar
        a situação comercial de cada terreno.
      - >
        Dashboard financeiro com indicadores de vendas,
        reservas, VGV, receita mensal e ticket médio.
      - >
        Relatórios comerciais com rankings de imobiliárias,
        distribuição de pagamentos e desempenho por quadra.

    results:
      - >
        Centralização do controle de lotes, imobiliárias,
        interessados e negociações em um único sistema.
      - >
        Fluxo estruturado de cadastro de interessados e
        solicitação de reservas, com aprovação administrativa.
      - >
        Visualização consolidada da disponibilidade dos terrenos,
        facilitando o acompanhamento da situação comercial.
      - >
        Maior organização do relacionamento com imobiliárias
        parceiras e do registro de potenciais compradores.
      - >
        Indicadores comerciais e financeiros reunidos em um
        dashboard, facilitando a análise da operação.
      - >
        Presença digital estruturada para apresentar o
        empreendimento e direcionar interessados ao processo
        comercial.

    role: >
      Atuação no desenvolvimento frontend e backend da solução,
      incluindo a landing page, o sistema de gestão comercial,
      a implementação das funcionalidades, integração entre
      interfaces e API e estruturação das operações de dados.
      Participação nas decisões de implementação e organização
      da arquitetura da aplicação.

    architecture: >
      A solução foi organizada em duas aplicações integradas:
      uma interface pública desenvolvida com Next.js e uma
      API em Node.js responsável pelas operações do sistema
      comercial. O frontend utiliza TypeScript para estruturar
      os dados e interações, enquanto o PostgreSQL armazena
      as informações de lotes, imobiliárias, leads, reservas
      e vendas. A API centraliza as regras de negócio e
      disponibiliza endpoints específicos para o dashboard,
      consolidando indicadores financeiros, análises temporais,
      rankings e distribuição de estoque. O fluxo de reservas
      considera as solicitações realizadas pelas imobiliárias
      e sua aprovação pelos administradores. Essa separação
      permite evoluir as interfaces e funcionalidades sem
      concentrar toda a lógica comercial no frontend.

    challenges:
      - >
        Representar a disponibilidade de 171 lotes de forma
        visual e compreensível. Foi implementado um mapa dinâmico
        que relaciona cada terreno à sua situação comercial.
      - >
        Organizar o acesso de diferentes participantes da operação.
        A solução contempla três perfis, considerando suas
        responsabilidades e necessidades de acesso.
      - >
        Estruturar o fluxo comercial entre imobiliárias e
        administradores. O processo permite cadastrar interessados,
        solicitar reservas e submeter as solicitações à aprovação
        administrativa.
      - >
        Integrar o cadastro de interessados ao processo de
        reserva e venda. As operações foram estruturadas para
        relacionar leads, lotes e seus respectivos estados.
      - >
        Consolidar informações comerciais e financeiras
        provenientes de diferentes operações. Foram criados
        endpoints específicos para reunir indicadores e
        disponibilizá-los em um dashboard.
      - >
        Criar uma experiência de apresentação compatível com
        o posicionamento premium do empreendimento. A landing
        page utiliza uma narrativa visual, imagens imersivas
        e transições para conduzir o visitante pelos diferenciais
        do projeto.

  en:
    context: >
      Appia Engenharia needed to structure the sales operation
      for Jardim di Berlim, a residential land development in
      São José de Ribamar, Brazil. Beyond presenting the project
      to potential buyers, the company needed to organize partner
      agencies, track customer interest and manage land availability.

    challenge: >
      Bring the development's marketing presence and sales
      operations together through integrated solutions. The
      process needed to provide a clear view of available,
      reserved and sold lots, organize agency and customer
      registrations, and establish a controlled reservation
      request and approval workflow.

    solution: >
      A digital solution was developed, combining a promotional
      landing page with an internal sales management system.
      While the website showcases the development, its features
      and leisure facilities, the internal platform provides
      an interactive lot map, partner agency management,
      lead registration and reservation and sales tracking.
      Real estate agencies can register leads and request
      lot reservations, while administrators review and
      approve those requests. The platform also brings
      together commercial and financial indicators to
      support operational monitoring.

    features:
      - >
        Promotional landing page showcasing the development,
        location, features, infrastructure and leisure facilities.
      - >
        Interactive map with 171 lots, displaying availability,
        reservations and completed sales.
      - >
        Partner agency registration and approval, organizing
        access to the sales operation.
      - >
        Three access roles with permissions tailored to
        different system responsibilities.
      - >
        Lead registration by real estate agencies, connecting
        potential buyers to specific lots.
      - >
        Reservation requests submitted by agencies and
        reviewed by administrators before confirmation.
      - >
        Reservation and sales management to track the commercial
        status of each lot.
      - >
        Financial dashboard with sales, reservations, GDV,
        monthly revenue and average ticket indicators.
      - >
        Commercial reports featuring agency rankings,
        payment distribution and performance by block.

    results:
      - >
        Centralized management of lots, agencies, leads
        and sales opportunities in one system.
      - >
        Structured lead registration and reservation request
        workflow with administrative approval.
      - >
        Consolidated visibility into land availability,
        making commercial status easier to monitor.
      - >
        Better organization of partner agency relationships
        and potential customer records.
      - >
        Commercial and financial indicators brought together
        in a dashboard to support operational analysis.
      - >
        A structured digital presence to showcase the
        development and guide potential buyers toward
        the sales process.

    role: >
      Contributed to frontend and backend development,
      including the landing page, sales management system,
      feature implementation, frontend and API integration,
      and data operations. Also participated in implementation
      decisions and application architecture.

    architecture: >
      The solution was organized into two integrated layers:
      a public interface built with Next.js and a Node.js API
      responsible for the commercial system operations.
      The frontend uses TypeScript to structure data and
      interactions, while PostgreSQL stores information
      about lots, agencies, leads, reservations and sales.
      The API centralizes business rules and provides
      dedicated dashboard endpoints, consolidating financial
      indicators, time-based analysis, rankings and inventory
      distribution. The reservation workflow handles requests
      submitted by agencies and their approval by administrators.
      This separation allows interfaces and features to evolve
      without concentrating all business logic in the frontend.

    challenges:
      - >
        Representing the availability of 171 lots in a clear
        visual format. A dynamic map was implemented to
        associate each lot with its commercial status.
      - >
        Organizing access for different participants in the
        sales operation. The solution supports three roles
        based on their responsibilities and access needs.
      - >
        Structuring the workflow between agencies and
        administrators. The process allows agencies to register
        leads, request reservations and submit requests for
        administrative approval.
      - >
        Connecting lead registration to the reservation
        and sales process. Operations were structured to
        associate leads, lots and their respective statuses.
      - >
        Consolidating commercial and financial information
        from different operations. Dedicated API endpoints
        were created to aggregate indicators for the dashboard.
      - >
        Creating a presentation experience consistent with
        the development's premium positioning. The landing
        page combines visual storytelling, immersive imagery
        and transitions to guide visitors through the project.

highlight:
  pt:
    outcome: >
      Divulgação do empreendimento e gestão comercial
      conectadas em uma única solução.
    metrics:
      - value: "171"
        label: lotes acompanhados em um mapa interativo
      - value: "3"
        label: perfis de acesso ao sistema

  en:
    outcome: >
      Property marketing and sales management connected
      in one solution.
    metrics:
      - value: "171"
        label: lots managed through an interactive map
      - value: "3"
        label: system access roles

showcase:
  variant: cover

status: live
featured: true
published: true

stack:
  - Next.js
  - TypeScript
  - Node.js
  - PostgreSQL

startDate: 01-09-2025
launchDate: 24-12-2025

thumb:
  desktop: /uploads/jdb-capa.png

links:
  liveUrl: https://jardimdiberlim.com.br

gallery:
  - src: /uploads/jdb-capa.png
    title: Mapa de lotes
    description: >
      Visão interativa dos terrenos do empreendimento, permitindo
      acompanhar a disponibilidade e identificar lotes reservados
      ou vendidos durante a operação comercial.
    alt: Mapa interativo do Jardim di Berlim com lotes
      identificados por diferentes situações comerciais.

  - src: /uploads/jdb-piscina.png
    title: Experiência do empreendimento
    description: >
      Apresentação visual das áreas de lazer e dos diferenciais
      do projeto, reforçando o posicionamento premium e
      aproximando o visitante da experiência proposta.
    alt: Imagem da piscina e da área de lazer do condomínio
      Jardim di Berlim.

  - src: /uploads/jdb-appia.png
    title: Gestão comercial
    description: >
      Ambiente administrativo para acompanhar interessados,
      negociações e informações comerciais, centralizando
      atividades importantes da operação.
    alt: Painel administrativo do sistema de gestão comercial
      do Jardim di Berlim.
---
