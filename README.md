# Marcos Reis — Portfólio

Portfólio pessoal de **Marcos Vinícius Reis**, desenvolvedor Full Stack. Um espaço para apresentar projetos, experiências, habilidades e soluções digitais desenvolvidas ao longo da trajetória profissional.

O projeto foi desenvolvido com foco em desempenho, acessibilidade, responsividade, organização e facilidade de manutenção.

**Site:** [marcosvinireiss.vercel.app](https://marcosvinireiss.vercel.app)

---

## Sobre o projeto

O portfólio tem como objetivo apresentar minha atuação como desenvolvedor Full Stack, destacando projetos, tecnologias utilizadas e soluções desenvolvidas para diferentes necessidades.

A proposta visual segue uma identidade contemporânea e minimalista, combinando elementos editoriais e referências visuais do universo tecnológico.

O site oferece suporte a dois idiomas, tema claro e escuro e gerenciamento de conteúdo por meio de um painel administrativo.

## Tecnologias

| Tecnologia                                    | Utilização                                 |
| --------------------------------------------- | ------------------------------------------ |
| [Astro](https://astro.build/)                 | Framework principal                        |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem e segurança no desenvolvimento     |
| [Tailwind CSS](https://tailwindcss.com/)      | Estilização                                |
| [React](https://react.dev/)                   | Componentes interativos quando necessários |
| [Decap CMS](https://decapcms.org/)            | Gerenciamento de conteúdo                  |
| [Vercel](https://vercel.com/)                 | Hospedagem e deploy                        |
| [Lucide](https://lucide.dev/)                 | Ícones                                     |

## Funcionalidades

- **Página inicial:** apresentação, serviços, projetos em destaque e informações de contato.
- **Projetos:** listagem e páginas individuais com informações detalhadas sobre cada desenvolvimento.
- **Internacionalização:** conteúdo disponível em português e inglês.
- **Tema claro e escuro:** alternância entre os temas, com preferência persistente.
- **CMS administrativo:** criação e edição de projetos sem necessidade de alterar diretamente os arquivos de conteúdo.
- **SEO:** metadados, URLs canônicas, Open Graph, Twitter Cards, sitemap e robots.txt.
- **Responsividade:** adaptação para diferentes tamanhos de tela.
- **Acessibilidade:** estrutura semântica e recursos de navegação acessível.
- **Analytics:** integração com Vercel Analytics.

## Estrutura do projeto

A organização segue uma abordagem orientada a funcionalidades, separando páginas, componentes, conteúdo e recursos compartilhados.

```text
src/
├── components/
│   ├── layout/
│   └── ui/
├── features/
│   ├── home/
│   ├── projects/
│   └── about/
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

## Executando localmente

### Pré-requisitos

- Node.js
- npm
- Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/marcosreiss/portfolio-marcosreiss-astro.git
```

Entre no diretório:

```bash
cd portfolio-marcosreiss-astro
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:4321`.

### Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a versão gerada localmente:

```bash
npm run preview
```

## Gerenciamento de conteúdo

O projeto utiliza o Decap CMS para administrar os projetos apresentados no portfólio.

Existem duas configurações administrativas:

- **Produção:** `/admin/`, integrada ao GitHub por meio do Decap Turbo.
- **Desenvolvimento local:** `/admin-local/`, utilizando o backend local do Decap.

Os projetos são armazenados como arquivos Markdown em `src/content/projects/`, permitindo versionamento e gerenciamento diretamente pelo Git.

## Deploy

O projeto utiliza a Vercel para hospedagem e publicação.

O fluxo de publicação está integrado ao GitHub: alterações enviadas para a branch `main` podem acionar automaticamente um novo deploy.

## Documentação

A documentação técnica completa do projeto está disponível no diretório **`/doc`**.

Esse diretório reúne informações detalhadas sobre arquitetura, configurações, implementação, CMS, internacionalização, componentes e demais decisões técnicas do desenvolvimento.

---

## Autor

**Marcos Vinícius Reis**

Desenvolvedor Full Stack interessado em construir soluções digitais funcionais, modernas e escaláveis.

- [GitHub](https://github.com/marcosreiss)
- [LinkedIn](https://www.linkedin.com/in/marcosvinireis/)
- [WhatsApp](https://w.app/marcosvinireiss)
- [E-mail](mailto:marcosvinireiss@gmail.com)

---

Desenvolvido por **Marcos Reis**.
