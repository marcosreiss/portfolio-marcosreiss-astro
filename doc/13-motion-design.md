# Biblioteca de Motion Design

**Projeto:** Portfólio pessoal — Marcos Vinícius Reis

**Tecnologia:** Astro 7 · TypeScript · Tailwind CSS v4

**Abordagem:** CSS-first, com JavaScript progressivo

**Status:** Proposta técnica para implementação

---

## Objetivo

Construir uma biblioteca própria de motion design para padronizar, reutilizar e controlar as animações do portfólio.

A biblioteca deverá fornecer recursos para:

- Transições de interface.
- Microinterações.
- Animações de entrada e saída.
- Revelação de elementos durante a rolagem.
- Animações tipográficas.
- Animações de imagens e projetos.
- Efeitos decorativos.
- Composições com múltiplos elementos.
- Feedback visual de interação.

A intenção não é criar uma coleção de efeitos independentes, mas um sistema de movimento integrado ao Design System.

O movimento deverá reforçar a identidade visual, orientar a atenção e melhorar a experiência de navegação.

## Filosofia de implementação

A biblioteca seguirá quatro princípios.

**CSS primeiro**

Toda animação que puder ser realizada adequadamente com CSS deverá ser implementada dessa forma.

**JavaScript sob justificativa**

JavaScript será utilizado somente quando houver necessidade de observar eventos, controlar estados, coordenar animações complexas ou manipular elementos em tempo de execução.

**Progressive enhancement**

A página deverá continuar funcional mesmo quando JavaScript estiver indisponível. As animações serão melhorias progressivas, nunca requisitos para acessar conteúdo.

**Composição e reutilização**

Os efeitos deverão ser combináveis, configuráveis e independentes dos componentes de conteúdo.

---

## Direção de movimento

A identidade do portfólio exige movimento moderado, fluido e intencional.

O comportamento geral será:

- Discreto em elementos de interface.
- Mais expressivo em títulos e elementos de destaque.
- Gradual durante a rolagem.
- Pontual em imagens e projetos.
- Rápido em feedbacks de interação.
- Quase imperceptível em elementos decorativos.

### Intensidade

| Nível      | Aplicação               | Comportamento                        |
| ---------- | ----------------------- | ------------------------------------ |
| Sutil      | Botões, links e ícones  | Transições rápidas                   |
| Moderado   | Cards, imagens e seções | Movimento perceptível, sem exagero   |
| Expressivo | Hero e destaques        | Composições mais elaboradas          |
| Narrativo  | Sequências especiais    | Movimento coordenado entre elementos |

O nível moderado será o padrão.

Movimentos expressivos e narrativos deverão ser utilizados pontualmente, sem transformar a Home em uma apresentação de slides.

### Princípios visuais

- Movimento com propósito.
- Continuidade entre estados.
- Curvas de aceleração naturais.
- Entradas com leve deslocamento.
- Escala utilizada com moderação.
- Ausência de movimentos bruscos.
- Respeito à hierarquia visual.
- Preservação da legibilidade.

---

## Arquitetura da biblioteca

A biblioteca será organizada em camadas, mantendo separação entre tokens, efeitos CSS, componentes e possíveis comportamentos JavaScript.

### Camada de tokens

Define os valores reutilizáveis de movimento:

- Durações.
- Curvas de aceleração.
- Distâncias de deslocamento.
- Escalas.
- Opacidades.
- Delays.
- Intensidade de efeitos.

Os valores deverão ficar centralizados em variáveis CSS.

### Camada de efeitos

Contém as classes e os seletores responsáveis pelas animações.

Exemplos:

- Fade.
- Fade up.
- Fade down.
- Slide.
- Scale.
- Stagger.
- Hover lift.
- Image reveal.
- Text reveal.

### Camada de componentes

Oferece interfaces declarativas para facilitar a aplicação dos efeitos nos componentes Astro.

