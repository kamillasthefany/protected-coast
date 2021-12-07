import React, { useState } from 'react';
import { Container, CardWrapper, Card, TextFieldCustom, ButtonCustom } from './styles';
import Snackbar from '../../components/Snackbar/Snackbar';
import { cadastro } from '../../services/user';


export default function Register() {

  const [notification, setNotification] = useState(false);
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
    window.location.href = '/aguarde';
  };

  const redirectUserLogin = () => {
    window.location.href = '/login';
  };

  async function efetuarCadastro() {
    const usuario = { nome, email, senha };
    const result = await cadastro(usuario);

    if (result.status = 200)
      redirectUser();
  }

  return (
    <Container>
      {
        notification &&
        <Snackbar />
      }
      <CardWrapper>
        <Card id="card">
          <TextFieldCustom
            id="outlined-basic"
            label="Nome"
            onChange={handleNome}
            size="small"
            color="secondary"
            required
          />
          <br />
          <TextFieldCustom
            id="outlined-basic"
            label="Email"
            onChange={handleEmail}
            size="small"
            type="email"
            required
          />
          <br />
          <TextFieldCustom
            id="outlined-basic"
            label="Senha"
            onChange={handleSenha}
            size="small"
            color="secondary"
            type="password"
            required
          />
          <br />
          <ButtonCustom variant="outlined" color="secondary" onClick={efetuarCadastro}>ENVIAR</ButtonCustom>
          <br />
          <br />
          <a onClick={() => redirectUserLogin()}><small>Já tem uma conta?</small></a>
          <br />
        </Card>
      </CardWrapper>
    </Container>
  );
}