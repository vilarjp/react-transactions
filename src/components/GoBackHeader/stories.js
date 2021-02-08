import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GoBackHeader from '.';

export default {
  title: 'GoBackHeader',
  component: GoBackHeader,
  argTypes: {
    title: {
      type: 'string',
    },
  },
};

export const Default = (args) => (
  <BrowserRouter>
    <GoBackHeader {...args} />
  </BrowserRouter>
);

Default.args = {
  title: 'Transações',
};
