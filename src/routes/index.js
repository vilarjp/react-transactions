import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import FullPageErrorFallback from '../pages/FullPageErrorFallback';
import FullPageSpinner from '../pages/FullPageSpinner';

const TransactionsList = lazy(() => import('../pages/TransactionsList'));

const TransactionsCreate = lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/TransactionsCreate'),
);

const Routes = () => {
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <Switch>
        <Suspense fallback={<FullPageSpinner />}>
          <Route path="/" exact component={TransactionsList} />
          <Route path="/create" component={TransactionsCreate} />
        </Suspense>
      </Switch>
    </ErrorBoundary>
  );
};

export default Routes;
