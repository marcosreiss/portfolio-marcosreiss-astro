# 02 — Estrutura e organização

## Estrutura principal

```text
src/
├── components/
│   ├── layout/
│   └── ui/
├── features/
│   ├── home/
│   │   └── components/
│   ├── projects/
│   │   └── components/
│   └── about/
│       └── components/
├── layouts/
├── pages/
├── content/
│   └── projects/
├── data/
├── i18n/
├── styles/
└── utils/

public/
├── admin/
├── admin-local/
└── uploads/

doc/
```

A estrutura representa a organização adotada. Novos arquivos devem respeitar as responsabilidades existentes; não criar diretórios paralelos para a mesma finalidade.

## Responsabilidades

| Diretório | Responsabilidade |
|---|---|
| `src/pages/` | Rotas do site. A estrutura de arquivos define as URLs. |
| `src/layouts/` | Layouts de página compartilhados. |
| `src/components/ui/` | Componentes visuais reutilizáveis e genéricos. |
| `src/components/layout/` | Componentes estruturais compartilhados, como cabeçalho e rodapé. |
| `src/features/` | Código agrupado por domínio ou funcionalidade. |
| `src/content/` | Conteúdo gerenciado pelo Astro Content Layer. |
| `src/data/` | Dados estáticos compartilhados. |
| `src/i18n/` | Configuração e utilitários de internacionalização. |
| `src/styles/` | Estilos globais e configuração visual. |
| `src/utils/` | Funções utilitárias compartilhadas. |
| `public/admin/` | Painel CMS de produção. |
| `public/admin-local/` | Painel CMS para desenvolvimento local. |
| `public/uploads/` | Arquivos enviados pelo CMS. |
| `doc/` | Documentação técnica. |

## Organização por feature

Código específico de uma funcionalidade deve permanecer dentro de sua feature.

Exemplos:
- `src/features/home/components/`: seções da página inicial.
- `src/features/projects/components/`: componentes de listagem e detalhes de projetos.

Componentes que não pertencem a um domínio específico devem ficar em `src/components/`.

## Rotas

`src/pages/` é reservado ao roteamento do Astro. Evite colocar componentes de apresentação nesse diretório.

Rotas confirmadas:

```text
src/pages/
├── index.astro
├── projetos/
│   ├── index.astro
│   └── [slug].astro
├── en/
│   ├── index.astro
│   └── projects/
│       ├── index.astro
│       └── [slug].astro
└── 404.astro
```

## Regras

- Antes de criar um componente, verificar se já existe um equivalente.
- Manter componentes específicos dentro da feature correspondente.
- Mover regras compartilhadas para `utils/` ou para a feature responsável.
- Preservar a separação entre conteúdo, lógica e apresentação.
- Atualizar esta documentação quando a estrutura mudar.
