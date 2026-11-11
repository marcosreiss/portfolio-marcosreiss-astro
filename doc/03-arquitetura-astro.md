# 03 — Arquitetura Astro

## Framework e renderização

Astro é o framework principal. O site utiliza geração estática para produzir as páginas durante o build.

Configuração de build observada:
- `output: "static"`.
- Adapter: `@astrojs/vercel`.
- Diretório de saída: `dist/`.

O deploy é feito pela Vercel. Alterações na estratégia de renderização ou no adapter devem ser avaliadas em conjunto com a configuração de deploy.

## Páginas e roteamento

As páginas ficam em `src/pages/`. O Astro transforma a estrutura de arquivos em rotas.

Rotas dinâmicas de projetos:
- `/projetos/[slug]/`
- `/en/projects/[slug]/`

As páginas dinâmicas obtêm os registros da coleção `projects` e geram as rotas estáticas por meio de `getStaticPaths()`.

O identificador do registro (`project.id`) é utilizado como slug da rota. O nome do arquivo Markdown determina esse identificador.

## Layouts

`BaseLayout.astro` é o layout principal conhecido e recebe propriedades como:
- `lang`
- `title`
- `description`
- `image`
- `alternateUrl`
- `noindex`

O layout concentra metadados, canonical, Open Graph, Twitter Cards, hreflang e integração com Analytics.

Ao criar uma página, reutilizar o layout existente em vez de replicar a estrutura HTML e os metadados.

## Componentes Astro e React

A implementação prioriza componentes `.astro`.

React está disponível por meio de `@astrojs/react`, mas deve ser utilizado quando houver necessidade real de estado ou interação no cliente. Não transformar componentes estáticos em ilhas React sem justificativa.

## Conteúdo

Os projetos são carregados pelo Content Layer do Astro com `glob()`:

```ts
loader: glob({
  base: "./src/content/projects",
  pattern: "**/*.md",
})
```

O schema é definido em `src/content.config.ts` com Zod. A coleção valida os dados durante a sincronização e o build.

Consulte `05-conteudo-e-projetos.md` para o contrato dos registros.

## Comandos

```bash
npm run dev
npx astro sync
npm run build
npm run preview
```

Executar `npx astro sync` após alterações no schema ou na configuração de conteúdo. Executar `npm run build` para validar a compilação completa antes de publicar.

## Cuidados

- Não presumir que uma rota dinâmica será gerada sem registro correspondente na coleção.
- Não acessar campos de conteúdo sem considerar o schema Zod.
- Ao alterar rotas, revisar links internos e URLs alternativas entre idiomas.
- Ao alterar `BaseLayout`, verificar canonical, metadados e hreflang nas páginas PT e EN.
- Ao alterar a estratégia de renderização, revisar a compatibilidade com o deploy estático e a Vercel.