Exemplos:

- Elemento com animação de entrada.
- Grupo com animação escalonada.
- Imagem com revelação.
- Texto com animação de destaque.

Esses componentes deverão ser leves e não deverão transformar elementos estáticos em componentes React.

### Camada de comportamento

Responsável por funcionalidades que exigem JavaScript.

Exemplos:

- Observação de elementos no viewport.
- Controle de sequências.
- Animações dependentes de interação.
- Parallax com ponteiro.
- Sincronização de movimentos com eventos.

Essa camada será opcional e carregada somente quando necessária.

---

## Organização de arquivos proposta

A estrutura deverá respeitar os diretórios já existentes.

```
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
├── utils/
│   └── motion/
│       ├── observer.ts
│       └── types.ts
│
└── features/
    └── home/
        └── components/
```

A estrutura é uma proposta inicial, não uma exigência de criação de todos os arquivos.

Regras:

- `motion.css` centraliza os tokens e efeitos CSS.
- `components/ui/motion/` contém componentes Astro reutilizáveis.
- `utils/motion/` contém comportamentos JavaScript realmente compartilhados.
- Animações exclusivas de uma seção permanecem dentro da feature correspondente.
- Não criar arquivos vazios ou abstrações sem uso concreto.

A biblioteca não deverá depender da estrutura da Home. Outros componentes e páginas deverão poder utilizá-la.

---

## Tokens de movimento

Os tokens serão definidos em CSS, permitindo ajustes globais sem modificar cada animação.

### Duração

Proposta inicial:

| Token    | Valor | Aplicação               |
| -------- | ----- | ----------------------- |
| Instant  | 120ms | Feedback imediato       |
| Fast     | 180ms | Hover e estados simples |
| Normal   | 280ms | Transições de interface |
| Moderate | 450ms | Entradas e revelações   |
| Slow     | 650ms | Destaques e composições |
| Dramatic | 900ms | Animações especiais     |

Os valores serão ajustados durante os testes visuais.

### Easing

Criar curvas semânticas:

| Token      | Aplicação              |
| ---------- | ---------------------- |
| Standard   | Transições comuns      |
| Enter      | Elementos entrando     |
| Exit       | Elementos saindo       |
| Emphasized | Movimentos de destaque |
| Linear     | Progresso contínuo     |

Exemplo inicial:

```css
:root {
  --motion-duration-instant: 120ms;
  --motion-duration-fast: 180ms;
  --motion-duration-normal: 280ms;
  --motion-duration-moderate: 450ms;
  --motion-duration-slow: 650ms;
  --motion-duration-dramatic: 900ms;

  --motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --motion-ease-enter: cubic-bezier(0.16, 1, 0.3, 1);
  --motion-ease-exit: cubic-bezier(0.4, 0, 1, 1);
  --motion-ease-emphasized: cubic-bezier(0.2, 0.8, 0.2, 1);
  --motion-ease-linear: linear;
}
```

### Distâncias

Definir deslocamentos padronizados:

- Pequeno: 8px.
- Médio: 16px.
- Grande: 32px.
- Extra grande: 48px.

Os deslocamentos deverão ser reduzidos em dispositivos móveis quando necessário.

### Escalas

Valores de referência:

- Entrada sutil: 0.96.
- Entrada moderada: 0.94.
- Hover discreto: 1.02.
- Destaque: 1.04.

Evitar escalas que alterem excessivamente a percepção de tamanho ou provoquem sobreposição.

---

## Catálogo de animações

A biblioteca será desenvolvida por categorias.

### Entradas e revelações

Responsáveis por apresentar elementos gradualmente.

Efeitos previstos:

- `fade-in`
- `fade-up`
- `fade-down`
- `fade-left`
- `fade-right`
- `scale-in`
- `reveal-up`
- `reveal-mask`

Aplicações:

