import React from 'react' ;
import '../App.css';
import logo from '../imagenes/logo.png';
import nano from '../imagenes/n1.jpg';



const Basico2 = () => {
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


	
  <div className="contenedor4">
  <div classsName="Hello">
		<img src="https://www.bogartmagazine.mx/wp-content/uploads/2020/01/oscars-2019-no-tendran-presentador-1547140357.jpg" className='eye' id="prueba"/>
		<img src="https://periodismodelmotor.com/wp-content/uploads/2020/02/coches-caros-de-mantener-9.jpg" className="heaven" id="prueba1"/>
    <img src={nano} className="heaven3" id="prueba2"/>
    <img src="https://www.eltiempo.com/files/article_main/uploads/2019/11/20/5dd5da6d60d6f.jpeg" className="heaven4" id="prueba3"/>
	</div>
  </div>
  
    <div className="contenedor3">
           <a href="scam"><h1 className="tit2" id="tit2">
               SCAN CAR
            </h1></a>
            <img id="imagen2" className="derecha" src="" alt=""/>
        <a href="scam"><h1 className="ver2" id="ver2">Ver proyecto</h1></a>
	</div>
  <div className="contenedor5">
  <div classsName="Hello2">
		<img src="https://noticias.coches.com/wp-content/uploads/2020/12/coche-colores-Skoda-Fabia.jpg" className='eye2' id="prueba4"/>
		<img src="https://www.autopista.es/uploads/s1/57/49/97/1/article-20-coches-mas-caros-mundo-2017-58da663add3ae.jpeg" className="heaven2" id="prueba5"/>
	</div>
  </div>
    <br /><br />
    <br /><br />
    <br /><br />
    <div className="contenedor3">
           <a href="utomoscars"><h1 className="tit3" id="tit3">
               UTOMoscars
            </h1></a>
        <a href="utomoscars"><h1 className="ver3" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor6">
  <div classsName="Hello3">
  <img src="https://www.cameraandlightmag.com/img/img_not/AdobePremierePro_Productions.jpg" className='eye3' id="prueba8"/>
		<img src="https://scontent.fmlm3-1.fna.fbcdn.net/v/t39.30808-6/278964877_1061349597809811_5020926886760826164_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFLImEHo-l3XH9_Q80A1CB7av-WhTSd0mhq_5aFNJ3SaHfKsS2n2A01DzWUqmOTLFql151Dt0KWaLidZXfAmp8O&_nc_ohc=T5x-mwTiOZkAX-Nt8Yj&_nc_ht=scontent.fmlm3-1.fna&oh=00_AT-79u-F7fSfSP4K-8tfU7TRffNbk7Rb14mUb9xmeFXpUQ&oe=62BD77B4" className="heaven5" id="prueba9"/>
	</div>
  </div>

  <div className="contenedor3">
           <a href="micro"><h1 className="tit4" id="tit3">
               Microchip
            </h1></a>
        <a href="micro"><h1 className="ver4" id="ver3">Ver proyecto</h1></a>
	</div>
  <div className="contenedor7">
  <div classsName="Hello4">
  <img src="https://cdn-3.expansion.mx/1a/41/d6ffe29945248567fda319a38087/istock-532174758.jpg" className='eye4' id="prueba6"/>
		<img src="https://www.legaltoday.com/wp-content/uploads/2021/05/microchip.jpg" className="heaven6" id="prueba7"/>
		
	</div>
  </div>
  
 


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








