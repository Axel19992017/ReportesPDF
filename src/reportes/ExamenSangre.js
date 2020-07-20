import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import exSangreObject from './examenSangre.json'
import exSangreHombreEstandar from './SangreHombreEstandar.json'
import robotoFont from './font/RobotoMono-VariableFont_wght.ttf'
import DatosGenerales from './App'
//https://styled-components.com/docs/basics#getting-started
import './App.css';

Font.register({family: 'Roboto', src :robotoFont})
const styles = StyleSheet.create({
   
  });
  
  const ViewExamenSangre = () =>(
	<View>
		<Text>Este es el exmamen de Sangre</Text>

	</View>
  );

function examenSangre(){
   return( 
   <PDFViewer width={'100%'} height={'100%'}>
        <DatosGenerales>
			<ViewExamenSangre/>
        </DatosGenerales>
    </PDFViewer>
    )
}

export default examenSangre;
