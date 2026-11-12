# 04 — Design System

## 1. Identidade e posicionamento

### 1.1. Conceito central

A identidade visual do portfólio combina minimalismo sofisticado e futurismo tecnológico.

O objetivo não é criar uma interface que simplesmente pareça tecnológica, mas utilizar design, tipografia, composição e interações para comunicar profissionalismo, criatividade, domínio técnico e confiança.

O site deve funcionar principalmente como ferramenta de posicionamento profissional e conversão comercial.

A tecnologia é parte da identidade, mas não deve competir com a mensagem principal.

**Conceito orientador: Tecnologia sofisticada, apresentada com clareza e personalidade.**

### 1.2. Personalidade da marca

A identidade deve transmitir seis características principais:

- Confiável: transmitir segurança e competência.
- Profissional: demonstrar organização, cuidado e qualidade.
- Criativa: apresentar soluções e abordagens diferenciadas.
- Inovadora: demonstrar familiaridade com tecnologia e evolução.
- Autêntica: evitar comunicação e estética genéricas.
- Independente: refletir personalidade e autonomia profissional.

### 1.3. Posicionamento profissional

O posicionamento combina engenharia de software e visão estratégica de negócios.

A comunicação deve apresentar o desenvolvedor como alguém capaz de compreender problemas, projetar soluções e executar projetos tecnicamente complexos.

O portfólio não deve se limitar à apresentação de tecnologias utilizadas. Deve demonstrar como a capacidade técnica se transforma em valor para o cliente.

### 1.4. Público prioritário

- Pequenas empresas e empreendedores que precisam de presença digital.
- Negócios que necessitam de sistemas e aplicações personalizadas.
- Clientes que procuram soluções digitais completas.

Ordem de prioridade dos serviços:

1. Sistemas web e aplicações personalizadas.
2. Sites institucionais e landing pages.
3. APIs e integrações.

---

## 2. Direção artística

### 2.1. Linguagem visual

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

### 2.2. Referências

Referências estudadas:

- Tarik Karahodžić: composição editorial, espaços negativos e minimalismo.
- Robin Noguier: personalidade visual, tipografia e movimento.
- Lauren Waller: hierarquia de conteúdo e clareza.
- Tamal Sen: elementos de programação e referências visuais tecnológicas.

As referências servem como inspiração para princípios específicos, não como modelos a serem reproduzidos.

A identidade final deve possuir linguagem própria.

### 2.3. Elementos gráficos

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

Elementos abstratos e composições geométricas podem complementar a identidade.

A presença desses elementos deve ser equilibrada. Não transformar o site em um terminal, dashboard ou interface fictícia de programação.

### 2.4. Referências pessoais

Interesses pessoais podem aparecer de maneira sutil, especialmente futebol e tecnologia.

Possibilidades:

- Easter eggs.
- Pequenos elementos gráficos.
- Referências visuais em detalhes secundários.
- Conteúdos complementares sobre interesses pessoais.

Essas referências não devem competir com a comunicação profissional.

---

## 3. Paleta de cores

### 3.1. Direção cromática

A paleta deve trabalhar com uma base neutra, contrastes profundos, azul tecnológico e laranja como cor de destaque.

O tema escuro orienta a construção estética, mas os dois temas devem possuir qualidade visual equivalente.

### 3.2. Paleta proposta

Os valores abaixo são a proposta inicial para validação visual e de contraste.

**Cores estruturais**

| Token            | Tema escuro | Tema claro |
| ---------------- | ----------- | ---------- |
| Background       | #101216     | #F7F8FA    |
| Surface          | #181C24     | #FFFFFF    |
| Surface Elevated | #272B34     | #ECEFF4    |
| Text Primary     | #E9E8E3     | #111827    |
| Text Secondary   | #A0A5B0     | #64748B    |
| Border           | #303641     | #DCE2EA    |

**Cores de identidade**

| Token         | Valor   | Função                              |
| ------------- | ------- | ----------------------------------- |
| Primary       | #5577FF | Interações e identidade tecnológica |
| Primary Hover | #6D89FF | Estado de hover                     |
| Accent        | #FF784F | Destaques e ênfase                  |
| Accent Hover  | #FF906D | Estado de hover do destaque         |

No tema claro, as cores de destaque deverão ter ajustes quando necessários para preservar contraste e legibilidade.

### 3.3. Hierarquia cromática

A aplicação das cores deve respeitar a seguinte prioridade:

1. Cores neutras: estrutura e leitura.
2. Azul: identidade e interações principais.
3. Laranja: destaque e ênfase pontual.

