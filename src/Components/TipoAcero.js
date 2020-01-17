import React from 'react';
import SeccionAcero from './SeccionAcero';
import LOGOTexto from '../images/LOGOTexto.svg';

function TipoAcero(props) {
  return(
    <div className="wpestructuras">
      <img src={LOGOTexto} alt="Logo" className="mb-3 mt-3" style={{width: '90%'}} />
      <h2 style={{color: '#ea8823'}}>{props.match.params.tipo}</h2>
      <hr/>
      <div className="estructuras">
        {props.tipoAcero.map((acero, index) => (
          <SeccionAcero 
            key={index} 
            nombre={acero.nombre} 
            imagen={acero.imagen} 
            enlace={'/calcular'} 
            eltipo={props.match.params.tipo} 
          />
        ))}
      </div>
    </div>
  );
}

export default TipoAcero;