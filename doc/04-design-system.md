# Design System

## **Identidade e posicionamento**

### **Conceito central**

A identidade visual do portfólio combina minimalismo sofisticado e futurismo tecnológico.

O objetivo não é criar uma interface que simplesmente pareça tecnológica, mas utilizar design, tipografia, composição e interações para comunicar profissionalismo, criatividade, domínio técnico e confiança.

O site deve funcionar principalmente como ferramenta de posicionamento profissional e conversão comercial.

A tecnologia é parte da identidade, mas não deve competir com a mensagem principal.

**Conceito orientador: Tecnologia sofisticada, apresentada com clareza e personalidade.**

### **Personalidade da marca**

A identidade deve transmitir seis características principais:

- Confiável: transmitir segurança e competência.
- Profissional: demonstrar organização, cuidado e qualidade.
- Criativa: apresentar soluções e abordagens diferenciadas.
- Inovadora: demonstrar familiaridade com tecnologia e evolução.
- Autêntica: evitar comunicação e estética genéricas.
- Independente: refletir personalidade e autonomia profissional.

### **Posicionamento profissional**

O posicionamento combina engenharia de software e visão estratégica de negócios.

A comunicação deve apresentar o desenvolvedor como alguém capaz de compreender problemas, projetar soluções e executar projetos tecnicamente complexos.

O portfólio não deve se limitar à apresentação de tecnologias utilizadas. Deve demonstrar como a capacidade técnica se transforma em valor para o cliente.

### **Público prioritário**

- Pequenas empresas e empreendedores que precisam de presença digital.
- Negócios que necessitam de sistemas e aplicações personalizadas.
- Clientes que procuram soluções digitais completas.

Ordem de prioridade dos serviços:

1. Sistemas web e aplicações personalizadas.
2. Sites institucionais e landing pages.
3. APIs e integrações.

---

## **Direção artística**

### **Linguagem visual**

A interface deve combinar:

- Minimalismo sofisticado.
- Composição editorial.
- Elementos gráficos tecnológicos.
- Tipografia expressiva.
- Contrastes controlados.
- Espaços negativos utilizados intencionalmente.
- Detalhes visuais que reforcem a identidade.

A estrutura deve ser limpa, mas não genérica.

O objetivo é encontrar equilíbrio entre uma interface que comunica com clareza e uma apresentação visual que demonstre personalidade.

### **Referências**

Referências para inspiração:

- [Tarik Karahodžić](https://www.tarikkarahodzic.dev/): composição editorial, espaços negativos e minimalismo.
- [Robin Noguier](https://robin-noguier.com/): personalidade visual, tipografia e movimento.
- [Lauren Waller](https://lauren-waller.com/): hierarquia de conteúdo e clareza.
- [Tamal Sen](https://tamalsen.dev/): elementos de programação e referências visuais tecnológicas.

As referências servem como inspiração para princípios específicos, não como modelos a serem reproduzidos.

A identidade final deve possuir linguagem própria.

### **Elementos gráficos**

A linguagem gráfica será construída principalmente a partir de duas categorias:

**Elementos estruturais**

- Grids.
- Linhas finas.
- Divisores.
- Alinhamentos e marcações.
- Diagramas e representações geométricas.

**Elementos tecnológicos**

- Snippets de código.
- Metadados.
- Identificadores técnicos.
- Indicadores e pequenos elementos de interface.
- Referências visuais a sistemas e programação.

A presença desses elementos deve ser equilibrada. Não transformar o site em um terminal, dashboard ou interface fictícia de programação.

### **Referências pessoais**

Interesses pessoais podem aparecer de maneira sutil, especialmente futebol e tecnologia.

Possibilidades:

- Easter eggs.
- Pequenos elementos gráficos.
- Referências visuais em detalhes secundários.
- Conteúdos complementares sobre interesses pessoais.

Essas referências não devem competir com a comunicação profissional.

---

## **Paleta de cores**

### **Direção cromática**

A paleta deve trabalhar com uma base neutra, contrastes profundos, azul tecnológico e laranja como cor de destaque.

O tema escuro orienta a construção estética, mas os dois temas devem possuir qualidade visual equivalente.

### **Paleta**

**Tokens de cor**

| Token | Tema claro | Tema escuro | Aplicação |
| --- | --- | --- | --- |
| `background` | `#f3f0e8` | `#171b24` | Fundo geral |
| `surface` | `#ffffff` | `#202530` | Superfícies e cartões |
| `surface-elevated` | `#ebe7de` | `#2a303d` | Superfícies elevadas |
| `foreground` | `#171b24` | `#f3f0e8` | Texto principal |
| `muted` | `#4c4f57` | `#b3b7c0` | Texto secundário |
| `border` | `#dcd9d0` | `#383e4b` | Bordas padrão |
| `border-strong` | `#8f8b7e` | `#656b7d` | Campos e divisores de ênfase |
| `primary` | `#2a50ee` | `#4468f0` | Fundos, bordas, ícones e dots azuis |
| `primary-hover` | `#1f40cc` | `#3b5bdb` | Hover de fundo primário; escurece nos dois temas |
| `primary-text` | `#2a50ee` | `#7d97ff` | Links, labels e texto azul |
| `primary-soft` | mistura de `primary` a 12% | mistura de `primary` a 12% | Badges, chips e fundos azuis suaves |
| `on-primary` | `#ffffff` | `#ffffff` | Texto sobre fundo `primary` |
| `accent` | `#ff6021` | `#f47745` | Fundos, bordas, ícones e dots laranja |
| `accent-hover` | `#ff7f4d` | `#ff906d` | Hover de fundo accent |
| `accent-text` | `#b53d0c` | `#f47745` | Texto laranja com contraste adequado |
| `accent-soft` | mistura de `accent` a 14% | mistura de `accent` a 14% | Badges, chips e fundos laranja suaves |
| `on-accent` | `#101216` | `#101216` | Texto sobre fundo `accent` |
| `success` | `#117a37` | `#3ecf8e` | Estado de sucesso |
| `warning` | `#9a5b00` | `#f2b84b` | Estado de atenção |
| `danger` | `#c62828` | `#ff7a7a` | Estado de erro |
| `ring` | igual a `primary-text` | igual a `primary-text` | Foco visível |

Os valores são definidos em `src/styles/global.css`. O Tailwind expõe as classes `bg-`, `text-`, `border-` e `ring-` para os tokens correspondentes.

### **Hierarquia cromática**

A aplicação das cores deve respeitar a seguinte prioridade:

1. Cores neutras: estrutura e leitura.
2. Azul: identidade e interações principais.
3. Laranja: destaque e ênfase pontual.

O laranja não deve ser utilizado indiscriminadamente.

Seu objetivo é criar contraste e direcionar a atenção para elementos específicos como ctas ou frases de inpacto.

### **Regras de utilização**

- Usar `text-primary-text` para links, labels, eyebrows e números azuis. Reservar `primary` para fundos, bordas, ícones e dots; não usar `text-primary`.
- Em CTAs laranja, combinar `bg-accent` com `text-on-accent`. Para texto laranja sobre fundo claro, usar `text-accent-text`, nunca `text-accent`.
- Sobre `bg-primary`, usar `text-on-primary`. Não usar `text-white` nem hex em componentes.
- Usar `bg-primary-hover` no hover primário e `bg-accent-hover` no hover accent.
- Comunicar estados com `success`, `warning` e `danger`; usar `muted` para estados neutros.
- Usar `border-border` por padrão e `border-border-strong` em campos, controles e divisores de ênfase.
- Usar `bg-primary-soft` e `bg-accent-soft` em badges e chips.
- Usar `ring` em foco visível, sem substituir o outline por cores soltas.
- Evitar grandes áreas de cores vibrantes e não utilizar azul e laranja em excesso na mesma composição.
- Utilizar tokens semânticos em vez de cores hardcoded e preservar contraste e legibilidade nos dois temas.

---

## **Temas**

### **Comportamento inicial**

O tema inicial deve respeitar a preferência do sistema operacional do visitante.

Comportamento esperado:

1. Visitante sem preferência salva: utilizar `prefers-color-scheme`.
2. Visitante com preferência manual salva: respeitar a escolha.
3. Permitir alternância manual entre claro e escuro.
4. Persistir a preferência manual.
5. Evitar mudanças visuais abruptas durante o carregamento.

### **Equivalência visual**

Os dois temas devem manter:

- Mesma hierarquia visual.
- Mesma identidade.
- Contraste adequado.
- Estados de interação equivalentes.
- Elementos gráficos adaptados ao contexto cromático.

O tema escuro não deve receber mais recursos visuais ou funcionalidades que o tema claro.

---

## **Tipografia**

### **Famílias tipográficas**

| Família       | Aplicação                              |
| ------------- | -------------------------------------- |
| Space Grotesk | Títulos e elementos de destaque        |
| Inter         | Textos corridos e interface            |
| IBM Plex Mono | Metadados, labels e elementos técnicos |

As famílias atuais serão mantidas inicialmente.

### **Hierarquia**

A tipografia deve estabelecer hierarquia visual clara entre:

- Títulos principais.
- Títulos de seção.
- Subtítulos.
- Textos de apresentação.
- Textos corridos.
- Metadados.
- Labels e informações técnicas.

### **Diretrizes**

- Utilizar títulos expressivos, sem comprometer a leitura.
- Evitar excesso de variações tipográficas.
- Utilizar IBM Plex Mono para criar contraste e reforçar a linguagem tecnológica.
- Preservar boa legibilidade em dispositivos móveis.
- Evitar textos excessivamente longos sem organização visual.

---

## **Layout e composição**

### **Princípios**

A composição deve priorizar:

- Clareza.
- Hierarquia.
- Equilíbrio.
- Espaços negativos.
- Alinhamento.
- Ritmo visual.
- Responsividade.

### **Linguagem de composição**

Não limitar todas as seções ao mesmo padrão de cards e grids.

A interface pode combinar:

- Composições assimétricas.
- Blocos editoriais.
- Divisores e linhas estruturais.
- Áreas de destaque.
- Elementos sobrepostos quando justificados.
- Diferentes proporções entre texto e elementos visuais.

A variação deve ser intencional e preservar a unidade visual.

### **Espaçamento**

Utilizar uma escala de espaçamento consistente, centralizada nos tokens globais.

Evitar valores arbitrários e margens diferentes para componentes que desempenham funções semelhantes.

Os espaçamentos devem considerar a densidade de informação e a largura disponível.

---

## **Componentes e interações**

### **Princípios gerais**

Os componentes devem possuir identidade visual consistente e estados de interação previsíveis.

Estados a considerar:

- Default.
- Hover.
- Focus-visible.
- Active.
- Disabled, quando aplicável.

### **Botões**

Botões devem ser reconhecíveis como elementos acionáveis.

Não utilizar efeitos de hover em cards e elementos informativos de maneira que possam ser confundidos com botões.

As interações devem comunicar claramente o resultado da ação.

### **Links**

Links devem possuir diferenciação visual em relação aos textos comuns.

Podem utilizar animações de sublinhado, mudanças de cor e pequenos deslocamentos.

### **Cards**

Cards podem apresentar feedback visual moderado.

Não devem assumir aparência de botão quando não forem interativos.

Quando clicáveis, precisam comunicar essa condição.

### **Ícones**

Utilizar Lucide React/Lucide conforme a implementação existente.

Manter consistência de tamanho, espessura e alinhamento.

Evitar utilizar ícones como decoração sem função comunicativa.

---

## **Motion Design**

### **Objetivos**

As animações devem cumprir duas funções:

1. Melhorar a experiência de navegação e manter o interesse do visitante.
2. Demonstrar domínio de interações e acabamento visual.

O movimento deve ajudar o usuário a continuar consumindo o conteúdo, não disputar sua atenção.

### **Personalidade do movimento**

As animações devem ser:

- Fluidas.
- Moderadas.
- Intencionais.
- Precisas.
- Pontualmente impactantes.

Evitar movimentos exagerados, constantes ou que comprometam a leitura.

### **Princípios**

**Continuidade:** movimentos devem ajudar a conduzir o olhar entre conteúdos.

**Antecipação:** pequenas revelações podem despertar curiosidade sobre a próxima seção.

**Feedback:** interações devem responder de maneira clara e rápida.

**Ênfase:** utilizar movimento para destacar informações importantes, não todos os elementos.

### **Comportamentos desejados**

- Transições de hover em botões e links.
- Revelação de conteúdo durante a rolagem.
- Animações tipográficas.
- Entradas escalonadas.
- Transições de imagens.
- Microinterações em elementos interativos.
- Transições entre páginas, quando tecnicamente justificadas.
- Efeitos de profundidade opcionais e moderados.

A experiência deve ser gradual, acompanhando a navegação natural do visitante.

Evitar a sensação de apresentação de slides.

### **Estratégia de implementação**

A primeira implementação de Motion Design deve utilizar exclusivamente CSS.

Priorizar:

- CSS transitions.
- CSS keyframes.
- Transform.
- Opacity.
- Clip-path.
- Recursos nativos de animação vinculados ao scroll, quando suportados.

JavaScript somente deverá ser considerado quando houver uma necessidade que não possa ser resolvida adequadamente com CSS.

Não adicionar bibliotecas de animação antecipadamente.

### **Acessibilidade e desempenho**

- Respeitar `prefers-reduced-motion`.
- Evitar animações que bloqueiem a leitura.
- Não esconder conteúdo essencial até a execução de JavaScript.
- Priorizar propriedades de animação eficientes.
- Evitar efeitos que provoquem mudanças excessivas de layout.
- Garantir funcionamento em dispositivos móveis.

Os valores definitivos de duração, easing e distância serão estabelecidos durante o desenvolvimento da biblioteca de motion.

---

## **Responsividade**

A identidade visual deve ser preservada em diferentes dimensões de tela com uma implementação mobile first

### **Desktop**

- Aproveitar espaços negativos.
- Utilizar composições editoriais.
- Permitir maior presença de elementos gráficos.

### **Tablet**

- Reorganizar grids e proporções.
- Preservar hierarquia e espaçamento.

### **Mobile**

- Priorizar leitura e navegação.
- Simplificar composições complexas.
- Evitar elementos decorativos que prejudiquem a experiência.
- Reduzir ou adaptar movimentos quando necessário.

A responsividade não deve ser tratada apenas como redução de tamanho, mas como adaptação da composição.

---

## **Acessibilidade**

- Manter hierarquia semântica.
- Garantir navegação por teclado.
- Preservar foco visível.
- Utilizar contraste adequado nos dois temas.
- Fornecer nomes acessíveis aos controles.
- Respeitar movimento reduzido.
- Não depender exclusivamente de cores para comunicar estados.
- Não utilizar animações que impeçam a compreensão do conteúdo.

---

## **Convenções técnicas**

### **Estilização**

O projeto utiliza Tailwind CSS v4.

Diretrizes:

- Priorizar tokens globais e variáveis CSS.
- Reutilizar classes e componentes existentes.
- Evitar duplicação de estilos.
- Utilizar `clsx()` conforme as convenções existentes.
- Manter separação entre estrutura, apresentação e comportamento.

### **Organização**

- Componentes genéricos em `src/components/ui/`.
- Componentes estruturais em `src/components/layout/`.
- Componentes específicos dentro de suas respectivas features.
- Tokens e estilos compartilhados em `src/styles/`.

### **Animações**

A biblioteca interna de animações deverá possuir:

- Tokens de movimento.
- Primitives reutilizáveis.
- Composições.
- Estados de interação.
- Regras de acessibilidade.

A organização definitiva será documentada após a exploração dos recursos de CSS.

### **Dependências**

Não adicionar bibliotecas externas de animação sem necessidade comprovada.

A preferência é explorar primeiro os recursos nativos do navegador.

---

## **Critérios de validação**

Toda alteração visual significativa deve ser avaliada considerando:

- Coerência com a identidade visual.
- Qualidade nos temas claro e escuro.
- Legibilidade e hierarquia.
- Responsividade.
- Estados de interação.
- Acessibilidade.
- Desempenho.
- Consistência entre componentes.

---

## **Princípio central**

O portfólio deve comunicar valor antes de demonstrar tecnologia.

A identidade visual, os elementos gráficos e as animações existem para fortalecer a mensagem, gerar confiança e melhorar a experiência do visitante.

O resultado não deve parecer um template de desenvolvedor, uma interface experimental sem propósito ou uma demonstração excessiva de efeitos visuais.

**A tecnologia demonstra capacidade. O design comunica intenção. A experiência constrói confiança.**
