import React from 'react';
import '../App.css';
import '../Ejemplo.css'
import logo from '../imagenes/logo.png';
import menu from '../imagenes/menu.png';


  const Supermercado = () => {
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


    <section className="parallax" id='sesion1super'>
        <div className="banner_description">
            <h1 className="escaner">Base Datos Supermercado</h1>
            <p className="texto">El proyecto de base de datos fue un trabajo el cual consistía en un software
             de escritorio, este lo que hacía era registrar al personal, registrar los productos, marcas, 
             el realizar tickets de compra, guardar las compras, cuánto dinero se tiene, los recortes, etc.
            En lo personal es uno de los proyectos más completos que he hecho, al igual que uno de los que 
            más me han gustado. 

            </p>
            <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
            <a href="/" className="texto" id="regresar">Regresar</a>
        </div>
    </section>
    <section className="parallax" id='sesion2super'>
        <div className="banner_description">
        </div>
    </section>
    <section className="parallax" id='sesion3super'>
        <div className="banner_description">
        </div>
    </section>
        <a className="Paginacion" href="micro">Anterior</a>
        <a className="paginacion" href="tato">Siguiente</a>
    </div>      
    );
}
export default Supermercado;
