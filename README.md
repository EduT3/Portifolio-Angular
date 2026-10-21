# Portfólio de Eduardo Paulo Tomilhero

Apresentação profissional com foco na transição para Engenharia de Dados e BI. SQL e Power BI aparecem como estudos em andamento; suporte técnico e Front-End compõem a trajetória anterior.

**Site:** [portifolio2-0-murex.vercel.app](https://portifolio2-0-murex.vercel.app/)

## Executar e verificar

Use Node.js 24 e as dependências do lockfile.

```sh
npm ci
npm start
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

Abra http://localhost:4200. Os testes Karma/Jasmine precisam de Chrome ou Chromium. Não há lint configurado.

## Estrutura e conteúdo

- Angular 20, TypeScript e CSS, com componentes NgModule.
- `/main`: apresentação, dois projetos públicos e contato.
- `/about`: experiência profissional e repertório, separando estudos atuais da base anterior.
- Raiz e rotas desconhecidas redirecionam para `/main`.
- Fontes do sistema, navegação por teclado, link para pular ao conteúdo e suporte a movimento reduzido.

A vitrine usa os repositórios públicos `EduT3/sql-estudo` e `EduT3/Bolsario`. Projetos privados e exercícios históricos não são apresentados como produtos lançados. Os arquivos históricos de imagens permanecem no repositório.

## Publicação e conferência

O projeto Vercel existente é `portifolio2-0`, conectado a `EduT3/Portifolio-Angular`. A branch de produção é `main`; `vercel.json` mantém o fallback da SPA. Não é necessário alterar configurações de deploy.

O endereço histórico `portifolio2-0-edut3.vercel.app` não está entre os domínios atuais confirmados na Vercel. O endereço acima é o domínio verificado do projeto.

Confira `/main`, `/about`, links de projetos, retorno à seção de projetos, fallback de rota e navegação por teclado em desktop e mobile. `Capa.png` é uma captura histórica, anterior à apresentação atual.
