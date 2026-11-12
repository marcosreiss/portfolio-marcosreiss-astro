# 13. Motion Design

## 1. Visão geral

O projeto possui uma biblioteca própria de Motion Design, desenvolvida para padronizar animações, transições e microinterações em toda a interface.

A implementação utiliza uma abordagem **CSS-first**, com componentes Astro reutilizáveis e JavaScript nativo apenas para comportamentos que dependem da interação com o viewport.

A biblioteca foi projetada para:

- Criar entradas e revelações de elementos durante a navegação.
- Padronizar transições e microinterações.
- Adicionar efeitos visuais a imagens e elementos interativos.
- Coordenar animações entre múltiplos elementos.
- Manter uma experiência consistente entre os temas claro e escuro.
- Respeitar as preferências de acessibilidade do usuário.
- Evitar dependências externas de animação.

Não são utilizadas bibliotecas como Framer Motion ou GSAP.

## 2. Arquitetura

A biblioteca está organizada em três camadas principais:

| Camada                 | Responsabilidade                                                       |
| ---------------------- | ---------------------------------------------------------------------- |
| Estilos                | Tokens, transições, animações e efeitos visuais.                       |
| Componentes Astro      | Interface declarativa para aplicação das animações.                    |
| Utilitários TypeScript | Observação do viewport e gerenciamento do ciclo de vida das animações. |

### Estrutura de arquivos

```text
src/
├── components/
│   └── ui/
│       └── motion/
│           ├── MotionReveal.astro
│           ├── MotionGroup.astro
│           └── MotionImage.astro
│
├── styles/
│   ├── global.css
│   └── motion.css
│
└── utils/
    └── motion/
        ├── observer.ts
        └── types.ts
```

O arquivo `motion.css` é importado globalmente pelo `global.css`, disponibilizando os efeitos e utilitários em toda a aplicação.

## 3. Sistema de tokens

Os tokens centralizam os valores utilizados pelas animações, permitindo manter consistência e facilitar ajustes globais.

### 3.1. Durações

| Token    | Duração | Aplicação                     |
| -------- | ------: | ----------------------------- |
| Instant  |   120ms | Respostas visuais imediatas.  |
| Fast     |   180ms | Microinterações.              |
| Normal   |   280ms | Transições comuns.            |
| Moderate |   450ms | Entradas e revelações.        |
| Slow     |   650ms | Movimentos mais perceptíveis. |
| Dramatic |   900ms | Animações expressivas.        |

### 3.2. Curvas de animação

| Curva      | Aplicação                      |
| ---------- | ------------------------------ |
| Standard   | Transições convencionais.      |
| Enter      | Entrada de elementos.          |
| Exit       | Saída de elementos.            |
| Emphasized | Movimentos com maior destaque. |
| Linear     | Movimentos constantes.         |

As curvas são implementadas com funções `cubic-bezier()` e centralizadas nos tokens CSS.

### 3.3. Distâncias e escalas

A biblioteca utiliza distâncias padronizadas de 8px, 16px, 32px e 48px.

As escalas são utilizadas para efeitos de entrada e interação:

- 0.96 e 0.94: redução inicial de elementos.
- 1.02: ampliação sutil em hover.
- 1.04: ampliação para efeitos de destaque.

Esses valores são utilizados como referência, podendo ser ajustados por propriedades CSS e configurações dos componentes.

## 4. Componentes Astro

A biblioteca disponibiliza três componentes principais.

### 4.1. MotionReveal

O `MotionReveal` aplica uma animação de entrada a um elemento quando ele entra na área visível da tela.

**Arquivo:** `src/components/ui/motion/MotionReveal.astro`

#### Propriedades

| Propriedade | Tipo              | Padrão     | Descrição                             |
| ----------- | ----------------- | ---------- | ------------------------------------- |
| `as`        | `HTMLTag`         | `div`      | Elemento HTML renderizado.            |
| `variant`   | `MotionVariant`   | `fade-up`  | Tipo de animação.                     |
| `intensity` | `MotionIntensity` | `moderate` | Intensidade visual.                   |
| `delay`     | `number`          | `0`        | Atraso em milissegundos.              |
| `duration`  | `number`          | Automático | Duração personalizada.                |
| `distance`  | `number`          | Automático | Distância personalizada do movimento. |
| `once`      | `boolean`         | `true`     | Executa a animação apenas uma vez.    |
| `className` | `string`          | —          | Classes CSS adicionais.               |

#### Variantes disponíveis

