import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppProviders from './contexts';

import Route from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <AppProviders>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </AppProviders>
  );
}

export default App;
