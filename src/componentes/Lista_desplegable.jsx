import React from 'react';
import '../App.css';
import nano from '../imagenes/n1.jpg';

/*Codigo de js inicio*/
const imagen = document.getElementById('prueba');
const imagen1 = document.getElementById('prueba1');
const imagen2 = document.getElementById('prueba2');
const imagen3 = document.getElementById('prueba3');
const imagen4 = document.getElementById('prueba4');
const imagen5 = document.getElementById('prueba5');
const imagen6 = document.getElementById('prueba6');
const imagen7 = document.getElementById('prueba7');
const imagen8 = document.getElementById('prueba8');
const imagen9 = document.getElementById('prueba9');




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
observador.observe(imagen8);
observador.observe(imagen9);

/*Aqui termina */


const Informacion = () => {
    return (
    <div class="">
        <div class="">
      <h1>Pagina de Nanotecnología y Microchips</h1>
           <img src={nano}/>
    </div>     
    </div>       
    );
}
export default Informacion;



