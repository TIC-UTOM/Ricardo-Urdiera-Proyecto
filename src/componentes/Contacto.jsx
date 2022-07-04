import React from 'react';
import '../App.css';
import '../Componente.css';
import '../Ejemplo.css'
import logo from '../imagenes/logo.png';
import menu from '../imagenes/menu.png';


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

        <h1 className="titulo">Contacto</h1>

        <form class="row g-3" id="Formulario">
  <div class="col-md-6">
  <div class="col-12">
    <label for="inputAddress" class="form-label">Nombre Completo</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
    <label for="inputEmail4" class="form-label">Dirección de correo</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Numero de telefono</label>
    <input type="number" class="form-control" id="inputCity"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Escribe la solicitud</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-12" id="buton">
    <button type="submit" class="btn btn-primary">Aplicar Todo</button>
  </div>
</form>
        </div>
    )
}
export default Informacion ;