- Títulos.
- Descrições.
- Blocos de conteúdo.
- Seções.
- Cards.
- Elementos gráficos.

Os efeitos deverão possuir versões discretas e moderadas, evitando que todos os elementos utilizem o mesmo deslocamento.

### Stagger

Permite animar grupos de elementos de forma escalonada.

Aplicações:

- Listas.
- Cards de serviços.
- Projetos.
- Grupos de indicadores.
- Etapas de processos.

O intervalo entre elementos deverá ser configurável.

A implementação CSS poderá utilizar custom properties para determinar o delay de cada item.

Exemplo conceitual:

```css
.motion-stagger > * {
  transition-delay: calc(
    var(--motion-index, 0) * var(--motion-stagger-delay, 80ms)
  );
}
```

O índice poderá ser definido diretamente pelo markup ou por uma variável calculada na composição.

Não utilizar delays excessivos em listas grandes.

### Tipografia

Animações destinadas a títulos e textos de destaque.

Efeitos previstos:

- Fade de palavras.
- Entrada de linhas.
- Revelação por máscara.
- Deslocamento vertical.
- Destaque progressivo.

A animação deverá preservar a leitura e evitar fragmentação desnecessária do texto.

A divisão de palavras ou caracteres deverá ser utilizada somente quando houver justificativa visual.

Não implementar animação de texto em todos os parágrafos.

### Imagens e projetos

Efeitos previstos:

- Revelação por máscara.
- Zoom sutil.
- Transição de escala.
- Deslocamento controlado.
- Sobreposição de elementos.
- Transição entre imagens.

Aplicações:

- Capas de projetos.
- Capturas de interfaces.
- Fotografia pessoal.
- Mockups e composições visuais.

As imagens deverão permanecer visíveis e acessíveis mesmo sem animação.

### Hover e microinterações

Efeitos destinados a elementos interativos.

Aplicações:

- Botões.
- Links.
- Cards.
- Imagens.
- Ícones.
- Elementos de navegação.

Exemplos:

- Elevação discreta.
- Mudança de cor.
- Deslocamento de ícone.
- Expansão de underline.
- Alteração de escala.
- Transição de borda.
- Feedback de clique.

Esses efeitos deverão utilizar principalmente CSS `:hover`, `:focus-visible` e `:active`.

Em dispositivos sem hover, não depender de interações exclusivas do ponteiro.

### Elementos decorativos

Efeitos destinados a reforçar a identidade visual.

Exemplos:

- Pulsação discreta.
- Gradientes animados.
- Movimento de linhas.
- Rotação lenta.
- Glow.
- Elementos flutuantes.

Aplicação prioritária no Hero e em composições especiais.

Não utilizar animações infinitas em excesso. Movimento contínuo deverá ser reservado a elementos que realmente se beneficiem dele.

---

## Animações durante a rolagem

A biblioteca deverá oferecer uma solução reutilizável para revelar elementos conforme entram na área visível.

Existem duas abordagens principais.

### CSS Scroll-driven Animations

Utilizar recursos nativos como `animation-timeline: view()` quando forem adequados e suportados pelo navegador.

Vantagens:

- Não exige JavaScript.
- Integra animação e rolagem.
- Pode reduzir a necessidade de observadores.
- Mantém a lógica próxima do CSS.

Limitações:

- Suporte varia entre navegadores e versões.
- Nem todo comportamento de entrada pode ser representado adequadamente.
- Controle de estado e execução única pode ser limitado.

Essa abordagem será utilizada como melhoria progressiva, nunca como única forma de apresentar conteúdo importante.

### IntersectionObserver

Será a solução JavaScript preferencial quando for necessário detectar a entrada de elementos no viewport.

Comportamentos possíveis:

- Adicionar uma classe quando o elemento entra na área visível.
- Executar a animação uma única vez.
- Controlar grupos de elementos.
- Aplicar margens de antecipação.
- Desconectar observadores quando não forem mais necessários.

