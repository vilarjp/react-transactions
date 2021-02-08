import React from 'react';

import Input from '.';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    initialValue: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    error: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    isMoney: {
      type: 'boolean',
    },
    mask: {
      type: 'string',
    },
  },
};

export const Default = (args) => <Input {...args} />;

Default.args = {
  placeholder: 'Insira seu nome',
};

export const WithError = (args) => <Input {...args} />;

WithError.args = {
  error: 'Campo obrigatório',
};

export const WithMask = (args) => <Input {...args} />;

WithMask.args = {
  mask: '999.999.999-99',
};

export const Currency = (args) => <Input {...args} />;

Currency.args = {
  placeholder: 'Valor total',
  isMoney: true,
};
