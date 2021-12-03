import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cadastro from '../pages/Cadastro';
import Consulta from '../pages/Consulta';
import UserProfile from '../pages/UserProfile';

import { withAuthorizationRouter } from './auth';

export function Application() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={withAuthorizationRouter(Cadastro)}
        />
        <Route
          exact
          path="/Consulta"
          component={withAuthorizationRouter(Consulta)}
        />
        <Route
          exact
          path="/user"
          component={withAuthorizationRouter(UserProfile)}
        />
      </Switch>
    </>
  );
}
