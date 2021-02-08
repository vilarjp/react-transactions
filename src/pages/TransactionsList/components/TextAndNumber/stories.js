import React from 'react';

import TextAndNumber from '.';

export default {
  title: 'TextAndNumber',
  component: TextAndNumber,
  argTypes: {
    text: {
      type: 'string',
    },
    number: {
      type: 'string',
    },
    isMoney: {
      type: 'boolean',
    },
    isLoading: {
      type: 'boolean',
    },
  },
};

export const Default = (args) => <TextAndNumber {...args} />;

Default.args = {
  text: 'Número de transações',
  number: '10.3030',
};

export const WithMoney = (args) => <TextAndNumber {...args} />;

WithMoney.args = {
  text: 'Valor total',
  number: '24339.46',
  isMoney: true,
};
