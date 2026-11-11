# 08 — SEO e performance

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

## Sitemap e robots

O projeto gera sitemap durante o build por meio da integração `@astrojs/sitemap`.

O arquivo `robots.txt` também é publicado. Ao alterar domínio, rotas ou estratégia de indexação, revisar o sitemap e as regras de robots.

## Imagens sociais

A imagem Open Graph principal está configurada como:

```text
/public/og-image.png
```

A URL pública correspondente é `/og-image.png`.

Ao substituir a imagem, preservar o caminho ou atualizar a configuração que a referencia. Verificar visualização em compartilhamentos sociais após alterações.

## Imagens de conteúdo

Imagens de capa e galeria dos projetos são armazenadas em `public/uploads/` por meio do CMS.

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

O projeto utiliza Vercel Analytics. Ao modificar o layout principal ou integrações de analytics, verificar se a coleta continua sendo carregada no site publicado.

## Verificação após mudanças

Depois de alterar SEO, imagens ou estrutura de rotas:
1. executar `npm run build`;
2. conferir os arquivos gerados em `dist/`;
3. verificar canonical, hreflang e metadados das páginas;
4. confirmar que sitemap e robots continuam presentes;
5. testar as páginas em dispositivos móveis.
