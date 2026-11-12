# Arquitetura Astro

## Framework e renderização

Astro é o framework principal. O site utiliza geração estática para produzir as páginas durante o build.

Configuração de build:

- `output: "static"`;
- Adapter: `@astrojs/vercel`;
- Diretório de saída: `dist/`.

O deploy é feito pela Vercel. Alterações na estratégia de renderização ou no adapter devem ser avaliadas em conjunto com a configuração de deploy.

## Páginas e roteamento

As páginas ficam em `src/pages/`. O Astro transforma a estrutura de arquivos em rotas.

Rotas dinâmicas de projetos:

- `/projetos/[slug]/`
- `/en/projects/[slug]/`

As páginas dinâmicas obtêm os registros da collection `projects` e geram as rotas estáticas por meio de `getStaticPaths()`.

O identificador do registro (`project.id`) é utilizado como slug da rota. O nome do arquivo Markdown determina esse identificador.

## Layouts

`BaseLayout.astro` é o layout principal conhecido e recebe propriedades como:

- `lang`;
- `title`;
- `description`;
- `image`;
- `alternateUrl`;
- `noindex`.

O layout concentra metadados, canonical, Open Graph, Twitter Cards, hreflang e integração com Analytics.

As configurações globais utilizadas pelo site são disponibilizadas por `src/data/site-settings.ts`, que valida os dados de `src/data/site-settings.json` com Zod.

Ao criar uma página, reutilizar o layout existente em vez de replicar a estrutura HTML e os metadados.

## Componentes Astro e React

A implementação prioriza componentes `.astro`.

React está disponível por meio de `@astrojs/react`, mas deve ser utilizado quando houver necessidade real de estado ou interação no cliente. Não transformar componentes estáticos em ilhas React sem justificativa.

## Content Layer e collections

O conteúdo é gerenciado pelo Content Layer do Astro, com schemas definidos em `src/content.config.ts` e validação utilizando Zod.

Atualmente, existem duas collections:

| Collection     | Diretório                   | Formato  |
| -------------- | --------------------------- | -------- |
| `projects`     | `src/content/projects/`     | Markdown |
| `testimonials` | `src/content/testimonials/` | Markdown |

Os registros são carregados por meio do loader `glob()`.

Exemplo da configuração de carregamento:

```ts
loader: glob({
  base: "./src/content/projects",
  pattern: "**/*.md",
});
```

Cada collection possui seu próprio schema, responsável por definir os campos, tipos, valores padrão e validações dos registros.

A collection `projects` contém os dados dos projetos, incluindo apresentação e estudos de caso em português e inglês.

A collection `testimonials` armazena os depoimentos, com identificação do idioma e possibilidade de relacionamento com um projeto.

Consulte `05-conteudo-e-projetos.md` para conhecer os contratos e as regras de cada collection.

## Configurações globais

As configurações gerais do site são mantidas em:

```text
src/data/site-settings.json
src/data/site-settings.ts
```

O arquivo JSON contém os dados configuráveis, enquanto o módulo TypeScript define o schema Zod, valida os dados e exporta o objeto tipado `siteSettings`.

O consumo deve ser feito pelo módulo validado:

```ts
import { siteSettings } from "../data/site-settings";
```

Essa estrutura centraliza informações profissionais, contato, localização, disponibilidade, identidade visual, SEO e identificadores de integrações.

As configurações globais não fazem parte das collections Markdown.

## CMS e arquitetura de conteúdo

O Decap CMS administra as collections Markdown e o arquivo de configurações globais.

As configurações dos formulários ficam em:

```text
public/admin/config.yml
public/admin-local/config.yml
```

Os schemas do Astro e os campos do CMS devem permanecer sincronizados. Alterações nos modelos de conteúdo precisam considerar tanto a validação do Astro quanto os formulários de edição.

Consulte `07-cms-e-gerenciamento.md` para detalhes sobre os painéis e seus ambientes.

## Comandos

```bash
npm run dev
npx astro sync
npm run build
npm run preview
```

Executar `npx astro sync` após alterações no schema ou na configuração de conteúdo. Executar `npm run build` para validar a compilação completa antes de publicar.

## Cuidados

- Não presumir que uma rota dinâmica será gerada sem registro correspondente na collection.
- Não acessar campos de conteúdo sem considerar o schema Zod.
- Ao alterar schemas, revisar os formulários do CMS e os componentes consumidores.
- Ao alterar rotas, revisar links internos e URLs alternativas entre idiomas.
- Ao alterar `BaseLayout`, verificar canonical, metadados e hreflang nas páginas PT e EN.
- Ao alterar `site-settings.json`, manter a compatibilidade com o schema e os componentes consumidores.
- Ao alterar a estratégia de renderização, revisar a compatibilidade com o deploy estático e a Vercel.
