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
    
    
        <section className="parallax" id='sesion1tato'>
            <div className="banner_description">
                <h1 className="escaner">Tatuajes</h1>
                <p className="texto">
                El proyecto de los tatuajes, solo se quedó en el prototipo, pero eso no indica que no se pueda
                 realizar, ya que toda la estructura está realizada, faltaría lo que es la parte de programación,
                  la función del proyecto es que usando realidad aumentada”, este nos muestre en la parte que 
                  enfoquemos con una pequeña cara dibujada con una pluma  nos coloque lo que es el diseño de
                   tatuaje que hemos elegido y de esta forma determinar si nos gusta dicho tatuaje, en la 
                   parte de los tatuajes son una base de datos, en la que los usuarios suben sus trabajos 
                   y de esta forma puedan ser conocidos y usados.   
                </p>
                <p className="texto" >Autor del proyecto: Urdiera Ricardo</p>
                <a href="/" className="texto" id="regresar">Regresar</a>
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
            <a className="paginacion" href="Estadia">Siguiente</a>
        </div>    
    );
}
export default Informacion;



