import React from 'react';

import { formatMoney, formatDate } from '../../utils/formatters';

import * as SC from './styles';

function Transaction({ user, status, date, amount }) {
  return (
    <SC.TransactionWrapper>
      <SC.TransactionTitle>
        <SC.TransactionUser>{user}</SC.TransactionUser>
        <SC.TransactionStatus>{status}</SC.TransactionStatus>
      </SC.TransactionTitle>
      <SC.TransactionInfo>
        <SC.TransactionDate>{formatDate(date)}</SC.TransactionDate>
        <SC.TransactionAmount>{formatMoney(amount)}</SC.TransactionAmount>
      </SC.TransactionInfo>
    </SC.TransactionWrapper>
  );
}

export default Transaction;
