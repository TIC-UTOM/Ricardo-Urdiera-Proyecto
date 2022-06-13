import React from 'react' ;
import '../App.css';
import logo from '../imagenes/logo.png';
import nano from '../imagenes/n1.jpg';
import {Link} from 'react-router-dom';

/*js de app*/

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
              <a href="#">Inicio</a>
              <a href="#">Información</a>
              <a href="#">Contacto</a>
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
		<img src="https://wp-mktg.prod.getty1.net/istockcontentredesign/wp-content/uploads/sites/5/bfi_thumb/2021_Composite_2304x1274_hero.jpg-37i4184kuwatssx9bxo96d6at0qnxmhzifjt0wa2iz0qmzinw.jpeg" className='eye' id="prueba"/>
		<img src={nano} className="heaven" id="prueba1"/>
    <img src="https://i0.wp.com/www.smartcitieslibrary.com/wp-content/uploads/2018/08/Screenshot_2018-08-30-Reinventing-obsolete-urban-spaces-as-smart-cities-of-the-future-key-steps-to-success.png?fit=1114%2C786&ssl=1" className="heaven3" id="prueba2"/>
    <img src="https://cdn.vox-cdn.com/thumbor/d48qa3SvucCSu2gCKLrK60HW2wM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20019410/urban_feminist_lead_board_1.jpg" className="heaven4" id="prueba3"/>
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
		<img src={nano} className='eye2' id="prueba4"/>
		<img src="https://static1.diariosur.es/www/multimedia/201909/30/media/cortadas/imagensensible-kYzD-U90285421336FWD-624x385@Diario%20Sur.jpg" className="heaven2" id="prueba5"/>
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
		<img src="https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg" className='eye3' id="prueba6"/>
		<img src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg" className="heaven5" id="prueba7"/>
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
		<img src="https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg" className='eye4' id="prueba8"/>
		<img src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg" className="heaven6" id="prueba9"/>
	</div>
  </div>
  
 


    </div>

    );
}
export default Basico2 ;







