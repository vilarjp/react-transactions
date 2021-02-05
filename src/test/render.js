import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

function render(children) {
  return rtlRender(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export * from '@testing-library/react';
export { render, userEvent };
