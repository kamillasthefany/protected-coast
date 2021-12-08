/* eslint-disable  */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from '@mui/material/Button';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
//import Button from "../../components/CustomButtons/Button.js";
import RegularButton from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { Container, ButtonCustom, TextFieldCustom, CustomTextField } from './styles';
import { Menu } from '../../components/Menu';
import BtnCustom from '../../components/BtnCustom';
import { useSalvarNoticia } from "../../queries/noticias/index.js";
import { post } from "../../services/noticia/index.js";
import TextField from '@material-ui/core/TextField';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  customButton: {
    color: "#454545",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [link, setLink] = useState('');
  const [outline, setOutline] = useState('');
  const [palavras, setPalavras] = useState('');

  const handleLink = (event) => {
    setLink(event.target.value);
    console.log('link', link);
  };

  const handleOutline = (event) => {
    setOutline(event.target.value);
  };

  const handlePalavras = (event) => {
    setPalavras(event.target.value);
  };

  async function cadastrar() {
    const noticia = { link, outline, palavras };
    const result = await post(noticia);

    if (result.status = 200) {
      console.log('sucesso');
    }
    else {
      console.log('erro');
    }

  }

  const classes = useStyles();
  return (
    <div>
      <Menu />
      <Container>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="gray">
                <h4 className={classes.cardTitleWhite}>Cadastro</h4>
                <p className={classes.cardCategoryWhite}>Cadastro de notícias</p>
              </CardHeader>
              <CardBody>
                <br />
                <br />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    {/* <CustomTextField
                      required
                      id="filled-required"
                      label="Link"
                      defaultValue=""
                      variant="standard"
                      onChange={handleLink}
                      fullWidth
                    /> */}
                    <CustomInput
                      required
                      id="filled-required"
                      labelText="Link"
                      inputProps={{
                        value: link,
                        onChange: handleLink
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <br />
                    <br />
                  </GridItem>
                </GridContainer>
                <br />
                <br />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomTextField
                      required
                      id="filled-required"
                      label="Link outline"
                      defaultValue=""
                      variant="standard"
                      onChange={handleOutline}
                      fullWidth
                    />
                  </GridItem>
                </GridContainer>
                <br />
                <br />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomTextField
                      required
                      id="filled-required"
                      label="Palavras chave"
                      defaultValue=""
                      variant="standard"
                      onChange={handlePalavras}
                      fullWidth
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <ButtonCustom id="button teste"
                  variant="outlined"
                  color="secondary"
                  onClick={() => cadastrar()}
                >
                  Enviar
                </ButtonCustom>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
