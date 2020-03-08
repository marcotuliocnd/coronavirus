import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';
import Termos from './pages/Termos';
import Painel from './pages/Painel';
import Articles from './pages/Articles';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/termos" component={Termos} />
    <Route exact path="/articles/:article" component={Articles} />
    <PrivateRoute exact path="/painel" component={Painel} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
