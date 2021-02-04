import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TransactionsList from '../pages/TransactionsList';
import TransactionsCreate from '../pages/TransactionsCreate';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={TransactionsList} />
      <Route path="/create" exact component={TransactionsCreate} />
    </Switch>
  );
};

export default Routes;
