import React from 'react';

import GoBackHeader from '../../components/GoBackHeader';
import TransactionForm from './components/TransactionForm';

import * as SC from './styles';

const TransactionsCreate = () => {
  return (
    <SC.TransactionsMain>
      <GoBackHeader title={'Nova transação'} />
      <SC.SectionTransactionsCreate>
        <SC.TransactionContainer>
          <TransactionForm />
        </SC.TransactionContainer>
      </SC.SectionTransactionsCreate>
    </SC.TransactionsMain>
  );
};

export default TransactionsCreate;
