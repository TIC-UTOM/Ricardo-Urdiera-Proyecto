import React from 'react';
import '../App.css';
import logo from '../imagenes/logo.png';

const Projecto1 = () => {
    return (
    <div class="">
        <header id="header">
          <img src={logo} alt="" class="logo"/>

          <ul class="main-menu">
            <li class="menu-item"></li>
            <li class="menu-item"></li>
            <li class="menu-item"></li>
            <li class="menu-item"></li>
            <li class="">
            <div class="container">
              <div class="btn-menu">
                <label for="btn-menu">☰</label>
              </div>  
              </div>
            </li>
          </ul>
        </header>
      
      <input type="checkbox" id="btn-menu"/>
      <div class="container-menu">
	      <div class="cont-menu">
          <nav>
              <a href="#">Inicio</a>
              <a href="#">Información</a>
              <a href="#">Contacto</a>
            </nav>
            <label for="btn-menu">✖️</label>
          </div>
        </div>

      <div>
        <a href="https://www.instagram.com/ricardourdiera.318/" class="btn-instagram" >Instagram</a>
      </div>
    </div>
    );

    
}



export default Projecto1;