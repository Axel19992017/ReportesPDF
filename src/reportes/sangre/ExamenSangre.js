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
    .polygon([20, 40], [220, 40], [220, 300], [20, 300]) // cuadro matriz
    .stroke();

    let array = [2,4,7,9];
  for (let index = 0; index < 12; index++) {
    // lineas horizontales
    if(array.indexOf(index) != -1){
      painter
      .moveTo(20, 20 * index + 60)
      .lineTo(240, 20 * index + 60)
      .stroke();
    }else{
      painter
      .moveTo(20, 20 * index + 60)
      .lineTo(220, 20 * index + 60)
      .stroke();
    }
    
  }
  painter.moveTo(40, 40).lineTo(40, 300).stroke();

  for (let index = 0; index < 9; index += 2) {
    painter
      .moveTo(20 * index + 60, 40)
      .lineTo(20 * index + 60, 300)
      .stroke();
  }
  for (let index = 1; index < 9; index += 2) {
    painter
      .moveTo(20 * index + 60, 40)
      .lineTo(20 * index + 60, 300)
      .dash(4, { space: 2 })
      .stroke();
  }
  painter.fontSize(10);
  painter.text("Oido Derecho",90,4).stroke();


  let ld = ["Normal", "Leve", "Moderada", "Severa", "Profunda"];
  
  
  
    painter.rotate(270).text(ld[0],-90,225).stroke(); // normal
    painter.text(ld[1], -130,225).stroke(); //leva
    painter.text(ld[2], -190,225).stroke(); // moderada
    painter.text(ld[3], -235,225).stroke(); // sever
    painter.text(ld[4], -290,225).stroke(); // profunda4


    painter.rotate(90).text("0",1,45).stroke(); // 0
    for (let index = 1; index <= 12; index++) {
      painter.text(index*10 + "",3,20* index + 45).stroke(); // 0
    }
    painter.text("125",22,30).stroke(); 
    painter.text("500",42,30).stroke();  
    painter.text("1000",82,30).stroke();  
    painter.text("2000",122,30).stroke(); 
    painter.text("4000",162,30).stroke();  
    painter.text("8K HZ",212,30).stroke();  

};
const drawTimpanos = (painter, ancho, alto) => {

  painter.moveTo(50, 15).lineTo(50, 120).stroke();
  painter.moveTo(50,120).lineTo(220,120).stroke();

  painter.moveTo(70,120).lineTo(70,110).stroke();
  painter.moveTo(70+40,120).lineTo(70+40,110).stroke();
  painter.moveTo(70+40*2,120).lineTo(70+40*2,110).stroke();
  painter.moveTo(70+40*3,120).lineTo(70+40*3,110).stroke();


  painter.text("-400",60,130).stroke(); 
  painter.text("-200",100,130).stroke();  
  painter.text("0",150,130).stroke();  
  painter.text("200",180,130).stroke(); 

  painter.text("0.0",35,100).stroke();  
  painter.text("1.0",35,60).stroke();  
  painter.text("1.5",35,20).stroke(); 

  painter.rotate(270).text("Movimiento del tímpano",-130,20).stroke(); 

  painter.rotate(-270).moveTo(50,100).lineTo(60,100).stroke();
  painter.moveTo(50,60).lineTo(60,60).stroke();
  painter.moveTo(50,20).lineTo(60,20).stroke();
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
