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
                <li><a href="Terminos">Politicas de Privacidad</a></li>    
            </ul>         
        </div> 

          <div className="">
            <a href="https://www.facebook.com/Ricardo.urdiera/" target="_blank" className="btn-Noinstagram" ><i className="">Facebook</i></a>
          </div>
          <div>
            <a href="https://www.instagram.com/ricardourdiera.318/" target="_blank" className="btn-instagram" ><i className="">Instagram</i></a>
          </div>

        <h1 className="titulo">Contacto</h1>
        
        <form class="row g-3" id="Formulario" action="https://formsubmit.co/ricardourdiera@gmail.com" method="POST">
  <div class="col-md-6">
  <div class="col-12">
    <label for="inputAddress" class="form-label">Nombre completo *</label>
    <input type="text" class="form-control" id="inputAddress" name="nombre" required/>
  </div>
    <label for="inputCity" class="form-label">Número de telefono</label>
    <input type="number" class="form-control" id="inputCity" name="numero"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Dirección de correo *</label>
    <input type="email" class="form-control" id="inputEmail4" name="email" required/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Escribe la solicitud *</label>
    <input type="text" class="form-control" id="inputAddress" name="mensaje" required/>
  </div>
  <h4 className="Condiciones">Conoce nuestros <a href="Condiciones" className="Condiciones">terminos y condiciones</a></h4>
  <div class="col-12" id="buton">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>

  <input type="hidden" name="_next" value="http://ricardourdierautom-portafolio-digital.s3-website-us-west-2.amazonaws.com/contacto"/>
  <input type="hidden" name="_captcha" value="false"/>
</form>
      

        </div>
    )
}
export default Informacion ;

  




