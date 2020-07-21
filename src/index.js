import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import {ExamenSangre, ExamenSangreBasic} from './reportes/sangre/ExamenSangre';
import {ExamenOrina, ExamenOrinaBasic} from './reportes/UrineExam/UrineExam';
import {ExamenHeces, ExamenHecesBasic} from './reportes/HecesExam/HecesExam';
import * as serviceWorker from './serviceWorker';

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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
