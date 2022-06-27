import React from 'react';
import '../App.css';
import logo from '../imagenes/logo.png';
import nano from '../imagenes/n1.jpg';
import { useEffect, useRef, useState } from 'react';

/*Codigo de js inicio*/





/*Aqui termina */


const Informacion = () => {




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
    
    
        <section className="parallax" id='sesion1nano'>
            <div className="banner_description">
                <h1 className="escaner">Nanotecologia y Microchip</h1>
                <p className="texto">El proyecto de nanotecologia y Microchip fue hecho en el 8vo cuatrimestre
                en el cual se realizo una pagina web, la cual era de Información
                acerce del tema que se nos fue asignado</p>
                <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
                <a  className="regreso" href="">Regresar</a>
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
            <a className="Paginacion" href="">Anterior</a>
            <a className="paginacion" href="">Siguiente</a>
        </div>    
    );
}
export default Informacion;



