import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Header from "./Header";
import myData from '../Datos/Datos.json';

const Encuesta = () => {
  const [seccionUno, setSeccionUno] = useState(true);
  const [seccionDos, setSeccionDos] = useState(false);

  const datosPersonalesPreguntas = myData.preguntas.personal;
  const datosImcycPreguntas = myData.preguntas.imcyc;

  const datosPersonales = (e) => {
    e.preventDefault();
    setSeccionUno(!seccionUno);
    setSeccionDos(!seccionDos);
  }

  return(
    <div>
      <Header />
      <Form>
        
        <div style={{display: seccionUno ? 'normal' : 'none'}}>
          <Row>
            <Col>
              <hr/>
                <h1 className="text-left">1) DATOS DE USUARIO:</h1>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col style={{marginTop: '15px'}}>
              {datosPersonalesPreguntas.map(pregunta => (
                <Form.Control key={pregunta.nombre} placeholder={pregunta.nombre} type={pregunta.tipo} style={{marginBottom: '10px'}} required/>
              ))}
            </Col>
          </Row>
          <Button variant="outline-light" className="cambioSeccion" onClick={datosPersonales}>SIGUIENTE</Button>
        </div>

        <div style={{display: seccionDos ? 'normal' : 'none'}}>
          <Row>
            <Col>
              <hr/>
                <h1 className="text-left">2) ATENCIÓN AL CLIENTE:</h1>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col style={{marginTop: '15px'}}>
              {datosImcycPreguntas.map(pregunta => (
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>{pregunta.pregunta}</Form.Label>
                  <Form.Control type="text" placeholder={pregunta.pregunta} />
                </Form.Group>
              ))}
            </Col>
          </Row>
          <Button variant="outline-light" className="cambioSeccion" onClick={datosPersonales}>SIGUIENTE</Button>
        </div>
        
      </Form>
    </div>
  )
};

export default Encuesta;