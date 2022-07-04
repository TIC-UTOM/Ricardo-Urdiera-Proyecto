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
            </ul>         
        </div> 

          <div className="">
            <a href="https://www.facebook.com/Ricardo.urdiera/" className="btn-Noinstagram" ><i className="">Facebook</i></a>
          </div>
          <div>
            <a href="https://www.instagram.com/ricardourdiera.318/" className="btn-instagram" ><i className="">Instagram</i></a>
          </div>


    <section className="parallax" id='sesion1super'>
        <div className="banner_description">
            <h1 className="escaner">BD Supermercado</h1>
            <p className="texto">El proyecto de la base de datos para un supermercado, fue un proyecto el cual
            fue desarrollar un software que permitiera registrar, actualizar y borrar productos de la base de 
            base de datos, al igual que esta entrega ticket, realiza la cuenta y te dice el total de cambio 
            por entregar, de igual forma se hace un respaldo cada mes aproximandamente. 
            </p>
            <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
            <a  className="regreso" href="/">Regresar</a>
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
