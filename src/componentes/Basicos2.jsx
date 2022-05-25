import React from 'react';
import '../App.css';

function mostrar_scroll_tit(){
    var tit = document.getElementById('tit');

    let scrollTop = document.documentElement.scrollTop;
    let altura_tit = tit.offsetTop;
    if(altura_tit < scrollTop){
        tit.style.left = 0;
    }
}

function mostrar_scroll_img(){
    var img = document.getElementById('img');
    var tapa = document.getElementById('tapa_img');
    let scrollTop = document.documentElement.scrollTop;
    let altura_img = img.offsetTop;
    if(altura_img +150 < scrollTop){
        img.style.right = 0;
        tapa.style.right = '100';
    }
}

function mostrar_scroll_tit1(){
    var tit1 = document.getElementById('tit1');

    let scrollTop = document.documentElement.scrollTop;
    let altura_tit1 = tit1.offsetTop;
    if(altura_tit1 < scrollTop){
        tit1.style.left = 0;
    }
}

function mostrar_scroll_img1(){
    var img1 = document.getElementById('img1');
    var tapa1 = document.getElementById('tapa_img');
    let scrollTop = document.documentElement.scrollTop;
    let altura_img1 = img1.offsetTop;
    if(altura_img1 +150 < scrollTop){
        img1.style.right = 0;
        tapa1.style.right = '100';
    }
}



window.addEventListener('scroll', mostrar_scroll_tit);
window.addEventListener('scroll', mostrar_scroll_img);
window.addEventListener('scroll', mostrar_scroll_tit1);
window.addEventListener('scroll', mostrar_scroll_img1);






