import React from 'react';
import { render, screen } from '../../test/render';
import { formatMoney, formatDate } from '../../utils/formatters';
import { statusList } from './status';

import Transaction from '.';

const paidTransaction = {
  user: 'any_user',
  status: 'paid',
  date: '2020-11-10T19:43:56.451Z',
  amount: '123456789',
};

const refusedTransaction = {
  user: 'any_user',
  status: 'refused',
  date: '2020-11-10T19:43:56.451Z',
  amount: '123456789',
};

describe('<Transaction />', () => {
  it('should render the paid transaction with correct values', () => {
    render(<Transaction {...paidTransaction} />);

    expect(screen.getByText(paidTransaction.user)).toBeInTheDocument();
    expect(
      screen.getByText(statusList[paidTransaction.status]),
    ).toBeInTheDocument();
    expect(
      screen.getByText(statusList[paidTransaction.status]),
    ).toMatchSnapshot();
    expect(
      screen.getByText(formatDate(paidTransaction.date)),
    ).toBeInTheDocument();
    expect(
      screen.getByText(formatMoney(paidTransaction.amount)),
    ).toBeInTheDocument();
    expect(
      screen.getByText(formatDate(paidTransaction.date)),
    ).toMatchSnapshot();
    expect(
      screen.getByText(formatMoney(paidTransaction.amount)),
    ).toMatchSnapshot();
  });

  it('should render the refused transaction with correct values', () => {
    render(<Transaction {...refusedTransaction} />);

    expect(
      screen.getByText(statusList[refusedTransaction.status]),
    ).toBeInTheDocument();
    expect(
      screen.getByText(statusList[refusedTransaction.status]),
    ).toMatchSnapshot();
  });

  it('should render empty status if transaction status is not found', () => {
    render(<Transaction {...refusedTransaction} status={'any_wrong_status'} />);

    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
