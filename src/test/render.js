import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import AppProviders from '../contexts';

import theme from '../styles/theme';

function render(children, { renderWithAppProviders = false } = {}) {
  if (renderWithAppProviders)
    return rtlRender(
      <AppProviders>
        <ThemeProvider theme={theme}>
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </AppProviders>,
    );

  return rtlRender(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>,
  );
}

export * from '@testing-library/react';
export { render, userEvent };
