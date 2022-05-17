import react from 'react';
import Basico from './componentes/Basicos2';
import Proyecto1 from './componentes/Proyecto1';
import Lista_desplegable from './componentes/Lista_desplegable';


const App = () => {
 return(
   <div className="container">
     <div className="row">
        <div className="col">
        <div>
          <Lista_desplegable/>
        </div>
         <Proyecto1/>
        </div>
     </div>
     <div className="row">
      <Basico/>
     </div>
   </div>
 ); 
}

export default App;