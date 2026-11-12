# Motion Design

## Implementação

A biblioteca de Motion Design é própria do projeto e utiliza CSS para
animações, componentes Astro para aplicação e TypeScript para observar
elementos no viewport. Não utiliza Framer Motion, GSAP ou outras
dependências externas.

O CSS é carregado globalmente por `src/styles/globals.css`, que importa
`src/styles/motion.css`. Os imports internos usam o alias `@/`
(`@/*` → `src/*`), configurado em `tsconfig.json`.

### Estrutura

```text
src/
├── components/ui/motion/
│   ├── MotionReveal.astro
│   ├── MotionGroup.astro
│   ├── MotionImage.astro
│   ├── MotionText.astro
│   └── MotionStack.astro
├── styles/
│   ├── globals.css
│   └── motion.css
└── utils/motion/
    ├── constants.ts
    ├── index.ts
    ├── observer.ts
    ├── styles.ts
    └── types.ts
```

### Componentes

Todos repassam atributos extras (`id`, `aria-*`, `data-*`) ao elemento
renderizado. Valores inválidos de `variant`/`intensity` voltam ao padrão,
e `delay`, `duration` e `distance` negativos são normalizados para `0`.

#### `MotionReveal.astro`

Aplica uma animação quando o elemento entra no viewport.

| Propriedade | Tipo              | Padrão     | Função                       |
| ----------- | ----------------- | ---------- | ---------------------------- |
| `as`        | `HTMLTag`         | `div`      | Tag renderizada              |
| `variant`   | `MotionVariant`   | `fade-up`  | Animação aplicada            |
| `intensity` | `MotionIntensity` | `moderate` | Intensidade do efeito        |
| `delay`     | `number`          | `0`        | Atraso em ms                 |
| `duration`  | `number`          | Automático | Duração personalizada em ms  |
| `distance`  | `number`          | Automático | Distância do movimento em px |
| `once`      | `boolean`         | `true`     | Executa uma vez              |
| `className` | `string`          | —          | Classes adicionais           |

Variantes: `fade-in`, `fade-up`, `fade-down`, `fade-left`, `fade-right`,
`scale-in`, `reveal-up` e `reveal-mask`.

```astro
***
import MotionReveal from "@/components/ui/motion/MotionReveal.astro";
***

<MotionReveal variant="fade-up" delay={150} intensity="subtle">
  <h2>Título da seção</h2>
</MotionReveal>
```

#### `MotionGroup.astro`

Aplica animações sequenciais aos filhos diretos. O índice de cada filho
determina o atraso progressivo (_stagger_).

| Propriedade | Tipo                 | Padrão     | Função                           |
| ----------- | -------------------- | ---------- | -------------------------------- |
| `as`        | `HTMLTag`            | `div`      | Tag renderizada                  |
| `variant`   | `MotionGroupVariant` | `fade-up`  | Animação dos filhos              |
| `stagger`   | `number`             | `80`       | Intervalo entre animações, em ms |
| `delay`     | `number`             | `0`        | Atraso inicial                   |
| `duration`  | `number`             | Automático | Duração personalizada            |
| `distance`  | `number`             | Automático | Distância do movimento           |
| `once`      | `boolean`            | `true`     | Executa uma vez                  |
| `className` | `string`             | —          | Classes adicionais               |

Variantes: `fade-in`, `fade-up`, `fade-left`, `fade-right` e `scale-in`.

```astro
***
import MotionGroup from "@/components/ui/motion/MotionGroup.astro";
***

<MotionGroup variant="fade-up" stagger={100} className="grid gap-6 md:grid-cols-3">
  {items.map((item) => <Card item={item} />)}
</MotionGroup>
```

Limitação: filhos diretos que usem classes `motion-hover-*` sobrescrevem
a transição de entrada. Aplique o hover em um elemento interno do filho.

#### `MotionImage.astro`

