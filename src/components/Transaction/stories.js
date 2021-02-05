import React from 'react';

import Transaction from '.';

export default {
  title: 'Transaction',
  component: Transaction,
  argTypes: {
    user: {
      type: 'string',
    },
    status: {
      type: 'string',
    },
    date: {
      type: 'date',
    },
    amount: {
      type: 'string',
    },
  },
};

export const Default = (args) => <Transaction {...args} />;

Default.args = {
  user: 'João S Silva',
  status: 'Recusada',
  date: '2020-11-10T19:43:56.451Z',
  amount: '100',
};
