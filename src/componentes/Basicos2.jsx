import React from 'react';
import '../App.css';
import logo from '../imagenes/logo.png';
import nano from '../imagenes/n1.jpg';
import {BrowserRouter as Router} from "react-router-dom";

/*js de app*/
const imagen = document.getElementById('prueba');
const imagen1 = document.getElementById('prueba1');
const imagen2 = document.getElementById('prueba2');
const imagen3 = document.getElementById('prueba3');
const imagen4 = document.getElementById('prueba4');
const imagen5 = document.getElementById('prueba5');
const imagen6 = document.getElementById('prueba6');
const imagen7 = document.getElementById('prueba7');

const cargarImagen = (entradas, observador) =>{

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible') 
        }else{
            entrada.target.classList.remove('visible')
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '100px 100px 100px 100px',
    threshold: 1.0
});


observador.observe(imagen);
observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);
observador.observe(imagen4);
observador.observe(imagen5);
observador.observe(imagen6);
observador.observe(imagen7);

const Basico2 = () => {
    return (
    <div>    
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

          <div class="">
            <a href="https://www.facebook.com/Ricardo.urdiera/" class="btn-Noinstagram" ><i class="">Facebook</i></a>
          </div>
          <div>
            <a href="https://www.instagram.com/ricardourdiera.318/" class="btn-instagram" ><i class="">Instagram</i></a>
          </div>


	
  <div class="contenedor4">
  <div classs="Hello">
		<img src="https://wp-mktg.prod.getty1.net/istockcontentredesign/wp-content/uploads/sites/5/bfi_thumb/2021_Composite_2304x1274_hero.jpg-37i4184kuwatssx9bxo96d6at0qnxmhzifjt0wa2iz0qmzinw.jpeg" class='eye' id="prueba"/>
		<img src="https://imageio.forbes.com/specials-images/imageserve/605380bb73fd4dc4c8391878/Double-exposure-of-confidence-young-woman-over-cityscape/960x0.jpg?format=jpg&width=960" class="heaven" id="prueba1"/>
    <img src="https://i0.wp.com/www.smartcitieslibrary.com/wp-content/uploads/2018/08/Screenshot_2018-08-30-Reinventing-obsolete-urban-spaces-as-smart-cities-of-the-future-key-steps-to-success.png?fit=1114%2C786&ssl=1" class="heaven3" id="prueba4"/>
    <img src="https://cdn.vox-cdn.com/thumbor/d48qa3SvucCSu2gCKLrK60HW2wM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20019410/urban_feminist_lead_board_1.jpg" class="heaven4" id="prueba5"/>
	</div>
  </div>
  
    <div class="contenedor3">
           <a href="#"><h1 class="tit2" id="tit2">
               SCAN CAR
            </h1></a>
            <img id="imagen2" class="derecha" src="" alt=""/>
        <a href="#"><h1 class="ver2" id="ver2">Ver proyecto</h1></a>
	</div>
  <div class="contenedor5">
  <div classs="Hello2">
		<img src={nano} class='eye2' id="prueba3"/>
		<img src="https://static1.diariosur.es/www/multimedia/201909/30/media/cortadas/imagensensible-kYzD-U90285421336FWD-624x385@Diario%20Sur.jpg" class="heaven2" id="prueba2"/>
	</div>
  </div>
    <br /><br />
    <br /><br />
    <br /><br />
    <div class="contenedor3">
           <a href="#"><h1 class="tit3" id="tit3">
               UTOMoscars
            </h1></a>
        <a href="#"><h1 class="ver3" id="ver3">Ver proyecto</h1></a>
	</div>
  <div class="contenedor6">
  <div classs="Hello3">
		<img src="https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg" class='eye3' id="prueba6"/>
		<img src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg" class="heaven5" id="prueba7"/>
	</div>
  </div>
  
 


    </div>

    );
}
export default Basico2;







