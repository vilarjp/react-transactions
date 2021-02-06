import React from 'react';
import { TransactionsProvider } from './transactions-context';

const AppProviders = ({ children }) => (
  <TransactionsProvider>{children}</TransactionsProvider>
);

export default AppProviders;
