# Motion Design

## Implementação

A biblioteca de Motion Design é própria do projeto e utiliza CSS para
animações, componentes Astro para aplicação e TypeScript para observar
elementos no viewport. Não utiliza Framer Motion, GSAP ou outras
dependências externas.

O CSS é carregado globalmente por `src/styles/global.css`, que importa
`src/styles/motion.css`.

### Estrutura

```text
src/
├── components/ui/motion/
│   ├── MotionReveal.astro
│   ├── MotionGroup.astro
│   └── MotionImage.astro
├── styles/
│   ├── global.css
│   └── motion.css
└── utils/motion/
    ├── observer.ts
    └── types.ts
```

### Componentes

#### `MotionReveal.astro`

Aplica uma animação quando o elemento entra no viewport.

| Propriedade | Tipo | Padrão | Função |
| --- | --- | --- | --- |
| `as` | `HTMLTag` | `div` | Tag renderizada |
| `variant` | `MotionVariant` | `fade-up` | Animação aplicada |
| `intensity` | `MotionIntensity` | `moderate` | Intensidade do efeito |
| `delay` | `number` | `0` | Atraso em ms |
| `duration` | `number` | Automático | Duração personalizada |
| `distance` | `number` | Automático | Distância do movimento |
| `once` | `boolean` | `true` | Executa uma vez |
| `className` | `string` | — | Classes adicionais |

Variantes: `fade-in`, `fade-up`, `fade-down`, `fade-left`, `fade-right`,
`scale-in`, `reveal-up` e `reveal-mask`.

```astro
---
import MotionReveal from "../components/ui/motion/MotionReveal.astro";
---

<MotionReveal variant="fade-up" delay={150} intensity="subtle">
  <h2>Título da seção</h2>
</MotionReveal>
```

#### `MotionGroup.astro`

Aplica animações sequenciais aos filhos diretos. O índice de cada filho
determina o atraso progressivo (_stagger_).

| Propriedade | Tipo | Padrão | Função |
| --- | --- | --- | --- |
| `as` | `HTMLTag` | `div` | Tag renderizada |
| `variant` | `MotionGroupVariant` | `fade-up` | Animação dos filhos |
| `stagger` | `number` | `80` | Intervalo entre animações, em ms |
| `delay` | `number` | `0` | Atraso inicial |
| `duration` | `number` | Automático | Duração personalizada |
| `distance` | `number` | Automático | Distância do movimento |
| `once` | `boolean` | `true` | Executa uma vez |
| `className` | `string` | — | Classes adicionais |

Variantes: `fade-in`, `fade-up`, `fade-left`, `fade-right` e `scale-in`.

```astro
---
import MotionGroup from "../components/ui/motion/MotionGroup.astro";
---

<MotionGroup variant="fade-up" stagger={100} className="grid gap-6 md:grid-cols-3">
  {items.map((item) => <Card item={item} />)}
</MotionGroup>
```

#### `MotionImage.astro`

Contêiner para imagens com revelação e zoom. Mantém o elemento `<img>`
original e suas propriedades.

| Propriedade | Tipo | Padrão | Função |
| --- | --- | --- | --- |
| `reveal` | `boolean` | `true` | Habilita revelação |
| `hoverZoom` | `boolean` | `false` | Habilita zoom no hover |
| `once` | `boolean` | `true` | Executa a revelação uma vez |
| `className` | `string` | — | Classes adicionais |

```astro
---
import MotionImage from "../components/ui/motion/MotionImage.astro";
---

<MotionImage hoverZoom>
  <img src="/uploads/project.png" alt="Imagem do projeto" loading="lazy" />
</MotionImage>
```

### Classes CSS disponíveis

As classes são definidas em `src/styles/motion.css` e podem ser
aplicadas sem componentes Astro.


| Grupo | Classes |
| --- | --- |
| Interação | `motion-hover-lift`, `motion-hover-scale`, `motion-hover-rotate`, `motion-hover-glow`, `motion-press`, `motion-icon-shift`, `motion-underline` |
| Decorativos | `motion-float`, `motion-pulse`, `motion-spin-slow`, `motion-gradient` |
| Scroll | `motion-scroll-reveal` |


A classe `motion-scroll-reveal` utiliza a API de animações baseada em
`view()` quando suportada pelo navegador. Para efeitos de entrada
controlados pelo projeto, os componentes usam o observador
compartilhado.

### Observação do viewport

`src/utils/motion/observer.ts` centraliza o `IntersectionObserver`
utilizado pelos componentes.

Os componentes registram elementos com `data-motion` ou `data-motion-group`. O observador acompanha a entrada no viewport e adiciona `is-visible`; o CSS executa a animação. Com `once={true}`, o elemento deixa de ser observado após a primeira entrada.

Configuração atual: `threshold: 0.12` e `rootMargin: 0px 0px -8% 0px`.

Funções exportadas:

- `initMotion(root?)` inicia a observação, opcionalmente limitada a um elemento.
- `destroyMotion()` desconecta o observador e remove o estado global de preparação.

A integração com a navegação do Astro desconecta o observador em
`astro:before-swap` e o inicializa novamente em `astro:page-load`.

### Tipos e tokens

`src/utils/motion/types.ts` centraliza `MotionVariant`,
`MotionGroupVariant`, `MotionIntensity`, `MotionOptions`,
`MotionRevealProps` e `MotionGroupProps`.

Intensidades disponíveis: `subtle`, `moderate` e `expressive`.

Os tokens CSS de duração, distância, escala e curvas ficam em `src/styles/motion.css`.

## Acessibilidade e carregamento

A biblioteca respeita `prefers-reduced-motion`: reduz ou desativa
movimentos, escalas e animações contínuas, mantendo o conteúdo visível.
O observador também acompanha mudanças nessa preferência.

A classe `html.motion-ready` só é adicionada quando a inicialização do
sistema é possível. As regras que ocultam elementos antes da animação
dependem dessa classe. Sem JavaScript, sem `IntersectionObserver` ou com
movimento reduzido, o conteúdo permanece visível.

As animações priorizam `transform` e `opacity`, compartilham o
observador e evitam listeners de scroll desnecessários.

## Alterações e manutenção

| Alteração | Arquivo |
| --- | --- |
| Durações, curvas, distâncias, escalas e efeitos CSS | `src/styles/motion.css` |
| Variantes e intensidades | `src/utils/motion/types.ts` e `src/styles/motion.css` |
| Detecção de entrada no viewport | `src/utils/motion/observer.ts` |
| Propriedades e revelação | `src/components/ui/motion/MotionReveal.astro` |
| Animações sequenciais | `src/components/ui/motion/MotionGroup.astro` |
| Efeitos de imagem | `src/components/ui/motion/MotionImage.astro` |


Para adicionar uma variante, atualize a tipagem correspondente e
implemente seus estilos em `motion.css`. Se a variante exigir
comportamento novo de observação, ajuste também `observer.ts` ou o
componente responsável.

Para remover um efeito de uma página, retire o componente ou a classe
utilizada no elemento. Para remover um componente da biblioteca, elimine
seus usos e o arquivo correspondente; remova também tipos ou estilos
exclusivos que não tenham outros consumidores. Para desativar toda a
biblioteca, remova a importação de `motion.css` em `global.css` e os
usos dos componentes e classes nas páginas.

Após alterações, valide com:

```bash
npx astro sync
npm run build
```
