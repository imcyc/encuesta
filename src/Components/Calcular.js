import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import LOGOTexto from '../images/LOGOTexto.svg';
import './Calcular.css';

function Calcular(props) {
  const { eltipo, acero } = props.match.params;

  const [ espesor,     setEspesor ] = useState(0);
  const [ resistencia, setResistencia ] = useState(0);
  const [ resisDos,    setResisDos ] = useState(0);
  const [ resisDosVarilla, setResisDosVarilla ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ dosificacion, setDosificacion ] = useState(0);
  const [ areaVarilla, setAreaVarilla ] = useState(0);

  const calcularDosificacion = (e) => {
    e.preventDefault();
    let resUnoDosificacion = ((Number(props.valorAcero) / Number(espesor) * 100)/100000).toFixed(7);
    let resDosDosificacion = (((Number(resUnoDosificacion) * 491 / (6 * (Math.sqrt(resistencia)))) * 100)).toFixed(2);
    setResisDos(resDosDosificacion);
    setTotal(((props.valorAcero / Number(espesor) * 100)/1000000).toFixed(7));
    if(resDosDosificacion > 0 && resDosDosificacion <= 9){
      setDosificacion('1.0');
    } else if(resDosDosificacion > 9 && resDosDosificacion <= 15){
      setDosificacion('1.6');
    } else if(resDosDosificacion > 15 && resDosDosificacion <= 20){
      setDosificacion('2.0');
    } else if(resDosDosificacion > 20 && resDosDosificacion <= 25){
      setDosificacion('2.5');
    } else if(resDosDosificacion > 25 && resDosDosificacion <= 30){
      setDosificacion('3.0');
    } else if(resDosDosificacion > 30 && resDosDosificacion <= 35){
      setDosificacion('3.5');
    } else if(resDosDosificacion > 35 && resDosDosificacion <= 40){
      setDosificacion('4.0');
    } else if(resDosDosificacion > 40 && resDosDosificacion <= 45){
      setDosificacion('4.5');
    } else if(resDosDosificacion > 45 && resDosDosificacion <= 50){
      setDosificacion('5.0');
    } else if(resDosDosificacion > 50 && resDosDosificacion <= 55){
      setDosificacion('5.5');
    } else if(resDosDosificacion > 55 && resDosDosificacion <= 60){
      setDosificacion('6.0');
    } else if(resDosDosificacion > 60 && resDosDosificacion <= 65){
      setDosificacion('6.5');
    } else if(resDosDosificacion > 65 && resDosDosificacion <= 70){
      setDosificacion('7.0');
    } else if(resDosDosificacion > 70 && resDosDosificacion <= 75){
      setDosificacion('7.5');
    } else if(resDosDosificacion > 75 && resDosDosificacion <= 80){
      setDosificacion('8.0');
    } else if(resDosDosificacion > 80 && resDosDosificacion <= 85){
      setDosificacion('8.5');
    } else if(resDosDosificacion > 85 && resDosDosificacion <= 90){
      setDosificacion('9.0');
    } else if(resDosDosificacion > 90 && resDosDosificacion <= 95){
      setDosificacion('9.5');
    } else if(resDosDosificacion > 95 && resDosDosificacion <= 100){
      setDosificacion('10.0');
    } else if(resDosDosificacion > 100 && resDosDosificacion <= 105){
      setDosificacion('10.5');
    } else if(resDosDosificacion > 105 && resDosDosificacion <= 110){
      setDosificacion('11.0');
    } else if(resDosDosificacion > 110 && resDosDosificacion <= 115){
      setDosificacion('11.5');
    } else if(resDosDosificacion > 115 && resDosDosificacion <= 120){
      setDosificacion('12.0');
    }
    //setTotal(((props.valorAcero / Number(espesor) * 100)/1000000).toFixed(7));
    //setDosificacion(((0.012 * 491 / 6 * Number(resistencia))/10).toFixed(2));
  }

  useEffect(() => {
      setAreaVarilla(props.tipoSeparacion);
      console.log('refrescar');

  });

  const calcularDosificacionVarilla = (e) => {
    e.preventDefault();
    let resUnoVarilla = ((Number(props.tipoSeparacion) / Number(espesor) * 100)/100000).toFixed(7);
    let resDosVarilla = (((Number(resUnoVarilla) * 412 / (6 * (Math.sqrt(resistencia)))) * 100)).toFixed(2);
    setResisDosVarilla(resDosVarilla);
    setTotal(((props.valorAcero / Number(espesor) * 100)/1000000).toFixed(7));
    if(resDosVarilla > 0 && resDosVarilla <= 9){
      setDosificacion('1.0');
    } else if(resDosVarilla > 9 && resDosVarilla <= 15){
      setDosificacion('1.6');
    } else if(resDosVarilla > 15 && resDosVarilla <= 20){
      setDosificacion('2.0');
    } else if(resDosVarilla > 20 && resDosVarilla <= 25){
      setDosificacion('2.5');
    } else if(resDosVarilla > 25 && resDosVarilla <= 30){
      setDosificacion('3.0');
    } else if(resDosVarilla > 30 && resDosVarilla <= 35){
      setDosificacion('3.5');
    } else if(resDosVarilla > 35 && resDosVarilla <= 40){
      setDosificacion('4.0');
    } else if(resDosVarilla > 40 && resDosVarilla <= 45){
      setDosificacion('4.5');
    } else if(resDosVarilla > 45 && resDosVarilla <= 50){
      setDosificacion('5.0');
    } else if(resDosVarilla > 50 && resDosVarilla <= 55){
      setDosificacion('5.5');
    } else if(resDosVarilla > 55 && resDosVarilla <= 60){
      setDosificacion('6.0');
    } else if(resDosVarilla > 60 && resDosVarilla <= 65){
      setDosificacion('6.5');
    } else if(resDosVarilla > 65 && resDosVarilla <= 70){
      setDosificacion('7.0');
    } else if(resDosVarilla > 70 && resDosVarilla <= 75){
      setDosificacion('7.5');
    } else if(resDosVarilla > 75 && resDosVarilla <= 80){
      setDosificacion('8.0');
    } else if(resDosVarilla > 80 && resDosVarilla <= 85){
      setDosificacion('8.5');
    } else if(resDosVarilla > 85 && resDosVarilla <= 90){
      setDosificacion('9.0');
    } else if(resDosVarilla > 90 && resDosVarilla <= 95){
      setDosificacion('9.5');
    } else if(resDosVarilla > 95 && resDosVarilla <= 100){
      setDosificacion('10.0');
    } else if(resDosVarilla > 100 && resDosVarilla <= 105){
      setDosificacion('10.5');
    } else if(resDosVarilla > 105 && resDosVarilla <= 110){
      setDosificacion('11.0');
    } else if(resDosVarilla > 110 && resDosVarilla <= 115){
      setDosificacion('11.5');
    } else if(resDosVarilla > 115 && resDosVarilla <= 120){
      setDosificacion('12.0');
    }
    //setTotal(((props.valorAcero / Number(espesor) * 100)/1000000).toFixed(7));
    //setDosificacion(((0.012 * 491 / 6 * Number(resistencia))/10).toFixed(2));
  }

  
  
  return(
    <div className="wpestructuras">
      <Link to="/seleccionar-estructura" onClick={props.borrarDatos}>
        <img src={LOGOTexto} alt="Logo" className="mb-3 mt-3" style={{width: '90%'}} />
      </Link>
      
      <h2 style={{color: '#dedede'}}>{eltipo}</h2>
      <h2 style={{color: '#ea8823'}}>{acero}</h2>
      {/*
      <Image src={props.location.laimagen} alt="Logo" style={{width: '100px'}} className="mt-3" roundedCircle fluid/>
       */}
      <hr/>
      <div className="calcular">
        <div style={{width:'100%'}}>
          {acero === 'VARILLA' ? 
          <Form>
              {props.valorVarilla ? 
                <div>
                  <h2 style={{fontWeight: '100'}}><i className="lni-check-mark-circle"></i> VARILLA SELECCIONADA:<br/><span style={{color: '#fff', fontSize: '1em', fontWeight: '800'}}># {props.valorVarilla}</span></h2>
                  <hr/>
                </div>
                :
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-3"><b>SELECCIONE TIPO DE VARILLA:</b></Form.Label>
                  <Form.Control as="select" onChange={props.tipoVarilla}>
                    <option>SELECCIONAR</option>
                    <option value="3">VAR #3 [3/8]</option>
                    <option value="4">VAR #4 [1/2]</option>
                    <option value="5">VAR #5 [5/8]</option>
                    <option value="6">VAR #6 [3/4]</option>
                  </Form.Control>
                </Form.Group>
              }
           
          </Form>
          : 
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label className="mb-3"><b>SELECCIONE TIPO DE MALLA ELECTROSOLDADA:</b></Form.Label>
              <Form.Control as="select" onChange={props.tipoMalla}>
                <option>SELECCIONAR</option>
                <option value="61">Malla 6 x 6 - 10/10</option>
                <option value="87">Malla 6 x 6 - 08/08</option>
                <option value="123">Malla 6 x 6 - 06/06</option>
                <option value="169">Malla 6 x 6 - 04/04</option>
                <option value="198">Malla 6 x 6 - 03/03</option>
                <option value="228">Malla 6 x 6 - 02/02</option>
              </Form.Control>
            </Form.Group>
          </Form>
          }
          {props.valorVarilla ?
            <Form>
              {props.tipoSeparacion ?
              <div>
                <h2 style={{fontWeight: '100'}}><i className="lni-check-mark-circle"></i> SEPARACIÓN DEL EMPARRILLADO DE:<br/><span style={{color: '#fff', fontSize: '1em',fontWeight: '800'}}>{props.valorEmparrillado} cm</span></h2>
                <hr/>
              </div>
              :
              <Form.Group controlId="exampleForm.ControlSelect3">
                <Form.Label className="mb-3"><b>SELECCIONE SEPARACIÓN DEL EMPARRILLADO EN CM:</b></Form.Label>
                <Form.Control as="select" onChange={props.tipoSeparacionValor}>
                  <option>SELECCIONAR</option>
                  <option value="15">15 cm</option>
                  <option value="20">20 cm</option>
                  <option value="25">25 cm</option>
                  <option value="30">30 cm</option>
                  <option value="35">35 cm</option>
                </Form.Control>
              </Form.Group>
              }
            </Form>
          :
            ""
          }
        </div>
        <div style={{width:'100%'}}>

          {props.valorAcero ? 
            <div>
              <h2>Área de acero en mm<sup>2</sup>/m:</h2>
              <h5 style={{fontWeight: 'bold',fontSize:'2em'}}>{props.valorAcero}</h5>
              {total === 0 ? 
                <Form onSubmit={calcularDosificacion}>
                  <Form.Group controlId="formBasicEspesor">
                    <Form.Control 
                      name="espesor" 
                      type="number" 
                      step="0.01"
                      placeholder="Espesor del elemento en cm" 
                      onChange={(e) => setEspesor(e.target.value)} 
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicResistencia">
                    <Form.Control 
                      name="resistencia" 
                      type="number" 
                      step="0.01"
                      placeholder="Ingresar f'c en Kg/cm2"
                      onChange={(e) => setResistencia((e.target.value / 10))} 
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    CALCULAR
                  </Button>
                </Form>
                : 
                <div>
                  <div className="resultados">
                    <div>
                      <h3>RESISTENCIA RESIDUAL NMX C-535</h3><h1>{resisDos} %</h1>
                    </div>
                    <div>
                      <h3>DOSIFICACIÓN MACROFIBRAS</h3><h1>{dosificacion} kg/m<sup>3</sup></h1>
                    </div>
                  </div>
                  <div className="resultados">
                    <div align="center">
                    <button className="btn btn-default">
                        <Link to="/seleccionar-estructura" onClick={props.borrarDatos} style={{color:'#000',fontWeight:'400'}}>
                          CALCULAR OTRO ELEMENTO
                        </Link>
                      </button>
                      
                    </div>
                  </div>
                  <div className="resultados">
                    <div>
                      <h2>NOTAS IMPORTANTES</h2>
                      <p>Estas dosificaciones corresponden a MACROFIBRAS validadas por su ingeniería y desempeño ductil por los laboratorios del Instituto Mexicano del Cemento y del Concreto, A.C. en el periodo 2016-<span style={{color:'#ea8823'}}>2020</span>.</p>
                    </div>
                  </div>
                  <div className="resultados">
                    <div>
                      <p>Estás MACROFIBRAS deben cumplir con una eficiencia espacial de la fibra de 0.0395 a 0.0506 en 0.25% del vol. y de 0.3511 a 0.4119 en 0.50% del volúmen del concreto.</p>
                    </div>
                  </div>
                </div>
                
              }
            </div> 
            : 
            ''
          }
          {areaVarilla > 0 ? 
            <div>
              <h2>Área de acero en mm<sup>2</sup>/m:</h2>
              <h5 style={{fontWeight: 'bold',fontSize:'2em'}}>{areaVarilla}</h5>
              <hr/>
              {total === 0 ? 
                <Form onSubmit={calcularDosificacionVarilla}>
                  <Form.Group controlId="formBasicEspesor">
                    <Form.Control 
                      name="espesor" 
                      type="number" 
                      step="0.01"
                      placeholder="Espesor del elemento en cm" 
                      onChange={(e) => setEspesor(e.target.value)} 
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicResistencia">
                    <Form.Control 
                      name="resistencia" 
                      type="number" 
                      step="0.01"
                      placeholder="Ingresar f'c en Kg/cm2"
                      onChange={(e) => setResistencia((e.target.value/10))} 
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    CALCULAR
                  </Button>
                </Form>
                : 
                <div>
                  <div className="resultados">
                    <div>
                      <h3>RESISTENCIA RESIDUAL NMX C-535</h3><h1>{resisDosVarilla} %</h1>
                    </div>
                    <div>
                      <h3>DOSIFICACIÓN MACROFIBRAS</h3><h1>{dosificacion} kg/m<sup>3</sup></h1>
                    </div>
                  </div>
                  <div className="resultados">
                    <div align="center">
                    <button className="btn btn-default">
                        <Link to="/seleccionar-estructura" onClick={props.borrarDatos} style={{color:'#000',fontWeight:'400'}}>
                          CALCULAR OTRO ELEMENTO
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="resultados">
                    <div>
                      <h2>NOTAS IMPORTANTES</h2>
                      <p>Estas dosificaciones corresponden a MACROFIBRAS validadas por su ingeniería y desempeño ductil por los laboratorios del Instituto Mexicano del Cemento y del Concreto, A.C. en el periodo 2016-<span style={{color:'#ea8823'}}>2020</span>.</p>
                    </div>
                  </div>
                  <div className="resultados">
                    <div>
                      <p>Estás MACROFIBRAS deben cumplir con una eficiencia espacial de la fibra de 0.0395 a 0.0506 en 0.25% del vol. y de 0.3511 a 0.4119 en 0.50% del volúmen del concreto.</p>
                    </div>
                  </div>
                </div>
                
              }
            </div> 
            : 
            ''
          }

        </div>
      </div>
      
    </div>
  )
}

export default Calcular;