Vantagens:

- Boa compatibilidade.
- Controle explícito do momento da ativação.
- Não exige escuta contínua de eventos de scroll.
- Integra-se facilmente com classes CSS.

**Decisão:** utilizar CSS scroll-driven quando o comportamento for simples e a compatibilidade permitir. Utilizar IntersectionObserver quando for necessário controle previsível e compatível.

Não implementar os dois mecanismos simultaneamente para o mesmo efeito sem necessidade.

---

## Quando utilizar CSS

CSS deverá ser a escolha padrão para:

- Hover e focus.
- Transições de cor.
- Opacidade.
- Transformações.
- Escala e deslocamento.
- Entradas simples.
- Animações de loop.
- Gradientes animados.
- Revelações por máscara.
- Stagger com delays definidos no markup.
- Estados visuais de componentes.
- Transições entre estados declarativos.

### Propriedades preferenciais

Priorizar:

- `transform`
- `opacity`
- `filter`, com moderação
- `clip-path`, quando adequado
- `background-position`, em efeitos pontuais

Evitar animar continuamente:

- `width`
- `height`
- `top`
- `left`
- `margin`
- `padding`
- Propriedades que provoquem recálculo frequente de layout.

A animação deve evitar layout thrashing e reduzir trabalho de pintura.

`will-change` não deverá ser aplicado indiscriminadamente. Utilizar apenas após identificar uma necessidade de desempenho.

---

## Quando utilizar JavaScript

JavaScript será utilizado quando a animação depender de comportamento ou informação que CSS não consiga controlar adequadamente.

### Casos justificados

**Observação do viewport**

Quando for necessário ativar animações apenas quando elementos entrarem na área visível, especialmente com controle de execução única.

**Interações com estado**

Quando o movimento depender de uma seleção, alternância, expansão, fechamento ou outro estado da interface.

**Animações coordenadas**

Quando múltiplos elementos precisarem responder a uma sequência dinâmica, com dependências entre etapas.

**Movimento baseado em ponteiro**

Quando houver parallax, acompanhamento do cursor ou resposta a movimentos do usuário.

**Scroll sincronizado**

Quando uma composição depender de progresso, posição ou comportamento específico da rolagem.

**Controle dinâmico**

Quando duração, direção, intensidade ou sequência precisarem ser calculadas em tempo de execução.

### Casos em que JavaScript não deverá ser utilizado

- Hover de botão.
- Mudança de cor.
- Fade simples.
- Slide simples.
- Transição de escala.
- Animação de borda.
- Entrada de elementos sem necessidade de observação.
- Animações decorativas simples.
- Transições de foco e estado visual.

Não criar componentes React apenas para executar animações CSS.

---

## Critério para introduzir bibliotecas externas

A primeira versão não deverá adicionar dependências de animação.

Antes de introduzir uma biblioteca, avaliar:

- O CSS consegue produzir o efeito?
- O JavaScript nativo é suficiente?
- O comportamento exige timeline complexa?
- Existe sincronização sofisticada entre múltiplos elementos?
- O controle de scroll exige recursos especializados?
- O custo de manutenção é justificável?

### Possíveis ferramentas futuras

| Ferramenta         | Quando considerar                                          |
| ------------------ | ---------------------------------------------------------- |
| Web Animations API | Controle programático de animações simples                 |
| GSAP               | Timelines complexas, sequências e scroll avançado          |
| Motion             | Interações e transições declarativas em componentes React  |
| Lenis              | Smooth scrolling, somente se houver necessidade comprovada |

Não utilizar várias bibliotecas para resolver o mesmo problema.

### Recomendação

Manter a biblioteca independente de fornecedores externos.

Caso uma ferramenta seja introduzida posteriormente, ela deverá atuar como implementação especializada de um efeito, não como dependência obrigatória de toda a biblioteca.

---

## Componentes e API declarativa

