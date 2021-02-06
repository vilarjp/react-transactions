import React from 'react';

import ErrorMessage from '.';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    children: {
      type: 'string',
    },
  },
};

export const Default = (args) => <ErrorMessage {...args} />;

Default.args = {
  children: 'Ocorreu um erro :(',
};
