import React, { useState } from 'react';
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

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log('mandar datos');
    const r1 = e.target.nombre_completo.value;
    console.log(r1);
    const ro1 = e.target.customRadioInline1.value;
    console.log(ro1);
  }

  return(
    <div>
      <Header />
      <Container className="mb-5">
      <Form onSubmit={enviarDatos}>
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
              {datosPersonalesPreguntas.map((pregunta, index) => (
                <Form.Control 
                  key={index} 
                  name={pregunta.valor} 
                  placeholder={pregunta.nombre} 
                  type={pregunta.tipo} 
                  style={{marginBottom: '10px'}}
                />
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
              {datosImcycPreguntas.map((pregunta, i) => (
                <div key={i} style={{marginBottom: '40px'}}>
                  <h3 className="text-left" className="numero">{i + 1}</h3>
                  <h2 className="text-left preguntame">{pregunta.pregunta}</h2>
                  <Row>
                    {pregunta.opciones ? "si hay" : "no hay"}
                    {pregunta.opciones.map((opcion, index) => (
                        <Col key={index}>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input 
                              type="radio" 
                              id={`customRadioInline${pregunta.tracker}-${index}`} 
                              name={`customRadioInline${pregunta.tracker}`} 
                              className="custom-control-input" 
                              value={opcion}
                            />
                            <label 
                              className="custom-control-label" 
                              htmlFor={`customRadioInline${pregunta.tracker}-${index}`}>
                                {opcion}
                            </label>
                          </div>
                        </Col>
                    ))}
                  </Row>
                  <hr/>
                </div>
              ))}
            </Col>
          </Row>
          <Button type='submit' variant="outline-light" className="cambioSeccion">ENVIAR ENCUESTA</Button>
        </div>
      </Form>
      </Container>
    </div>
  )
};

export default Encuesta;