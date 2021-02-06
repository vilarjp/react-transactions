import React from 'react';
import { Link } from 'react-router-dom';

import { Main } from '../../components/Main';
import TextAndNumber from '../../components/TextAndNumber';
import Transaction from '../../components/Transaction';
import IconPlus from '../../components/IconPlus';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';

import { useTransactions } from '../../contexts/transactions-context';

import * as SC from './styles';

const TransactionsList = () => {
  const {
    transactions,
    getTotalAmount,
    isLoading,
    isSuccess,
    isError,
  } = useTransactions();

  return (
    <Main>
      <SC.SectionTransactionsList>
        <SC.TransactionsContainer>
          <TextAndNumber
            text={'Número de transações'}
            number={transactions?.length ?? 0}
            isLoading={isLoading}
          />
          <TextAndNumber
            text={'Valor total'}
            number={getTotalAmount ?? 0}
            isMoney={true}
            isLoading={isLoading}
          />
        </SC.TransactionsContainer>

        {isLoading && <Spinner />}

        {isSuccess && (
          <SC.TransactionsList>
            {transactions.map(
              ({ credit_card_holder_name, status, date, amount, id }) => (
                <Transaction
                  user={credit_card_holder_name}
                  status={status}
                  date={date}
                  amount={amount}
                  key={id}
                />
              ),
            )}
            {!transactions.length && (
              <p style={{ textAlign: 'center' }} role="status">
                Nenhuma transação encontrada
              </p>
            )}
          </SC.TransactionsList>
        )}

        {isError && (
          <ErrorMessage>
            Ocorreu um erro ao buscar as informações :(
          </ErrorMessage>
        )}

        <SC.TransactionsFixedContainer>
          <Link to="/create">
            <Button fullWidth icon={<IconPlus />}>
              Criar transação
            </Button>
          </Link>
        </SC.TransactionsFixedContainer>
      </SC.SectionTransactionsList>
    </Main>
  );
};

export default TransactionsList;
