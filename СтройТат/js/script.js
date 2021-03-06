'use strict';

//Калькулятор
const repairType = document.querySelectorAll('.services-wrapper-repair-type-item');
const repairView = document.querySelectorAll('.services-wrapper-repair-view-item');
let range = document.querySelector('.services-wrapper-repair-square-range');
let repairLong = document.querySelector('.services-wrapper-repair-square-total');
let priceContent = document.querySelector('.services-wrapper-repair-phone-price');
let priceHouse = Number(repairType[0].dataset.house);
let priceRepair = Number(repairView[0].dataset.repair);
let price;
let indexValue = Number(range.value);  //значение ползунка

function calcPrice(index, house, repair) {  //Считаем стоимость
    price = index * (house + repair);
}
calcPrice(indexValue, priceHouse, priceRepair);

repairLong.innerHTML = range.value + " м"; //Отоброжение сбоку

function deleteActive (e, clas) {  
    e.forEach(item => {
        item.classList.remove(clas);
    });
}
function addActive (e, clas) {
    e.classList.add(clas);
}
function displayPriceContent(){
    priceContent.textContent = price + " руб.";
}
function displayValue (){
    repairLong.innerHTML = range.value + " м";
    indexValue = Number(range.value);
    calcPrice(indexValue, priceHouse, priceRepair);
    displayPriceContent();
} 
displayPriceContent();

repairType.forEach(function(item){
    item.addEventListener('click', () => {
        deleteActive(repairType, 'services-wrapper-repair-type-item-active');
        addActive(item, 'services-wrapper-repair-type-item-active');
        priceHouse = Number(item.dataset.house);
        calcPrice(indexValue, priceHouse, priceRepair);
        displayPriceContent();
    });
});

repairView.forEach(function(item) {
    item.addEventListener('click', () => {
        deleteActive(repairView, 'services-wrapper-repair-view-item-active');
        addActive(item, 'services-wrapper-repair-view-item-active');
        priceRepair = Number(item.dataset.repair);
        calcPrice(indexValue, priceHouse, priceRepair);
        displayPriceContent();
    });
});




//Слайдер
const carouselDots = document.querySelector('.work-header-carousel-dots');
const sliderWrap = document.querySelector('.work-header-sliders-wrapepr');
const sliders = document.querySelector('.work-header-sliders');
const slides = document.querySelectorAll('.work-header-slides');
const widthSlides = window.getComputedStyle(sliderWrap).width;
const next = document.querySelector('.work-header-sliders-arrow-next');
const prew = document.querySelector('.work-header-sliders-arrow-prew');

let index = 0;
let offset = 0;

sliders.style.width = 100 * slides.length + '%';

function deleteNotDigits(str){     //Получаем чисто число из строки
    return +str.replace(/\D/g, '');
}

function nextSlide(next, offset, widthSlides, slides, sliders, index, dot) {
    next.addEventListener('click', () =>{
        if(offset == deleteNotDigits(widthSlides) * (slides.length - 1)) {
            offset = 0;
        } else{
            offset = offset + deleteNotDigits(widthSlides);
        }
        sliders.style.transform = `translateX(-${offset}px)`;
    
        if(index == slides.length - 1){
            index = 0;
        } else {
            index ++;
        }
    
        removeActiveDot(dot);
        addActiveDot(dot, index);
    });
}


function prewSlide(prew, offset, widthSlides, slides, sliders, index, dot){
    prew.addEventListener('click', () =>{
        if(offset == 0){
            offset = deleteNotDigits(widthSlides) * (slides.length - 1);
        } else {
            offset = offset - deleteNotDigits(widthSlides);
        }
        sliders.style.transform = `translateX(-${offset}px)`;
    
        if(index == 0) {
            index = slides.length - 1;
        } else {
            index --;
        }
        
        removeActiveDot(dot);
        addActiveDot(dot, index);
    });
}


let dots;
for(let i = 0; i < slides.length; i++){           // Добавляем доты динамически
    dots = document.createElement('div');
    dots.classList.add('work-header-carousel-dot');
    carouselDots.append(dots);
}

const dot = document.querySelectorAll('.work-header-carousel-dot');

