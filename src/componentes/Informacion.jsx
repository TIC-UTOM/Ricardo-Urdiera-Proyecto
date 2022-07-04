import React from 'react' ;
import '../App.css';
import '../Ejemplo.css'
import logo from '../imagenes/logo.png';
import menu from '../imagenes/menu.png';

/*js de app*/  
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
          <div className="banner_description_info">
            <p className="infor" id="info">
          Hola soy Ricardo Urdiera , pero 
          llámame Ricardo. Estudio en la UTOM
          en la carrera de Gestión y Desarrollo de software,
           aportando nuevas tecnologías para la sociedad, 
           al igual que diseños en animación.</p>
        </div>
        </div>
        )
    }
    export default Informacion ;


    