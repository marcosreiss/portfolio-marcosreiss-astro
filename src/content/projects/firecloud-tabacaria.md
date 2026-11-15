---
title: FireCloud Tabacaria
kind: detailed
category: web-system
client: João Henrique

apresentacao:
  subtitle: Catálogo digital e pedidos pelo WhatsApp em uma experiência de compra simplificada.
  description: Plataforma de vendas mobile first que combina catálogo de produtos, gerenciamento de conteúdo e checkout conversacional pelo WhatsApp.

presentation:
  title: FireCloud Tabacaria
  subtitle: A digital catalog and WhatsApp ordering experience.
  description: A mobile-first sales platform combining a product catalog, content management and conversational checkout through WhatsApp.

caseStudy:
  pt:
    context: A FireCloud precisava de uma maneira mais organizada de apresentar seus produtos e receber pedidos. Anteriormente, os clientes precisavam solicitar informações pelo WhatsApp, enquanto a loja enviava manualmente detalhes dos produtos e coletava as informações necessárias para cada compra.
    challenge: Criar uma experiência de compra que centralizasse o catálogo e reduzisse a troca de mensagens necessária para concluir um pedido, sem introduzir a complexidade de um sistema tradicional de e-commerce com processamento próprio de pagamentos e pedidos.
    solution: Desenvolvimento de uma plataforma mobile first com página inicial no formato de link na bio, catálogo de produtos com pesquisa e filtros por nome, categoria e marca, além de carrinho com checkout dividido em etapas. O cliente seleciona produtos e quantidades, informa seus dados, escolhe a forma de pagamento e adiciona observações. Ao finalizar, o sistema gera uma ordem de serviço formatada com itens, quantidades, subtotais, valor total e informações do comprador, direcionando para o WhatsApp da loja. O catálogo, produtos, categorias, marcas e links da página inicial são gerenciados por meio do Storyblok, permitindo atualização dinâmica do conteúdo.
    role: Responsável individual por todo o projeto, incluindo design da interface, experiência do usuário, arquitetura frontend, desenvolvimento e integração com o CMS.
    architecture: Aplicação frontend desenvolvida com Next.js e Tailwind CSS, integrada ao Storyblok por meio de sua biblioteca de integração com Next.js. O CMS funciona como fonte de conteúdo para produtos, categorias, marcas e links da página inicial. O carrinho utiliza localStorage para persistir os itens durante a navegação. O checkout realiza validações no frontend e monta dinamicamente uma mensagem estruturada com os dados do pedido, redirecionando o cliente para o WhatsApp. Motion é utilizado para animações e transições da interface. A aplicação não possui backend próprio, banco de dados ou processamento interno de pedidos e pagamentos. Hospedagem realizada na Vercel.
    challenges:
      - Transformar um processo de venda baseado em conversas manuais no WhatsApp em uma experiência de compra organizada.
      - Desenvolver um catálogo dinâmico e fácil de atualizar pelo próprio cliente.
      - Implementar pesquisa e filtros combinando nome, categoria e marca.
      - Criar um carrinho persistente utilizando armazenamento local do navegador.
      - Estruturar um checkout em etapas com validação dos dados e geração automática da ordem de serviço.
      - Desenvolver uma experiência mobile first com navegação e interações semelhantes às de um aplicativo nativo.
    results:
      - 43 produtos ativos no catálogo.
      - Mais de duas vendas realizadas por semana, conforme informações fornecidas pelo cliente.
      - Catálogo centralizado e atualizado diretamente pelo Storyblok.
      - Pedidos enviados ao WhatsApp com produtos, quantidades, valores e dados do comprador organizados.
      - Redução da necessidade de perguntas manuais durante o atendimento comercial.
      - Plataforma publicada e utilizada continuamente pela tabacaria.

  en:
    context: FireCloud needed a more organized way to showcase its products and receive orders. Previously, customers had to request information through WhatsApp, while the store manually sent product details and collected the information required for each purchase.
    challenge: Creating a shopping experience that centralized the catalog and reduced the back-and-forth messaging required to complete an order, without introducing the complexity of a traditional e-commerce system with its own payment and order processing infrastructure.
    solution: Development of a mobile-first platform featuring a link-in-bio homepage, product catalog with search and filters by name, category and brand, and a multi-step cart and checkout experience. Customers select products and quantities, provide their information, choose a payment method and add notes. Upon checkout, the system generates a formatted service order containing items, quantities, subtotals, total amount and customer information, then redirects the customer to the store's WhatsApp. Products, categories, brands and homepage links are managed through Storyblok, allowing dynamic content updates.
    role: Sole developer responsible for the entire project, including interface design, user experience, frontend architecture, development and CMS integration.
    architecture: Frontend application developed with Next.js and Tailwind CSS, integrated with Storyblok through its Next.js integration library. The CMS acts as the content source for products, categories, brands and homepage links. The cart uses localStorage to persist items during navigation. Checkout validation takes place on the frontend, dynamically generating a structured order message and redirecting the customer to WhatsApp. Motion is used for interface animations and transitions. The application has no custom backend, database or internal order and payment processing. Hosted on Vercel.
    challenges:
      - Transforming a sales process based on manual WhatsApp conversations into an organized shopping experience.
      - Building a dynamic catalog that the client could easily update.
      - Implementing search and filters combining product name, category and brand.
      - Creating a persistent shopping cart using browser local storage.
      - Structuring a multi-step checkout with data validation and automatic service order generation.
      - Developing a mobile-first experience with navigation and interactions similar to a native application.
    results:
      - 43 active products in the catalog.
      - More than two sales per week, according to information provided by the client.
      - Centralized catalog with content managed directly through Storyblok.
      - Orders sent to WhatsApp with products, quantities, prices and customer information organized.
      - Reduced need for manual questions during the sales process.
      - Published platform continuously used by the store.

