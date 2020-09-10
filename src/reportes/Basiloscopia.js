import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';

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


const ViewExamenBasiloscopia = (props) =>(
<View style={styles.content}>
    <Text style={styles.titulo}>Basiloscopía</Text>
    <View style={styles.tabla}>
        <View style={styles.filaEncabezado}>
            <Text>BAAR</Text>
            
        </View>
        <View style={styles.fila}>
            <Text>{props.baar}</Text>
            
        </View>
        
    </View>
</View>
);


export default ViewExamenBasiloscopia;
