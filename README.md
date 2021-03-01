<h4 align="center">
 React Transactions
</h4>

O repositório possui CI via GitHub Actions [https://github.com/vilarjp/react-transactions/actions]

![ci](https://github.com/vilarjp/react-transactions/blob/main/public/assets/ci.png)

## Índice

- [Sobre o desafio](./CHALLENGE.md)
- Estrutura do Projeto
- Como baixar o projeto?
- Como rodar o projeto?
- Como utilizar o projeto?
- Extras

---

## Estrutura do Projeto

```
├── .github/                         - configuração de CI do GitHub Actions
├── cypress/                         - pasta com a estrutura dos testes e2e
├── public/                          - arquivos estáticos
├── src/                             - pasta com o código-fonte do projeto
  ├── components/                    - componentes reutilizáveis por toda a aplicação
    ├── MeuComponente/
      ├── index.js                   - código do component
      ├── styles.js                  - estilos do component
      ├── stories.js                 - design system
      ├── [component].spec.js        - testes do component
  ├── contexts/                        - components da context-api
    ├── index.js                       - arquivo para servir como wrapper de todos os contexts
    ├── [context].js                   - código do context
    ├── [context].spec.js              - testes do context
  ├── hooks/                           - custom hooks reutilizáveis por toda a aplicação
    ├── [hook].js                      - código do hook
    ├── [hook].spec.js                 - testes do hook
    ├── components/                    - componentes reutilizáveis por toda a aplicação
  ├── pages/                           - páginas da aplicação
    ├── MinhaPagina/
      ├── components/                  - components específicos da página
      ├── index.js                     - código da página
      ├── styles.js                    - estilos da página
      ├── [pages].spec.js              - testes da página
  ├── routes/                          - rotas da aplicação
  ├── services/                        - camada de comunicação externa da aplicação
    ├── transactions                   - divisão por domínio, ex: transactions, users etc
    ├── http-client.js                 - cliente com a camada de comunicação externa da aplicação
  ├── styles/                          - estilos globais e tema do projeto
  ├── test/                            - configurações e/ou utils para os testes
  ├── utils/                           - utils reutilizáveis por toda a aplicação
  ├── App.js                           - wrapper principal da aplicação
  ├── index.js                         - ponto de partida da renderização do React
├── .env                               - arquivo para as variáveis ambiente
├── .eslint.json                       - regras e plugins do ESLint utilizadas no projeto
├── .prettierrc                        - arquivo com as regras do plugin Prettier

```

---

## Como baixar o projeto?

Para baixar o código basta clonar o repositório com o comando abaixo:

```bat
:~$ git clone https://github.com/vilarjp/react-transactions
```

---

## Principais Comandos

### Instalar dependencias do projeto

```
:~$ cd <pasta do projeto>
:~$ yarn install
```

### Como executar o projeto?

```
:~$ yarn server - executa o servidor local para chamadas via REST
:~$ yarn start - executa em modo de desenvolvimento
:~$ yarn build - faz a construção do projeto para produção
:~$ yarn test - executa os testes unitários e de integração
:~$ yarn test:watch - executa os testes unitários e de integração em modo watch
:~$ yarn test:ci - gera a cobertura dos testes unitários e de integração [src/coverage/lcov-report/index.html]
:~$ yarn test:cy:open - abre a interface do Cypress para a realização dos testes e2e
:~$ yarn test:cy:ci - realiza os testes e2e sem o uso da interface
:~$ yarn storybook - abre o Storybook para a visualização do design system do projeto
```

---

### Como utilizar o projeto?

```
1° abrir o terminal e colocar o servidor local em execução para fornecer as chamadas via REST (~$ yarn server --delay 1000)
2° em outra janela do terminal (importante!) executar a aplicação (~$ yarn start) e confirmar a alteração da porta do projeto para a 3001
3° acessar http://localhost:3001/
```

### Testes

- Testes e2e
  ![e2e](https://github.com/vilarjp/react-transactions/blob/main/public/assets/e2e.png)

- Testes unitários e de integração
  ![unit_integration](https://github.com/vilarjp/react-transactions/blob/main/public/assets/unit_integration.png)

### Style guide

Para visualizar o style guide desenvolvido para o projeto, basta utilizar o comando:

```
:~$ yarn storybook
```

Exemplos:

![storybook_example1](https://github.com/vilarjp/react-transactions/blob/main/public/assets/storybook_example1.png)
![storybook_example2](https://github.com/vilarjp/react-transactions/blob/main/public/assets/storybook_example2.png)

### Imagens da aplicação

![app1](https://github.com/vilarjp/react-transactions/blob/main/public/assets/app1.png)
![app2](https://github.com/vilarjp/react-transactions/blob/main/public/assets/app2.png)
![app3](https://github.com/vilarjp/react-transactions/blob/main/public/assets/app3.png)
![app4](https://github.com/vilarjp/react-transactions/blob/main/public/assets/app4.png)
![app5](https://github.com/vilarjp/react-transactions/blob/main/public/assets/app5.png)

### Tecnologias utilizadas

- React
- Styled Components
- Storybook
- react-error-boundary
- cpf-cnpj-validator
- react-input-mask
- react-intl-currency-input
- yup
- husky
- lint-staged
- git-commit-msg-linter
- prettier
- eslint
- jest, react testing library e cypress
