import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />

      <Route path="/main" component={Main} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/admin" component={Admin} isPrivate />
    </Switch>
  );
}
