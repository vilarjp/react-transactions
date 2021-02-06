import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const TransactionsList = lazy(() => import('../pages/TransactionsList'));
const TransactionsCreate = lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/TransactionsCreate'),
);

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<div />}>
        <Route path="/" exact component={TransactionsList} />
        <Route path="/create" component={TransactionsCreate} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
