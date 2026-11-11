# 07 — CMS e gerenciamento

## Visão geral

O gerenciamento de projetos utiliza Decap CMS. Os registros são arquivos Markdown em `src/content/projects/`.

As configurações do painel são separadas por ambiente:

| Painel | Caminho | Backend |
|---|---|---|
| Produção | `/admin/` | `turbo-github` |
| Local | `/admin-local/` | `git-gateway` com backend local |

Não misturar as configurações: o painel local deve gravar no ambiente local e o painel de produção deve utilizar a integração Turbo/GitHub.

## Configuração de produção

Arquivo:

```text
public/admin/config.yml
```

Backend configurado:
- `name: turbo-github`
- `turbo_site_id` configurado para o site
- branch `main`

O painel de produção cria alterações no repositório integrado e o fluxo de deploy da Vercel publica as alterações após o processamento do GitHub.

## Configuração local

Arquivo:

```text
public/admin-local/config.yml
```

Backend:
- `name: git-gateway`
- `local_backend` apontando para `http://localhost:8081/api/v1`
- `localhost` permitido em `allowed_hosts`

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

## Coleção de projetos

A coleção configurada no CMS:
- nome: `projects`;
- diretório: `src/content/projects`;
- formato: Markdown com frontmatter;
- criação de novos registros habilitada;
- `title` é o campo identificador;
- `slug: "{{slug}}"` gera o nome do arquivo a partir do identificador.

Os campos do CMS devem permanecer compatíveis com o schema Zod em `src/content.config.ts`. Consulte `05-conteudo-e-projetos.md` para os campos e regras.

## Uploads

Configuração utilizada:
- `media_folder: public/uploads`
- `public_folder: /uploads`

Os caminhos gravados no conteúdo devem ser compatíveis com a forma como as imagens são servidas pelo site.

## Cuidados operacionais

- Alterar as duas configurações quando um campo do formulário mudar.
- Não copiar a configuração de produção para o ambiente local sem ajustar o backend.
- Não trocar o backend local por `turbo-github`.
- Não assumir que o CMS impede todas as regras de negócio: validações condicionais importantes também existem no schema Zod.
- Depois de alterar campos, criar ou editar um registro de teste e verificar o Markdown gerado.
- Executar `npx astro sync` e `npm run build` após alterações no modelo de conteúdo.
- Ao alterar `identifier_field` ou `slug`, verificar o impacto nos nomes dos arquivos e nas URLs já publicadas.
