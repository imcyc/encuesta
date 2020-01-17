import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Encuesta from './Components/Encuesta';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Switch>
              <Route 
                exact 
                path="/" 
                component={(props) => <Home 
                  {...props}
                />}
              />
              <Route 
                exact 
                path="/encuesta" 
                component={(props) => <Encuesta 
                  {...props}
                />}
              />
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
