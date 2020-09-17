import React from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

import { useEffect } from "react";

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
    width: "100%",
    height: "100%",
  },
  columnaII: {
    width: "100%",
    height: "100%",
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabla: {
    flexDirection: "column",
  },
  filaEncabezado: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottom: "1px",
  },
  columnaData: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

const FichaMédica = ({ values }) => {
  const TableFormatSingle = ({ nameTable }) => {
    const [dataTable, setDataTable] = React.useState([]);
    useEffect(() => {
      let temp = values.filter((value) => value.name.includes(nameTable));
      temp.map((value) => {
        value.name = value.name.substring(nameTable.length);
        return;
      });
      setDataTable(temp);
    }, []);
    let contentCheck = dataTable.map((data, index) => (
      <React.Fragment>
        {typeof data.value !== "string" ? (
          <View style={styles.fila} key={index}>
            <Text>{data.name.padEnd(15, " ")}</Text>
            <Text>{data.value ? "NL" : "Anl"}</Text>
          </View>
        ) : (
          <View style={styles.columnaData} key={index}></View>
        )}
      </React.Fragment>
    ));
    let contentString = dataTable.map((data, index) => (
      <React.Fragment>
        {typeof data.value !== "string" ? (
          <View style={styles.fila} key={index}></View>
        ) : (
          <View style={styles.columnaData} key={index}>
            <Text>{data.name + ":"}</Text>
            <Text>{data.value}</Text>
          </View>
        )}
      </React.Fragment>
    ));
    return (
      <View style={styles.tabla}>
        <View style={styles.filaEncabezado}>
          <Text>{nameTable}</Text>
        </View>
        <View style={styles.filaEncabezado}>
          <Text>Nombre</Text>
          <Text>Resultado</Text>
        </View>
        {contentCheck}
        {contentString}
      </View>
    );
  };

  const TableFormatBi = ({ nameTable }) => {
    const [dataIzq, setDataIzq] = React.useState([]);
    const [dataDer, setDataDer] = React.useState([]);
    const [dataNot, setDataNot] = React.useState([]);
    useEffect(() => {
      let temp = values.filter((value) => value.name.includes(nameTable));
      temp.map((value) => {
        value.name = value.name.substring(nameTable.length);
      });
      setDataIzq(temp.filter((value) => value.name.includes(" Izq.")));
      setDataDer(temp.filter((value) => value.name.includes(" Der.")));
      setDataNot(
        temp.filter(
          (value) =>
            !value.name.includes(" Der.") && !value.name.includes(" Izq.")
        )
      );
    }, []);
    const compare = (izq, der) => {
      let tempIzq = izq.substring(0, izq.length - 4);
      let tempDer = der.substring(0, der.length - 4);
      if (tempIzq === tempDer) {
        return true;
      } else {
        return false;
      }
    };
    const returnValue = (nameValue) => {
      let res = dataDer.filter((element) => compare(nameValue, element.name));
      if (res.length === 0) {
        return "None";
      } else {
        return res[0].value;
      }
    };

    let content = dataIzq.map((data, index) => (
      <React.Fragment>
        {typeof data.value !== "string" ? (
          <View style={styles.fila} key={index}>
            <Text>
              {data.name.substring(0, data.name.length - 4).padEnd(15, " ")}
            </Text>
            <Text>{data.value ? "NL" : "Anl"}</Text>
            <Text>{returnValue(data.name) ? "NL" : "Anl"}</Text>
          </View>
        ) : (
          <View style={styles.fila} key={index}>
            <Text>{data.name + ":"}</Text>
            <Text>{data.value}</Text>
            <Text>{returnValue(data.name)}</Text>
          </View>
        )}
      </React.Fragment>
    ));
    let contentString = dataNot.map((data, index) => (
      <React.Fragment>
        {typeof data.value !== "string" ? (
          <View style={styles.fila} key={index}></View>
        ) : (
          <View style={styles.columnaData} key={index}>
            <Text>{data.name + ":"}</Text>
            <Text>{data.value}</Text>
          </View>
        )}
      </React.Fragment>
    ));
    return (
      <React.Fragment>
        <View style={styles.tabla}>
          <View style={styles.filaEncabezado}>
            <Text>{nameTable}</Text>
          </View>
          <View style={styles.filaEncabezado}>
            <Text>Nombre</Text>
            <Text>Izq.</Text>
            <Text>Der.</Text>
          </View>
          {content}
          {contentString}
        </View>
      </React.Fragment>
    );
  };
  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ficha Medica</Text>
      <View style={styles.container}>
        <View style={styles.columnaI}>
          <TableFormatSingle nameTable={"Tabla 2"} />
        </View>
        <View style={styles.columnaII}>
          <TableFormatBi nameTable={"Tabla 1"} />
        </View>
      </View>
    </View>
  );
};

export default FichaMédica;
