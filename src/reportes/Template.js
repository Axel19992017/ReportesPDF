import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import clienteObject from './cliente.json'
import robotoFont from './font/RobotoMono-VariableFont_wght.ttf'
//https://styled-components.com/docs/basics#getting-started
import './Template.css';

Font.register({family: 'Roboto', src :robotoFont})
const styles = StyleSheet.create({
    page: {
      flexDirection: 'col',
      fontFamily: 'Roboto',
      fontSize:'12px',
      color: '#283342'
    },
    encabezado: {
      marginTop: 0,
      padding: 0
    },
    imagenEncabezado: {
        height:'100px',
        width:'100%',
        opacity:'1'
    },
    contenido: {
      margin: "25px",
      padding: "5px"
    },
    datos:{
      flexDirection: 'row',
      margin: 5,
      padding: 5,
      justifyContent: 'space-evenly'
    },
    titulo:{
      fontSize: '16px',
      borderBottom: '2px'
    }
  });

  const DatosGenerales = ({children}) => (
    
      <Page size="A4" style={styles.page}>
        <View style={styles.encabezado}>
        <Image style={styles.imagenEncabezado} src="https://i.ibb.co/YQNWhL8/header.jpg"/>
        </View>
        <View style={styles.contenido}>
        <Text style={styles.titulo}>Datos Generales</Text>
        <View style={styles.datos}>
          <View style={styles.datosColumna}>
            <Text>Nombre: {clienteObject.first_name} {clienteObject.second_name} </Text>
            <Text>Edad: {clienteObject.age} años</Text>
            <Text>Fecha de reporte: {new Date().getDate() + "/" + (new Date().getMonth()+1) + "/" + new Date().getFullYear()}</Text>
          </View>
          <View style={styles.datosColumna}>
          <Text>Apellido: {clienteObject.surname} {clienteObject.second_surname} </Text>
          
          <Text>Expediente: No. {clienteObject.id}</Text>
          </View>
        </View>
		{children}
        </View>
        </Page>
    
  );
  

export default DatosGenerales;