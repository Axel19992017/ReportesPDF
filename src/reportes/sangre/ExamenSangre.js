import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import exSangreObject from './examenSangre.json'
import exSangreHombreEstandar from './SangreHombreEstandar.json'
import robotoFont from '../font/RobotoMono-VariableFont_wght.ttf'
import DatosGenerales from '../Template'
import Serologia from '../Serologia'
import Bactereologia from '../Bactereologia'
import Basiloscopia from '../Basiloscopia'
//https://styled-components.com/docs/basics#getting-started

Font.register({family: 'Roboto', src :robotoFont})
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
        justifyContent:'space-between',
        borderBottom: '1px'
    },
    fila: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    content:{
        margin: 5,
        padding: 5
    }
});

const datosExamen = Object.entries(exSangreObject);

const ListaSangre = datosExamen.map((fila) =>
<View style={styles.fila}>
    <Text>{fila[0].padEnd(15,' ')}</Text>
    <Text>{fila[1]}</Text>
    <Text>100</Text>
</View>
);

const ViewExamenSangre = () =>(
<View style={styles.content}>
    <Text style={styles.titulo}>Hematología</Text>
    <View style={styles.tabla}>
        <View style={styles.filaEncabezado}>
            <Text>Examen</Text>
            <Text>Resultados</Text>
            <Text>Valores de referencia</Text>
        </View>
        {ListaSangre}
    </View>
</View>
);

function examenSangre(){
   return( 
   <PDFViewer width={'100%'} height={'100%'}>
        <DatosGenerales>
			<ViewExamenSangre/>
            <Serologia vdrl="undefined gg" factor_rematoideo="me too gg"/>
            <Bactereologia exudado="nani?" coprocultivo="help me" hisopado_manos="test"/>
            <Basiloscopia baar="te quedan 3 semanas de vida"/>
        </DatosGenerales>
    </PDFViewer>
    )
}

export default examenSangre;
