import React from 'react';

import IconPlus from '../IconPlus';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    fullWidth: {
      type: 'boolean',
    },
    icon: {
      type: '',
    },
    disabled: {
      type: 'boolean',
    },
  },
};

export const Default = (args) => <Button {...args} />;

Default.args = {
  children: 'Button text',
};

export const withIcon = (args) => <Button {...args} />;

withIcon.args = {
  children: 'Button text',
  icon: <IconPlus />,
};
