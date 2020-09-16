import React from "react";

import { Text, View, Document, StyleSheet, Canvas } from "@react-pdf/renderer";
import exSangreObject from "./examenSangre.json";
import { useEffect } from "react";
import DatosGenerales from "../Template";

const styles = StyleSheet.create({
  content: {
    margin: 5,
    padding: 5,
    display: "flex",
  },
  titulo: {
    fontSize: "16px",
    borderBottom: "2px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  columnaI: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
  columnaII: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
});

const FichaMédica = ({values}) => {
    const TableFormatSingle = ({nameTable}) =>{
      const [dataTable, setDataTable]  = React.useState([]);
      useEffect(()=>{
        setDataTable(values.filter(value=> value.name.includes(nameTable)));
      }, [])
      const content = dataTable.map( data =>
        <React.Fragment>
        <Text>{data.name}</Text>
        <Text>{data.value ? "Nml": "Anml"}</Text>
        </React.Fragment>
      )
      return(
      <View>{content}</View>
      )
    }


  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ficha Medica</Text>
      <View style={styles.container}>
        <View style={styles.columnaI}>
          <TableFormatSingle nameTable={"Tabla 1"}/>
        </View>
        <View style={styles.columnaII}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            maxime ea, molestiae dolorem quaerat est quisquam distinctio, nulla,
            pariatur harum animi optio at debitis iusto non doloremque
            consequuntur ab dicta.
          </Text>
        </View>
      </View>
    </View> 
  );
};

export default FichaMédica;
