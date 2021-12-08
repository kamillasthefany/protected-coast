import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import { Container } from './styles';
import { Menu } from '../../components/Menu';
import { useListarNoticias } from '../../queries/noticias';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

const TableTeste = () => {
  const classes = useStyles();
  const noticias = useListarNoticias();
  const [conteudo, setConteudo] = useState([]);
  const [chave, setChave] = useState([]);

  useEffect(async () => {
    await tratarConteudo();
  }, [noticias?.data]);

  const tratarConteudo = async () => {
    if (noticias?.data) {
      const listaFinal = noticias?.data?.map((item) =>
        [item.link, item.palavras_chave, item.aprovado, item.createdAt, item.usuario_id]
      );
      setConteudo(listaFinal);

      const primeiroElemento = noticias?.data[0];

      let listaTitulo = [];
      for (const prop in primeiroElemento) {
        console.log('prop', prop);
        listaTitulo.push(prop);
      }


      setChave(listaTitulo);
      console.log('titulos', listaTitulo)
    }
  };

  return (
    <>
      <Menu />
      {noticias.isLoading && (<p>carregando</p>)}
      {
        noticias.data && (
          console.log('noticias', noticias)
        )
      }
      <Container>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="gray">
                <h4 className={classes.cardTitleWhite}>Simple Table</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="gray"
                  tableHead={chave}
                  tableData={conteudo}
                  tableContent={noticias?.data}
                  tableTitles={chave}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </Container>
    </>
  );
}

export default TableTeste;
