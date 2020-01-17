import React from 'react';
import LOGOTexto from '../images/LOGOTexto.svg';
import Seccion from './Seccion';
import './Estructura.css';

function Estructura(props) {
  return(
    <div className="wpestructuras">
      <hr/>
      <img src={LOGOTexto} alt="Logo" style={{width: '90%'}} />
      <div className="estructuras">
        {props.secciones.map((seccione, index) => (
          <Seccion key={index} nombre={seccione.nombre} imagen={seccione.imagen} enlace={'/tipo-de-acero'} />
        ))}
      </div>
    </div>
  );
}

export default Estructura;