Contêiner para imagens com revelação e zoom. Mantém o elemento `<img>`
original e suas propriedades.

| Propriedade | Tipo      | Padrão  | Função                      |
| ----------- | --------- | ------- | --------------------------- |
| `reveal`    | `boolean` | `true`  | Habilita revelação          |
| `hoverZoom` | `boolean` | `false` | Habilita zoom no hover      |
| `once`      | `boolean` | `true`  | Executa a revelação uma vez |
| `className` | `string`  | —       | Classes adicionais          |

```astro
***
import MotionImage from "@/components/ui/motion/MotionImage.astro";
***

<MotionImage hoverZoom>
  <img src="/uploads/project.png" alt="Imagem do projeto" loading="lazy" />
</MotionImage>
```

#### `MotionText.astro`

Revela textos linha a linha com máscara. Cada item de `lines` vira uma
linha animada em sequência.

| Propriedade | Tipo       | Padrão | Função                        |
| ----------- | ---------- | ------ | ----------------------------- |
| `as`        | `HTMLTag`  | `p`    | Tag renderizada               |
| `lines`     | `string[]` | —      | Linhas do texto (obrigatório) |
| `stagger`   | `number`   | `80`   | Intervalo entre linhas, em ms |
| `delay`     | `number`   | `0`    | Atraso inicial                |
| `once`      | `boolean`  | `true` | Executa uma vez               |
| `className` | `string`   | —      | Classes adicionais            |

```astro
<MotionText as="h1" lines={["Design com", "movimento"]} stagger={120} />
```

#### `MotionStack.astro`

Atalho sobre `MotionGroup` com layout flex e espaçamento padronizado.
Aceita as props do `MotionGroup` e, adicionalmente:

| Propriedade | Tipo                 | Padrão   | Função                  |
| ----------- | -------------------- | -------- | ----------------------- |
| `gap`       | `sm` \| `md` \| `lg` | `md`     | Espaçamento entre itens |
| `direction` | `column` \| `row`    | `column` | Direção do layout       |

### Classes CSS disponíveis

As classes são definidas em `src/styles/motion.css` e podem ser
aplicadas sem componentes Astro.

| Grupo          | Classes                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Interação      | `motion-hover-lift`, `motion-hover-scale`, `motion-hover-rotate`, `motion-hover-glow`, `motion-press`, `motion-icon-shift`, `motion-underline` |
| Decorativos    | `motion-float`, `motion-pulse`, `motion-spin-slow`, `motion-gradient`, `motion-shimmer`                                                        |
| Entrada sem JS | `motion-enter`, `motion-delay-100` … `motion-delay-500`                                                                                        |
| Scroll         | `motion-scroll-reveal`                                                                                                                         |

A classe `motion-scroll-reveal` utiliza a API de animações baseada em
`view()` quando suportada pelo navegador. Para efeitos de entrada
controlados pelo projeto, os componentes usam o observador compartilhado.

`motion-enter` é uma animação CSS pura, indicada para conteúdo acima da
dobra, onde esperar o observer causaria atraso perceptível.

### Observação do viewport

`src/utils/motion/observer.ts` centraliza o `IntersectionObserver`
utilizado pelos componentes.

Os componentes registram elementos com `data-motion` ou `data-motion-group`.
O observador acompanha a entrada no viewport e adiciona `is-visible`; o
CSS executa a animação. Com `once={true}`, o elemento deixa de ser
observado após a primeira entrada.

Configuração atual: `threshold: 0.12` e `rootMargin: 0px 0px -8% 0px`.

Funções exportadas:

- `initMotion(root?, options?)` inicia a observação, opcionalmente
  limitada a um elemento. Com `{ watchMutations: true }`, também observa
  elementos inseridos depois no DOM.
- `refreshMotion(root?)` reavalia o DOM, útil após inserções dinâmicas.
- `destroyMotion()` desconecta o observador e remove o estado global de
  preparação.