O laranja não deve ser utilizado indiscriminadamente.

Seu objetivo é criar contraste e direcionar a atenção para elementos específicos.

### 3.4. Regras de utilização

- Evitar grandes áreas de cores vibrantes.
- Não utilizar azul e laranja em excesso na mesma composição.
- Preservar contraste entre texto e superfície.
- Utilizar tokens semânticos em vez de cores hardcoded.
- Garantir consistência entre os temas.
- Verificar legibilidade em diferentes níveis de luminosidade.

---

## 4. Temas

### 4.1. Comportamento inicial

O tema inicial deve respeitar a preferência do sistema operacional do visitante.

Comportamento esperado:

1. Visitante sem preferência salva: utilizar `prefers-color-scheme`.
2. Visitante com preferência manual salva: respeitar a escolha.
3. Permitir alternância manual entre claro e escuro.
4. Persistir a preferência manual.
5. Evitar mudanças visuais abruptas durante o carregamento.

### 4.2. Equivalência visual

Os dois temas devem manter:

- Mesma hierarquia visual.
- Mesma identidade.
- Contraste adequado.
- Estados de interação equivalentes.
- Elementos gráficos adaptados ao contexto cromático.

O tema escuro não deve receber mais recursos visuais ou funcionalidades que o tema claro.

---

## 5. Tipografia

### 5.1. Famílias tipográficas

| Família       | Aplicação                              |
| ------------- | -------------------------------------- |
| Space Grotesk | Títulos e elementos de destaque        |
| Inter         | Textos corridos e interface            |
| IBM Plex Mono | Metadados, labels e elementos técnicos |

As famílias atuais serão mantidas inicialmente.

### 5.2. Hierarquia

A tipografia deve estabelecer hierarquia visual clara entre:

- Títulos principais.
- Títulos de seção.
- Subtítulos.
- Textos de apresentação.
- Textos corridos.
- Metadados.
- Labels e informações técnicas.

### 5.3. Diretrizes

- Utilizar títulos expressivos, sem comprometer a leitura.
- Evitar excesso de variações tipográficas.
- Utilizar IBM Plex Mono para criar contraste e reforçar a linguagem tecnológica.
- Preservar boa legibilidade em dispositivos móveis.
- Evitar textos excessivamente longos sem organização visual.

---

## 6. Layout e composição

### 6.1. Princípios

A composição deve priorizar:

- Clareza.
- Hierarquia.
- Equilíbrio.
- Espaços negativos.
- Alinhamento.
- Ritmo visual.
- Responsividade.

### 6.2. Linguagem de composição

Não limitar todas as seções ao mesmo padrão de cards e grids.

A interface pode combinar:

- Composições assimétricas.
- Blocos editoriais.
- Divisores e linhas estruturais.
- Áreas de destaque.
- Elementos sobrepostos quando justificados.
- Diferentes proporções entre texto e elementos visuais.

A variação deve ser intencional e preservar a unidade visual.

### 6.3. Espaçamento

Utilizar uma escala de espaçamento consistente, centralizada nos tokens globais.

Evitar valores arbitrários e margens diferentes para componentes que desempenham funções semelhantes.

Os espaçamentos devem considerar a densidade de informação e a largura disponível.

---

## 7. Componentes e interações

### 7.1. Princípios gerais

Os componentes devem possuir identidade visual consistente e estados de interação previsíveis.

Estados a considerar:

- Default.
- Hover.
- Focus-visible.
- Active.
- Disabled, quando aplicável.

### 7.2. Botões

Botões devem ser reconhecíveis como elementos acionáveis.

Não utilizar efeitos de hover em cards e elementos informativos de maneira que possam ser confundidos com botões.

As interações devem comunicar claramente o resultado da ação.

### 7.3. Links

Links devem possuir diferenciação visual em relação aos textos comuns.

Podem utilizar animações de sublinhado, mudanças de cor e pequenos deslocamentos.

### 7.4. Cards

Cards podem apresentar feedback visual moderado.

Não devem assumir aparência de botão quando não forem interativos.

Quando clicáveis, precisam comunicar essa condição.

### 7.5. Ícones

Utilizar Lucide React/Lucide conforme a implementação existente.

Manter consistência de tamanho, espessura e alinhamento.

Evitar utilizar ícones como decoração sem função comunicativa.

---

## 8. Motion Design

### 8.1. Objetivos

As animações devem cumprir duas funções:

1. Melhorar a experiência de navegação e manter o interesse do visitante.
2. Demonstrar domínio de interações e acabamento visual.

O movimento deve ajudar o usuário a continuar consumindo o conteúdo, não disputar sua atenção.

