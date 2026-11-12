# Guia de documentação

## Objetivo

Manter a documentação técnica do projeto curta, precisa e útil para entender a implementação e dar continuidade ao desenvolvimento.

A documentação deve responder, quando aplicável:

- Como está implementado?
- Onde está implementado?
- Como utilizar?
- Como alterar, adicionar ou remover?

## Diretrizes

- Seja direto: use frases curtas e linguagem técnica simples.
- Registre apenas informações necessárias para compreender a implementação ou realizar manutenção.
- Remova introduções, conclusões, contextualizações genéricas, recomendações óbvias e repetições.
- Não documente decisões sem impacto na implementação.
- Não descreva possibilidades futuras que ainda não foram implementadas.
- Não repita informações que já estejam documentadas em outro arquivo; use links relativos quando necessário.
- Não invente comportamentos, arquivos, propriedades ou comandos. Documente somente o que existe e foi validado.
- Prefira tabelas para relacionar propriedades, funções, arquivos e responsabilidades.
- Inclua exemplos de código apenas quando ajudarem a entender o uso ou uma alteração.
- Evite explicações extensas sobre conceitos conhecidos; explique somente o que for específico do projeto.

## Organização

- Separe a documentação por assunto ou funcionalidade.
- Use nomes de arquivos claros e consistentes.
- Não numere títulos de seções ou subseções. Isso permite reorganizar, adicionar ou remover seções sem renumerar o documento.
- Use títulos hierárquicos (`##`, `###`, `####`) para organizar o conteúdo.
- Mantenha cada arquivo focado em um único tema. Se o documento crescer ou misturar assuntos, divida-o.
- Use caminhos relativos para referências a outros documentos e arquivos do projeto.

## Estrutura recomendada

Utilize somente as seções necessárias para cada assunto. Não mantenha títulos vazios nem inclua seções apenas para seguir um modelo.

- **Implementação:** resumo objetivo da solução e de como as partes se relacionam.
- **Estrutura:** arquivos relevantes e suas responsabilidades.
- **Uso:** API, propriedades, funções, comandos ou exemplos necessários.
- **Funcionamento:** fluxo interno e regras específicas importantes.
- **Alterações e manutenção:** onde modificar, como adicionar funcionalidades e como remover ou desfazer alterações.
- **Validação:** comandos e verificações necessários após mudanças.

## Manutenção da documentação

- Atualize a documentação no mesmo contexto da alteração no código.
- Ao remover ou renomear funcionalidades, atualize referências, exemplos, tabelas e caminhos.
- Remova instruções que deixaram de corresponder à implementação.
- Confira se comandos, nomes de arquivos, propriedades e exemplos continuam válidos.
- Não registre histórico de alterações dentro da documentação técnica; utilize o controle de versão para isso.
- Quando uma informação não estiver confirmada, não a apresente como fato.

## Critério de qualidade

Uma documentação está adequada quando uma pessoa desenvolvedora consegue localizar rapidamente a implementação, entender seu funcionamento e identificar exatamente onde agir para utilizar, alterar, adicionar ou remover algo — sem precisar ler conteúdo que não contribua para essas tarefas.
