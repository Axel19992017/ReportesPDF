import React from 'react';
import {Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titulo:{
        fontSize: '16px',
        borderBottom: '2px'
      },
    tabla:{
        flexDirection: 'column'
    },
    filaEncabezado: {
        flexDirection: 'row',
        justifyContent:'space-around',
        borderBottom: '1px'
    },
    fila: {
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    content:{
        margin: 5,
        padding: 5
    }
});
/**
 preguntas[0] = new Pregunta("¿Que es el pecado?", "Mt16,24");
 preguntas[1] = new Pregunta("¿Que es la latría?", "Ap3,20");
 preguntas[3] = new Pregunta("¿Que es el hiperdulía?", "Mt16,24");
 preguntas[4] = new Pregunta("¿Que es el consubstancación?", "Lc1,1");

  
 * **/

const ViewExamenSerologia = (props) =>(
<View style={styles.content}>
    <Text style={styles.titulo}>Serología</Text>
    <View style={styles.tabla}>
        <View style={styles.filaEncabezado}>
            <Text>VDRL</Text>
            <Text>Factor Rematoideo</Text>
        </View>
        <View style={styles.fila}>
            <Text>{props.vdrl}</Text>
            <Text>{props.factor_rematoideo}</Text>
        </View>
        
    </View>
</View>
);


export default ViewExamenSerologia;
