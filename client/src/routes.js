import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Consulta from './pages/Consulta';
import Noticias from './pages/Noticias';
import Teste from './pages/Teste';
import TablePage from './pages/TablePage';
import UserProfile from './pages/UserProfile';
import TesteSimples from './pages/TesteSimples';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TesteSimples} />
        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/consulta" exact component={Consulta} />
        <Route path="/noticias" exact component={Noticias} />
        <Route path="/tablepage" exact component={TablePage} />
        <Route path="/user" exact component={UserProfile} />
      </Switch>
    </BrowserRouter>
  )
};