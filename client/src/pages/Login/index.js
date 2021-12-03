import React, { useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Stars, Stars2, Stars3, CardWrapper, Card, TextFieldCustom, ButtonCustom } from './styles';
import { useEfetuarLogin } from '../../queries/user';
import { post } from '../../services/user';

const styles = {
  customButton: {
    color: "#454545",
  },
  color: {
    gray: "#454545",
  }
};

const useStyles = makeStyles(styles);

export default function Login() {
  const classes = useStyles();

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
          <TextFieldCustom
            label="Email"
            id="custom-css-outlined-input"
            onChange={handleEmail}
            size="small"
          />
          <br />
          <TextFieldCustom
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            onChange={handleSenha}
            size="small"
            color="secondary"
          />
          <br />
          <br />
          <ButtonCustom id="button teste"
            variant="outlined"
            color="secondary"
            onClick={efetuarLogin}
          >
            ENVIAR
          </ButtonCustom>

          <br />
        </Card>
      </CardWrapper>
    </Container>
  );
}

