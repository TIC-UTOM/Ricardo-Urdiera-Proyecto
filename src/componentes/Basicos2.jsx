import React from 'react' ;
import '../App.css';
import '../Ejemplo.css';
import logo from '../imagenes/logo.png';
import tienda from '../imagenes/tienda1.JPG';
import menu from '../imagenes/menu.png';
import utom from '../imagenes/utom.jpg';
import orden from '../imagenes/orden.jpg';
import orden1 from '../imagenes/orden1.jpg';
import utom1 from '../imagenes/utom1.jpg';
import escaner from '../imagenes/escaner.png';





const Basico2 = () => {
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


	
  <div className="contenedor4" id="animacion">
  <div classsName="Hello">
		<img src={utom1} className='heaven7' id="prueba"/>
		<img src="https://noticias.coches.com/wp-content/uploads/2020/12/coche-colores-Skoda-Fabia.jpg" className="heaven" id="prueba1"/>
    <img src="https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2019/11/20/5dd5da6d60d6f.r_1587769564949.0-128-750-500.jpeg" className="heaven3" id="prueba2"/>
    <img src="https://i.ytimg.com/vi/QkdYij-U9vM/maxresdefault.jpg" className="heaven4" id="prueba3"/>
	</div>
  </div>
  

    <div className="contenedor3">
           <a href="scam"><h1 className="tit2" id="tit2">
               Escaner
            </h1></a>
            <img id="imagen2" className="derecha" src="" alt=""/>
        <a href="scam"><h1 className="ver2" id="ver2">Ver proyecto</h1></a>
	</div>
  <div className="contenedor5" id="animacion">
	<img src="https://www.autopista.es/uploads/s1/57/49/97/1/article-20-coches-mas-caros-mundo-2017-58da663add3ae.jpeg" className="heaven2" id="prueba5"/>
	<img src={escaner} className='eye2' id="prueba4"/>
  </div>
    <br /><br />
    <br /><br />
    <br /><br />
    <div className="contenedor3">
           <a href="utomoscars"><h1 className="tit3" id="tit3">
               UTOoscars
            </h1></a>
        <a href="utomoscars"><h1 className="ver3" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor6" id="animacion">

  <div classsName="Hello3">

  <img src="https://www.cameraandlightmag.com/img/img_not/AdobePremierePro_Productions.jpg" className='eye3' id="prueba8"/>
    <img src={utom} className="heaven5" id="prueba9"/>
	</div>
  </div>

  <div className="contenedor3">
           <a href="micro"><h1 className="tit4" id="tit4">
             Nanotecologia
            </h1></a>
        <a href="micro"><h1 className="ver4" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor7" id="animacion">
  <div classsName="Hello4">
  <img src="https://cdn-3.expansion.mx/1a/41/d6ffe29945248567fda319a38087/istock-532174758.jpg" className='eye4' id="prueba6"/>
		<img src="https://www.legaltoday.com/wp-content/uploads/2021/05/microchip.jpg" className="heaven6" id="prueba7"/>
		
	</div>
  </div>
  
  <div className="contenedor3">
           <a href="supermercado"><h1 className="tit5" id="tit5">
             Supermercado
            </h1></a>
        <a href="supermercado"><h1 className="ver5" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor8" id="animacion">
  <img src={tienda} className='heaven8' id="prueba10"/>
		<img src="https://elmercantil.com/wp-content/uploads/2020/12/83584364_10157026022254632_545406102938845184_o-e1607591767363-988x556.jpg" className="eye5" id="prueba11"/>
  </div>

  <div className="contenedor3">
           <a href="tato"><h1 className="tit6" id="tit6">
             Tatuajes
            </h1></a>
        <a href="tato"><h1 className="ver6" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor9" id="animacion">
  <img src="https://i.ytimg.com/vi/QkdYij-U9vM/maxresdefault.jpg" className='heaven9' id="prueba12"/>
		<img src="https://i0.wp.com/thehappening.com/wp-content/uploads/2016/07/ink-hunter-app-tatuajes.jpg?fit=1024%2C694&ssl=1" className="eye6" id="prueba13"/>
  </div>
  <div className="contenedor3">
           <a href="Estadia"><h1 className="tit7" id="tit7">
             Estadias
            </h1></a>
        <a href="Estadia"><h1 className="ver7" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor10" id="animacion">
  <img src={orden} className='heaven10' id="prueba14"/>
		<img src={orden1} className="eye7" id="prueba15"/>
  </div>

  <div className="contenedor3">
           <a href="Marvel"><h1 className="tit8" id="tit8">
             Marvel_API
            </h1></a>
        <a href="Marvel"><h1 className="ver8" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor11" id="animacion">
  <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/07/hipertextual-marvel-revela-sera-final-universo-marvel-2019314666.jpg?fit=1200%2C782&quality=50&strip=all&ssl=1" className='heaven11' id="prueba16"/>
		<img src="https://as01.epimg.net/meristation/imagenes/2020/09/30/noticias/1601498876_582320_1601498920_noticia_normal.jpg" className="eye8" id="prueba17"/>
  </div>

        <a className="Paginacion" href="Marvel">Anterior</a>
        <a className="paginacion" href="scam">Siguiente</a>
    </div>

    );
}
export default Basico2 ;