| Variante      | Comportamento                        |
| ------------- | ------------------------------------ |
| `fade-in`     | Aparecimento gradual.                |
| `fade-up`     | Entrada de baixo para cima.          |
| `fade-down`   | Entrada de cima para baixo.          |
| `fade-left`   | Entrada pela esquerda.               |
| `fade-right`  | Entrada pela direita.                |
| `scale-in`    | Entrada com aumento de escala.       |
| `reveal-up`   | Revelação vertical.                  |
| `reveal-mask` | Revelação utilizando máscara visual. |

#### Exemplo de utilização

```astro
---
import MotionReveal from "../components/ui/motion/MotionReveal.astro";
---

<MotionReveal variant="fade-up">
  <h2>Transformando ideias em soluções digitais.</h2>
</MotionReveal>

<MotionReveal
  variant="fade-up"
  delay={150}
  intensity="subtle"
>
  <p>
    Desenvolvimento de aplicações modernas e experiências digitais.
  </p>
</MotionReveal>
```

### 4.2. MotionGroup

O `MotionGroup` permite animar um conjunto de elementos, aplicando uma sequência de entrada com atraso progressivo (_stagger_).

**Arquivo:** `src/components/ui/motion/MotionGroup.astro`

#### Propriedades

| Propriedade | Tipo                 | Padrão     | Descrição                       |
| ----------- | -------------------- | ---------- | ------------------------------- |
| `as`        | `HTMLTag`            | `div`      | Elemento HTML renderizado.      |
| `variant`   | `MotionGroupVariant` | `fade-up`  | Animação aplicada aos filhos.   |
| `stagger`   | `number`             | `80`       | Intervalo entre as animações.   |
| `delay`     | `number`             | `0`        | Atraso inicial do grupo.        |
| `duration`  | `number`             | Automático | Duração personalizada.          |
| `distance`  | `number`             | Automático | Distância do movimento.         |
| `once`      | `boolean`            | `true`     | Executa o grupo apenas uma vez. |
| `className` | `string`             | —          | Classes CSS adicionais.         |

#### Variantes disponíveis

- `fade-in`
- `fade-up`
- `fade-left`
- `fade-right`
- `scale-in`

O componente identifica os elementos filhos diretos e atribui automaticamente um índice para controlar o atraso de cada animação.

#### Exemplo de utilização

```astro
---
import MotionGroup from "../components/ui/motion/MotionGroup.astro";
import ProjectCard from "./ProjectCard.astro";
---

<MotionGroup
  variant="fade-up"
  stagger={100}
  className="grid gap-6 md:grid-cols-3"
>
  {projects.map((project) => (
    <ProjectCard project={project} />
  ))}
</MotionGroup>
```

Nesse exemplo, os cards aparecem progressivamente, respeitando o intervalo configurado.

### 4.3. MotionImage

O `MotionImage` é um componente de composição para imagens, oferecendo efeitos de revelação e ampliação.

**Arquivo:** `src/components/ui/motion/MotionImage.astro`

#### Propriedades

| Propriedade | Tipo      | Padrão  | Descrição                              |
| ----------- | --------- | ------- | -------------------------------------- |
| `reveal`    | `boolean` | `true`  | Habilita a revelação da imagem.        |
| `hoverZoom` | `boolean` | `false` | Habilita ampliação ao passar o cursor. |
| `once`      | `boolean` | `true`  | Executa a revelação apenas uma vez.    |
| `className` | `string`  | —       | Classes CSS adicionais.                |

#### Exemplo de utilização

```astro
---
import MotionImage from "../components/ui/motion/MotionImage.astro";
---

<MotionImage hoverZoom>
  <img
    src="/uploads/project.png"
    alt="Interface do projeto"
    loading="lazy"
    class="aspect-video w-full object-cover"
  />
</MotionImage>
```

O componente não substitui o elemento de imagem original. Ele funciona como um contêiner, preservando a liberdade de utilizar diferentes fontes e configurações de imagem.

## 5. Classes utilitárias

Além dos componentes, `motion.css` disponibiliza classes que podem ser aplicadas diretamente aos elementos.

### 5.1. Interações e hover

| Classe                | Comportamento                      |
| --------------------- | ---------------------------------- |
| `motion-hover-lift`   | Elevação sutil do elemento.        |
| `motion-hover-scale`  | Ampliação ao passar o cursor.      |
| `motion-hover-rotate` | Rotação sutil.                     |
| `motion-hover-glow`   | Efeito de brilho.                  |
| `motion-press`        | Feedback visual de pressionamento. |
| `motion-icon-shift`   | Deslocamento de ícones.            |
| `motion-underline`    | Animação de sublinhado.            |

Exemplo:

```astro
<a href="/projects" class="motion-hover-lift">
  Ver projetos
</a>
```

### 5.2. Efeitos decorativos

