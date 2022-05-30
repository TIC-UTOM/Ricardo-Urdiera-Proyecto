import React from 'react';
import Basicos2 from './componentes/Basicos2';
import Proyecto1 from './componentes/Proyecto1';
import Lista_desplegable from './componentes/Lista_desplegable';
import './App.css';

const App = () => {
 return(
   <div class="">
        <div className="">
         <Proyecto1/>
        </div>
        <div>
        <Basicos2/>
      </div>
      <div>
        <Lista_desplegable/>
      </div>
      
      
   </div>
 ); 
}

export default App;