import React from 'react';
import {Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import exSangreObject from './examenSangre.json'
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

const datosExamen = Object.entries(exSangreObject);

const ListaSangre = datosExamen.map((fila) =>
<View style={styles.fila}>
    <Text>{fila[0].padEnd(15,' ')}</Text>
    <Text>{fila[1]}</Text>
</View>
);

const ViewExamenSangre = () =>(
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

function ExamenSangre(){
   return( 
   
   <Document title="Examen de Sangre" author="FinLays">
        <DatosGenerales>
			<ViewExamenSangre/>
            <Serologia vdrl="undefined gg" factor_rematoideo="me too gg"/>
            <Bactereologia exudado="nani?" coprocultivo="help me" hisopado_manos="test"/>
            <Basiloscopia baar="te quedan 3 semanas de vida"/>
        </DatosGenerales>
    </Document>
    
    )
}
function ExamenSangreBasic(){
    return( 
    
    <Document title="Examen de Sangre" author="FinLays">
         <DatosGenerales>
             <ViewExamenSangre/>
         </DatosGenerales>
     </Document>
     
     )
 }

export {ExamenSangre, ExamenSangreBasic};
