import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from 'react';

import { httpClient } from '../services/http-client';
import { useAsync } from '../hooks/useAsync';

const TransactionsContext = createContext();

const TransactionsProvider = ({ children }) => {
  const { data: transactions, isLoading, isSuccess, isError, run } = useAsync();

  const getTransactions = useCallback(() => {
    run(httpClient('transactions'));
  }, [run]);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  const getTotalAmount = useMemo(() => {
    return transactions?.reduce((total, transaction) => {
      if (transaction.status === 'paid') return (total += transaction.amount);
      return total;
    }, 0);
  }, [transactions]);

  const value = useMemo(
    () => ({
      transactions,
      getTotalAmount,
      isLoading,
      isSuccess,
      isError,
    }),
    [transactions, getTotalAmount, isLoading, isSuccess, isError],
  );

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
};

function useTransactions() {
  const context = useContext(TransactionsContext);

  if (context === undefined) {
    throw new Error(
      `useTransactions must be used within a TransactionsProvider`,
    );
  }

  return context;
}

export { TransactionsProvider, useTransactions };
