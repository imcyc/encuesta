import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
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
    setSeccionUno(!seccionUno);
    setSeccionDos(!seccionDos);
  }

  let style = {};
  if (!seccionUno) style.display = "none";
  let styleDos = {};
  if (!seccionDos) styleDos.display = "none";

  console.log(seccionDos);

  return(
    <div>
      <Header />
      <Container>
      <Form>

        <div style={style}>
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

        <div style={styleDos}>

          <Row>
            <Col>
              <hr/>
                <h1 className="text-left font-weight-bold">2) ATENCIÓN AL CLIENTE:</h1>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col style={{marginTop: '15px'}}>
              {datosImcycPreguntas.map((pregunta, index) => (
                <>
                  <h3 className="text-left" className="numero">{index + 1}</h3>
                  <h2 className="text-left">{pregunta.pregunta}</h2>
                  <Row>
                    {pregunta.opciones.map((opcion, index) => (
                      <>
                        <Col>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input 
                              type="radio" 
                              id={`customRadioInline-${pregunta.tracker}-${index}`} 
                              name={`customRadioInline-${pregunta.tracker}`} 
                              class="custom-control-input" 
                            />
                            <label 
                              class="custom-control-label" 
                              for={`customRadioInline-${pregunta.tracker}-${index}`}>
                                {opcion}
                            </label>
                          </div>
                        </Col>
                      </>
                    ))}
                  </Row>
                  <hr/>
                </>
                
                //<Form.Group key={pregunta.pregunta}>
                //  <Form.Label>{pregunta.pregunta}</Form.Label>
                //  <Form.Control type="text" placeholder={pregunta.pregunta} />
                //</Form.Group>
              ))}
            </Col>
          </Row>
          <Button variant="outline-light" className="cambioSeccion" onClick={datosPersonales}>SIGUIENTE</Button>
        </div>
        
      </Form>
      </Container>
    </div>
  )
};

export default Encuesta;