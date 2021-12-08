import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const [conteudo, setConteudo] = useState([]);
  const [chave, setChave] = useState([]);
  const { tableHead, tableData, tableHeaderColor, tableContent, tableTitles } = props;

  useEffect(async () => {
    await tratarConteudo();
  }, [tableContent]);

  const tratarConteudo = async () => {
    // if (tableContent) {
    //   const listaFinal = tableContent?.map((item) =>
    //   {
    //     let teste = []
    //     tableTitles.map((titulo) => {
    //       teste.push(item.titulo);          
    //     })
    //   }

    //   );
    //   console.log('componente', listaFinal);
    //   setConteudo(listaFinal);
    // }
  };


  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            // console.log('datatable', prop)
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