| Classe             | Comportamento                 |
| ------------------ | ----------------------------- |
| `motion-float`     | Movimento flutuante contínuo. |
| `motion-pulse`     | Pulsação de destaque.         |
| `motion-spin-slow` | Rotação lenta.                |
| `motion-gradient`  | Animação de gradiente.        |

Esses efeitos devem ser utilizados com moderação, principalmente em elementos decorativos e destaques visuais.

### 5.3. Efeitos de imagem

Os estilos de imagem incluem:

- Revelação com máscara.
- Ampliação gradual.
- Zoom em hover.
- Controle de movimento e escala.

A aplicação pode ser feita pelo `MotionImage` ou diretamente pelas classes disponíveis em `motion.css`.

### 5.4. Efeitos de texto

A biblioteca também possui suporte a revelações de texto por linhas, utilizando classes e atributos específicos para organizar os elementos.

A estrutura de texto pode ser combinada com os mecanismos de animação em grupo para criar entradas sequenciais.

### 5.5. Animações baseadas em scroll

A classe `motion-scroll-reveal` utiliza animações orientadas pelo scroll quando o navegador oferece suporte à API de animações baseada em `view()`.

Essa abordagem é complementar ao sistema de observação por `IntersectionObserver`, devendo ser escolhida conforme a necessidade do efeito.

## 6. Sistema de observação do viewport

**Arquivo:** `src/utils/motion/observer.ts`

O gerenciamento das animações de entrada é centralizado em um observador compartilhado baseado em `IntersectionObserver`.

Isso evita criar um observador independente para cada componente.

### 6.1. Funcionamento

O fluxo de execução é:

1. Os componentes registram os elementos por meio dos atributos `data-motion` ou `data-motion-group`.
2. O utilitário identifica os elementos que precisam de observação.
3. O `IntersectionObserver` acompanha a entrada dos elementos no viewport.
4. Quando um elemento atinge a região de observação, recebe a classe `is-visible`.
5. O CSS executa a animação correspondente.
6. Quando `once` está habilitado, o elemento deixa de ser observado após a primeira entrada.

A configuração utiliza:

- Threshold: `0.12`.
- Root margin: `0px 0px -8% 0px`.

### 6.2. Funções disponíveis

| Função              | Responsabilidade                                                |
| ------------------- | --------------------------------------------------------------- |
| `initMotion(root?)` | Inicializa a observação dos elementos.                          |
| `destroyMotion()`   | Desconecta o observador e remove o estado global de preparação. |

O parâmetro `root` permite limitar a inicialização a uma região específica do documento.

### 6.3. Integração com Astro

O observador acompanha os eventos de navegação do Astro.

- `astro:before-swap`: desconecta o observador anterior, reinicia o controle dos elementos e remove a classe de preparação.
- `astro:page-load`: inicializa novamente as animações após o carregamento da página.

Essa integração evita manter referências de elementos antigos durante navegações com View Transitions.

## 7. Tipagem TypeScript

**Arquivo:** `src/utils/motion/types.ts`

Os tipos centralizam as opções disponíveis e ajudam a manter consistência entre os componentes.

### Tipos principais

| Tipo                 | Responsabilidade              |
| -------------------- | ----------------------------- |
| `MotionVariant`      | Variantes do MotionReveal.    |
| `MotionGroupVariant` | Variantes do MotionGroup.     |
| `MotionIntensity`    | Intensidades visuais.         |
| `MotionOptions`      | Opções compartilhadas.        |
| `MotionRevealProps`  | Propriedades do MotionReveal. |
| `MotionGroupProps`   | Propriedades do MotionGroup.  |

### Intensidades

- `subtle`: movimento discreto.
- `moderate`: movimento intermediário.
- `expressive`: movimento mais perceptível.

A tipagem evita a utilização de variantes e intensidades fora das opções definidas pela biblioteca.

## 8. Acessibilidade e movimento reduzido

A biblioteca respeita a preferência do sistema operacional definida em:

```css
@media (prefers-reduced-motion: reduce);
```

Quando o usuário solicita redução de movimento:

- As animações expressivas são removidas ou reduzidas.
- Movimentos contínuos são desabilitados.
- Deslocamentos e escalas são neutralizados.
- Transições são reduzidas.
- O conteúdo permanece visível e acessível.

O observador também monitora alterações nessa preferência durante a execução da aplicação.

A implementação segue o princípio de que animações são recursos de apresentação e nunca podem impedir o acesso ao conteúdo.

## 9. Progressive Enhancement

A biblioteca foi implementada para não depender obrigatoriamente de JavaScript para apresentar o conteúdo.

O mecanismo utiliza a classe global:

