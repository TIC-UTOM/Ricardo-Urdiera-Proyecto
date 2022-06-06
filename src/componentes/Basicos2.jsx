import React from 'react';
import '../App.css';

/*js de app*/


/*Siguiente codigo*/
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

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


observador.observe(imagen1);
observador.observe(imagen2);

const Basico2 = () => {
    return (
    <div>    
	<div class="contenedor3">
           <a href="#"><h1 class="tit" id="tit">
               UTOMoscars
            </h1></a>
		<img id="imagen1" class="izquierda" src="https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg" alt=""/>
        <a href="#"><h1 class="ver" id="ver">Ver proyecto</h1></a>
	</div>
    <div class="contenedor3">
           <a href="#"><h1 class="tit2" id="tit2">
               SCAN|CAR
            </h1></a>
            <img id="imagen2" class="derecha" src="https://static1.diariosur.es/www/multimedia/201909/30/media/cortadas/imagensensible-kYzD-U90285421336FWD-624x385@Diario%20Sur.jpg" alt=""/>
        <a href="#"><h1 class="ver2" id="ver2">Ver proyecto</h1></a>
	</div>
    
    </div>

    );
}
export default Basico2;





