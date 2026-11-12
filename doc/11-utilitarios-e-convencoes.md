# Utilitários e convenções

## Utilitários compartilhados

Utilitários reutilizáveis ficam em `src/utils/`.

O módulo `src/utils/date.ts` centraliza operações de data utilizadas pelo conteúdo dos projetos.

## Datas

Formato persistido nos arquivos Markdown: `DD-MM-YYYY`.

Exemplo:

```yaml
startDate: "15-11-2025"
endDate: "20-03-2026"
```

Funções disponibilizadas pelo utilitário:

| Função | Responsabilidade |
|---|---|
| `parseDate()` | Converte `DD-MM-YYYY` em `Date`, retornando `null` se inválida |
| `isValidDateString()` | Valida data no formato adotado |
| `toISODate()` | Converte para `YYYY-MM-DD` |
| `fromISODate()` | Converte `YYYY-MM-DD` para `DD-MM-YYYY` |
| `toDate()` | Converte string ou `Date` para `Date` |
| `formatDate()` | Formata data para o locale solicitado |
| `compareDates()` | Compara duas datas |
| `isDateBefore()` | Verifica se uma data é anterior a outra |
| `isDateAfter()` | Verifica se uma data é posterior a outra |
| `getDateTimestamp()` | Obtém timestamp para ordenação |
| `getLatestDate()` | Retorna a data mais recente entre início e término |

Não implementar conversões isoladas nas páginas quando uma função do utilitário atender ao caso.

## Ordenação de projetos

A data considerada para ordenar um projeto é:
1. `endDate`, quando informada;
2. `startDate`, caso contrário.

A ordenação deve utilizar `getLatestDate()` e `getDateTimestamp()`. Não usar `localeCompare()` diretamente com datas no formato `DD-MM-YYYY`.

## Tipagem

- Utilizar TypeScript.
- Aproveitar os tipos fornecidos por Astro Content Collections, como `CollectionEntry<"projects">`.
- Evitar `any` quando o tipo puder ser inferido ou declarado.
- Manter os tipos coerentes com o schema Zod.

## Convenções de organização

- Código específico de uma feature permanece dentro de `src/features/`.
- Componentes genéricos ficam em `src/components/`.
- Rotas ficam em `src/pages/`.
- Funções compartilhadas ficam em `src/utils/`.
- Conteúdo editorial dos projetos permanece em Markdown.

## Convenções de implementação

- Reutilizar componentes e funções existentes.
- Evitar duplicação de regras de negócio.
- Manter o conteúdo separado da apresentação.
- Preservar os contratos definidos pelo schema.
- Não adicionar dependências sem necessidade clara.
- Atualizar documentação quando uma convenção ou utilitário mudar.
