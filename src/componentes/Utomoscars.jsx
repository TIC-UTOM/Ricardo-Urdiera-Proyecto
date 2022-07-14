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
                <li><a href="Terminos">Politicas de Privacidad</a></li>    
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
            <h1 className="escaner">UTOscars</h1>
            <p className="texto">El proyecto de los UTOscars fue realizado en el 8vo cuatrimestre, 
            este se realizó para la materia de inglés, en el cual consistía el editar, realizar y doblar
             (En inglés) una película, todo se esto acompañado de lo que es un poster de la película, el 
             cual también fue realizado por el equipo de trabajo, todo esto fue realizado en el tiempo de 
             un mes, ya que la edición de la película y el doblaje fue lo más difícil. Pero el trabajo 
             rindió los frutos al ganar a mejor edición y mejor guión.</p>
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
