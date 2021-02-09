import React from 'react';
import { render, screen } from '../../test/render';
import { renderHook, act } from '@testing-library/react-hooks';
import {
  fillForm,
  submitForm,
} from './components/TransactionForm/transactionform.spec';

import {
  useTransactions,
  TransactionsProvider,
} from '../../contexts/transactions-context';

import TransactionsCreate from '.';

let mockedHook = {
  run: jest.fn(),
};

jest.mock('../../hooks/useAsync.js', () => ({
  useAsync: () => mockedHook,
}));

const renderPage = async () => {
  render(<TransactionsCreate />, { renderWithAppProviders: true });

  const { result } = renderHook(() => useTransactions(), {
    wrapper: TransactionsProvider,
  });

  await act(async () => {
    await result.current.getTransactions();
  });

  return { result };
};

describe('<TransactionsCreate />', () => {
  it('should render with default state', async () => {
    mockedHook = {
      ...mockedHook,
      isLoading: false,
    };

    await renderPage();

    expect(
      screen.getByRole('heading', { name: /nova transação/i }),
    ).toBeInTheDocument();

    const getAllInputs = screen.getAllByRole('textbox');

    const amountInput = getAllInputs.pop(); // remove the last input (amount)
    getAllInputs.forEach((input) => {
      expect(input.value).toBe('');
    });
    expect(amountInput.value).toMatchInlineSnapshot(`"R$ 0,00"`);

    const emptyFieldsErrors = screen.queryAllByRole('alert');
    expect(emptyFieldsErrors).toHaveLength(0);

    expect(
      screen.getByRole('button', { name: /criar transação/i }),
    ).toBeInTheDocument();
  });

  it('should render loading state', async () => {
    mockedHook = {
      ...mockedHook,
      isLoading: true,
    };

    await renderPage();

    expect(
      screen.getByRole('button', { name: /carregando.../i }),
    ).toBeInTheDocument();
  });

  it('should render error state', async () => {
    mockedHook = {
      ...mockedHook,
      isError: true,
    };

    await renderPage();

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

  it('should call ->createTransaction on form submit ', async () => {
    const runSpy = jest.fn(() => []);
    mockedHook = {
      run: runSpy,
    };

    await renderPage();

    await fillForm();

    await submitForm();

    expect(runSpy).toHaveBeenCalledTimes(4);
  });
});
