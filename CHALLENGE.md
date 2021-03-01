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
