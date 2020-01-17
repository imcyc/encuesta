import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/logo-imcyc.svg'

function Titulo(props) {
  return(
    <div>
      <img src={logo} alt="Calculadora de macrofibras de concreto" tile="Calculadora de macrofibras de concreto" style={{width: '250px', marginBottom: '10px'}} />
      <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
      <h1>CALCULADORA DE</h1>
      <h2><Link to="/">MACROFIBRAS DE CONCRETO</Link></h2>
      
      <hr/>
      <h3>{props.tituloEstructura}</h3>
    </div>
  )
}

export default Titulo;