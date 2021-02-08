import * as yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

const transactionSchema = yup.object().shape({
  credit_card_holder_name: yup
    .string()
    .min(2, 'O nome deve conter 2 ou mais caracteres'),
  buyer_document: yup
    .string()
    .test('cpfValidate', 'Insira um CPF válido', (value) => cpf.isValid(value)),
  credit_card_number: yup
    .string()
    .min(16, 'O número do cartão deve conter 16 digitos'),
  credit_card_expiration_date: yup
    .string()
    .min(4, 'A data de validade deve conter 4 digitos'),
  credit_card_cvv: yup
    .string()
    .min(3, 'O código de segurança deve conter 3 digitos'),
  amount: yup
    .number()
    .integer('A quantia deve ser um número inteiro')
    .min(1, 'O valor mínimo é de R$1,00'),
});

export { transactionSchema };
