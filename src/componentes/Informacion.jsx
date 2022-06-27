import React from 'react' ;
import '../App.css';
import logo from '../imagenes/logo.png';
import nano from '../imagenes/n1.jpg';

/*js de app*/  
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
          <div className="banner_description_info">
            <p className="infor">
          Hola soy Ricardo Urdiera , pero 
          llámame Ricardo. Estudio en la UTOM
          en la carrera de Gestion y Desarrollo de software,
           aportando nuevas tecnologías para la sociedad, 
           al igual que diseños en animación.</p>
        </div>
        </div>
        )
    }
    export default Informacion ;