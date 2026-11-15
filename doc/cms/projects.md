A orientação geral é escrever para quem precisa contratar uma solução: explique o problema do negócio, o que foi construído e o que melhorou. Deixe os termos técnicos para os campos específicos e não invente resultados ou métricas.

## Identificação e apresentação

- `title`: informe o nome do projeto, sem acrescentar uma descrição longa.
- `client`: informe o nome do cliente ou empresa; deixe vazio quando houver confidencialidade.
- `apresentacao.subtitle`: resuma em uma frase o que foi construído e para qual finalidade. Ex.: “Sistema para centralizar pedidos e organizar a operação comercial.”
- `apresentacao.description`: complemente o subtítulo em duas ou três frases, explicando quem usa a solução e qual necessidade ela atende.
- `presentation.title`: escreva o nome do projeto na versão em inglês; mantenha o original quando for uma marca.
- `presentation.subtitle` e `presentation.description`: adapte os respectivos textos para um inglês natural, preservando o significado da versão em português.

## Destaque na Home e no início do case

Preencha em `highlight.pt` e na versão equivalente em `highlight.en`.

- `outcome`: destaque a principal transformação proporcionada pelo projeto, em uma frase curta. Ex.: “Pedidos e estoque reunidos em uma única operação.”
- `metrics[].value`: informe um número ou indicador real e verificável, com sua unidade. Ex.: “3 setores”.
- `metrics[].label`: explique brevemente o que o indicador representa. Ex.: “integrados no mesmo sistema”. Sem dados confiáveis, não cadastre métricas.

## Conteúdo do case

Preencha em `caseStudy.pt` e adapte os mesmos campos em `caseStudy.en`.

- `context`: apresente o negócio, quem utilizaria a solução e como o trabalho funcionava antes do projeto.
- `challenge`: descreva o problema principal e suas consequências práticas, como retrabalho, informações dispersas ou dificuldade para atender clientes.
- `solution`: explique o que foi construído e como a solução responde ao problema, sem transformar o texto em uma lista de tecnologias.
- `features[]`: escreva uma entrega por item, conectando funcionalidade e utilidade. Ex.: “Painel de pedidos com filtros para acompanhar pendências.”
- `results[]`: registre uma melhoria observada por item; diferencie resultados comprovados de benefícios esperados.
- `role`: explique sua participação e seus limites: o que você desenvolveu, decidiu ou executou em colaboração.
- `architecture`: descreva a organização técnica da solução e o motivo das principais escolhas, priorizando decisões relevantes.
- `challenges[]`: relate um desafio técnico por item, explicando como foi resolvido e qual restrição precisou ser considerada.

## Tecnologias e imagens

- `stack[]`: informe uma tecnologia por item, com o nome oficial, incluindo apenas as que tiveram participação relevante na entrega.
- `gallery[].title`: dê um título curto que identifique a tela ou funcionalidade apresentada. Ex.: “Visão geral dos pedidos”.
- `gallery[].description`: explique o que a imagem demonstra e por que aquela parte da solução importa, sem repetir o título.
- `gallery[].alt`: descreva objetivamente o conteúdo visual para quem não consegue ver a imagem. Ex.: “Painel com pedidos agrupados por status e filtros por período”.

Os campos narrativos do case aceitam Markdown, mas prefira parágrafos curtos e listas simples. Na implementação proposta, o corpo livre do arquivo `.md` não aparece: concentre o conteúdo nesses campos.
