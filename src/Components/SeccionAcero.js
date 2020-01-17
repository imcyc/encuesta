import React from 'react';
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';

function SeccionAcero(props){
  return(
    <Link to={{
      pathname: `${props.enlace}/${props.nombre}/${props.eltipo}`,
      laimagen: props.imagen
      }}>
      <div className="secciones">
        <Image src={props.imagen} alt="Logo" roundedCircle fluid/>
        <h2>{props.nombre}</h2>
      </div>
    </Link>
  )
}

export default SeccionAcero;