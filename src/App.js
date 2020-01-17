import React, { useState } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Estructura from './Components/Estructura';
import TipoAcero from './Components/TipoAcero';
import Calcular from './Components/Calcular';
import piso from './images/piso_industrial.jpg';
import capas from './images/capas_compresion.jpg';
import losas from './images/losas_cimentacion.jpg';
import muro from './images/muro_concreto.jpg';
import prefabricados from './images/prefabricados.jpg';
import malla from './images/malla.jpg';
import varilla from './images/varilla.jpg';

import './App.css';

function App() {
  const [ tituloEstructura ] =  useState("¿QUE TIPO DE ESTRUCTURA VA A ELABORAR?");
  const [ valorAcero, setValorAcero ] = useState();
  const [ valorVarilla, setValorVarilla ] = useState();
  const [ valorEmparrillado, setValorEmparrillado ] = useState();
  const [ tipoSeparacion, setTipoSeparacion ] = useState();
  
  const secciones = [
    {
      nombre: 'PISO INDUSTRIAL',
      imagen: piso
    },
    {
      nombre: 'CAPAS DE COMPRESIÓN',
      imagen: capas
    },
    {
      nombre: 'LOSAS DE CIMENTACIÓN',
      imagen: losas
    },
    {
      nombre: 'MUROS DE CONCRETO',
      imagen: muro
    },
    {
      nombre: 'ELEMENTOS PREFABRICADOS',
      imagen: prefabricados
    }
  ]

  const tipoAcero = [
    {
      nombre: 'MALLA ELECTROSOLDADA',
      imagen: malla
    },
    {
      nombre: 'VARILLA',
      imagen: varilla
    }
  ]

  const seleccionarEstructura = (e) => {
    e.preventDefault();
  }

  const tipoMalla= (e) => {
    e.preventDefault();
    setValorAcero(e.target.value)
  }

  const tipoVarilla= (e) => {
    e.preventDefault();
    setValorVarilla(e.target.value)
  }

  const tipoSeparacionValor= (e) => {
    e.preventDefault();
    setValorEmparrillado(e.target.value);
    if( valorVarilla == 3 && e.target.value == 15 ){
      setTipoSeparacion(473)
    } else if( valorVarilla == 3 && e.target.value == 20 ){
      setTipoSeparacion(355)
    } else if( valorVarilla == 3 && e.target.value == 25 ){
      setTipoSeparacion(284)
    } else if( valorVarilla == 3 && e.target.value == 30 ){
      setTipoSeparacion(237)
    } else if( valorVarilla == 3 && e.target.value == 35 ){
      setTipoSeparacion(203)
    } else if( valorVarilla == 4 && e.target.value == 15 ){
      setTipoSeparacion(847)
    } else if( valorVarilla == 4 && e.target.value == 20 ){
      setTipoSeparacion(635)
    } else if( valorVarilla == 4 && e.target.value == 25 ){
      setTipoSeparacion(508)
    } else if( valorVarilla == 4 && e.target.value == 30 ){
      setTipoSeparacion(423)
    } else if( valorVarilla == 4 && e.target.value == 35 ){
      setTipoSeparacion(363)
    } else if( valorVarilla == 5 && e.target.value == 15 ){
      setTipoSeparacion(1320)
    } else if( valorVarilla == 5 && e.target.value == 20 ){
      setTipoSeparacion(990)
    } else if( valorVarilla == 5 && e.target.value == 25 ){
      setTipoSeparacion(792)
    } else if( valorVarilla == 5 && e.target.value == 30 ){
      setTipoSeparacion(660)
    } else if( valorVarilla == 5 && e.target.value == 35 ){
      setTipoSeparacion(566)
    } else if( valorVarilla == 6 && e.target.value == 15 ){
      setTipoSeparacion(1900)
    } else if( valorVarilla == 6 && e.target.value == 20 ){
      setTipoSeparacion(1425)
    } else if( valorVarilla == 6 && e.target.value == 25 ){
      setTipoSeparacion(1140)
    } else if( valorVarilla == 6 && e.target.value == 30 ){
      setTipoSeparacion(950)
    } else if( valorVarilla == 6 && e.target.value == 35 ){
      setTipoSeparacion(814)
    }
  }

  const borrarDatos = () => {
    console.log('refrescar');
    setValorAcero(0);
    setValorVarilla(0);
    setValorEmparrillado(0);
    setTipoSeparacion(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Switch>
              <Route 
                exact 
                path="/" 
                component={(props) => <Home 
                  seleccionarEstructura={seleccionarEstructura}
                  {...props}
                />}
              />
              <Route 
                exact 
                path="/seleccionar-estructura" 
                component={(props) => <Estructura
                  tituloEstructura={tituloEstructura}
                  secciones={secciones}
                  {...props}
                />}
              />
              <Route 
                exact 
                path="/tipo-de-acero/:tipo" 
                component={(props) => <TipoAcero
                  titulo={"¿QUE TIPO DE ACERO DE REFUERZO QUEREMOS SUSTITUIR?"}
                  tipoAcero={tipoAcero}
                  {...props}
                />}
              />
              <Route 
                exact 
                path="/calcular/:acero/:eltipo" 
                component={(props) => <Calcular
                  tipoMalla={tipoMalla}
                  valorAcero={valorAcero}
                  tipoVarilla={tipoVarilla}
                  valorVarilla={valorVarilla}
                  tipoSeparacionValor={tipoSeparacionValor}
                  tipoSeparacion={tipoSeparacion}
                  valorEmparrillado={valorEmparrillado}
                  borrarDatos={borrarDatos}
                  {...props}
                />}
              />
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
