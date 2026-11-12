# CMS e gerenciamento

## Visão geral

O gerenciamento de conteúdo utiliza Decap CMS. O painel administra três áreas:

| Área                  | Tipo                                 | Fonte persistida              |
| --------------------- | ------------------------------------ | ----------------------------- |
| Projetos              | Collection Markdown                  | `src/content/projects/`       |
| Depoimentos           | Collection Markdown                  | `src/content/testimonials/`   |
| Configurações do site | File collection, registro único JSON | `src/data/site-settings.json` |

As configurações de schema do Astro ficam em `src/content.config.ts` para as collections. As configurações globais são validadas por `src/data/site-settings.ts`.

As configurações do CMS precisam permanecer compatíveis com esses contratos.

## Painéis e ambientes

| Painel   | Caminho         | Backend                         |
| -------- | --------------- | ------------------------------- |
| Produção | `/admin/`       | `turbo-github`                  |
| Local    | `/admin-local/` | `git-gateway` com backend local |

Não misturar as configurações: o painel local deve gravar no ambiente local e o painel de produção deve utilizar a integração Turbo/GitHub.

## Configuração de produção

Arquivo:

```text
public/admin/config.yml
```

Backend configurado:

- `name: turbo-github`;
- `turbo_site_id` configurado para o site;
- branch `main`.

O painel de produção cria alterações no repositório integrado e o fluxo de deploy da Vercel publica as alterações após o processamento do GitHub.

## Configuração local

Arquivo:

```text
public/admin-local/config.yml
```

Backend:

- `name: git-gateway`;
- `local_backend` apontando para `http://localhost:8081/api/v1`;
- `localhost` permitido em `allowed_hosts`.

Para utilizar o CMS local:

1. Iniciar o servidor Astro com `npm run dev`.
2. Iniciar o backend local do Decap com `npx decap-server`.
3. Acessar `/admin-local/`.

O backend local utiliza a configuração local e não deve ser confundido com o fluxo de commits do CMS de produção.

## Arquivos HTML

Os painéis possuem páginas HTML próprias:

```text
public/admin/index.html
public/admin-local/index.html
```

Cada página carrega o Decap CMS e aponta para o arquivo de configuração correspondente. Ao alterar nomes ou caminhos, revisar também a referência `cms-config-url`.

## Collection de projetos

- Nome: `projects`.
- Diretório: `src/content/projects`.
- Formato: Markdown com frontmatter.
- O campo `title` é o identificador.
- `slug: "{{slug}}"` gera o nome do arquivo a partir do identificador.
- Os campos devem corresponder ao schema em `src/content.config.ts`.

A estrutura atual diferencia os dados de apresentação em português (`apresentacao`) e inglês (`presentation`) e mantém `caseStudy.pt` e `caseStudy.en` para o estudo de caso.

## Collection de depoimentos

- Nome: `testimonials`.
- Diretório: `src/content/testimonials`.
- Formato: Markdown com frontmatter.
- Cada registro representa um depoimento.
- O campo `language` identifica o idioma do depoimento.
- `clientWebsite` é opcional.
- `projectSlug` pode relacionar o depoimento a um projeto.

Os campos do CMS devem permanecer compatíveis com o schema da collection `testimonials` em `src/content.config.ts`.

## Configurações do site

A collection `site_settings` é uma file collection e mantém um único arquivo:

```text
src/data/site-settings.json
```

O painel apresenta o registro como configurações gerais do site. Não criar arquivos adicionais para esse registro sem alterar deliberadamente a estratégia de configuração.

Os grupos de configuração abrangem:

- `personal`: nome profissional, título e apresentação curta;
- `contact`: e-mail, WhatsApp, mensagem padrão, currículo e redes sociais;
- `location`: cidade, estado, país, idiomas, modalidade de atendimento e áreas atendidas;
- `availability`: exibição do status, disponibilidade, data de início, tipos de contratação e mensagem;
- `branding`: favicon, logos e imagem Open Graph padrão;
- `seo`: título e descrição padrão do site;
- `analytics`: identificadores de integrações de analytics/pixel.

O módulo `src/data/site-settings.ts` valida o conteúdo JSON com Zod e exporta `siteSettings`. Ao alterar qualquer campo, atualizar em conjunto:

1. schema em `site-settings.ts`;
2. valor correspondente em `site-settings.json`;
3. formulário `site_settings` nos dois arquivos YAML;
4. componentes que consomem a propriedade.

As configurações de SEO globais não substituem os metadados específicos de cada página ou projeto. Os metadados devem ser derivados dos dados disponíveis conforme a implementação do site.

## Uploads

Configuração utilizada:

- `media_folder: public/uploads`
- `public_folder: /uploads`

Os caminhos gravados no conteúdo devem ser compatíveis com a forma como as imagens são servidas pelo site.

## Cuidados operacionais

- Alterar as duas configurações YAML quando um campo do formulário mudar.
- Não copiar a configuração de produção para o ambiente local sem ajustar o backend.
- Não trocar o backend local por `turbo-github`.
- Manter a file collection `site_settings` com `fields` dentro do objeto de arquivo (`files`).
- Não transformar `site_settings` em uma collection de documentos: ela representa um único JSON.
- Não assumir que o CMS impede todas as regras de negócio; validações importantes também existem nos schemas Zod.
- Depois de alterar campos, criar ou editar um registro de teste e verificar o arquivo gerado.
- Executar `npx astro sync` e `npm run build` após alterações no modelo de conteúdo.
- Ao alterar `identifier_field` ou `slug`, verificar o impacto nos nomes dos arquivos e nas URLs já publicadas.
