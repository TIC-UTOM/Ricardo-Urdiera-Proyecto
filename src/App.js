import React from 'react';
import Basicos2 from './componentes/Basicos2';
import Proyecto1 from './componentes/Proyecto1';
import Utomoscars from './componentes/Utomoscars';
import Lista_desplegable from './componentes/Lista_desplegable';
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
    </Switch>    
   </div>
   </Router>
 ); 
}

export default App;