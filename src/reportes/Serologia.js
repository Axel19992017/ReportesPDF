import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import robotoFont from './font/RobotoMono-VariableFont_wght.ttf'

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
