import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Title, Stars, Stars2, Stars3, CardWrapper, Card, Teste, InputCustom } from './styles';
import { useEfetuarLogin } from '../../queries/user';
import { post } from '../../services/user';


export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSenha = (evt) => {
    setSenha(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const redirectUser = () => {
    window.location.href = '/home';
  };

  async function efetuarLogin() {
    const usuario = { email, senha };
    const result = await post(usuario);

    if (result.status = 200)
      redirectUser();

    console.log('resuoltado', result);
  }

  return (
    <Container>
      <Stars />
      <Stars2 />
      <Stars3 />
      <CardWrapper>
        <Card id="card">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleEmail}
            size="small"
            color="secondary"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            onChange={handleSenha}
            size="small"
            color="secondary"
          />
          <br />
          <Button variant="outlined" color="secondary" onClick={efetuarLogin}>ENVIAR</Button>
          <br />
        </Card>
      </CardWrapper>
    </Container>
  );
}
