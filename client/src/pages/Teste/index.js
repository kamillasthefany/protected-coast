import React from 'react';
import { makeStyles } from "@material-ui/styles";
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import Table from '../../components/Table/Table.js'
import { Container } from './styles';
import { Menu } from '../../components/Menu';

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

const Teste = () => {
  const classes = useStyles();
  return (
    <div>
      <Menu />
      <Container>
        <br />
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Notícias</h4>
                <p className={classes.cardCategoryWhite}>
                  Notícias cadastradas
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"],
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </Container>
    </div>

  )
}

export default Teste;
