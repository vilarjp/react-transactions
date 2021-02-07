import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from 'react';

import { list, create } from '../services/transaction';
import { useAsync } from '../hooks/useAsync';

const TransactionsContext = createContext();

const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(null);
  const { isLoading, isSuccess, isError, run } = useAsync();

  const createTransaction = useCallback(
    async (transaction) => {
      const response = await run(create(transaction));
      setTransactions((prevState) => [...prevState, response]);
      return response;
    },
    [run],
  );

  const getTransactions = useCallback(async () => {
    const response = await run(list());
    setTransactions(response);
  }, [run]);

  const getTotalAmount = useMemo(() => {
    return transactions?.reduce((total, transaction) => {
      if (transaction.status === 'paid')
        return (total += parseInt(transaction.amount));
      return total;
    }, 0);
  }, [transactions]);

  useEffect(() => {
    (async () => {
      if (!transactions) {
        await getTransactions();
      }
    })();
  }, [getTransactions, transactions]);

  const value = useMemo(
    () => ({
      transactions,
      getTotalAmount,
      isLoading,
      isSuccess,
      isError,
      createTransaction,
      getTransactions,
    }),
    [
      transactions,
      getTotalAmount,
      isLoading,
      isSuccess,
      isError,
      createTransaction,
      getTransactions,
    ],
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
