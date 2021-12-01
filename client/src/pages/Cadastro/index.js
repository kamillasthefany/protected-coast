import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CardWrapper, Card } from './styles';
import { cadastro } from '../../services/user';


export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSenha = (evt) => {
    setSenha(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const handleNome = (evt) => {
    setNome(evt.target.value);
  }

  const redirectUser = () => {
    window.location.href = '/home';
  };

  const redirectUserLogin = () => {
    window.location.href = '/login';
  };

  async function efetuarCadastro() {
    const usuario = { nome, email, senha };
    const result = await cadastro(usuario);

    if (result.status = 200)
      redirectUser();

    console.log('resultado', result);
  }

  return (
    <Container>
      <CardWrapper>
        <Card id="card">
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            onChange={handleNome}
            size="small"
            color="secondary"
            required
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleEmail}
            size="small"
            color="secondary"
            type="email"
            required
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            onChange={handleSenha}
            size="small"
            type="password"
            color="secondary"
            required
          />
          <br />
          <Button variant="outlined" color="secondary" onClick={efetuarCadastro}>ENVIAR</Button>
          <br />
          <br />
          <a onClick={() => redirectUserLogin()}><small>Já tem uma conta?</small></a>
          <br />
        </Card>
      </CardWrapper>
    </Container>
  );
}