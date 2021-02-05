import React from 'react';

import { Main } from '../../components/Main';
import TextAndNumber from '../../components/TextAndNumber';
import Transaction from '../../components/Transaction';
import IconPlus from '../../components/IconPlus';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

import * as SC from './styles';

const TransactionsList = () => {
  return (
    <Main>
      <SC.SectionTransactionsList>
        <SC.TransactionsContainer>
          <TextAndNumber text={'Número de transações'} number={'10.3030'} />
          <TextAndNumber text={'Valor total'} number={'24.339,46'} />
        </SC.TransactionsContainer>
        <SC.TransactionsList>
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
          <Transaction
            user={'João S Silva'}
            status={'Recusada'}
            date={'2010-10-10T13:30:56.451Z'}
            amount={'100'}
          />
        </SC.TransactionsList>
        <Spinner />
        <SC.TransactionsFixedContainer>
          <Button fullWidth icon={<IconPlus />}>
            Criar transação
          </Button>
        </SC.TransactionsFixedContainer>
      </SC.SectionTransactionsList>
    </Main>
  );
};

export default TransactionsList;
