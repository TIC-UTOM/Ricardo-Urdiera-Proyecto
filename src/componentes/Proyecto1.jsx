import React from 'react';
import '../App.css';
import '../Componente.css';
import logo from '../imagenes/logo.png';
import nano from '../imagenes/n1.jpg';


const Projecto1 = () => {
    return (
    <div>
    <header id="header">
          <img src={logo} alt="" className="logo"/>

          <ul className="main-menu">
            <li className="menu-item"></li>
            <li className="menu-item"></li>
            <li className="menu-item"></li>
            <li className="menu-item"></li>
            <li className="">
            <div className="container">
              <div className="btn-menu">
                <label for="btn-menu">☰</label>
              </div>  
              </div>
            </li>
          </ul>
        </header>
      
      <input type="checkbox" id="btn-menu"/>
      <div className="container-menu">
	      <div className="cont-menu">
          <nav>
              <a href="/">Inicio</a>
              <a href="info">Información</a>
              <a href="contacto">Contacto</a>
            </nav>
            <label for="btn-menu">✖️</label>
          </div>
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
            <a  className="regreso" href="">Regresar</a>
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
        <a className="Paginacion" href="">Anterior</a>
        <a className="paginacion" href="">Siguiente</a>
    </div>
    );

    
}

export default Projecto1;