highlight:
  pt:
    outcome: Uma experiência de compra simplificada que transforma o catálogo em pedidos organizados diretamente no WhatsApp.
    metrics:
      - label: Produtos ativos
        value: "43"
      - label: Vendas por semana
        value: "2+"
  en:
    outcome: A simplified shopping experience that turns product browsing into structured orders directly through WhatsApp.
    metrics:
      - label: Active products
        value: "43"
      - label: Weekly sales
        value: "2+"

showcase:
  variant: cover

status: live
featured: false
published: true

stack:
  - Next.js
  - React
  - Tailwind CSS
  - Storyblok
  - Motion
  - localStorage
  - Vercel

startDate: 07-11-2025
launchDate: 12-01-2026

thumb:
  desktop: /uploads/firecloud-catalogo.png

links:
  liveUrl: https://firecloud.vercel.app/

gallery:
  - src: /uploads/firecloud-linkbio.png
    title: Página inicial e link na bio
    description: Página de entrada com acesso rápido ao catálogo, WhatsApp, localização e Instagram da loja.
    alt: Página inicial da FireCloud com links de acesso aos principais canais da loja.

  - src: /uploads/firecloud-catalogo.png
    title: Catálogo de produtos
    description: Catálogo dinâmico com informações, imagens, preços e filtros por nome, categoria e marca.
    alt: Catálogo de produtos da FireCloud Tabacaria.

  - src: /uploads/firecloud-carrinho-passo-1.png
    title: Carrinho de compras
    description: Primeira etapa do checkout, permitindo revisar os produtos selecionados e ajustar suas quantidades.
    alt: Primeira etapa do carrinho com produtos e quantidades selecionadas.

  - src: /uploads/firecloud-carrinho-passo-2.png
    title: Finalização do pedido
    description: Segunda etapa do checkout para preenchimento dos dados do cliente, escolha da forma de pagamento e inclusão de observações antes do envio pelo WhatsApp.
    alt: Segunda etapa do checkout com dados do cliente e informações de pagamento.
---
