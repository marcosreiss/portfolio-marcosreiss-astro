# Visão geral

## Objetivo

Portfólio pessoal de Marcos Vinícius Reis, desenvolvido para apresentar projetos, tecnologias, serviços e canais de contato.

Site publicado: https://marcosvinireiss.vercel.app

## Características

- Site estático construído com Astro.
- Conteúdo em português e inglês.
- Tema claro e alternância para tema escuro.
- Projetos e depoimentos gerenciados pelo Decap CMS.
- Configurações globais do site centralizadas em um arquivo JSON.
- Páginas responsivas.
- SEO técnico, sitemap e robots.txt.
- Analytics integrado à Vercel.
- Deploy pela Vercel, integrado ao GitHub.

## Stack

| Tecnologia      | Responsabilidade                                |
| --------------- | ----------------------------------------------- |
| Astro           | Framework principal, páginas e geração estática |
| TypeScript      | Tipagem                                         |
| Zod             | Validação dos dados de conteúdo e configurações |
| Tailwind CSS v4 | Estilização                                     |
| React           | Componentes interativos quando necessários      |
| Decap CMS       | Administração do conteúdo                       |
| Vercel          | Hospedagem e deploy                             |
| Lucide          | Ícones                                          |

## Fontes de conteúdo

| Fonte                 | Caminho                       | Uso                                                                                            |
| --------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------- |
| Projetos              | `src/content/projects/`       | Registros Markdown validados pelo Astro Content Layer                                          |
| Depoimentos           | `src/content/testimonials/`   | Registros Markdown validados pelo Astro Content Layer                                          |
| Configurações globais | `src/data/site-settings.json` | Informações profissionais, contato, redes, disponibilidade, identidade visual, SEO e analytics |

O módulo `src/data/site-settings.ts` valida e disponibiliza as configurações globais para o restante da aplicação.

## Princípios de implementação

1. Priorizar recursos nativos do Astro.
2. Utilizar React somente quando houver necessidade de interatividade client-side.
3. Manter conteúdo separado da apresentação.
4. Reutilizar componentes e estilos compartilhados.
5. Preservar as versões em português e inglês.
6. Manter o schema Zod, os arquivos Markdown e as configurações do CMS sincronizados.
7. Validar alterações com `npx astro sync` e `npm run build`.

## Documentação relacionada

Os demais arquivos detalham estrutura, arquitetura, design system, conteúdo, internacionalização, CMS, SEO, acessibilidade, deploy, utilitários e manutenção.
