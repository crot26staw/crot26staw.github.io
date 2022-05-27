'use strict';
// Верхний слайдер
const carousel = document.querySelector('.product-example-carousel');
const slides = document.querySelector('.product-example-slides');
const slide = document.querySelectorAll('.product-example-slide');
const widthSlides = window.getComputedStyle(carousel).width;
const prew = document.querySelector('.prew-arrow');
const next = document.querySelector('.next-arrow');

let index = 0;
let offset = 0;

slides.style.width = 100 * slide.length + '%';

function deleteNotDigits(str){
    return +str.replace(/\D/g, '');
}

// next.addEventListener('click', () =>{
//     if(offset == deleteNotDigits(widthSlides) * (slide.length - 1)){
//         offset = 0;
//     } else{
//         offset = offset + deleteNotDigits(widthSlides);
//     }
//     slides.style.transform = `translateX(-${offset}rem)`;
//     console.log(offset);
//     console.log(deleteNotDigits(widthSlides));
// });

function nextSlide(next, offset, widthSlides, slides, sliders, index) {
    next.addEventListener('click', () =>{
        if(offset == deleteNotDigits(widthSlides) * (slides.length - 1)) {
            offset = 0;
        } else{
            offset = offset + deleteNotDigits(widthSlides);
        }
        sliders.style.transform = `translateX(-${offset}rem)`;
    
        if(index == slides.length - 1){
            index = 0;
        } else {
            index ++;
        }
    });
}
nextSlide(next, offset, widthSlides, slide, slides, index);

function prewSlide(prew, offset, widthSlides, slides, sliders, index){
    prew.addEventListener('click', () =>{
        if(offset == 0){
            offset = deleteNotDigits(widthSlides) * (slides.length - 1);
        } else {
            offset = offset - deleteNotDigits(widthSlides);
        }
        sliders.style.transform = `translateX(-${offset}rem)`;
    
        if(index == 0) {
            index = slides.length - 1;
        } else {
            index --;
        }
        console.log(offset);
    });
}
prewSlide(prew, offset, widthSlides, slide, slides, index);

// Нижний слайдер


const botCarousel = document.querySelector('.product-dots-carousel');
const botSlides = document.querySelector('.product-dots-slides');
const botSlide = document.querySelectorAll('.product-dots-slide');
const botWidthSlides = window.getComputedStyle(botCarousel).width;
const prewDots = document.querySelector('.prew-arrow-dots');
const nextDots = document.querySelector('.next-arrow-dots');

let indexDots = 0;
let offsetDots = 0;

botSlides.style.width = 206 * slide.length + (20 * botSlide.length - 1) + 'rem';

nextDots.addEventListener('click', () => {
    if(offsetDots == 0){
        offsetDots = deleteNotDigits(botWidthSlides) * (botSlide.length - 1);
    } else {
        offsetDots = offsetDots - deleteNotDigits(botWidthSlides);
    }
    botSlides.style.transform = `translateX(-226rem)`;
});

nextSlide.addEventListener('click', () => {

});