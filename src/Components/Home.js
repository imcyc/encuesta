import React from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";
import './Home.css';

function Home(props) {
  return (
    <div className="home">
      <Header />
      <h3>BIENVENIDO!</h3>
      <Link to="/encuesta">
          INICIAR ENCUESTA
      </Link>
    </div>
  )
} 

export default Home;