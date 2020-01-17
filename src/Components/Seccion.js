import React from 'react';
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';

function Seccion(props){
  return(
    <Link to={`${props.enlace}/${props.nombre}`}>
      <div className="secciones">
        <Image src={props.imagen} alt="Logo" roundedCircle fluid/>
        <h2>{props.nombre}</h2>
      </div>
    </Link>
  )
}

export default Seccion;