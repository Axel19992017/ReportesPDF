import React from "react";

import { Text, View, Document, StyleSheet, Canvas } from "@react-pdf/renderer";
import exSangreObject from "./examenSangre.json";
import { useEffect } from "react-dom";
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

const FichaMédica = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ficha Medica</Text>
      <View style={styles.container}>
        <View style={styles.columnaI}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            maxime ea, molestiae dolorem quaerat est quisquam distinctio, nulla,
            pariatur harum animi optio at debitis iusto non doloremque
            consequuntur ab dicta.
          </Text>
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
