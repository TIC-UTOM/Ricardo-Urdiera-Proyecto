import React from 'react';
import '../App.css';
import '../Componente.css';
import '../Ejemplo.css';
import logo from '../imagenes/logo.png';
import menu from '../imagenes/menu.png'


const Projecto1 = () => {
    return (
    <div>
    <header id="header">
          <img src={logo} alt="" className="logo"/>

        </header>
      
       
        <div class="barra">
            <h2 ><img src={menu} alt="" /></h2>
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


    <section className="parallax" id='sesion1'>
        <div className="banner_description">
            <h1 className="escaner">Proyecto de Scam-Car</h1>
            <p className="texto">El proyecto de escaner para carros, 
                fue un Proyecto de integradora, donde 
                se el objetivo es realizar una app que
                 por medio de un OBD2, este realizara un 
                 escaneo de un carro</p>
            <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
            <a  className="regreso" href="/">Regresar</a>
        </div>
    </section>
    <section className="parallax" id='sesion2'>
        <div className="banner_description">
        </div>
    </section>
    <section className="parallax" id='sesion3'>
        <div className="banner_description">
        </div>
    </section>
        <a className="Paginacion" href="tato">Anterior</a>
        <a className="paginacion" href="utomoscars">Siguiente</a>
    </div>
    );

    
}

export default Projecto1;