import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import clienteObject from './cliente.json'
import robotoFont from './font/RobotoMono-VariableFont_wght.ttf'
import latoFont from './font/Lato-Regular.ttf'
//https://styled-components.com/docs/basics#getting-started
import './Template.css';

Font.register({family: 'Roboto', src :robotoFont})
Font.register({family: 'Lato', src :latoFont})
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
    },
    footer:{
      position: 'absolute',
      borderTop	: '5px',
      borderTopColor: '#5BBBCC',
      backgroundColor: '#002F49',
      top: '800px',
      height: '40px',
      width: '100%'
    },
    footerText:{
      color: 'white',
      fontFamily: 'Lato',
      fontSize: '10px',
      textAlign: 'center'
    },
    firma:{
      flexDirection: 'column',
      justifyContent:'center'
    },
    firmaTexto:{
      marginHorizontal: '200px',
      fontFamily: 'Lato',
      fontSize: '15px',
      color: '#283342',
      borderTop: '2px',
      borderColor: '#283342',
      textAlign: 'center'
    },
    firmaTextoSmall:{
      color: '#283342',
      fontFamily: 'Lato',
      fontSize: '10px',
      textAlign: 'center'
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
        <View style={styles.firma}>
        <Text style={styles.firmaTexto}>Lic. Ligia Orozco Logo</Text>
        <Text style={styles.firmaTextoSmall}>Bióloga - Microbiologa</Text>
        <Text style={styles.firmaTextoSmall}>Cod. MINSA: 30991</Text>
        </View>
        <View style={styles.footer}>
        <Text style={styles.footerText}>Dirección: Villa Fontana Sur, de los semáforos del Club Terraza 2c. al este y 2c. al sur. Casa esquinera mano derecha</Text>
      <Text style={styles.footerText}>Telefóno: 2227-0727 / 2270-6273 / 7825-8881 / 8887-1982 Correo Electrónico: labclinico.finlay@gmail.com</Text>
        </View>
        </Page>
    
  );
  

export default DatosGenerales;