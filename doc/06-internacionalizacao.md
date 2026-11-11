# 06 — Internacionalização

## Idiomas e rotas

O site oferece duas versões:

| Idioma | Página inicial | Listagem de projetos | Detalhes |
|---|---|---|---|
| Português | `/` | `/projetos/` | `/projetos/[slug]/` |
| Inglês | `/en/` | `/en/projects/` | `/en/projects/[slug]/` |

O português é o idioma padrão e ocupa a raiz do site. O inglês utiliza o prefixo `/en/`.

## Organização

Os recursos de internacionalização ficam em:

```text
src/i18n/
```

Os arquivos e utilitários existentes incluem `ui.ts` e `utils.ts`.

O projeto utiliza `useTranslations(lang)` para obter os textos de interface correspondentes ao idioma. `getLangFromUrl()` identifica o idioma a partir da URL.

Ao criar ou alterar textos da interface, manter as traduções sincronizadas nos arquivos de idioma existentes.

## Conteúdo dos projetos

Os registros da coleção `projects` possuem conteúdo localizado:

- `translations.pt`: subtítulo, descrição e conteúdo.
- `translations.en`: título, subtítulo, descrição e conteúdo.

O título em português fica no campo raiz `title`. O título em inglês fica em `translations.en.title`.

O título raiz também é utilizado como identificador do registro pelo Decap CMS. Não mover esse campo sem revisar a geração de slugs e as configurações do CMS.

## Links entre idiomas

As páginas devem informar a URL equivalente no outro idioma por meio da propriedade `alternateUrl` do `BaseLayout`.

Ao adicionar ou renomear uma rota, atualizar os links alternativos correspondentes. Não presumir que a URL inglesa é sempre uma tradução literal da URL portuguesa: seguir a estrutura de rotas definida.

## Alternância de idioma

O seletor de idioma deve levar à página equivalente quando ela existir. Para páginas sem equivalente direto, preservar o comportamento já implementado no componente de navegação.

Ao alterar o seletor, validar:
- página inicial;
- listagem de projetos;
- página individual de projeto;
- links alternativos e hreflang.

## Cuidados

- Não misturar textos de interface com os dados localizados de um projeto.
- Não assumir que o conteúdo em inglês sempre existe apenas por fallback; respeitar o schema.
- Ao adicionar uma nova rota, implementar a versão correspondente nos idiomas suportados ou definir explicitamente o comportamento quando não houver equivalente.
- Verificar canonical e hreflang após mudanças nas URLs.
