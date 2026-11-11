# 01 — Visão geral

## Objetivo

Portfólio pessoal de Marcos Vinícius Reis, desenvolvido para apresentar projetos, tecnologias, serviços e canais de contato.

Site publicado: https://marcosvinireiss.vercel.app

## Características

- Site estático construído com Astro.
- Conteúdo em português e inglês.
- Tema claro como padrão e alternância para tema escuro.
- Projetos cadastrados em arquivos Markdown.
- Gerenciamento de projetos pelo Decap CMS.
- Páginas responsivas.
- SEO técnico, sitemap e robots.txt.
- Analytics integrado à Vercel.
- Deploy pela Vercel, integrado ao GitHub.

## Stack

| Tecnologia | Responsabilidade |
|---|---|
| Astro | Framework principal, páginas e geração estática |
| TypeScript | Tipagem |
| Tailwind CSS v4 | Estilização |
| React | Componentes interativos quando necessários |
| Decap CMS | Administração do conteúdo |
| Vercel | Hospedagem e deploy |
| Lucide | Ícones |

## Princípios de implementação

1. Priorizar recursos nativos do Astro.
2. Utilizar React somente quando houver necessidade de interatividade client-side.
3. Manter conteúdo separado da apresentação.
4. Reutilizar componentes e estilos compartilhados.
5. Preservar as versões em português e inglês.
6. Validar alterações com `npx astro sync` e `npm run build`.

## Documentação relacionada

A documentação técnica completa fica neste diretório (`/doc`). Os demais arquivos detalham estrutura, arquitetura, design system, conteúdo, internacionalização, CMS, SEO, acessibilidade, deploy, utilitários e manutenção.
