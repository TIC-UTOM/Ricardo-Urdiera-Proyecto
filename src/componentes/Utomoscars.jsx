import React from 'react';
import '../App.css';
import '../Ejemplo.css'
import logo from '../imagenes/logo.png';
import menu from '../imagenes/menu.png';



  const Utomoscars = () => {
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


    <section className="parallax" id='sesion1utom'>
        <div className="banner_description">
            <h1 className="escaner">UTOMoscars</h1>
            <p className="texto">El proyecto de los Utomoscars era doblar una pelicula en el idioma inglés
            en la cual yo estuve a cargo de la parte de edición, guion y audio, es decir, de la parte
            de multimedia, el cual para poder terminar dicho proyecto fue de 3 semenas, en la cual se edito todos los
            días</p>
            <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
            <a  className="regreso" href="/">Regresar</a>
        </div>
    </section>
    <section className="parallax" id='sesion2utom'>
        <div className="banner_description">
        </div>
    </section>
    <section className="parallax" id='sesion3utom'>
        <div className="banner_description">
        </div>
    </section>
        <a className="Paginacion" href="scam">Anterior</a>
        <a className="paginacion" href="micro">Siguiente</a>
    </div>      
    );
}
export default Utomoscars;
