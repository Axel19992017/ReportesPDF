import React, { useEffect } from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";


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
  titulo: {
    fontSize: "16px",
    borderBottom: "2px",
  },
  subtitulo: {
    fontSize: "12px",
    borderBottom: "1px",
  },
  part: {
    margin: "5px",
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const DataAudiometry = ({ values }) => {
  const Part = ({ children, titulo }) => {
    return (
      <View style={styles.part}>
        <Text style={styles.subtitulo}>{titulo}</Text>
        {children}
      </View>
    );
  };

  const ItemPart = ({ name }) => {
    const [itemData, setItemData] = React.useState({
      name: "None",
      value: undefined,
    });
    useEffect(() => {
      setItemData(values.filter((e) => e.name === name)[0]);
    }, []);
    return (
      <View style={styles.fila}>
      <Text>{itemData.name.padEnd(20, " ")}</Text>
      <Text>{itemData.value ? "SI" : "NO"}</Text>
    </View>
    );
  };
  const ItemPart2 = ({ name }) => {
    const [itemData, setItemData] = React.useState({
      name: "None",
      value: undefined,
    });
    useEffect(() => {
      setItemData(values.filter((e) => e.name === name)[0]);
    }, []);
    return (
      <View style={styles.fila}>
        <Text>{itemData.name.padEnd(15, " ")}</Text>
        <Text>{itemData.value}</Text>
      </View>
    );
  };
  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ficha Medica</Text>
      <View style={styles.container}>
        <View style={styles.columnaI}>
          <Part titulo={"Historial Laboral Exposición"}>
            <ItemPart name={"exposicionRuido"} />
            <ItemPart name={"usoMedioProteccion"} />
            <ItemPart name={"tiempoExposicion"} />
          </Part>
          <Part titulo={"Exposición a ruidos no laboral"}>
            <ItemPart name={"discoteca"} />
            <ItemPart name={"practicasTiro"} />
            <ItemPart name={"motorismo"} />
          </Part>
          <Part titulo={"Antecedentes Personales"}>
            <ItemPart name={"hta"} />
            <ItemPart name={"diabetesMellitus"} />
            <ItemPart name={"infeccionOtica"} />
            <ItemPart name={"parotiditis"} />
            <ItemPart name={"explosiones"} />
          </Part>
        </View>
        <View style={styles.columnaII}>
          <Part titulo={"Conducta Auditiva Comunicativa"}>
            <ItemPart name={"natacion"} />
            <ItemPart name={"musicaAlta"} />
            <ItemPart name={"hisopos"} />
            <ItemPart name={"escuchaBien"} />
            <ItemPart name={"necesitaRepeticion"} />
          </Part>
          <Part titulo={"Antecedentes Otólogicos"}>
            <ItemPart name={"acufenos"} />
            <ItemPart name={"vertigo"} />
            <ItemPart name={"otalgia"} />
            <ItemPart name={"otorrea"} />
            <ItemPart name={"disminucionAuditivia"} />
          </Part>
        </View>
      </View>
      <View style={styles.content}>
        <Part titulo={"Otoscopía"}>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            perferendis doloremque illo dolor quae aspernatur iste voluptas
            iusto eligendi ullam deleniti quidem cupiditate adipisci tenetur
            dignissimos ab, odit ad alias?
          </Text>
        </Part>
        <Part titulo={"Detalle"}>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            perferendis doloremque illo dolor quae aspernatur iste voluptas
            iusto eligendi ullam deleniti quidem cupiditate adipisci tenetur
            dignissimos ab, odit ad alias?
          </Text>
        </Part>
        <Part titulo={"Resultados"}>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            perferendis doloremque illo dolor quae aspernatur iste voluptas
            iusto eligendi ullam deleniti quidem cupiditate adipisci tenetur
            dignissimos ab, odit ad alias?
          </Text>
        </Part>
        <Part titulo={"Recomendaciones"}>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            perferendis doloremque illo dolor quae aspernatur iste voluptas
            iusto eligendi ullam deleniti quidem cupiditate adipisci tenetur
            dignissimos ab, odit ad alias?
          </Text>
        </Part>
      </View>
    </View>
  );
};

export default DataAudiometry;