function removeActiveDot (dot) {
    dot.forEach(item =>{
        item.classList.remove('work-header-carousel-dot-active');
    });
}

function addActiveDot (dot, i) {
    dot[i].classList.add('work-header-carousel-dot-active');
}
addActiveDot(dot, index);

dot.forEach(function (item, i) {            //Листаем слайд по нажатию на дот
    item.addEventListener('click', () =>{
        index = i;
        removeActiveDot(dot);
        addActiveDot(dot, index);

        offset = deleteNotDigits(widthSlides) * index;

        sliders.style.transform = `translateX(-${offset}px)`;

    });
});
prewSlide(prew, offset, widthSlides, slides, sliders, index, dot);
nextSlide(next, offset, widthSlides, slides, sliders, index, dot);

//Второй слайдер

const reviewsWrapper = document.querySelector('.reviews-carousel-wrapper');
const reviewsWidht = window.getComputedStyle(reviewsWrapper).width;
const reviewsSlireds = document.querySelector('.reviews-carousel-sliders');
const reviewsSlides = document.querySelectorAll('.reviews-carousel-slides');
const reviewsArrow = document.querySelectorAll('.reviews-carousel-arrow');
const reviewsNext = document.querySelector('.reviews-carousel-arrow-next');
const reviewsPrew = document.querySelector('.reviews-carousel-arrow-prew');

let reviewsIndex = 0;
let reviewsOffset = 0;

function deleteNotDigits(str){  
    return +str.replace(/\D/g, '');
}

nextSlide(reviewsNext, reviewsOffset, reviewsWidht, reviewsSlides, reviewsSlireds, reviewsIndex);
prewSlide(reviewsPrew, reviewsOffset, reviewsWidht, reviewsSlides, reviewsSlireds, reviewsIndex);


//Выезжающие ответы

const ArrowBtn = document.querySelectorAll('.answers-stage-title-arrow-img');
const answDescr = document.querySelectorAll('.answers-stage-descr');

answDescr.forEach(item => {
    item.classList.remove('answers-stage-descr-show');
    item.classList.add('answers-stage-descr-hide');
});

ArrowBtn.forEach(function (item, i) {
    item.addEventListener('click', () =>{
        item.classList.toggle('answers-stage-title-arrow-img-revers');
        answDescr[i].classList.toggle('answers-stage-descr-show');
        answDescr[i].classList.toggle('answers-stage-descr-hide');
    });
});

//Модальное окно формы

const genButtonModal = document.querySelectorAll('.modal-form-btn');
const myDesignBtn = document.querySelector('.services-project-btn-my');
const helpDesignBtn = document.querySelector('.services-project-btn-help');
const modalCross = document.querySelectorAll('.modal-form-cross');
const modalChoise = document.querySelector('.modal-choise');
const modalChoiseYes = document.querySelector('.modal-choise-item-yes');
const modalChoiseNo = document.querySelector('.modal-choise-item-no');
const modalImg = document.querySelector('.modal-img');
const modalNotImg = document.querySelector('.modal-not-img');


genButtonModal.forEach(btn => {         //Окно выбора
    btn.addEventListener('click', () => {
        modalChoise.classList.add('modal-choise-active');
    });
});
modalChoiseYes.addEventListener('click', () => {     // Окно со своим дизайном
    modalChoise.classList.remove('modal-choise-active');
    modalImg.classList.add('modal-not-img-active');
});
modalChoiseNo.addEventListener('click', () => {     // Окно без своего дизайна
    modalChoise.classList.remove('modal-choise-active');
    modalNotImg.classList.add('modal-img-active');
});
modalCross.forEach(item => {      //Закрываем все окна
   item.addEventListener('click', () => {
    modalChoise.classList.remove('modal-choise-active');
    modalImg.classList.remove('modal-not-img-active');
    modalNotImg.classList.remove('modal-img-active');
    });
});
myDesignBtn.addEventListener('click', () => {
    modalImg.classList.add('modal-not-img-active');
});
helpDesignBtn.addEventListener('click', () => {
    modalNotImg.classList.add('modal-img-active');
});

// Меню

const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.header-nav-lists');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-menu-active');
    menu.classList.toggle('header-nav-lists-active');
});