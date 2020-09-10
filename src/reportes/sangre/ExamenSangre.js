import React from "react";
import { Text, View, Document, StyleSheet, Canvas } from "@react-pdf/renderer";
import exSangreObject from "./examenSangre.json";
import { useEffect } from "react-dom";
import DatosGenerales from "../Template";
//https://styled-components.com/docs/basics#getting-started

const styles = StyleSheet.create({
  titulo: {
    fontSize: "16px",
    borderBottom: "2px",
  },
  tabla: {
    flexDirection: "column",
  },
  filaEncabezado: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottom: "1px",
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    margin: 5,
    padding: 5,
  },
  canvasContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
  },
  canvas1: {
    width: "240px",
    height: "300px",
    margin: "3px",
  },
  canvas2: {
    width: "240px",
    height: "150px",
    margin: "3px",
  },
});

const datosExamen = Object.entries(exSangreObject);

const ListaSangre = datosExamen.map((fila) => (
  <View style={styles.fila}>
    <Text>{fila[0].padEnd(15, " ")}</Text>
    <Text>{fila[1]}</Text>
  </View>
));

const ViewExamenSangre = () => (
  <View style={styles.content}>
    <Text style={styles.titulo}>Hematología</Text>
    <View style={styles.tabla}>
      <View style={styles.filaEncabezado}>
        <Text>Examen</Text>
        <Text>Resultados</Text>
      </View>
      {ListaSangre}
    </View>
  </View>
);

// matriz de 13x10
//
const drawOidos = (painter, ancho, alto) => {
  painter
    .polygon([0, 0], [240, 0], [240, 20], [0, 20]) // encabezado
    .stroke();
  painter
    .polygon([20, 40], [220, 40], [220, 280], [20, 280]) // cuadro matriz
    .stroke();
  for (let index = 0; index < 11; index++) {
    // lineas horizontales
    painter
      .moveTo(20, 20 * index + 60)
      .lineTo(220, 20 * index + 60)
      .stroke();
  }
  painter.moveTo(40, 40).lineTo(40, 280).stroke();

  for (let index = 0; index < 9; index += 2) {
    painter
      .moveTo(20 * index + 60, 40)
      .lineTo(20 * index + 60, 280)
      .stroke();
  }
  for (let index = 1; index < 9; index += 2) {
    painter
      .moveTo(20 * index + 60, 40)
      .lineTo(20 * index + 60, 280)
      .dash(4, { space: 2 })
      .stroke();
  }
  painter.fontSize(10);
  painter.text("Oido Derecho",100,8)
};
const drawTimpanos = (painter, ancho, alto) => {
  painter
    .polygon([0, 0], [240, 0], [240, 150], [0, 150]) // marco
    .stroke();
};
const ViewCanvas = () => (
  <View style={styles.content}>
    <Text style={styles.titulo}>Canvas</Text>
    <View style={styles.canvasContainer}>
      <Canvas id="audioI" style={styles.canvas1} paint={drawOidos}></Canvas>
      <Canvas id="audioD" style={styles.canvas1} paint={drawOidos}></Canvas>
    </View>
    <View style={styles.canvasContainer}>
      <Canvas id="audioI" style={styles.canvas2} paint={drawTimpanos}></Canvas>
      <Canvas id="audioD" style={styles.canvas2} paint={drawTimpanos}></Canvas>
    </View>
  </View>
);
function ExamenSangre() {
  return (
    <Document title="Examen de Sangre" author="FinLays">
      <DatosGenerales>
        <ViewCanvas />
      </DatosGenerales>
    </Document>
  );
}
function ExamenSangreBasic() {
  return (
    <Document title="Examen de Sangre" author="FinLays">
      <DatosGenerales>
        <ViewExamenSangre />
      </DatosGenerales>
    </Document>
  );
}

export { ExamenSangre, ExamenSangreBasic };