```css
html.motion-ready
```

Essa classe é adicionada somente quando o sistema de observação pode ser inicializado.

As regras que ocultam elementos antes da animação dependem dessa classe. Dessa forma:

- Sem JavaScript, o conteúdo permanece visível.
- Sem suporte ao `IntersectionObserver`, o conteúdo permanece visível.
- Com movimento reduzido, o conteúdo permanece visível.
- Com o observador ativo, os elementos podem aguardar a entrada no viewport para executar a animação.

Esse comportamento evita que uma falha na inicialização da biblioteca deixe partes da página permanentemente ocultas.

## 10. Performance

As decisões de implementação priorizam animações eficientes e previsíveis.

### Diretrizes adotadas

- Priorizar `transform` e `opacity`.
- Evitar animar propriedades que provoquem recálculo frequente do layout.
- Compartilhar o `IntersectionObserver`.
- Desconectar observadores durante a troca de páginas.
- Evitar listeners de scroll desnecessários.
- Utilizar efeitos contínuos com moderação.
- Evitar aplicação indiscriminada de `will-change`.
- Reduzir a intensidade dos efeitos em dispositivos menores.
- Respeitar `prefers-reduced-motion`.

Não há dependência de bibliotecas externas para execução das animações.

## 11. Integração com o projeto

Para utilizar a biblioteca, basta importar o componente desejado.

Exemplo de organização em uma seção:

```astro
---
import MotionReveal from "../ui/motion/MotionReveal.astro";
import MotionGroup from "../ui/motion/MotionGroup.astro";
import MotionImage from "../ui/motion/MotionImage.astro";
---

<section>
  <MotionReveal variant="fade-up">
    <h2>Projetos em destaque</h2>
  </MotionReveal>

  <MotionGroup variant="fade-up" stagger={100}>
    {projects.map((project) => (
      <ProjectCard project={project} />
    ))}
  </MotionGroup>
</section>
```

A biblioteca também pode ser utilizada diretamente por meio das classes CSS, sem necessidade de criar componentes adicionais.

### Recomendações de utilização

| Situação                          | Recomendação                   |
| --------------------------------- | ------------------------------ |
| Títulos e textos de destaque      | `MotionReveal`                 |
| Grades de projetos e serviços     | `MotionGroup`                  |
| Imagens de projetos               | `MotionImage`                  |
| Botões e links                    | Classes de hover e press       |
| Elementos decorativos             | Classes de efeitos decorativos |
| Elementos que acompanham o scroll | `motion-scroll-reveal`         |

Evite combinar várias animações expressivas no mesmo elemento. O objetivo é criar hierarquia visual, não competir com o conteúdo.

## 12. Manutenção e evolução

A biblioteca possui uma estrutura modular para permitir a adição de novos efeitos sem comprometer os componentes existentes.

### Onde realizar alterações

| Necessidade                    | Arquivo                                    |
| ------------------------------ | ------------------------------------------ |
| Alterar durações e curvas      | `src/styles/motion.css`                    |
| Criar efeitos CSS              | `src/styles/motion.css`                    |
| Adicionar variantes de entrada | `src/utils/motion/types.ts` e `motion.css` |
| Alterar observação do viewport | `src/utils/motion/observer.ts`             |
| Alterar API de entrada         | `MotionReveal.astro`                       |
| Alterar animações em grupo     | `MotionGroup.astro`                        |
| Alterar efeitos de imagem      | `MotionImage.astro`                        |

### Possíveis evoluções

A arquitetura permite adicionar futuramente:

- Animações coordenadas entre seções.
- Efeitos avançados de parallax.
- Animações de navegação e transição entre páginas.
- Novas variantes de revelação.
- Efeitos tipográficos mais elaborados.
- Animações condicionadas a estados de interface.

Novos recursos devem preservar a abordagem CSS-first, a acessibilidade e o desempenho.

## 13. Validação

Após alterações na biblioteca ou em seus componentes, executar:

```bash
npx astro sync
npm run build
```

A validação visual deve considerar:

- Tema claro e escuro.
- Desktop e dispositivos móveis.
- Entrada e saída do viewport.
- Navegação entre páginas.
- Funcionamento sem JavaScript.
- Preferência de movimento reduzido.
- Ausência de conteúdo permanentemente oculto.
- Ausência de movimentos excessivos ou sobrepostos.

---

**Resultado:** o projeto possui uma biblioteca própria de Motion Design, composta por tokens CSS, efeitos reutilizáveis, componentes Astro e um sistema centralizado de observação do viewport. A implementação não depende de bibliotecas externas de animação e mantém como prioridades a consistência visual, a acessibilidade e a performance.