window.addEventListener('scroll', function(){
  let animado = this.document.getElementById('prueba');
  let posicionObj1 = animado.getBoundingClientRect().top;
  console.log(posicionObj1);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj1 < tamañoPantalla){
    animado.style.animation = "mover 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado1 = this.document.getElementById('prueba1');
  let posicionObj2 = animado1.getBoundingClientRect().top;
  console.log(posicionObj2);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj2 < tamañoPantalla){
    animado1.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado2 = this.document.getElementById('prueba2');
  let posicionObj3 = animado2.getBoundingClientRect().top;
  console.log(posicionObj3);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj3 < tamañoPantalla){
    animado2.style.animation = "mover1 1s ease-out"
  }
})
window.addEventListener('scroll', function(){
  let animado3 = this.document.getElementById('prueba3');
  let posicionObj4 = animado3.getBoundingClientRect().top;
  console.log(posicionObj4);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj4 < tamañoPantalla){
    animado3.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado4 = this.document.getElementById('prueba4');
  let posicionObj5 = animado4.getBoundingClientRect().top;
  console.log(posicionObj5);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj5 < tamañoPantalla){
    animado4.style.animation = "mover 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado5 = this.document.getElementById('prueba5');
  let posicionObj6 = animado5.getBoundingClientRect().top;
  console.log(posicionObj6);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj6 < tamañoPantalla){
    animado5.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado6 = this.document.getElementById('prueba6');
  let posicionObj7 = animado6.getBoundingClientRect().top;
  console.log(posicionObj7);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj7 < tamañoPantalla){
    animado6.style.animation = "mover 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado7 = this.document.getElementById('prueba7');
  let posicionObj8 = animado7.getBoundingClientRect().top;
  console.log(posicionObj8);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj8 < tamañoPantalla){
    animado7.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado8 = this.document.getElementById('prueba8');
  let posicionObj9 = animado8.getBoundingClientRect().top;
  console.log(posicionObj9);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj9 < tamañoPantalla){
    animado8.style.animation = "mover 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado9 = this.document.getElementById('prueba9');
  let posicionObj10 = animado9.getBoundingClientRect().top;
  console.log(posicionObj10);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj10 < tamañoPantalla){
    animado9.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado10 = this.document.getElementById('tit2');
  let posicionObj11 = animado10.getBoundingClientRect().top;
  console.log(posicionObj11);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj11 < tamañoPantalla){
    animado10.style.animation = "rebote 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado11 = this.document.getElementById('tit4');
  let posicionObj12 = animado11.getBoundingClientRect().top;
  console.log(posicionObj12);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj12 < tamañoPantalla){
    animado11.style.animation = "rebote 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado12 = this.document.getElementById('tit3');
  let posicionObj13 = animado12.getBoundingClientRect().top;
  console.log(posicionObj13);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj13 < tamañoPantalla){
    animado12.style.animation = "rebote 1s ease-out"
  }
})


window.addEventListener('scroll', function(){
  let animado13 = this.document.getElementById('prueba11');
  let posicionObj14 = animado13.getBoundingClientRect().top;
  console.log(posicionObj14);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj14 < tamañoPantalla){
    animado13.style.animation = "mover 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado14 = this.document.getElementById('prueba10');
  let posicionObj15 = animado14.getBoundingClientRect().top;
  console.log(posicionObj15);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj15 < tamañoPantalla){
    animado14.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado15 = this.document.getElementById('tit5');
  let posicionObj16 = animado15.getBoundingClientRect().top;
  console.log(posicionObj16);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj16 < tamañoPantalla){
    animado15.style.animation = "rebote 1s ease-out"
  }
})


window.addEventListener('scroll', function(){
  let animado16 = this.document.getElementById('prueba13');
  let posicionObj17 = animado16.getBoundingClientRect().top;
  console.log(posicionObj17);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj17 < tamañoPantalla){
    animado16.style.animation = "mover 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado17 = this.document.getElementById('prueba12');
  let posicionObj18 = animado17.getBoundingClientRect().top;
  console.log(posicionObj18);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj18 < tamañoPantalla){
    animado17.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado18 = this.document.getElementById('tit6');
  let posicionObj19 = animado18.getBoundingClientRect().top;
  console.log(posicionObj19);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj19 < tamañoPantalla){
    animado18.style.animation = "rebote 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado19 = this.document.getElementById('prueba15');
  let posicionObj20 = animado19.getBoundingClientRect().top;
  console.log(posicionObj20);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj20 < tamañoPantalla){
    animado19.style.animation = "mover 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado20 = this.document.getElementById('prueba14');
  let posicionObj21 = animado20.getBoundingClientRect().top;
  console.log(posicionObj21);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj21 < tamañoPantalla){
    animado20.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado21 = this.document.getElementById('tit7');
  let posicionObj22 = animado21.getBoundingClientRect().top;
  console.log(posicionObj22);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj22 < tamañoPantalla){
    animado21.style.animation = "rebote 1s ease-out"
  }
})


window.addEventListener('scroll', function(){
  let animado22 = this.document.getElementById('prueba17');
  let posicionObj23 = animado22.getBoundingClientRect().top;
  console.log(posicionObj23);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj23 < tamañoPantalla){
    animado22.style.animation = "mover 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado23 = this.document.getElementById('prueba16');
  let posicionObj24 = animado23.getBoundingClientRect().top;
  console.log(posicionObj24);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj24 < tamañoPantalla){
    animado23.style.animation = "mover1 1s ease-out"
  }
})

window.addEventListener('scroll', function(){
  let animado24 = this.document.getElementById('tit8');
  let posicionObj25 = animado24.getBoundingClientRect().top;
  console.log(posicionObj25);
  let tamañoPantalla = window.innerHeight/3.5;
  if(posicionObj25 < tamañoPantalla){
    animado24.style.animation = "rebote 1s ease-out"
  }
})