### 8.2. Personalidade do movimento

As animações devem ser:

- Fluidas.
- Moderadas.
- Intencionais.
- Precisas.
- Pontualmente impactantes.

Evitar movimentos exagerados, constantes ou que comprometam a leitura.

### 8.3. Princípios

**Continuidade:** movimentos devem ajudar a conduzir o olhar entre conteúdos.

**Antecipação:** pequenas revelações podem despertar curiosidade sobre a próxima seção.

**Feedback:** interações devem responder de maneira clara e rápida.

**Ênfase:** utilizar movimento para destacar informações importantes, não todos os elementos.

### 8.4. Comportamentos desejados

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

### 8.5. Estratégia de implementação

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

### 8.6. Acessibilidade e desempenho

- Respeitar `prefers-reduced-motion`.
- Evitar animações que bloqueiem a leitura.
- Não esconder conteúdo essencial até a execução de JavaScript.
- Priorizar propriedades de animação eficientes.
- Evitar efeitos que provoquem mudanças excessivas de layout.
- Garantir funcionamento em dispositivos móveis.

Os valores definitivos de duração, easing e distância serão estabelecidos durante o desenvolvimento da biblioteca de motion.

---

## 9. Responsividade

A identidade visual deve ser preservada em diferentes dimensões de tela.

### Desktop

- Aproveitar espaços negativos.
- Utilizar composições editoriais.
- Permitir maior presença de elementos gráficos.

### Tablet

- Reorganizar grids e proporções.
- Preservar hierarquia e espaçamento.

### Mobile

- Priorizar leitura e navegação.
- Simplificar composições complexas.
- Evitar elementos decorativos que prejudiquem a experiência.
- Reduzir ou adaptar movimentos quando necessário.

A responsividade não deve ser tratada apenas como redução de tamanho, mas como adaptação da composição.

---

## 10. Acessibilidade

- Manter hierarquia semântica.
- Garantir navegação por teclado.
- Preservar foco visível.
- Utilizar contraste adequado nos dois temas.
- Fornecer nomes acessíveis aos controles.
- Respeitar movimento reduzido.
- Não depender exclusivamente de cores para comunicar estados.
- Não utilizar animações que impeçam a compreensão do conteúdo.

---

## 11. Convenções técnicas

### 11.1. Estilização

O projeto utiliza Tailwind CSS v4.

Diretrizes:

- Priorizar tokens globais e variáveis CSS.
- Reutilizar classes e componentes existentes.
- Evitar duplicação de estilos.
- Utilizar `clsx()` conforme as convenções existentes.
- Manter separação entre estrutura, apresentação e comportamento.

### 11.2. Organização

- Componentes genéricos em `src/components/ui/`.
- Componentes estruturais em `src/components/layout/`.
- Componentes específicos dentro de suas respectivas features.
- Tokens e estilos compartilhados em `src/styles/`.

### 11.3. Animações

A biblioteca interna de animações deverá possuir:

- Tokens de movimento.
- Primitives reutilizáveis.
- Composições.
- Estados de interação.
- Regras de acessibilidade.

A organização definitiva será documentada após a exploração dos recursos de CSS.

### 11.4. Dependências

Não adicionar bibliotecas externas de animação sem necessidade comprovada.

A preferência é explorar primeiro os recursos nativos do navegador.

---

## 12. Critérios de validação

Toda alteração visual significativa deve ser avaliada considerando:

- Coerência com a identidade visual.
- Qualidade nos temas claro e escuro.
- Legibilidade e hierarquia.
- Responsividade.
- Estados de interação.
- Acessibilidade.
- Desempenho.
- Consistência entre componentes.

### Checklist

- [ ] A alteração respeita a identidade visual?
- [ ] O tema claro foi validado?
- [ ] O tema escuro foi validado?
- [ ] A hierarquia de informação permanece clara?
- [ ] A interface funciona em dispositivos móveis?
- [ ] Os estados de interação estão definidos?
- [ ] As animações respeitam movimento reduzido?
- [ ] O desempenho foi preservado?
- [ ] A documentação foi atualizada?

---

## 13. Princípio central

O portfólio deve comunicar valor antes de demonstrar tecnologia.

A identidade visual, os elementos gráficos e as animações existem para fortalecer a mensagem, gerar confiança e melhorar a experiência do visitante.

O resultado não deve parecer um template de desenvolvedor, uma interface experimental sem propósito ou uma demonstração excessiva de efeitos visuais.

**A tecnologia demonstra capacidade. O design comunica intenção. A experiência constrói confiança.**
