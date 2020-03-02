import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
