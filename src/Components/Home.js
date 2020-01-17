import React from 'react';
import calculadora2020 from '../images/calculadora2020.png';
import {Link} from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Link to="/seleccionar-estructura">
      <img src={calculadora2020} alt="Logo" style={{width: '100%'}} />
      </Link>
    </div>
  )
} 

export default Home;