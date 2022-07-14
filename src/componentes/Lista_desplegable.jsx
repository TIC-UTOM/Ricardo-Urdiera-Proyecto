import React from 'react';
import '../App.css';
import '../Ejemplo.css'
import logo from '../imagenes/logo.png';
import menu from '../imagenes/menu.png'

/*Codigo de js inicio*/

/*Aqui termina */


const Informacion = () => {

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
                <a href="https://www.facebook.com/Ricardo.urdiera/" className="btn-Noinstagram" ><i className="">Facebook</i></a>
              </div>
              <div>
                <a href="https://www.instagram.com/ricardourdiera.318/" className="btn-instagram" ><i className="">Instagram</i></a>
              </div>
    
    
        <section className="parallax" id='sesion1nano'>
            <div className="banner_description">
                <h1 className="escaner">Nanotecologia y Microchip</h1>
                <p className="texto">El proyecto que lleva como nombre, nanotecnología y microchip, fue el realizar una
                 página web profesional, el cual consistía en aplicar las tecnologías que hemos visto durante la carrera, 
                 login funcional, pagina responsiva, contenido en toda la página,  por otro lado, la página contaba con
                  diferentes cosas, todo esto se realizó en un lapso de 3 meses, el cual fue el tiempo necesario para la 
                  página que se entregó. </p>
                <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
                <a  className="regreso" href="/">Regresar</a>
            </div>
        </section>
        <section className="parallax" id='sesion2nano'>
            <div className="banner_description">
            </div>
        </section>
        <section className="parallax" id='sesion3nano'>
            <div className="banner_description">
            </div>
        </section>
            <a className="Paginacion" href="utomoscars">Anterior</a>
            <a className="paginacion" href="supermercado">Siguiente</a>
        </div>    
    );
}
export default Informacion;