A biblioteca deverá facilitar o uso dos efeitos diretamente nos componentes Astro.

### MotionReveal

Componente para revelar um elemento ou bloco de conteúdo.

Propriedades conceituais:

| Propriedade | Função                      |
| ----------- | --------------------------- |
| `variant`   | Tipo de animação            |
| `delay`     | Atraso inicial              |
| `duration`  | Duração                     |
| `distance`  | Distância do movimento      |
| `once`      | Executar uma única vez      |
| `as`        | Elemento semântico desejado |

Exemplo de uso pretendido:

```
<MotionReveal variant="fade-up">
  <h2>Projetos que resolvem problemas reais.</h2>
</MotionReveal>
```

### MotionGroup

Componente para coordenar a entrada de vários elementos.

Propriedades conceituais:

- `variant`
- `stagger`
- `delay`
- `once`

Exemplo:

```
<MotionGroup variant="fade-up" stagger={100}>
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />
</MotionGroup>
```

### MotionImage

Componente ou padrão de composição para imagens.

Efeitos previstos:

- Reveal.
- Zoom.
- Mask.
- Hover.

A implementação deverá preservar o componente de imagem já utilizado no projeto e não criar uma abstração que duplique suas responsabilidades.

### Observação sobre a API

As propriedades apresentadas são propostas de interface. Os tipos e valores definitivos serão definidos durante a implementação, considerando as limitações reais dos componentes Astro.

A biblioteca deverá permitir o uso direto de classes CSS quando um componente wrapper não trouxer benefício.

---

## Estratégia de ativação

A biblioteca deverá oferecer uma estratégia consistente de ativação.

Para elementos com animação de entrada:

- O conteúdo deverá existir no HTML inicial.
- A animação deverá ser uma melhoria visual.
- O conteúdo não poderá depender da execução de JavaScript para aparecer.
- A ausência de JavaScript não poderá deixar textos ou imagens invisíveis.

A implementação deverá evitar o problema de conteúdo permanentemente oculto quando o script falhar.

A estratégia de inicialização poderá utilizar uma classe global indicando que o sistema de motion está ativo. Somente depois dessa inicialização os efeitos que dependem de observação poderão assumir seus estados iniciais.

Essa abordagem deverá ser testada com JavaScript desativado, carregamento lento e falha de inicialização.

---

## Acessibilidade e movimento reduzido

A biblioteca deverá respeitar a preferência do usuário por movimento reduzido.

Implementar suporte global a:

```
@media (prefers-reduced-motion: reduce) {
  /* Reduzir ou remover movimentos não essenciais */
}
```

Diretrizes:

- Remover deslocamentos expressivos.
- Desativar parallax.
- Reduzir duração de transições.
- Evitar animações contínuas.
- Preservar feedback visual de interação.
- Não ocultar conteúdo.
- Não depender de movimento para comunicar informações.

A preferência deverá ser respeitada em todos os efeitos, inclusive nos comportamentos controlados por JavaScript.

O movimento reduzido não significa remover toda transição. Feedbacks essenciais podem permanecer com duração e intensidade menores.

---

## Performance

A biblioteca deverá ser desenvolvida considerando o custo de execução e renderização.

### Regras

- Priorizar `transform` e `opacity`.
- Evitar animações contínuas sem necessidade.
- Não observar elementos que não precisam de observação.
- Desconectar observadores quando apropriado.
- Evitar listeners globais de scroll quando houver alternativas.
- Utilizar `requestAnimationFrame` somente em animações que realmente dependam de atualização por frame.
- Evitar leituras e escritas alternadas no layout.
- Não aplicar `will-change` globalmente.
- Reduzir efeitos de blur e filtros em dispositivos com menor capacidade.
- Evitar animações pesadas simultâneas.

### Mobile

A versão mobile deverá priorizar fluidez e previsibilidade.

