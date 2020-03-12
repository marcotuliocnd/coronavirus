import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';
import Painel from './pages/Painel';
import Articles from './pages/Articles';
import Termos from './pages/Termos';
import Privacidade from './pages/Privacidade';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/articles/:article" component={Articles} />
    <PrivateRoute exact path="/painel" component={Painel} />
    <Route exact path="/termos" component={Termos} />
    <Route exact path="/privacidade" component={Privacidade} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
