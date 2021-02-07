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
  },
};

export const Default = (args) => <Input {...args} />;

Default.args = {
  placeholder: 'Nome da pessoa compradora',
};
