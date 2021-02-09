import { renderHook, act } from '@testing-library/react-hooks';

import { TransactionsProvider, useTransactions } from './transactions-context';

let mockedHook = {
  run: jest.fn(),
};

jest.mock('../hooks/useAsync.js', () => ({
  useAsync: () => mockedHook,
}));

describe('useTransactions', () => {
  it('should call run on start', async () => {
    const runSpy = jest.fn();
    mockedHook = {
      run: runSpy,
    };

    const { waitForValueToChange, result } = renderHook(
      () => useTransactions(),
      {
        wrapper: TransactionsProvider,
      },
    );

    waitForValueToChange(() => result.current.transactions);

    expect(runSpy).toHaveBeenCalledTimes(1);
  });

  describe('getTransactions', () => {
    it('should set transactions as reversed', async () => {
      mockedHook = {
        run: () => [
          {
            name: 'old_transaction',
          },
          {
            name: 'new_transaction',
          },
        ],
      };

      const { result } = renderHook(() => useTransactions(), {
        wrapper: TransactionsProvider,
      });

      await act(async () => {
        await result.current.getTransactions();
      });

      expect(result.current.transactions).toEqual(mockedHook.run().reverse());
    });
  });

  describe('createTransaction', () => {
    it('should concat the new transaction with old ones', async () => {
      mockedHook = {
        run: () => [{}],
      };

      const { result } = renderHook(() => useTransactions(), {
        wrapper: TransactionsProvider,
      });

      await act(async () => {
        await result.current.getTransactions();
      });

      expect(result.current.transactions.length).toBe(1);

      await act(async () => {
        await result.current.createTransaction();
      });

      expect(result.current.transactions.length).toBe(2);
      expect(result.current.transactions).toEqual([[{}], {}]);
    });
  });

  describe('getTotalAmount', () => {
    it('should return the total of all paid transactions', async () => {
      mockedHook = {
        run: () => [
          {
            status: 'paid',
            amount: 4,
          },
          {
            status: 'paid',
            amount: 8,
          },
          {
            status: 'refused',
            amount: 15,
          },
        ],
      };

      const { result } = renderHook(() => useTransactions(), {
        wrapper: TransactionsProvider,
      });

      await act(async () => {
        await result.current.getTransactions();
      });

      expect(result.current.getTotalAmount).toBe(12);
    });
  });
});
