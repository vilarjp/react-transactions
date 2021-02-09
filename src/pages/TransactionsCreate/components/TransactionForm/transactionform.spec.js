import React from 'react';
import { cpf } from 'cpf-cnpj-validator';

import {
  render,
  screen,
  userEvent,
  act,
  fireEvent,
} from '../../../../test/render';

import TransactionForm from '.';

export const submitForm = async () => {
  const submitButton = screen.getByRole('button', {
    name: /criar transação/i,
  });

  await act(async () => {
    userEvent.click(submitButton);
  });
};

const fillName = (name = 'any_name') => {
  const credit_card_holder_name = screen.getByPlaceholderText(
    'Nome da pessoa compradora',
  );
  userEvent.type(credit_card_holder_name, name);
};

const fillDocument = (document = cpf.generate()) => {
  const buyer_document = screen.getByPlaceholderText('CPF');
  fireEvent.change(buyer_document, {
    target: { value: document },
  });
};

const fillCardNumber = (number = '1234123412341234') => {
  const credit_card_number = screen.getByPlaceholderText('N° do cartão');
  fireEvent.change(credit_card_number, {
    target: { value: number },
  });
};

const fillExpiration = (expiration = '1234') => {
  const credit_card_expiration_date = screen.getByPlaceholderText(
    'Data de expiração',
  );
  fireEvent.change(credit_card_expiration_date, {
    target: { value: expiration },
  });
};

const fillCVV = (cvv = '123') => {
  const credit_card_cvv = screen.getByPlaceholderText('CVV');
  fireEvent.change(credit_card_cvv, {
    target: { value: cvv },
  });
};

const fillAmount = (value) => {
  const amount = screen.getByDisplayValue('R$ 0,00');
  userEvent.paste(amount, value);
};

export const submitValues = {
  amount: 100,
  buyer_document: cpf.generate(),
  credit_card_cvv: '123',
  credit_card_expiration_date: '0821',
  credit_card_holder_name: 'any_name',
  credit_card_number: '1234123412341234',
};

export const fillForm = async () => {
  fillName(submitValues.credit_card_holder_name);
  fillDocument(submitValues.buyer_document);
  fillCardNumber(submitValues.credit_card_number);
  fillExpiration(submitValues.credit_card_expiration_date);
  fillCVV(submitValues.credit_card_cvv);
  fillAmount(submitValues.amount);

  return { submitValues };
};

describe('<TransactionForm />', () => {
  it('should start with default state', () => {
    render(<TransactionForm />);

    expect(screen.getByRole('form')).toMatchSnapshot();
  });

  it('should display correct error messages when form is empty', async () => {
    render(<TransactionForm />);

    await submitForm();

    const emptyFieldsErrors = screen.getAllByRole('alert');

    expect(emptyFieldsErrors).toHaveLength(7);
    expect(emptyFieldsErrors).toMatchSnapshot();
  });

  it('should display correct error message for credit_card_holder_name', async () => {
    render(<TransactionForm />);

    await submitForm();

    expect(
      screen.getByText('O nome deve conter 2 ou mais caracteres'),
    ).toBeInTheDocument();
  });

  it('should display correct error message for buyer_document', async () => {
    render(<TransactionForm />);

    fillName();

    await submitForm();

    expect(screen.getByText('Insira um CPF válido')).toBeInTheDocument();
  });

  it('should display correct error message for credit_card_number', async () => {
    render(<TransactionForm />);

    fillName();
    fillDocument();

    await submitForm();

    expect(
      screen.getByText('O número do cartão deve conter 16 digitos'),
    ).toBeInTheDocument();
  });

  it('should display correct error message for credit_card_expiration_date', async () => {
    render(<TransactionForm />);

    fillName();
    fillDocument();
    fillCardNumber();

    await submitForm();

    expect(
      screen.getByText('A data de validade deve conter 4 digitos'),
    ).toBeInTheDocument();
  });

  it('should display correct error message for credit_card_cvv', async () => {
    render(<TransactionForm />);

    fillName();
    fillDocument();
    fillCardNumber();
    fillExpiration();

    await submitForm();

    expect(
      screen.getByText('O código de segurança deve conter 3 digitos'),
    ).toBeInTheDocument();
  });

  it('should display correct error message for amount', async () => {
    render(<TransactionForm />);

    fillName();
    fillDocument();
    fillCardNumber();
    fillExpiration();
    fillCVV();

    await submitForm();

    expect(screen.getByText('O valor mínimo é de R$1,00')).toBeInTheDocument();
  });

  it('should submit the form with correct values if validation is correct', async () => {
    const onSubmitSpy = jest.fn(() => true);
    render(<TransactionForm onSubmit={onSubmitSpy} />);

    const { submitValues } = await fillForm();

    await submitForm();

    expect(onSubmitSpy).toHaveBeenCalledWith({ ...submitValues, amount: 1 });
  });

  it('should display error message if IsError', () => {
    render(<TransactionForm isError />);

    expect(screen.getByRole('alert')).toMatchInlineSnapshot(`
      .c1 {
        color: #3F2787;
        text-align: center;
        font-weight: 700;
      }

      .c2 .c0 {
        text-align: left;
        margin-bottom: 1.5rem;
      }

      <div
        class="c0 c1"
        role="alert"
      >
        Ops... ocorreu um erro no nosso sistema :( tente recarregar a pagina ou criar a transação novamente
      </div>
    `);
  });

  it('should display loading state if isLoading', () => {
    render(<TransactionForm isLoading />);

    expect(
      screen.getByRole('button', { name: /carregando.../i }),
    ).toBeInTheDocument();
  });
});
