import React from 'react';
import { ReactComponent as Logo } from '../images/logo-imcyc.svg';

const Header = () => (
  <div>
    <Logo style={{width: '200px',marginBottom: '20px'}} />
    <h1>INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
    <h2>FORMATO DE EVALUACIÓN DE SERVICIOS IMCYC</h2>
  </div>
)

export default Header;