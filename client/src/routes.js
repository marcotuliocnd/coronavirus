import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';
import Termos from './pages/Termos';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/termos" component={Termos} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
