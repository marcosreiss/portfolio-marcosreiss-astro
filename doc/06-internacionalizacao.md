# Internacionalização

## Idiomas e rotas

O site oferece duas versões:

| Idioma    | Página inicial | Listagem de projetos | Detalhes               |
| --------- | -------------- | -------------------- | ---------------------- |
| Português | `/`            | `/projetos/`         | `/projetos/[slug]/`    |
| Inglês    | `/en/`         | `/en/projects/`      | `/en/projects/[slug]/` |

O português é o idioma padrão e ocupa a raiz do site. O inglês utiliza o prefixo `/en/`.

## Organização

Os recursos de internacionalização ficam em `src/i18n/`.

O projeto utiliza `useTranslations(lang)` para obter os textos de interface correspondentes ao idioma. `getLangFromUrl()` identifica o idioma a partir da URL.

Ao criar ou alterar textos da interface, manter as traduções sincronizadas nos arquivos de idioma existentes.

## Conteúdo dos projetos

Os projetos possuem campos de apresentação separados por idioma:

- `apresentacao`: textos de apresentação em português;
- `presentation`: textos de apresentação em inglês;
- `caseStudy.pt`: estudo de caso em português;
- `caseStudy.en`: estudo de caso em inglês.

O campo raiz `title` permanece como identificador principal do registro no Decap CMS e participa da geração do slug. O título em inglês é mantido no objeto `presentation`.

Não voltar a agrupar esses campos em uma estrutura antiga de `translations` sem atualizar simultaneamente schema, CMS, rotas e componentes consumidores.

## Depoimentos

Cada registro de `testimonials` possui um campo `language`, com os valores `pt` ou `en`, que identifica o idioma do texto em `quote`.

A seleção e apresentação dos depoimentos devem considerar esse campo para não exibir um depoimento em idioma incompatível com a página, salvo se houver uma regra explícita de fallback.

## Configurações globais

O arquivo `src/data/site-settings.json` mantém dados globais compartilhados, como informações profissionais, contato, localização e disponibilidade.

As listas de idiomas e áreas de atendimento configuradas nesse arquivo representam informações do perfil/serviço; não substituem a tradução do conteúdo das páginas.

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
- Respeitar os campos localizados definidos no schema.
- Não exibir depoimentos em idioma incompatível sem fallback explícito.
- Ao adicionar uma nova rota, implementar a versão correspondente nos idiomas suportados ou definir explicitamente o comportamento quando não houver equivalente.
- Verificar canonical e hreflang após mudanças nas URLs.
