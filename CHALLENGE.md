# O desafio

Olá, tudo bem?

Puxa... estamos muito felizes por você ter chego até aqui.

Nossa maior preocupação é garantir que as pessoas que utilizam nossos produtos tenham a melhor experiência possível - _por isso, nosso foco para o desafio é a qualidade do resultado entregue_.

Se sentir a necessidade, faça o deploy de sua aplicação em algum serviço de sua preferência, tal como Netlify ou Vercel.

## Prazo

Achamos que entre 7 a 15 dias é um tempo ok para fazer o desafio, mas sabemos que nem todo mundo tem o mesmo nível de disponibilidade. Portanto, nos avise se precisar de mais tempo, ok?

## O teste

Nossos clientes precisam criar transações. Para isso desenvolveremos uma plataforma em que o cliente consiga criar e visualizar suas transações.

## Layout

[Link para o layout](https://www.figma.com/file/FItXYIvEqflFS4hVbf3xHs/Desafio-Frontend?node-id=0%3A1)

A aplicação deve seguir o layout fielmente, pense **pixel perfect**.

## Requisitos

- Listagem de transações

  - Ao abrir o app, deverá ser feita uma requisição para a API (GET) solicitando os dados. Não poderão ser feitas novas requisições GET enquanto o app estiver aberto. Quando forem cadastradas novas transações usando a API (POST) os dados devolvido deverão ser inseridos no estado da aplicação, para serem mostrados na listagem.
  - Uma nova requisição para a API só ocorrerá quando o usuário fechar a página e abrí-la novamente.

- As requisições devem lidar tanto com sucesso quanto falha (ex: timeout, conexão lenta, usuário está offline...). O feedback disso fica a seu critério.
- O projeto deve consumir a API disposta para o mesmo. Para isso, execute o comando `yarn server`.

### Endpoints da API

#### GET `http://localhost:3000/transactions/`

Payload de retorno:

```json
[
  {
    "amount": 10000,
    "buyer_document": "12345678912",
    "credit_card_cvv": "123",
    "credit_card_expiration_date": "0121",
    "credit_card_holder_name": "JOAO S SAURO",
    "credit_card_number": "4111111111111111",
    "date": "2020-11-10T19:43:56.451Z",
    "id": 1,
    "status": "paid"
  }
]
```

#### GET `http://localhost:3000/transactions/1`

Payload de retorno:

```json
{
  "amount": 10000,
  "buyer_document": "12345678912",
  "credit_card_cvv": "123",
  "credit_card_expiration_date": "0121",
  "credit_card_holder_name": "JOAO S SAURO",
  "credit_card_number": "4111111111111111",
  "date": "2020-11-10T19:43:56.451Z",
  "id": 1,
  "status": "paid"
}
```

#### POST `http://localhost:3000/transactions/`

Payload de input:

| Parâmetro                     |  Tipo  |             Condição |
| :---------------------------- | :----: | -------------------: |
| `buyer_document`              | String |        11 caracteres |
| `credit_card_holder_name`     | String | 2 ou mais caracteres |
| `credit_card_number`          | String |        16 caracteres |
| `credit_card_expiration_date` | String |         4 caracteres |
| `credit_card_cvv`             | String |         3 caracteres |
| `amount`                      | Number |     Inteiro positivo |

**Todos os parâmetros são obrigatórios.**

Esta rota retorna os dados informados adicionando um timestamp com chave `date` e o campo `status`, que para critérios de testes pode retornar `paid` ou `refused`:

```json
{
  "amount": 10000,
  "buyer_document": "12345678912",
  "credit_card_cvv": "123",
  "credit_card_expiration_date": "0121",
  "credit_card_holder_name": "JOAO S SAURO",
  "credit_card_number": "4111111111111111",
  "date": "2020-11-10T19:43:56.451Z",
  "id": 2,
  "status": "paid"
}
```

#### Exemplos & Ferramentas

Na collection do Postman [frontend-challenge.postman_collection.json](frontend-challenge.postman_collection.json) você encontra exemplos de requesições para as rotas apresentadas acima.

Se preferir usar com Insomnia, temos a collection [frontend-challenge.insomnia_collection.json](frontend-challenge.insomnia_collection.json)

Para gerar CPFs, cartões e afins para o teste, recomendamos o uso do site [4Devs](https://www.4devs.com.br/). Lembre-se de **nunca** utilizar dados sensíveis no seu projeto.

## Desejáveis

- **Organização & Mantenabilidade do projeto:** queremos produtos funcionais mas que sejam fáceis de escalar e de serem mantidos por outras pessoas.
- **Clareza & Eficiência:** o código, é eficiente tanto em performance quanto em facilidade de compreensão?
- **Ferramentas:** da linguagem ao React em si, analisaremos como elas foram usadas.
- **Estilo:** com base no design provido, como que o mesmo foi implementado?
- **Resolvido**: a aplicação funciona conforme o esperado, e os desafios do produto foram resolvidos com eficiência e eficácia.
- **Como executar o projeto**: a aplicação é fornecida com comandos de instalação e execução para ambientes de desenvolvimento e de testes.
- **Histórico de commits**: o projeto possui um histórico do git(mesmo que breve) com mensagens claras e concisas.
- **Testes**: sua aplicação possui confiabilidade de funcionamento? É possível quebrar em algum momento? Conseguimos garantir o funcionamento de cenários diversos?
