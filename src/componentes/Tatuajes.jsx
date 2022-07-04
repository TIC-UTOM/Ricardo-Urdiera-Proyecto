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
            </ul>         
        </div> 
    
              <div className="">
                <a href="https://www.facebook.com/Ricardo.urdiera/" className="btn-Noinstagram" ><i className="">Facebook</i></a>
              </div>
              <div>
                <a href="https://www.instagram.com/ricardourdiera.318/" className="btn-instagram" ><i className="">Instagram</i></a>
              </div>
    
    
        <section className="parallax" id='sesion1tato'>
            <div className="banner_description">
                <h1 className="escaner">Tatuajes</h1>
                <p className="texto">
                El proyecto de tatuajes se tenia planteado que se hiciera con realidad aumentada,
                esta al ser una app para dispositivos mobiles, se colocaba la camara y enfocaria 
                la parte que quisiera que tiviera el tatuaje, por medio de una carita dibujada, 
                el proyecto no se llevo acabo, pero no esta descartado aun.  
                </p>
                <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
                <a  className="regreso" href="/">Regresar</a>
            </div>
        </section>
        <section className="parallax" id='sesion2tato'>
            <div className="banner_description">
            </div>
        </section>
        <section className="parallax" id='sesion3tato'>
            <div className="banner_description">
            </div>
        </section>
            <a className="Paginacion" href="supermercado">Anterior</a>
            <a className="paginacion" href="/">Siguiente</a>
        </div>    
    );
}
export default Informacion;



