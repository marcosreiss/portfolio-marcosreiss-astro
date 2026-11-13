## Três propostas de layout

## Proposta A: Registro de produção

**Ideia:** a seção vira um registro editorial de entregas reais, como um diário de bordo de sistemas que estão no ar. Ele prova experiência pela quantidade de detalhe, não por um número solto.

**Layout:**

- Título à esquerda, em coluna fixa (sticky). À direita, uma lista longa de linhas separadas por filetes finos.
- Cada linha tem: segmento do cliente (ótica, advocacia, e-commerce), o problema em uma frase, o que foi entregue e um metadado em IBM Plex Mono, como `em produção desde 2025`.
- O "20+ clientes em produção" aparece uma vez, grande e estático, no topo ou no fim da lista, como fechamento.

**Animação:**

- Uma linha vertical se desenha conforme o scroll e liga as entradas, como um histórico de commits.
- Cada linha entra com leve deslocamento e a metadata digita em mono (reaproveitando o motor de digitação do hero).
- Scroll-driven animation em CSS (`animation-timeline: view()`) entra como melhoria progressiva, com fallback estático nos navegadores sem suporte.

**Micro-interações:**

- Ao passar o mouse numa linha, ela expande e revela o resultado em uma frase e um link "ver projeto".
- As demais linhas ficam em segundo plano, para a atenção ir para o que importa.
- Um ponto laranja marca o item hover (o laranja só no foco, como manda a hierarquia).

**Risco:** parece uma tabela se os textos forem fracos. Depende de uma frase de problema e de resultado por linha.

## Proposta B: Dúvidas respondidas

**Ideia:** quebrar a objeção de forma explícita. O visitante lê as dúvidas que ele tem antes de contratar, e cada uma é "riscada" e substituída por uma prova. É a mais próxima do seu pedido de "quebrar a objeção".

**Layout:**

- Coluna central editorial com 4 dúvidas em tipografia grande: _"Será que entrega no prazo?"_, _"E se eu precisar de ajuda depois?"_, _"Ele entende do meu tipo de negócio?"_, _"Já fez algo parecido?"_
- Ao lado de cada uma, uma resposta curta com um dado real e um link para o projeto relacionado.
- O título "Experiência construída em projetos reais." fica acima, e o 20+ clientes funciona como o fecho dessa resposta.

**Animação:**

- Conforme cada dúvida chega ao centro da tela, uma linha a risca da esquerda para a direita (clip-path) e o texto esmaece.
- A resposta entra em seguida, em azul `primary-text`, com um traço laranja curto como marcador. Ler vira uma pequena sequência de "problema resolvido".

**Micro-interações:**

- Dúvidas riscadas podem ser reabertas ao clicar, mostrando o mini case.
- O cursor ganha um marcador sutil sobre os itens clicáveis, para não confundir com texto comum.

**Risco:** exige copy muito boa e honesta. Se as respostas forem vagas, o efeito vira gimmick.

## Proposta C: Lente de inspeção

**Ideia:** deixar o visitante olhar por dentro dos sistemas. A tecnologia aparece como prova de capricho, não como lista de siglas.

**Layout:**

- Um grande "palco" com 3 a 5 telas reais dos seus projetos em composição escalonada (a ideia do mock do hero, mas com projetos reais).
- Cada tela traz o selo `EM PRODUÇÃO` em mono, o segmento e a frase de resultado.
- Ao lado, o texto de apoio com o 20+ clientes e a promessa da seção.

**Animação:**

- As telas se empilham e se abrem em leque com o scroll, com profundidade controlada (sem passar a frente do que está no centro).

**Micro-interações:**

- Uma lente circular acompanha o mouse. Dentro dela a interface vira o "esqueleto" do sistema: o modelo de dados, os perfis de acesso, a integração de pagamento, o status online.
- Fora da lente, o cliente vê o resultado. Dentro, vê o que sustenta o resultado.
- No mobile, a lente vira um toque que alterna entre as duas camadas.

**Risco:** depende de prints reais e autorizados. É a mais cara de produzir e a que mais exige cuidado de performance.

## Módulo extra: Relógio de produção

Pode entrar em qualquer proposta. Cada projeto mostra "X dias no ar", calculado a partir da data real de lançamento, e atualiza sozinho com o tempo. Não é contador animado nem número inventado: é um fato que cresce. Isso muda o 20+ de afirmação para evidência verificável.

---

## Objeções mapeadas para suas provas

| Dúvida do visitante                                 | Prova que você já tem                                                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "E se ele sumir depois da entrega?"                 | 10 projetos no ar hoje, com suporte pós-entrega. O relógio de produção mostra há quantos dias cada um funciona.                                                             |
| "Vou depender de programador pra qualquer mudança?" | Sindjusma: a equipe do sindicato edita tudo, do header ao footer, pelo painel Strapi, que funciona como um page builder com dynamic zones.                                  |
| "Ele entende o meu negócio ou só programa?"         | Jardim di Berlim: o sistema segue o fluxo real da Appia, com link único para o corretor, reserva de lote, aprovação do admin e mapa de lotes livres, reservados e vendidos. |
| "Vai ter a cara da minha marca?"                    | Midas (site alinhado aos princípios da marca) e Jardim di Berlim (landing seguindo o guia de estilo do marketing deles).                                                    |
| "Vai entregar no prazo e dar resultado?"            | Precisa de dados reais seus (perguntas abaixo).                                                                                                                             |

Para o visual, escolhi 4 dúvidas visíveis. A quinta (marca) pode virar uma linha curta dentro da terceira, se ficar longo.

---
