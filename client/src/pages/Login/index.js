import React, { useState, useContext } from 'react';
import { Container, Stars, Stars2, Stars3, CardWrapper, Card, TextFieldCustom, ButtonCustom } from './styles';
import { useEfetuarLogin } from '../../queries/user';
import { useHistory } from 'react-router-dom';
import { post } from '../../services/user';
import { authenticate } from '../../services/auth';
import { AuthContext } from '../../contexts/authContext';


export default function Login() {

  const history = useHistory();
  const [user, setUser] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSenha = (evt) => {
    setSenha(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

  // const redirectUserLogged = () => {
  //   window.location.href = '/home';
  // };

  const redirectUserLogged = () => {
    history.push('/');
  };

  async function efetuarLogin(evt) {
    evt.preventDefault();

    const usuario = { email, senha };

    const result = await authenticate(usuario);
    if (result.status === 200) {
      console.log('resultado', result);
      const auth = {
        user: result.data.usuario,
        token: result.data.token,
      };
      if (user) {
        setUser(prevState => ({ ...prevState, auth }));
        redirectUserLogged();
      }
    } else {
      //incluir loading
      console.log('Email ou senha invalidos');
    }
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

