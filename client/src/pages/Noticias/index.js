import React from 'react';
import { Menu } from '../../components/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MainContainer, Container, Content, CardWrapper, Card, CardAux, InputCustom } from './styles';
import { post } from '../../services/noticia';

export default function Noticias() {

  const [link, setLink] = React.useState('');
  const [outline, setOutline] = React.useState('');
  const [palavras, setPalavras] = React.useState('');

  const handleLink = (event) => {
    setLink(event.target.value);
  };

  const handlePalavras = (event) => {
    setPalavras(event.target.value);
  };

  async function cadastrar() {
    const noticia = { link, outline, palavras };
    const result = await post(noticia);

    if (result.status = 200)
      console.log('sucesso');

  }

  return (
    <MainContainer>
      <Menu />
      <Content>
        <CardAux>
          <TextField
            id="outlined-textarea"
            label="Link"
            placeholder="Insira o link da notícia"
            multiline
            fullWidth
            onChange={handleLink}
          />
          <br />
          <br />
          {/* <TextField
            id="outlined-textarea"
            label="Outline"
            placeholder="Insira o link do outline da notícia"
            multiline
            fullWidth
            onChange={handleLink}
          />
          <br />
          <br /> */}
          <TextField
            id="outlined-multiline-static"
            label="Palavras Chave"
            multiline
            rows={4}
            placeholder="Insira as palavras chave. O bot irá mapear as notícias usando as palavras inseridas nesse campo"
            fullWidth
            onChange={handlePalavras}
          />
          <br />
          <br />
          <Button variant="outlined" color="secondary" onClick={cadastrar}>ENVIAR</Button>
          <br />
        </CardAux>
      </Content>
    </MainContainer >
  );
};