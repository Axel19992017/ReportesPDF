import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import {ExamenSangre, ExamenSangreBasic} from './reportes/sangre/ExamenSangre';
import {ExamenOrina, ExamenOrinaBasic} from './reportes/UrineExam/UrineExam';
import {ExamenHeces, ExamenHecesBasic} from './reportes/HecesExam/HecesExam';
import * as serviceWorker from './serviceWorker';
const ExamenSangreV =()=> (
    <PDFViewer width={'100%'} height={'100%'}>
        <ExamenSangre/>
    </PDFViewer>
)
const App = () =>(
  <div>
    <div className="enlace">
    <PDFDownloadLink document={<ExamenSangre />} fileName="examenSangre.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar examen de Sangre')}
    </PDFDownloadLink>
    </div>
    <div className="enlace">
    <PDFDownloadLink document={<ExamenSangreBasic />} fileName="examenSangreOnly.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar examen de Sangre Básico')}
    </PDFDownloadLink>
    </div>
    <div className="enlace">
    <PDFDownloadLink document={<ExamenOrina />} fileName="examenOrina.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar examen de Orina')}
    </PDFDownloadLink>
    </div>
    <div className="enlace">
    <PDFDownloadLink document={<ExamenOrinaBasic />} fileName="examenOrinaOnly.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar examen de Orina Básico')}
    </PDFDownloadLink>
    </div>
    <div className="enlace">
    <PDFDownloadLink document={<ExamenHeces />} fileName="examenHeces.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar examen de Heces')}
    </PDFDownloadLink>
    </div>
    <div className="enlace">
    <PDFDownloadLink document={<ExamenHecesBasic />} fileName="examenHecesOnly.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar examen de Heces Básico')}
    </PDFDownloadLink>
    </div>

  </div>
  
)
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);
const AppTest = () => (
    <PDFViewer width={'100%'} height={'100%'}>
        <MyDocument />
    </PDFViewer>
);
ReactDOM.render(
  <React.StrictMode>
    <ExamenSangreV />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
