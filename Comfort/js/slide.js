"use strict";

const wrapCarousel = document.querySelector('.product-example-dotslides');
const carousel = document.querySelector('.product-example-dotslides-carousel');
const navSlide = document.querySelectorAll('.product-example-dotslide');
const widhtNavsliders = window.getComputedStyle(navSlide[0]).width;
const nextArrow = document.querySelector('.next-arrow');
const prevArrow = document.querySelector('.prev-arrow');
const mainImg = document.querySelectorAll('.product-example-slide');


let offset = 0;
let cikl = 0;


function deleteNotDigits(str){
    return +str.replace(/\D/g, '');
}

mainImg[0].classList.add('product-example-slide-active');

function hideMainSlide() {
    mainImg.forEach(item => {
        item.classList.remove('product-example-slide-active');
    });
}

nextArrow.addEventListener('click', () =>{
    if(cikl == navSlide.length - 4){
        carousel.style.left = 0;
        cikl = 0; 
        offset = 0;
    } else{
        cikl = cikl + 1;
        offset = offset + deleteNotDigits(widhtNavsliders) + 20;
        carousel.style.left = -offset + 'rem';
    }
    console.log(cikl);
});
prevArrow.addEventListener('click', () =>{
    if(cikl == 0){
        cikl = navSlide.length - 4;
        offset = cikl * (deleteNotDigits(widhtNavsliders) + 20);
        carousel.style.left = -offset + 'rem';
    } else{
        cikl = cikl - 1;
        offset = offset - deleteNotDigits(widhtNavsliders) - 20;
        carousel.style.left = -offset + 'rem';
    }
});

navSlide.forEach(function(slide, i){
    slide.addEventListener('click', () => {
        hideMainSlide();
        mainImg[i].classList.add('product-example-slide-active');
    });
});