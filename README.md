# Portifólio Angular

Portifólio pessoal construído com Angular 15, TypeScript e CSS. A aplicação tem páginas de apresentação (`/main`) e sobre o autor (`/about`), com cabeçalho e rodapé reutilizáveis.

## Executar e verificar

Use uma versão de Node compatível com Angular 15 e as dependências registradas no lockfile. Esta é uma base legada: uma atualização do framework exige validação separada.

```sh
npm ci
npm start
```

Abra http://localhost:4200. Outros comandos disponíveis:

```sh
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

Os testes usam Karma/Jasmine e precisam de Chrome ou Chromium disponível. Não há script de lint configurado.

## Estrutura

- `src/app/componentes/`: páginas, cabeçalho e rodapé
- `src/app/app-routing.module.ts`: rotas e redirecionamento de caminhos desconhecidos
- `src/styles.css`: cores, tipografia e foco de teclado
- `src/assets/`: foto e ícones

## Conferência visual

Verifique `/main`, `/about` e uma URL inexistente; o último caso deve retornar à apresentação. Confira navegação por teclado, indicação da página ativa e layouts de 320, 768 e 1440 px. O servidor de hospedagem precisa encaminhar rotas da SPA para `index.html`.

![Captura original do portifólio](Capa.png)

[Publicação originalmente indicada](https://portifolio2-0-edut3.vercel.app/). A captura e a publicação podem diferir da branch atual.
