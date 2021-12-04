import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cadastro from '../pages/Register';
import Consulta from '../pages/Consulta';
import UserProfile from '../pages/UserProfile';
import TablePage from '../pages/TablePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Noticias from '../pages/Noticias';

import { withAuthorizationRouter } from './auth';

export function Application() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={withAuthorizationRouter(TablePage)}
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
        <Route
          exact
          path="/table"
          component={withAuthorizationRouter(TablePage)}
        />
        <Route
          exact
          path="/login"
          component={withAuthorizationRouter(Login)}
        />
        <Route
          exact
          path="/register"
          component={withAuthorizationRouter(Register)}
        />
        <Route
          exact
          path="/noticias"
          component={withAuthorizationRouter(Noticias)}
        />
      </Switch>
    </>
  );
}
