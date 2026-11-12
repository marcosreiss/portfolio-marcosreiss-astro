# Acessibilidade e segurança

## Acessibilidade

A interface deve preservar estrutura semântica e navegação acessível.

Cuidados ao alterar componentes:
- utilizar elementos HTML semânticos;
- manter hierarquia correta de títulos;
- fornecer textos alternativos adequados para imagens informativas;
- manter rótulos acessíveis em controles interativos;
- garantir navegação por teclado e foco visível;
- verificar contraste nos temas claro e escuro;
- respeitar preferências de movimento reduzido quando houver animações.

O projeto possui skip link e página 404. Não remover esses recursos durante refatorações sem substituição equivalente.

## Segurança

O projeto é um site de portfólio com conteúdo gerenciado pelo CMS. Alterações em HTML, links, scripts e configurações de deploy devem considerar a exposição pública do site.

Diretrizes:
- não inserir credenciais ou tokens no código versionado;
- não expor segredos em arquivos servidos pela pasta `public/`;
- validar URLs e conteúdo externo antes de renderizá-los;
- utilizar `rel="noopener noreferrer"` em links externos abertos com `target="_blank"`;
- revisar dependências e scripts adicionados;
- preservar os headers de segurança configurados no deploy.

## Headers

O projeto possui configuração de headers em `vercel.json`. Ao modificar essa configuração, preservar os headers existentes e avaliar o efeito em todos os recursos do site.

Não presumir que uma configuração de header específica existe sem conferir o arquivo atual.

## CMS

O painel administrativo de produção é publicado em `/admin/`; o painel local fica em `/admin-local/`.

Não colocar credenciais de acesso no repositório. A autenticação e a integração com GitHub/Turbo devem permanecer sob os mecanismos próprios do serviço.

## Verificação

Após mudanças em componentes ou configurações:
1. testar navegação por teclado;
2. conferir textos alternativos e nomes acessíveis;
3. verificar links externos;
4. revisar `vercel.json`;
5. executar `npm run build`;
6. testar o site publicado quando a mudança afetar headers, autenticação ou recursos externos.
