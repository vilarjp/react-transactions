import React from 'react';

import { formatMoney, formatDate } from '../../utils/formatters';
import { statusList } from './status';

import * as SC from './styles';

function Transaction({ user, status, date, amount }) {
  return (
    <SC.TransactionWrapper role="transaction ">
      <SC.TransactionTitle>
        <SC.TransactionUser>{user}</SC.TransactionUser>
        <SC.TransactionStatus>{statusList[status] ?? '-'}</SC.TransactionStatus>
      </SC.TransactionTitle>
      <SC.TransactionInfo>
        <SC.TransactionDate>{formatDate(date)}</SC.TransactionDate>
        <SC.TransactionAmount>{formatMoney(amount)}</SC.TransactionAmount>
      </SC.TransactionInfo>
    </SC.TransactionWrapper>
  );
}

export default Transaction;
