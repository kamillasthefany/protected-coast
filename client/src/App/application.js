import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Consulta from '../pages/Consulta';
import UserProfile from '../pages/UserProfile';
import TablePage from '../pages/TablePage';
import TableTeste from '../pages/Table';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Noticias from '../pages/Noticias';
import PaginaDeEspera from '../pages/PaginaDeEspera';
import Logout from '../components/Logout';

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
        <Route
          exact
          path="/home"
          component={withAuthorizationRouter(Home)}
        />
        <Route
          exact
          path="/sair"
          component={withAuthorizationRouter(Logout)}
        />
        <Route
          exact
          path="/aguarde"
          component={PaginaDeEspera}
        />
        <Route
          exact
          path="/listar"
          component={TableTeste}
        />
      </Switch>
    </>
  );
}
