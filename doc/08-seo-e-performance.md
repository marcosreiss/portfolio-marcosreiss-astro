# SEO e performance

## SEO técnico

O `BaseLayout.astro` centraliza os metadados das páginas. Entre as propriedades utilizadas estão:

- `title`;
- `description`;
- `image`;
- `lang`;
- `alternateUrl`;
- `noindex`.

O layout implementa:

- título e descrição;
- URL canonical;
- Open Graph;
- Twitter Cards;
- hreflang para versões linguísticas;
- dados estruturados conforme a implementação existente.

Ao criar uma página, fornecer metadados específicos e reutilizar o layout. Evitar duplicar tags SEO diretamente em páginas sem necessidade.

## Configurações globais e metadados

O arquivo `src/data/site-settings.json` contém os valores padrão de SEO em `seo`, incluindo título e descrição globais, além da imagem Open Graph padrão em `branding.defaultOgImage`.

Esses valores são disponibilizados por `siteSettings`, exportado de `src/data/site-settings.ts`.

Os metadados específicos de projetos e páginas devem ser derivados dos dados de conteúdo disponíveis, como título, apresentação, descrição e imagens. Não adicionar campos SEO redundantes a cada projeto sem uma necessidade funcional definida.

Ao alterar a lógica de derivação, verificar:

- título e descrição em português e inglês;
- imagem Open Graph específica ou padrão;
- canonical;
- alternate/hreflang;
- comportamento para conteúdo sem imagem ou descrição opcional.

## Sitemap e robots

O projeto gera sitemap durante o build por meio da integração `@astrojs/sitemap`.

O arquivo `robots.txt` também é publicado. Ao alterar domínio, rotas ou estratégia de indexação, revisar o sitemap e as regras de robots.

## Imagens sociais

A imagem Open Graph padrão pode ser configurada em:

```text
src/data/site-settings.json
```

Propriedade: `branding.defaultOgImage`.

O arquivo público legado `/og-image.png` pode continuar sendo utilizado por páginas ou configurações que ainda o referenciem. Antes de removê-lo, pesquisar suas referências e confirmar que a imagem padrão configurada está sendo utilizada.

## Imagens de conteúdo

Imagens de capa e galeria dos projetos e imagens de depoimentos são armazenadas em `public/uploads/` por meio do CMS.

Cuidados:

- utilizar imagens otimizadas e dimensões adequadas;
- preencher texto alternativo quando a imagem transmitir informação;
- manter `alt=""` apenas para imagens decorativas;
- evitar carregar imagens desnecessárias;
- preservar proporções e comportamento responsivo dos componentes.

O card de projeto utiliza a imagem desktop quando disponível. A ausência de imagem deve continuar sendo tratada sem quebrar o layout.

## Performance

A estratégia principal é geração estática pelo Astro. Isso reduz a necessidade de JavaScript no cliente.

Diretrizes:

- priorizar componentes Astro;
- utilizar React apenas quando necessário;
- evitar bibliotecas client-side sem benefício claro;
- controlar o peso de imagens;
- evitar scripts e dependências desnecessários;
- preservar carregamento eficiente em dispositivos móveis.

## Analytics

Os identificadores de integrações ficam no grupo `analytics` de `src/data/site-settings.json` e são disponibilizados pelo módulo `site-settings.ts`.

O projeto também utiliza Vercel Analytics. Ao modificar o layout principal ou integrações de analytics, verificar se a coleta continua sendo carregada no site publicado. Não expor segredos ou tokens no JSON público.

## Verificação após mudanças

Depois de alterar SEO, imagens ou estrutura de rotas:

1. executar `npm run build`;
2. conferir os arquivos gerados em `dist/`;
3. verificar canonical, hreflang e metadados das páginas;
4. confirmar que sitemap e robots continuam presentes;
5. testar as páginas em dispositivos móveis.