- `prefersReducedMotion()` indica se o usuário prefere movimento reduzido.

Eventos (com `bubbles`), disparados no elemento observado:

| Evento           | Quando                                  |
| ---------------- | --------------------------------------- |
| `motion:visible` | Ao receber `is-visible`                 |
| `motion:hidden`  | Ao perder `is-visible` (`once={false}`) |

A integração com a navegação do Astro desconecta o observador em
`astro:before-swap` e o inicializa novamente em `astro:page-load`. Os
listeners são registrados uma única vez.

### Tipos, constantes e tokens

- `src/utils/motion/types.ts`: `MotionVariant`, `MotionGroupVariant`,
  `MotionIntensity`, `MotionOptions`, `MotionRevealProps`,
  `MotionGroupProps`, `MotionImageProps`, `MotionTextProps`,
  `MotionInitOptions` e `MotionVisibilityDetail`.
- `src/utils/motion/constants.ts`: listas de variantes e intensidades,
  `MOTION_DEFAULTS`, `MOTION_EVENTS` e `MOTION_CLASSES`.
- `src/utils/motion/styles.ts`: `buildMotionStyle`, `toNonNegative` e `oneOf`.
- `src/utils/motion/index.ts`: reexporta a API pública.

Intensidades disponíveis: `subtle`, `moderate` e `expressive`.

Os tokens CSS de duração, distância, escala, curvas e efeitos (incluindo
`--motion-glow-color` e `--motion-lift-distance`) ficam em
`src/styles/motion.css`.

## Acessibilidade e carregamento

A biblioteca respeita `prefers-reduced-motion`: reduz ou desativa
movimentos, escalas e animações contínuas, mantendo o conteúdo visível.
O observador também acompanha mudanças nessa preferência.

A classe `html.motion-ready` só é adicionada quando a inicialização do
sistema é possível. As regras que ocultam elementos antes da animação
dependem dessa classe. Sem JavaScript, sem `IntersectionObserver` ou com
movimento reduzido, o conteúdo permanece visível.

As animações priorizam `transform` e `opacity`, compartilham o
observador e evitam listeners de scroll desnecessários. O `clip-path` é
mantido apenas nas variantes `reveal-up` e `reveal-mask`, para não
recortar sombras e indicadores de foco dos demais elementos.

## Alterações e manutenção

| Alteração                                           | Arquivo                                                                                |
| --------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Durações, curvas, distâncias, escalas e efeitos CSS | `src/styles/motion.css`                                                                |
| Variantes e intensidades                            | `src/utils/motion/types.ts`, `src/utils/motion/constants.ts` e `src/styles/motion.css` |
| Valores padrão e eventos                            | `src/utils/motion/constants.ts`                                                        |
| Detecção de entrada no viewport                     | `src/utils/motion/observer.ts`                                                         |
| Propriedades e revelação                            | `src/components/ui/motion/MotionReveal.astro`                                          |
| Animações sequenciais                               | `src/components/ui/motion/MotionGroup.astro` e `MotionStack.astro`                     |
| Efeitos de imagem                                   | `src/components/ui/motion/MotionImage.astro`                                           |
| Animação de texto                                   | `src/components/ui/motion/MotionText.astro`                                            |

Para adicionar uma variante, atualize a tipagem, a lista em
`constants.ts` e os estilos em `motion.css`. Se a variante exigir
comportamento novo de observação, ajuste também `observer.ts` ou o
componente responsável.

Para remover um efeito de uma página, retire o componente ou a classe
utilizada no elemento. Para remover um componente da biblioteca, elimine
seus usos e o arquivo correspondente; remova também tipos ou estilos
exclusivos que não tenham outros consumidores. Para desativar toda a
biblioteca, remova a importação de `motion.css` em `globals.css` e os
usos dos componentes e classes nas páginas.

Após alterações, valide com:

```bash
npx astro sync
npm run build
```
