import React from 'react';

import GoBackHeader from '../../components/GoBackHeader';
import TransactionForm from './components/TransactionForm';

import { useTransactions } from '../../contexts/transactions-context';

import * as SC from './styles';

const TransactionsCreate = () => {
  const { createTransaction, isLoading, isError } = useTransactions();

  return (
    <SC.TransactionsMain>
      <GoBackHeader title={'Nova transação'} to={'/'} />
      <SC.SectionTransactionsCreate>
        <SC.TransactionContainer>
          <TransactionForm
            onSubmit={createTransaction}
            isLoading={isLoading}
            isError={isError}
          />
        </SC.TransactionContainer>
      </SC.SectionTransactionsCreate>
    </SC.TransactionsMain>
  );
};

export default TransactionsCreate;
