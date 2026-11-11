# 04 — Design system

## Direção visual

A identidade visual segue a proposta **Digital Craft**: composição editorial contemporânea, referências tecnológicas, layout limpo e elementos visuais objetivos.

O tema claro é o padrão inicial. O site também oferece tema escuro.

## Paleta

| Nome | Valor |
|---|---|
| Warm Paper | `#F3F0E8` |
| Deep Ink | `#171B24` |
| Electric Cobalt | `#315CFF` |
| Signal Orange | `#F47745` |
| Soft Border | `#DCD9D0` |
| Muted Text | `#747984` |

As cores devem ser consumidas preferencialmente pelos tokens e variáveis do sistema, não replicadas como valores avulsos em componentes.

## Tipografia

Famílias definidas:
- Space Grotesk
- Inter
- IBM Plex Mono

Uso previsto:
- Space Grotesk: títulos e elementos de destaque.
- Inter: textos corridos e interface.
- IBM Plex Mono: metadados, labels e elementos técnicos.

## Estilização

O projeto utiliza Tailwind CSS v4 por meio de `@tailwindcss/vite`.

Diretrizes:
- Priorizar tokens e variáveis globais.
- Reutilizar classes e componentes existentes.
- Manter consistência de espaçamento, bordas, tipografia e estados.
- Evitar estilos locais que contradigam o sistema global.
- Não introduzir outra solução de CSS sem necessidade arquitetural.

## Componentes

Componentes genéricos de interface ficam em `src/components/ui/`.

Componentes estruturais compartilhados ficam em `src/components/layout/`.

Componentes ligados a uma funcionalidade ficam na feature correspondente, em `src/features/`.

Antes de criar um novo botão, container ou elemento recorrente, verificar os componentes existentes.

## Temas

- Tema claro como padrão.
- Tema escuro disponível por alternância.
- A preferência de tema é persistida pelo mecanismo implementado no projeto.

Ao modificar cores, verificar os dois temas. Não assumir que uma cor adequada no tema claro também terá contraste suficiente no escuro.

## Responsividade e movimento

A interface deve funcionar em dispositivos móveis e desktops.

Animações são moderadas e devem preservar a usabilidade. Evitar animações que prejudiquem navegação, leitura ou desempenho.

## Ícones

O projeto utiliza Lucide. Reutilizar a biblioteca e manter consistência de tamanho e estilo.

## Cuidados em refatorações

- Não substituir tokens globais por cores hardcoded sem justificativa.
- Verificar tema claro e escuro após alterações visuais.
- Validar layouts em larguras móveis e desktop.
- Preservar estados de foco, hover e interação.
- Reutilizar componentes antes de criar variações duplicadas.
