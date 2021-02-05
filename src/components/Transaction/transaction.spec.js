import React from 'react';
import { render, screen } from '../../test/render';
import { formatMoney, formatDate } from '../../utils/formatters';

import Transaction from '.';

const transaction = {
  user: 'any_user',
  status: 'any_status',
  date: '2020-11-10T19:43:56.451Z',
  amount: '123456789',
};

describe('<Transaction />', () => {
  it('should render the transaction with correct values', () => {
    render(<Transaction {...transaction} />);

    expect(screen.getByText(transaction.user)).toBeInTheDocument();
    expect(screen.getByText(transaction.status)).toBeInTheDocument();
    expect(screen.getByText(formatDate(transaction.date))).toBeInTheDocument();
    expect(
      screen.getByText(formatMoney(transaction.amount)),
    ).toBeInTheDocument();
    expect(screen.getByText(formatDate(transaction.date))).toMatchSnapshot();
    expect(screen.getByText(formatMoney(transaction.amount))).toMatchSnapshot();
  });
});
