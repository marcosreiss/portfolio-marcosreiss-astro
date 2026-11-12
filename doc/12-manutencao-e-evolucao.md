# Manutenção e evolução

## Antes de alterar

1. Identificar a página, feature ou integração afetada.
2. Localizar componentes e utilitários já existentes.
3. Verificar os contratos de conteúdo em `src/content.config.ts`.
4. Verificar configurações correspondentes do CMS quando campos forem alterados.
5. Conferir impactos nas versões em português e inglês.
6. Verificar se a alteração afeta `src/data/site-settings.json` ou seu schema.

## Adicionar um projeto

1. Criar o registro pelo Decap CMS ou adicionar um Markdown em `src/content/projects/`.
2. Preencher os campos conforme o schema.
3. Utilizar datas no formato `DD-MM-YYYY`.
4. Preencher a apresentação em português (`apresentacao`) e inglês (`presentation`).
5. Preencher os estudos de caso em `caseStudy.pt` e `caseStudy.en`, quando aplicável.
6. Respeitar as regras de projeto externo ou detalhado.
7. Conferir capa, galeria, links e tecnologias.
8. Executar `npx astro sync` e `npm run build`.

Consulte `05-conteudo-e-projetos.md` para os campos e validações.

## Adicionar um depoimento

1. Criar o registro pelo Decap CMS ou adicionar um Markdown em `src/content/testimonials/`.
2. Preencher os dados da pessoa, empresa e depoimento.
3. Definir `language` como `pt` ou `en`.
4. Informar `clientWebsite` somente quando houver um endereço válido e confirmado.
5. Preencher `projectSlug` quando houver relação com um projeto existente.
6. Definir `featured`, `published` e `order` conforme a necessidade.
7. Executar `npx astro sync` e `npm run build`.

Verificar se o depoimento está sendo apresentado no idioma correto e se o projeto relacionado existe.

## Alterar configurações globais

As configurações gerais ficam em `src/data/site-settings.json` e são validadas por `src/data/site-settings.ts`.

Ao alterar uma configuração:

1. Atualizar o schema Zod em `site-settings.ts`, caso a estrutura ou os tipos mudem.
2. Atualizar o valor em `site-settings.json`.
3. Atualizar os formulários `site_settings` nos dois arquivos YAML do CMS, quando o campo for editável pelo painel.
4. Revisar os componentes que consomem a propriedade.
5. Executar `npx astro sync` e `npm run build`.

Não adicionar propriedades diretamente ao JSON sem verificar se o schema permite o novo campo.

## Alterar o modelo de conteúdo

Uma mudança no schema pode afetar simultaneamente:

- arquivos Markdown existentes;
- `src/content.config.ts`;
- `public/admin/config.yml`;
- `public/admin-local/config.yml`;
- cards e páginas de projeto;
- listagens e filtros;
- depoimentos e referências a projetos;
- rotas e slugs.

Pesquisar todas as referências ao campo antes de removê-lo ou renomeá-lo.

## Adicionar uma página

1. Criar a rota em `src/pages/`.
2. Reutilizar `BaseLayout.astro`.
3. Informar título, descrição, idioma e URL alternativa quando aplicável.
4. Reutilizar componentes e estilos existentes.
5. Criar a versão no outro idioma ou definir explicitamente a ausência de equivalente.
6. Verificar canonical, hreflang e sitemap.

## Adicionar uma funcionalidade

- Definir a responsabilidade dentro da feature apropriada.
- Reutilizar componentes UI e utilitários existentes.
- Preferir Astro para conteúdo estático.
- Utilizar React apenas quando a interação no cliente justificar.
- Preservar responsividade, acessibilidade e os dois temas.
- Atualizar os arquivos de documentação afetados.

## Validação local

Fluxo mínimo recomendado:

```bash
npx astro sync
npm run build
```

Executar também `npm run dev` para validar visualmente as páginas afetadas.

## Checklist de revisão

- [ ] O build conclui sem erros.
- [ ] As rotas afetadas são geradas.
- [ ] As versões PT e EN continuam funcionando.
- [ ] O CMS permanece compatível com os schemas.
- [ ] Depoimentos respeitam idioma e publicação.
- [ ] Configurações globais continuam válidas.
- [ ] Datas e ordenação continuam corretas.
- [ ] Tema claro e escuro foram verificados.
- [ ] Layout móvel e desktop foram verificados.
- [ ] SEO e links alternativos continuam corretos.
- [ ] A documentação foi atualizada.

## Princípio de manutenção

A implementação existente e o código-fonte são a referência final. Se a documentação divergir do comportamento real, verificar o código, corrigir a documentação e registrar a mudança. Não preservar uma descrição desatualizada como se fosse requisito.
