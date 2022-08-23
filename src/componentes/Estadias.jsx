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
                <a href="https://www.facebook.com/Ricardo.urdiera/" target="_blank" className="btn-Noinstagram" ><i className="">Facebook</i></a>
              </div>
              <div>
                <a href="https://www.instagram.com/ricardourdiera.318/" target="_blank" className="btn-instagram" ><i className="">Instagram</i></a>
              </div>
    
    
        <section className="parallax" id='sesion1Estadia'>
            <div className="banner_description">
                <h1 className="escaner">Diseño de publicidad para Order Express</h1>
                <p className="texto">
                El proyecto de publicidad para order express fue hecho para estadías o prácticas profesionales,
                 el cual el propósito era realizar diferentes diseños para la empresa de Order express, la cual
                  es un corporativo de paquetería, cambio de dinero, etc. 
                Este proyecto fue uno de los más profesionales ya que fue entregado para una empresa real,
                 el material que se entregó fueron banners, carteles, folletos, videos, publicidad de piso, 
                 saber cómo son los cheques falsos y rediseñar material.
                Todo esto fue diseño en software de edición como lo son Photoshop, adobe Illustrator y editores
                 de video, el proyecto se realizó en un lapso de 4 meses o un total de 500 horas.  

                </p>
                <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
                <a href="/" className="texto" id="regresar">Regresar</a>
            </div>
        </section>
        <section className="parallax" id='sesion2Estadia'>
            <div className="banner_description">
            </div>
        </section>
        <section className="parallax" id='sesion3Estadia'>
            <div className="banner_description">
            </div>
        </section>
            <a className="Paginacion" href="tato">Anterior</a>
            <a className="paginacion" href="Marvel">Siguiente</a>
        </div>    
    );
}
export default Informacion;



