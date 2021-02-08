import React from 'react';
import Transaction from '../Transaction';

import * as SC from './styles';

function Transactions({ transactions }) {
  return (
    <SC.TransactionsList>
      {transactions?.length ? (
        transactions.map(
          ({ credit_card_holder_name, status, date, amount, id }) => (
            <Transaction
              user={credit_card_holder_name}
              status={status}
              date={date}
              amount={amount}
              key={id}
            />
          ),
        )
      ) : (
        <p style={{ textAlign: 'center' }} role="status">
          Nenhuma transação encontrada
        </p>
      )}
    </SC.TransactionsList>
  );
}

export default Transactions;
