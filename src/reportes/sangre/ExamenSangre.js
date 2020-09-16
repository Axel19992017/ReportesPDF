import React from "react";
import { Text, View, Document, StyleSheet, Canvas } from "@react-pdf/renderer";
import exSangreObject from "./examenSangre.json";
import DatosGenerales from "../Template";
import FichaMedica from "./FichaMédica";
import jsonEmulated from "./audiometria.json";
import jsonEmulated2 from "./fichaMedica.json";
import DataAudiometry from "./DataAudiometry";
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

const ViewCanvas = ({ valores }) => {
  const initGrafica = (painter, texto) => {
    painter
      .polygon([0, 0], [240, 0], [240, 20], [0, 20]) // encabezado
      .stroke();
    painter
      .polygon([20, 40], [220, 40], [220, 300], [20, 300]) // cuadro matriz
      .stroke();
    let array = [2, 4, 7, 9];
    for (let index = 0; index < 12; index++) {
      // lineas horizontales
      if (array.indexOf(index) != -1) {
        painter
          .moveTo(20, 20 * index + 60)
          .lineTo(240, 20 * index + 60)
          .stroke();
      } else {
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
    painter.text(texto, 90, 4).stroke();
    let ld = ["Normal", "Leve", "Moderada", "Severa", "Profunda"];
    painter.rotate(270).text(ld[0], -90, 225).stroke(); // normal
    painter.text(ld[1], -130, 225).stroke(); //leva
    painter.text(ld[2], -190, 225).stroke(); // moderada
    painter.text(ld[3], -235, 225).stroke(); // sever
    painter.text(ld[4], -290, 225).stroke(); // profunda4

    painter.rotate(90).text("0", 1, 45).stroke(); // 0
    for (let index = 1; index <= 12; index++) {
      painter.text(index * 10 + "", 3, 20 * index + 45).stroke(); // 0
    }
    painter.text("125", 22, 30).stroke();
    painter.text("500", 42, 30).stroke();
    painter.text("1000", 82, 30).stroke();
    painter.text("2000", 122, 30).stroke();
    painter.text("4000", 162, 30).stroke();
    painter.text("8K HZ", 212, 30).stroke();
  };
  const initGrafica2 = (painter) => {
    painter.moveTo(50, 15).lineTo(50, 120).stroke();
    painter.moveTo(50, 120).lineTo(220, 120).stroke();

    painter.moveTo(70, 120).lineTo(70, 110).stroke();
    painter
      .moveTo(70 + 40, 120)
      .lineTo(70 + 40, 110)
      .stroke();
    painter
      .moveTo(70 + 40 * 2, 120)
      .lineTo(70 + 40 * 2, 110)
      .stroke();
    painter
      .moveTo(70 + 40 * 3, 120)
      .lineTo(70 + 40 * 3, 110)
      .stroke();

    painter.text("-400", 60, 130).stroke();
    painter.text("-200", 100, 130).stroke();
    painter.text("0", 150, 130).stroke();
    painter.text("200", 180, 130).stroke();

    painter.text("0.0", 35, 100).stroke();
    painter.text("1.0", 35, 60).stroke();
    painter.text("1.5", 35, 20).stroke();

    painter.rotate(270).text("Movimiento del tímpano", -130, 20).stroke();

    painter.rotate(-270).moveTo(50, 100).lineTo(60, 100).stroke();
    painter.moveTo(50, 60).lineTo(60, 60).stroke();
    painter.moveTo(50, 20).lineTo(60, 20).stroke();
  };
  const paintGrafica1 = (painter, coords) => {
    const tempPoints = [];
    const dimension = { x: 20, y: 20 };

    const x = [0, 125, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
    const y = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

    for (let index = 0; index < coords.ejeX.length; index++) {
      let puntoX, puntoY;
      if (coords.ejeX[index] === 0) {
        puntoX = dimension.x;
      } else {
        B: for (let i = 0; i < x.length; i++) {
          if (x[i] >= coords.ejeX[index]) {
            puntoX =
              (dimension.x * (coords.ejeX[index] - x[i - 1])) /
                (x[i] - x[i - 1]) +
              i * dimension.x;
            break B;
          }
        }
      }

      if (coords.ejeY[index] === 0) {
        puntoY = dimension.y;
      } else {
        C: for (let i = 0; i < y.length; i++) {
          if (y[i] >= coords.ejeY[index]) {
            puntoY =
              (dimension.y * (coords.ejeY[index] - y[i - 1])) /
                (y[i] - y[i - 1]) +
              i * dimension.y;
            break C;
          }
        }
      }
      tempPoints.push({ x: puntoX, y: puntoY + 20 });
    }
    tempPoints.map((key) => {
      // funciona pero no sé porque (debería de dar error)
      painter.circle(key.x, key.y, 3).fill("black", "#900").stroke();
    });

    painter
      .moveTo(tempPoints[0].x, tempPoints[0].y)
      .lineTo(tempPoints[1].x, tempPoints[1].y)
      .dash(30, { space: 0 })
      .stroke();
    for (let index = 0; index < tempPoints.length - 1; index++) {
      painter
        .moveTo(tempPoints[index].x, tempPoints[index].y)
        .lineTo(tempPoints[index + 1].x, tempPoints[index + 1].y)
        .dash(30, { space: 0 })
        .stroke();
    }
  };

  const paintGrafica2 = (painter, coords) => {
    const tempPoints = [];
    const pointZero = { x: 50, y: 120 };
    let dimension = { x: 40, y: 40 }; // varía (x,y) = (40,20),(20,40),(20,20), (40,40)
    const x = [-500, -400, -200, 0, 200];
    const y = [-0.5, 0.0, 1.0, 1.5];
    for (let index = 0; index < coords.ejeX.length; index++) {
      let puntoX, puntoY;

      if (coords.ejeX[index] <= 0 && coords.ejeY[index] <= 0) {
        dimension = { x: 20, y: 20 };
      } else if (coords.ejeY[index] <= 0) {
        dimension = { x: 40, y: 20 };
      } else if (coords.ejeX[index] <= -400) {
        dimension = { x: 20, y: 40 };
      } else {
        dimension = { x: 40, y: 40 };
      }
      // obteniendo coord x del canvas
      B: for (let i = 0; i < x.length; i++) {
        if (coords.ejeX[index] <= x[i]) {
          if (i === 0) {
            puntoX = 0;
          } else {
            puntoX =
              Math.abs(dimension.x * (coords.ejeX[index] - x[i - 1])) /
              (x[i] - x[i - 1]);
            puntoX += i > 1 ? 20 + 40 * (i - 2) : 0;
            break B;
          }
        }
      }
      A: for (let i = 0; i < y.length; i++) {
        if (coords.ejeY[index] <= y[i]) {
          if (i === 0) {
            puntoY = 0;
          } else {
            puntoY =
              Math.abs(dimension.y * (coords.ejeY[index] - y[i - 1])) /
              (y[i] - y[i - 1]);
            puntoY += i > 1 ? 20 + 40 * (i - 2) : 0;
            break A;
          }
        }
      }
      console.log(dimension);
      tempPoints.push({ x: puntoX + pointZero.x, y: pointZero.y - puntoY });
    }
    tempPoints.map((key) => {
      painter.circle(key.x, key.y, 3).fill("black", "#900").stroke();
    });

    for (let index = 0; index < tempPoints.length - 1; index++) {
      painter
        .moveTo(tempPoints[index].x, tempPoints[index].y)
        .lineTo(tempPoints[index + 1].x, tempPoints[index + 1].y)
        .dash(30, { space: 0 })
        .stroke();
    }
  };
  const drawOidoI = (painter, ancho, alto) => {
    initGrafica(painter, "Oído izquierdo");
    paintGrafica1(painter, valores["oidoDerechoEvaluacionHZ"]);
  };
  const drawOidoD = (painter, ancho, alto) => {
    initGrafica(painter, "Oído derecho");
    paintGrafica1(painter, valores["oidoIzquierdoEvaluacionHZ"]);
  };
  const drawTimpanoI = (painter, ancho, alto) => {
    initGrafica2(painter);
    paintGrafica2(painter, valores["oidoIzquierdoTimpanograma"]);
  };
  const drawTimpanoD = (painter, ancho, alto) => {
    initGrafica2(painter);
    paintGrafica2(painter, valores["oidoDerechoTimpanograma"]);
  };

  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Canvas</Text>
      <View style={styles.canvasContainer}>
        <Canvas id="audioI" style={styles.canvas1} paint={drawOidoI} />
        <Canvas id="audioD" style={styles.canvas1} paint={drawOidoD} />
      </View>
      <View style={styles.canvasContainer}>
        <Canvas id="audioI" style={styles.canvas2} paint={drawTimpanoI} />
        <Canvas id="audioD" style={styles.canvas2} paint={drawTimpanoD} />
      </View>
    </View>
  );
};

function ExamenSangre() {
  return (
    <Document title="Examen de Sangre" author="FinLays">
     {/*}
      <DatosGenerales values={jsonEmulated}>
        <DataAudiometry values={jsonEmulated.result} />
      </DatosGenerales>
   
      <DatosGenerales ficha={true}>
        <ViewCanvas valores={jsonEmulated} />
      </DatosGenerales>
       {*/}  
      <DatosGenerales>
        <FichaMedica values={jsonEmulated2.results}/>
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
