import React from 'react' ;
import '../App.css';
import '../Ejemplo.css';
import logo from '../imagenes/logo.png';
import tienda from '../imagenes/tienda1.JPG';
import menu from '../imagenes/menu.png';
import utom from '../imagenes/utom.jpg';
import orden from '../imagenes/orden.jpg';
import orden1 from '../imagenes/orden1.jpg';
import utom1 from '../imagenes/utom1.jpg';
import escaner from '../imagenes/escaner.png';
import coche from '../imagenes/coche.jpg';
import coche1 from '../imagenes/coche1.jpeg';
import foto from '../imagenes/foto.jpg';
import marvel from '../imagenes/marvel.jpg';
import nano3 from '../imagenes/nano3.jpg';
import nano10 from '../imagenes/nano10.jpg';
import pelicula from '../imagenes/pelicula.JPG';
import spiderman from '../imagenes/spiderman.jpg';
import supermercado from '../imagenes/super.jpg';
import tatoo1 from '../imagenes/tatoo1.jpg';
import tatoo2 from '../imagenes/tatoo2.jpg';
import nanotect from '../imagenes/nanotec.jpeg';

const Basico2 = () => {
    return (
    <div>    
           <header id="header">
          <img src={logo} alt="" className="logo"/>

        </header>
      
       
        <div class="barra">
            <h2 ><img src={menu} alt="" className="menu2"/></h2>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="contacto">Contacto</a></li>
                <li><a href="info">Información</a></li>
                <li><a href="Terminos">Politicas de Privacidad</a></li>    
            </ul>         
        </div> 

          <div className="">
            <a href="https://www.facebook.com/Ricardo.urdiera/" target="_blank" className="btn-Noinstagram" ><i className="">Facebook</i></a>
          </div>
          <div>
            <a href="https://www.instagram.com/ricardourdiera.318/" target="_blank" className="btn-instagram" ><i className="">Instagram</i></a>
          </div>


	
  <div className="contenedor4" id="animacion">
  <div classsName="Hello">
		<img src={utom1} className='heaven7' id="prueba"/>
		<img src={coche} className="heaven" id="prueba1"/>
    <img src={nanotect} className="heaven3" id="prueba2"/>
    <img src={foto} className="heaven4" id="prueba3"/>
	</div>
  </div>
  

    <div className="contenedor3">
           <a href="scam"><h1 className="tit2" id="tit2">
               Escaner
            </h1></a>
            <img id="imagen2" className="derecha" src="" alt=""/>
        <a href="scam"><h1 className="ver2" id="ver2">Ver proyecto</h1></a>
	</div>
  <div className="contenedor5" id="animacion">
	<img src={coche1} className="heaven2" id="prueba5"/>
	<img src={escaner} className='eye2' id="prueba4"/>
  </div>
    <br /><br />
    <br /><br />
    <br /><br />
    <div className="contenedor3">
           <a href="utomoscars"><h1 className="tit3" id="tit3">
               UTOscars
            </h1></a>
        <a href="utomoscars"><h1 className="ver3" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor6" id="animacion">

  <div classsName="Hello3">

  <img src={pelicula} className='eye3' id="prueba6"/>
    <img src={utom} className="heaven5" id="prueba7"/>
	</div>
  </div>

  <div className="contenedor3">
           <a href="micro"><h1 className="tit4" id="tit4">
             Nanotecnología
            </h1></a>
        <a href="micro"><h1 className="ver4" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor7" id="animacion">
  <div classsName="Hello4">
  <img src={nano3} className='eye4' id="prueba8"/>
		<img src={nano10} className="heaven6" id="prueba9"/>
		
	</div>
  </div>
  
  <div className="contenedor3">
           <a href="supermercado"><h1 className="tit5" id="tit5">
             Supermercado
            </h1></a>
        <a href="supermercado"><h1 className="ver5" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor8" id="animacion">
  <img src={tienda} className='heaven8' id="prueba10"/>
		<img src={supermercado} className="eye5" id="prueba11"/>
  </div>

  <div className="contenedor3">
           <a href="tato"><h1 className="tit6" id="tit6">
             Tatuajes
            </h1></a>
        <a href="tato"><h1 className="ver6" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor9" id="animacion">
  <img src={tatoo1} className='heaven9' id="prueba12"/>
		<img src={tatoo2} className="eye6" id="prueba13"/>
  </div>
  <div className="contenedor3">
           <a href="Estadia"><h1 className="tit7" id="tit7">
           Estadías
            </h1></a>
        <a href="Estadia"><h1 className="ver7" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor10" id="animacion">
  <img src={orden} className='heaven10' id="prueba14"/>
		<img src={orden1} className="eye7" id="prueba15"/>
  </div>

  <div className="contenedor3">
           <a href="Marvel"><h1 className="tit8" id="tit8">
             Marvel_API
            </h1></a>
        <a href="Marvel"><h1 className="ver8" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor11" id="animacion">
  <img src={marvel } className='heaven11' id="prueba16"/>
		<img src={spiderman} className="eye8" id="prueba17"/>
  </div>

        <a className="Paginacion" href="Marvel">Anterior</a>
        <a className="paginacion" href="scam">Siguiente</a>
    </div>

    );
}
export default Basico2 ;

