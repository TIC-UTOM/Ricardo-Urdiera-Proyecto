import React from 'react';
import '../App.css';

var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#121212'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})



const Basico = () => {
    return (
    <div class="">
            
    </div>       
    );
}
export default Basico;
