import React from 'react';
import { render, screen, userEvent } from '../../test/render';
import { renderHook, act } from '@testing-library/react-hooks';

import {
  useTransactions,
  TransactionsProvider,
} from '../../contexts/transactions-context';
import { formatMoney } from '../../utils/formatters';

import TransactionsList from '.';

let mockedHook = {
  run: jest.fn(),
};

jest.mock('../../hooks/useAsync.js', () => ({
  useAsync: () => mockedHook,
}));

const renderPage = async () => {
  render(<TransactionsList />, { renderWithAppProviders: true });

  const { result } = renderHook(() => useTransactions(), {
    wrapper: TransactionsProvider,
  });

  await act(async () => {
    await result.current.getTransactions();
  });

  return { result };
};

describe('<TransactionsList />', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render loading state on start', async () => {
    mockedHook = {
      ...mockedHook,
      isLoading: true,
    };

    await renderPage();

    const loadingElements = screen.getAllByLabelText(/loading/i);

    loadingElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  it('should show all transactions infos', async () => {
    mockedHook = {
      ...mockedHook,
      isLoading: false,
      isSuccess: true,
      run: () => [
        {
          amount: 10000,
          buyer_document: '12345678912',
          credit_card_cvv: '123',
          credit_card_expiration_date: '0121',
          credit_card_holder_name: 'JOAO S SAURO',
          credit_card_number: '4111111111111111',
          date: '2020-11-10T19:43:56.451Z',
          id: 1,
          status: 'paid',
        },
        {
          amount: 15000,
          buyer_document: '12345678912',
          credit_card_cvv: '123',
          credit_card_expiration_date: '0121',
          credit_card_holder_name: 'PAULO S SAURO',
          credit_card_number: '4111111111111111',
          date: '2020-11-10T19:43:56.451Z',
          id: 2,
          status: 'paid',
        },
        {
          amount: 15000,
          buyer_document: '12345678912',
          credit_card_cvv: '123',
          credit_card_expiration_date: '0121',
          credit_card_holder_name: 'PAULO S SAURO',
          credit_card_number: '4111111111111111',
          date: '2020-11-10T19:43:56.451Z',
          id: 3,
          status: 'refused',
        },
      ],
    };

    const { result } = await renderPage();

    const transactionsLength = screen.getByText('Número de transações')
      .nextSibling;

    expect(transactionsLength.textContent).toBe(
      mockedHook.run().length.toString(),
    );

    const { getTotalAmount } = result.current;
    const transactionsAmount = screen.getByText('Valor total').nextSibling;

    expect(transactionsAmount.textContent).toBe(formatMoney(getTotalAmount));

    const transactionsCard = screen.getAllByRole('transaction');
    expect(transactionsCard).toHaveLength(mockedHook.run().length);
  });

  it('should show correct status message when there is no transactions', async () => {
    mockedHook = {
      ...mockedHook,
      isLoading: false,
      isSuccess: true,
      run: () => [],
    };

    await renderPage();

    expect(screen.getByRole('status')).toMatchInlineSnapshot(`
      <p
        role="status"
        style="text-align: center;"
      >
        Nenhuma transação encontrada
      </p>
    `);
  });

  it('should show error message when api request fails', async () => {
    mockedHook = {
      ...mockedHook,
      isLoading: false,
      isError: true,
    };

    await renderPage();

    expect(screen.getByRole('alert')).toMatchInlineSnapshot(`
      .c0 {
        color: #3F2787;
        text-align: center;
        font-weight: 700;
      }

      <div
        class="c0"
        role="alert"
      >
        Ops... ocorreu um erro no nosso sistema :( tente recarregar a pagina
      </div>
    `);
  });

  it('should go to TransactionCreate page on button click', async () => {
    await renderPage();

    const createTransactionButton = screen.getByRole('button', {
      name: /criar transação/i,
    });
    userEvent.click(createTransactionButton);

    expect(window.location.href).toContain('/create');
  });

  it('should throw error if TransactionsProvider is not provided', () => {
    jest.spyOn(global.console, 'error').mockImplementation();

    expect(() =>
      render(<TransactionsList />),
    ).toThrowErrorMatchingInlineSnapshot(
      `"useTransactions must be used within a TransactionsProvider"`,
    );
  });
});
