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
    
    
        <section className="parallax" id='sesion1Estadia'>
            <div className="banner_description">
                <h1 className="escaner">Proyecto de Estadias de TSU</h1>
                <p className="texto">
                    Este proyecto fue realizado en estadias universitarias para la titulación de TSU
                    el cual fue realizar diseños de publicidad para lo que es orden express, como lo son Banners publicitarios
                    , publicidad de piso, videos, carteles y presentaciones para pantallas
                </p>
                <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
                <a  className="regreso" href="/">Regresar</a>
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
            <a className="Paginacion" href="utomoscars">Anterior</a>
            <a className="paginacion" href="supermercado">Siguiente</a>
        </div>    
    );
}
export default Informacion;



