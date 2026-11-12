# Design system

## Identidade e posicionamento

A identidade combina minimalismo sofisticado e futurismo tecnológico. Design, tipografia, composição e interação comunicam profissionalismo, criatividade, domínio técnico e confiança. A tecnologia reforça a mensagem sem competir com ela.

O posicionamento une engenharia de software e visão estratégica de negócios. O portfólio apresenta como a capacidade técnica resolve problemas e gera valor para clientes.

Público prioritário:

- Pequenas empresas e empreendedores que precisam de presença digital.
- Negócios que necessitam de sistemas e aplicações personalizadas.
- Clientes que procuram soluções digitais completas.

Prioridade dos serviços: sistemas web e aplicações personalizadas; sites institucionais e landing pages; APIs e integrações.

## Direção visual

A interface combina composição editorial, elementos gráficos tecnológicos, tipografia expressiva, contrastes controlados e espaços negativos. A estrutura é limpa sem ser genérica.

A linguagem gráfica utiliza grids, linhas, divisores, alinhamentos, diagramas, snippets de código, metadados e identificadores técnicos. Esses elementos devem ser equilibrados; a interface não deve parecer um terminal, dashboard ou sistema fictício.

Referências visuais: composição editorial e minimalismo de Tarik Karahodžić; tipografia e movimento de Robin Noguier; hierarquia e clareza de Lauren Waller; elementos tecnológicos de Tamal Sen. São referências de princípios, não modelos para reprodução.

Referências pessoais, especialmente futebol e tecnologia, aparecem de forma sutil e não competem com a comunicação profissional.

## Cores

A paleta usa base neutra, contrastes profundos, azul tecnológico e laranja para destaques. O tema escuro orienta a estética; os temas claro e escuro mantêm qualidade visual equivalente.

### Tokens

| Token | Tema escuro | Tema claro |
| --- | --- | --- |
| Background | `#101216` | `#F7F8FA` |
| Surface | `#181C24` | `#FFFFFF` |
| Surface Elevated | `#272B34` | `#ECEFF4` |
| Text Primary | `#E9E8E3` | `#111827` |
| Text Secondary | `#A0A5B0` | `#64748B` |
| Border | `#303641` | `#DCE2EA` |

| Token | Valor | Uso |
| --- | --- | --- |
| Primary | `#5577FF` | Identidade e interações principais |
| Primary Hover | `#6D89FF` | Hover da cor principal |
| Accent | `#FF784F` | Destaques pontuais |
| Accent Hover | `#FF906D` | Hover do destaque |

No tema claro, ajustar cores de destaque quando necessário para preservar contraste. Priorizar cores neutras para estrutura e leitura, azul para identidade e interação e laranja para ênfase. Evitar grandes áreas vibrantes e o uso excessivo de azul e laranja na mesma composição. Preferir tokens semânticos a cores hardcoded.

## Temas

O tema inicial respeita `prefers-color-scheme`, salvo quando existe uma preferência manual salva. O visitante pode alternar entre claro e escuro; a escolha manual é persistida e a inicialização evita mudanças visuais abruptas.

Os dois temas preservam hierarquia, identidade, contraste e estados de interação equivalentes. Elementos gráficos se adaptam ao contexto cromático.

## Tipografia

| Família | Aplicação |
| --- | --- |
| Space Grotesk | Títulos e destaques |
| Inter | Textos corridos e interface |
| IBM Plex Mono | Metadados, labels e informações técnicas |

A hierarquia distingue títulos principais e de seção, subtítulos, apresentações, texto corrido, metadados e labels. Títulos podem ser expressivos sem comprometer leitura. Evitar excesso de variações tipográficas e preservar legibilidade em telas móveis.

## Layout e composição

A composição prioriza clareza, hierarquia, equilíbrio, espaços negativos, alinhamento, ritmo visual e responsividade. As seções podem combinar composições assimétricas, blocos editoriais, divisores, áreas de destaque e proporções variadas entre texto e elementos visuais. A variação deve preservar a unidade visual.

Usar a escala de espaçamento dos tokens globais. Evitar valores arbitrários e diferenças entre componentes com funções semelhantes. Ajustar espaçamentos à densidade de informação e à largura disponível.

## Componentes e interações

Considerar os estados `default`, `hover`, `focus-visible`, `active` e `disabled` quando aplicáveis.

- Botões devem parecer acionáveis e comunicar o resultado da ação.
- Links devem se distinguir do texto comum; podem usar sublinhado animado, mudança de cor ou deslocamento discreto.
- Cards informativos não devem parecer botões. Cards interativos devem comunicar que podem ser acionados.
- Ícones Lucide devem manter tamanho, espessura e alinhamento consistentes e ter função comunicativa.

## Motion design

O movimento é fluido, moderado e intencional. Deve conduzir a atenção, dar feedback e enfatizar informações sem competir com a leitura.

A interface utiliza transições de hover, revelações durante a rolagem, entradas escalonadas, transições de imagem e microinterações. Evitar movimentos exagerados, constantes ou que façam a navegação parecer uma apresentação de slides.

A implementação e as propriedades dos componentes estão documentadas em [13-motion-design.md](13-motion-design.md).

## Responsividade

A identidade se adapta ao espaço disponível, não apenas reduz de tamanho.

- Desktop: aproveitar espaços negativos e composições editoriais.
- Tablet: reorganizar grids e proporções, preservando hierarquia e espaçamento.
- Mobile: priorizar leitura e navegação, simplificar composições e adaptar elementos decorativos e movimento.

## Acessibilidade

- Manter hierarquia semântica e navegação por teclado.
- Preservar foco visível e contraste adequado nos dois temas.
- Fornecer nomes acessíveis aos controles.
- Não depender apenas de cores para comunicar estados.
- Respeitar `prefers-reduced-motion` e não bloquear a compreensão do conteúdo com animações.

## Estilização e organização

O projeto utiliza Tailwind CSS v4. Priorizar tokens globais, variáveis CSS e componentes existentes; evitar duplicação de estilos. Usar `clsx()` conforme as convenções do projeto.

- Componentes genéricos: `src/components/ui/`.
- Componentes estruturais: `src/components/layout/`.
- Componentes de domínio: `src/features/`.
- Tokens e estilos compartilhados: `src/styles/`.

## Revisão visual

Ao alterar a interface, verificar coerência com a identidade, legibilidade, hierarquia, temas claro e escuro, responsividade, estados de interação, acessibilidade e desempenho.
