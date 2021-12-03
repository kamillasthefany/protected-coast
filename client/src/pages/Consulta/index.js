import React from 'react';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Menu } from '../../components/Menu';
import { Container, Content } from './styles';
import { post } from '../../services/noticia';

export default function Consulta() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: 'checkbox',
    selectableRows: false,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Menu />
        <Content>
          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}

            options={options}
          />

        </Content>
      </Container >
    </ThemeProvider>

  );
};