- Reduzir deslocamentos.
- Desativar parallax por ponteiro.
- Reduzir efeitos decorativos.
- Evitar sequências longas.
- Simplificar composições complexas.
- Preservar a leitura e a navegação.

### Temas

As animações deverão funcionar nos temas claro e escuro.

Os efeitos de sombra, glow, gradiente e borda deverão utilizar os tokens visuais do Design System.

Não criar uma paleta paralela para animações.

---

## Estratégia de testes

A biblioteca deverá ser validada em diferentes condições.

### Funcionalidade

- Entrada de elementos.
- Execução única.
- Stagger.
- Hover e focus.
- Transições entre estados.
- Animações de imagens.
- Comportamentos com JavaScript.
- Comportamentos sem JavaScript.

### Responsividade

- Desktop.
- Tablet.
- Mobile.

### Acessibilidade

- Navegação por teclado.
- Foco visível.
- `prefers-reduced-motion`.
- Conteúdo disponível sem animação.
- Contraste nos dois temas.

### Performance

- Evitar travamentos durante rolagem.
- Verificar animações simultâneas.
- Avaliar uso de CPU e GPU.
- Observar comportamento em dispositivos móveis.
- Evitar deslocamentos inesperados de layout.

---

## Etapas de implementação

A biblioteca deverá ser construída progressivamente.

### Fundação

- Definir tokens de movimento.
- Criar `motion.css`.
- Definir convenções de nomenclatura.
- Implementar suporte a movimento reduzido.
- Criar primeiros efeitos CSS.

### Efeitos básicos

- Fade.
- Slide.
- Scale.
- Reveal.
- Hover.
- Focus.
- Active.
- Stagger.

Validar os efeitos em componentes reais antes de ampliar o catálogo.

### Integração com Astro

- Criar os componentes declarativos necessários.
- Integrar a biblioteca à Home.
- Validar conteúdo sem JavaScript.
- Evitar hidratação desnecessária.
- Testar a reutilização em outras features.

### Comportamentos JavaScript

- Implementar IntersectionObserver.
- Criar inicialização e limpeza dos observadores.
- Implementar comportamentos dinâmicos necessários.
- Avaliar parallax e interações avançadas.
- Evitar dependências externas.

### Efeitos avançados

Somente após validar a fundação:

- Text reveal.
- Image mask.
- Sequências coordenadas.
- Parallax pontual.
- Scroll-driven animations.
- Composições específicas do Hero.

### Refinamento

- Ajustar duração e easing.
- Revisar intensidade.
- Validar mobile.
- Avaliar desempenho.
- Revisar acessibilidade.
- Documentar os efeitos disponíveis.

---

## Critérios de aceite

A biblioteca estará pronta para uso quando:

- [ ] Os tokens estiverem centralizados.
- [ ] Os efeitos básicos forem reutilizáveis.
- [ ] Os componentes Astro não exigirem hidratação desnecessária.
- [ ] CSS for a solução padrão.
- [ ] JavaScript estiver restrito a comportamentos justificados.
- [ ] O IntersectionObserver tiver inicialização e limpeza adequadas.
- [ ] O conteúdo continuar disponível sem JavaScript.
- [ ] `prefers-reduced-motion` estiver implementado.
- [ ] Os efeitos funcionarem nos temas claro e escuro.
- [ ] A experiência mobile estiver validada.
- [ ] Não houver dependências externas desnecessárias.
- [ ] A biblioteca puder ser utilizada fora da Home.
- [ ] O build do Astro concluir sem erros.

---

## Diretriz final

A biblioteca de Motion Design deverá ser uma extensão do Design System, e não um sistema independente de efeitos visuais.

A prioridade será explorar os recursos nativos de CSS, compreender suas capacidades e limitações e introduzir JavaScript somente quando houver uma necessidade técnica concreta.

**Princípio central: o movimento deve valorizar a experiência sem se tornar mais importante que o conteúdo.**
