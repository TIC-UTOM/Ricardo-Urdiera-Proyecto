import React from 'react';
import Basicos2 from './componentes/Basicos2';
import Proyecto1 from './componentes/Proyecto1';
import Utomoscars from './componentes/Utomoscars';
import Lista_desplegable from './componentes/Lista_desplegable';
import Informacion from './componentes/Informacion';
import Contacto from './componentes/Contacto';
import Ejemplozoom from './componentes/Ejemplozoom';
import Tatoo from './componentes/Tatuajes';
import Estadia from './componentes/Estadias';
import Marvel from './componentes/ApiMarvel';
import Terminos from './componentes/Terminos_condiciones';
import Condiciones from './componentes/Terminos_condiciones2';
import animaciones from './componentes/Animaciones_js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
 return(
  <Router>
   <div>
    <Switch>
    <Route path="/" exact>
     <Basicos2/>
    </Route>
    <Route path="/utomoscars">
      <Utomoscars/>
    </Route>
    <Route path="/scam">
      <Proyecto1/>
    </Route>
    <Route path="/micro">
      <Lista_desplegable/>
    </Route>
    <Route path="/info">
      <Informacion/>
    </Route>
    <Route path="/contacto">
      <Contacto/>
    </Route>
    <Route path="/supermercado">
      <Ejemplozoom/>
    </Route>
    <Route path="/tato">
      <Tatoo/>
    </Route>
    <Route path="/Estadia">
      <Estadia/>
    </Route>
    <Route path="/Marvel">
      <Marvel/>
    </Route>
    <Route path="/Terminos">
      <Terminos/>
    </Route>
    <Route path="/Condiciones">
      <Condiciones/>
    </Route>
    </Switch>    
   </div>
   </Router>
 ); 
}

export default App;