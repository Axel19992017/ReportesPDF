import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';


import './App.css';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'col',
      backgroundColor: 'white'
    },
    encabezado: {
      marginTop: 0,
      padding: 0,
      backgroundColor: '#67b7be',
      opacity: '0.5'
    },
    imagenEncabezado: {
        width: '70%',
        height:'auto',
        opacity:'1'
    },
    imagenFondo:{
        background: "url('https://i.ibb.co/1QfZkMh/marca-Agua.jpg')"
    }
  });
    //https://i.ibb.co/8sMykMq/IMG-20200302-WA0027.jpg
//https://i.ibb.co/j48kMht/MEMBRETE-07.png
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.encabezado}>
        <Image style={styles.imagenEncabezado} src="https://i.ibb.co/rvw9WtJ/encabezado.jpg"/>
        </View>
        <View style={styles.imagenFondo}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eos reiciendis hic magni laboriosam, eum, illo nam nulla sint neque cumque ipsam facilis exercitationem non rem consectetur porro earum optio.</Text>
        </View>
      </Page>
    </Document>
  );
  


function App() {
var alto = window.innerHeight;
var ancho = window.innerWidth;
  return (
    <div className="App">
        <PDFViewer width={ancho+'px'} height={alto+'px'}>
            <MyDocument />
        </PDFViewer>
      
    </div>
  );
}

export default App;