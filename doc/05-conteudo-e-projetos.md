# Conteúdo e projetos

## Fontes de dados

O projeto utiliza duas collections do Astro Content Layer, ambas carregadas de arquivos Markdown:

| Collection     | Diretório                   |
| -------------- | --------------------------- |
| `projects`     | `src/content/projects/`     |
| `testimonials` | `src/content/testimonials/` |

Os schemas Zod são definidos em `src/content.config.ts`. As configurações dos formulários correspondentes ficam em `public/admin/config.yml` e `public/admin-local/config.yml`.

As configurações globais do site são mantidas separadamente em `src/data/site-settings.json`, validadas por `src/data/site-settings.ts`. Elas não fazem parte das collections Markdown.

## Collection `projects`

Cada arquivo Markdown representa um projeto. O nome do arquivo define `project.id`, utilizado como slug nas rotas dinâmicas.

### Campos principais

| Campo          | Tipo / regra                 | Finalidade                                                       |
| -------------- | ---------------------------- | ---------------------------------------------------------------- |
| `title`        | string obrigatória           | Título principal em português e identificador do registro no CMS |
| `kind`         | `external` ou `detailed`     | Define projeto externo ou página de detalhes                     |
| `category`     | enum de categorias           | Classificação do projeto                                         |
| `client`       | string                       | Cliente associado ao projeto                                     |
| `apresentacao` | objeto                       | Conteúdo de apresentação em português                            |
| `presentation` | objeto                       | Conteúdo de apresentação em inglês                               |
| `caseStudy`    | objeto com `pt` e `en`       | Conteúdo do estudo de caso nos dois idiomas                      |
| `featured`     | boolean                      | Define destaque na página inicial                                |
| `published`    | boolean                      | Controla a publicação no site                                    |
| `stack`        | array de strings             | Tecnologias utilizadas                                           |
| `startDate`    | string `DD-MM-YYYY`          | Data inicial                                                     |
| `endDate`      | string opcional `DD-MM-YYYY` | Data final                                                       |
| `thumb`        | objeto                       | Imagens de capa desktop e mobile                                 |
| `links`        | objeto                       | URLs do projeto publicado e do repositório                       |
| `gallery`      | array                        | Imagens adicionais, com metadados textuais                       |
| `video`        | objeto opcional              | URL do vídeo e imagem de capa                                    |

O schema em `src/content.config.ts` é a referência definitiva para obrigatoriedade, tipos, valores padrão e validações.

### Apresentação localizada

O objeto `apresentacao` contém os textos em português, como subtítulo e descrição.

O objeto `presentation` contém os textos equivalentes em inglês, incluindo o título em inglês. Essa separação é intencional e deve ser preservada ao alterar o schema ou os formulários do CMS.

O campo raiz `title` continua sendo o identificador utilizado pelo Decap CMS para criar o nome do arquivo/slug.

### Estudo de caso

`caseStudy` contém os objetos `pt` e `en`. Cada idioma pode conter:

- `context`: contexto do projeto;
- `challenge`: problema ou desafio;
- `solution`: solução desenvolvida;
- `role`: atuação no projeto;
- `features`: funcionalidades;
- `architecture`: informações de arquitetura;
- `challenges`: desafios técnicos;
- `results`: resultados ou entregas.

Os campos de lista possuem valores padrão vazios no schema. O conteúdo pode ser preenchido progressivamente, respeitando as regras de publicação.

### Categorias

O campo `category` utiliza os valores definidos no schema, atualmente:

- `web-system`;
- `institutional-site`;
- `landing-page`;
- `saas-platform`;
- `api-integration`;
- `internal-application`;
- `other`.

O schema em `src/content.config.ts` é a referência definitiva para os valores aceitos.

## Regras de negócio dos projetos

- `kind` aceita `external` ou `detailed`.
- Projeto `external` precisa de `links.liveUrl`.
- Projeto `external` não deve possuir `links.repoUrl`.
- `endDate`, quando informada, não pode ser anterior a `startDate`.
- `featured` e `published` possuem valores padrão definidos no schema.
- `stack` é uma lista de strings.
- `links` pode ser omitido e utiliza o valor padrão definido no schema.
- Para um projeto `detailed` publicado, o conteúdo em português precisa possuir ao menos um dos campos `context`, `challenge` ou `solution`.
- Os arrays de funcionalidades, desafios e resultados podem começar vazios.
- Não cadastrar métricas ou resultados quantitativos sem confirmação.

As validações Zod acontecem durante a validação do conteúdo e o build. Elas não equivalem a uma validação condicional completa no formulário do CMS.

## Collection `testimonials`

Os depoimentos são armazenados em `src/content/testimonials/`, um arquivo Markdown por registro.

Campos disponíveis:

| Campo           | Finalidade                                    |
| --------------- | --------------------------------------------- |
| `name`          | Nome da pessoa que deu o depoimento           |
| `role`          | Cargo ou função                               |
| `company`       | Empresa ou organização                        |
| `quote`         | Texto do depoimento                           |
| `language`      | Idioma do depoimento (`pt` ou `en`)           |
| `clientWebsite` | Site do cliente, opcional                     |
| `projectSlug`   | Slug do projeto relacionado, quando aplicável |
| `avatar`        | Imagem/avatar, quando disponível              |
| `featured`      | Indica se o depoimento pode receber destaque  |
| `published`     | Controla a publicação                         |
| `order`         | Ordem de apresentação                         |

`clientWebsite` é opcional. Quando informado, deve conter uma URL válida. Não inventar sites, cargos ou vínculos entre depoimentos e projetos.

## Datas

O formato persistido é `DD-MM-YYYY`, por exemplo:

```yaml
startDate: "15-11-2025"
endDate: "20-03-2026"
```

Não utilizar `YYYY-MM-DD` nos novos registros.

O utilitário `src/utils/date.ts` centraliza validação, conversão, formatação e comparação de datas.

Não comparar datas `DD-MM-YYYY` diretamente com `localeCompare()`: a comparação lexical não representa a ordem cronológica nesse formato.

## Slug e rotas

O Decap CMS utiliza o campo identificador `title` e `slug: "{{slug}}"`. O nome do arquivo Markdown gerado pelo CMS determina `project.id`.

Rotas:

- Português: `/projetos/[slug]/`
- Inglês: `/en/projects/[slug]/`

Alterar o título depois da criação não deve ser tratado como uma renomeação automática do arquivo/slug. Se o slug precisar mudar, revisar links, referências e URLs publicadas, incluindo referências em `testimonials.projectSlug`.

## Listagens e publicação

A seleção e ordenação de projetos deve respeitar `published`, `featured` e as regras de data implementadas nos componentes.

A collection de depoimentos também deve respeitar o estado `published`; o destaque e a ordem devem seguir os campos do registro.

Antes de alterar critérios de listagem, verificar os componentes consumidores para evitar divergência entre Home e páginas de listagem.

## Cuidados ao alterar o schema

1. Atualizar `src/content.config.ts`.
2. Atualizar `public/admin/config.yml`.
3. Atualizar `public/admin-local/config.yml`.
4. Revisar os arquivos Markdown existentes.
5. Revisar páginas, cards e componentes que acessam os campos alterados.
6. Revisar referências cruzadas, como `testimonials.projectSlug`.
7. Executar `npx astro sync` e `npm run build`.
