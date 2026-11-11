# 10 — Integrações e deploy

## Repositório

Repositório GitHub:

https://github.com/marcosreiss/portfolio-marcosreiss-astro

Branch principal: `main`.

O fluxo de produção integra GitHub e Vercel. Alterações enviadas à branch principal podem iniciar um novo deploy automaticamente.

## Hospedagem

O site está hospedado na Vercel:

https://marcosvinireiss.vercel.app

O projeto utiliza o adapter `@astrojs/vercel` e build estático (`output: "static"`).

## Build

Comandos principais:

```bash
npm install
npm run dev
npx astro sync
npm run build
npm run preview
```

O diretório de saída do build é `dist/`. A Vercel utiliza a configuração do projeto para publicar o resultado.

## CMS e publicação

O CMS de produção utiliza Decap CMS com backend `turbo-github`, associado ao repositório e à branch `main`.

O CMS local utiliza `git-gateway` e o servidor local `decap-server`. Os dois ambientes possuem arquivos de configuração separados.

Consulte `07-cms-e-gerenciamento.md` para instruções de execução e configuração dos painéis.

## Arquivos públicos e configuração

- `public/`: arquivos servidos diretamente pelo site.
- `public/uploads/`: mídia gerenciada pelo CMS.
- `public/og-image.png`: imagem social principal configurada.
- `vercel.json`: configurações específicas de deploy, incluindo regras e headers.

Antes de alterar caminhos públicos, revisar as referências no código e no CMS.

## Variáveis e segredos

Não há inventário de variáveis de ambiente confirmado nesta documentação. Antes de adicionar uma integração que exija segredo:
- identificar se a variável é necessária no build ou em runtime;
- configurar o valor no ambiente apropriado da Vercel;
- manter segredos fora do Git e da pasta `public/`;
- documentar nome, finalidade e ambiente da variável, nunca seu valor secreto.

## Checklist de publicação

1. Conferir alterações e arquivos gerados.
2. Executar `npx astro sync` quando houver mudanças no conteúdo ou schema.
3. Executar `npm run build`.
4. Validar as páginas afetadas localmente.
5. Enviar as alterações para a branch apropriada.
6. Acompanhar o deploy na Vercel.
7. Verificar as rotas e recursos alterados no domínio publicado.
