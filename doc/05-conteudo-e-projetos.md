# 05 — Conteúdo e projetos

## Fonte dos dados

Os projetos são armazenados como arquivos Markdown em:

```text
src/content/projects/
```

A coleção `projects` é carregada pelo Content Layer do Astro, configurado em `src/content.config.ts` com `glob()`.

O schema Zod desse arquivo define o contrato dos registros. Alterações nos campos devem ser refletidas também nas configurações do Decap CMS e nos componentes/páginas que consomem a coleção.

## Estrutura de um projeto

Campos principais:

| Campo | Tipo / regra | Finalidade |
|---|---|---|
| `title` | string obrigatória | Título em português e identificador usado na criação do slug pelo CMS |
| `kind` | `external` ou `detailed` | Define projeto externo ou página de detalhes |
| `translations.pt` | objeto | Subtítulo, descrição e conteúdo em português |
| `translations.en` | objeto | Título, subtítulo, descrição e conteúdo em inglês |
| `featured` | boolean | Define destaque na página inicial |
| `published` | boolean | Controla a publicação no site |
| `stack` | array de strings | Tecnologias utilizadas |
| `startDate` | string `DD-MM-YYYY` | Data inicial |
| `endDate` | string opcional `DD-MM-YYYY` | Data final |
| `thumb` | objeto | Imagens de capa desktop e mobile |
| `links` | objeto | URLs do projeto publicado e do repositório |
| `gallery` | array | Imagens adicionais, com texto alternativo opcional |
| `video` | objeto opcional | URL do vídeo e imagem de capa |

O schema em `src/content.config.ts` é a referência definitiva para obrigatoriedade, tipos, valores padrão e validações.

## Regras de negócio

- `kind` aceita `external` ou `detailed`.
- Projeto `external` precisa de `links.liveUrl`.
- Projeto `external` não deve possuir `links.repoUrl`.
- `endDate`, quando informada, não pode ser anterior a `startDate`.
- `featured` e `published` possuem valores padrão definidos no schema.
- A galeria aceita `alt` opcional.
- O objeto `video` não utiliza campos de largura ou altura.
- `stack` é uma lista simples de strings.
- O campo `order` foi removido. A ordenação é feita pelas datas.

As validações Zod acontecem durante a validação do conteúdo e o build. Elas não equivalem a uma validação condicional no formulário do CMS.

## Datas

O formato persistido é `DD-MM-YYYY`, por exemplo:

```yaml
startDate: "15-11-2025"
endDate: "20-03-2026"
```

Não utilizar `YYYY-MM-DD` nos novos registros.

O utilitário `src/utils/date.ts` centraliza:
- validação de datas;
- conversão entre `DD-MM-YYYY` e `YYYY-MM-DD`;
- conversão para `Date`;
- formatação localizada;
- comparação cronológica;
- obtenção de timestamp para ordenação;
- seleção da data mais recente entre início e término.

Não comparar datas `DD-MM-YYYY` diretamente com `localeCompare()`: a comparação lexical não representa a ordem cronológica nesse formato.

## Slug e rotas

O Decap CMS utiliza `identifier_field: "title"` e `slug: "{{slug}}"`. O nome do arquivo Markdown gerado pelo CMS determina `project.id`, utilizado pelas rotas dinâmicas.

Rotas:
- Português: `/projetos/[slug]/`
- Inglês: `/en/projects/[slug]/`

Alterar o título depois da criação não deve ser tratado como uma renomeação automática do arquivo/slug. Se o slug precisar mudar, revisar também links, referências e URLs publicadas.

## Listagens

- A Home seleciona registros com `published && featured`, ordena pela data mais recente e limita a quatro projetos.
- A listagem completa seleciona registros publicados e os ordena pela data mais recente.
- A ordenação considera `endDate` quando disponível; caso contrário, utiliza `startDate`.

A implementação utiliza `getLatestDate()` e `getDateTimestamp()` de `src/utils/date.ts`.

## Cuidados ao alterar o schema

1. Atualizar `src/content.config.ts`.
2. Atualizar `public/admin/config.yml`.
3. Atualizar `public/admin-local/config.yml`.
4. Revisar os arquivos Markdown existentes.
5. Revisar páginas, cards e componentes que acessam os campos alterados.
6. Executar `npx astro sync` e `npm run build`.

Não remover ou renomear campos sem procurar todas as referências no projeto.
