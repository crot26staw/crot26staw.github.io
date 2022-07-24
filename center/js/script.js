"use strict";
// Расчёт скидки
const mainDisplay = document.querySelectorAll('.discount-container');
const itemDisplay = document.querySelectorAll('.discount-item-content-display');
const itemInput = document.querySelectorAll('.discount-minwrapp-item');
const itemCheckbox = document.querySelectorAll('.discount-minwrapp-item-checkbox');
const prevBtn = document.querySelector('.discount-prev');
const nextBtn = document.querySelector('.discount-next');
const bandText = document.querySelector('.discount-band-text');
const bandLine = document.querySelector('.discount-band-line');
const bandDisc = document.querySelector('.discount-band-text-num');
const bandLineSpan = document.querySelectorAll('.discount-band-line-span');

let indikator = 0;
let iter = 100 / itemDisplay.length;
let offset = 0;


function removeItemActive() {  // Удаляем класс активности у выбора услгуги
    itemInput.forEach(item => {
        item.classList.remove('discount-minwrapp-item-active');
    });
    itemCheckbox.forEach(check => {
        check.classList.remove('discount-minwrapp-item-checkbox-active');
    });
}
removeItemActive();

function addItemActive() {  // Добавляем класс активности у выбора услгуги
    itemInput.forEach(function(item, i){
        item.addEventListener('click', () =>{
            removeItemActive();
            item.classList.add('discount-minwrapp-item-active');
            itemCheckbox[i].classList.add('discount-minwrapp-item-checkbox-active');
        });
    });
}
addItemActive();

function removeIetmDisplay() {  
    itemDisplay.forEach(item => {
        item.classList.remove('discount-item-content-display-active');
    });
}

function addItemDisplay(i) {
    itemDisplay[i].classList.add('discount-item-content-display-active');
}

nextBtn.addEventListener('click', () =>{
    offset = offset + 1;
    indikator = indikator + iter;
    if(offset == 4){
        mainDisplay[0].classList.remove('discount-container-active');
        mainDisplay[1].classList.add('discount-container-active');
    } else {
        removeIetmDisplay();
        addItemDisplay(offset);
    }
    prevBtn.removeAttribute("disabled", "disabled");
    bandDisc.textContent = indikator;
    bandLineSpan[offset - 1].classList.add('discount-band-line-span-active');
});

prevBtn.addEventListener('click', () =>{
    if(offset == 0 ){
        prevBtn.setAttribute("disabled", "disabled");
    } else{
        offset = offset - 1;
        removeIetmDisplay();
        addItemDisplay(offset);
        indikator = indikator - iter;
    }
    bandDisc.textContent = indikator;
    bandLineSpan[offset].classList.remove('discount-band-line-span-active');
});

//Слайдер

$('.review-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
                
            }    
        }
    ]
});

//Модальное окно по кнопке "Заказать звонок"
const modal = document.querySelectorAll('.modal');
const modalShowBtn = document.querySelectorAll('.modal-show');
const modalCross = document.querySelectorAll('.modal-cross');

modalShowBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
        modal[0].classList.add('modal-active');
    });
});

modalCross[0].addEventListener('click', () =>{
    modal[0].classList.remove('modal-active');
});

modal[0].addEventListener('click', (e) =>{
    if (e.target === modal[0]){
        modal[0].classList.remove('modal-active');
    }
});

//Отправка формы
const form = document.querySelector('.modal-form-1');
const message = {
    loading: 'Загрузка...',
    success: 'Спасибо, Мы вам скоро позвоним.',
    failure: 'Произошла ошибка...'
};

form.addEventListener('submit', formSend);

async function formSend(e){
    e.preventDefault();

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('modal-form-status');
    statusMessage.textContent = message.loading;
    form.appendChild(statusMessage);

    function removeStatusMessage(){
        form.removeChild(statusMessage);
        modal[0].classList.remove('modal-active');
        
    }

    fetch('/mailer/smart.php', {
        method: 'POST',
        body: new FormData(form)
    }).then(async res => {
        if (res.status == 200) { // ok
            statusMessage.textContent = message.success;
            form.reset(); 
            setTimeout(removeStatusMessage, 4000);
        }
        if (res.status != 200) {
            statusMessage.textContent = message.failure;
            setTimeout(removeStatusMessage, 4000);
        }
    });
}

//Модальное окно в футере "написать нам"
const modalShowFoot = document.querySelector('.footer-list-write');

modalShowFoot.addEventListener('click', () =>{
    modal[1].classList.add('modal-active');
});

modalCross[1].addEventListener('click', () =>{
    modal[1].classList.remove('modal-active');
});
modal[1].addEventListener('click', (e) =>{
    if (e.target === modal[1]){
        modal[1].classList.remove('modal-active');
    }
});

//Отправка формы
const formFoot = document.querySelector('.modal-form-2');

formFoot.addEventListener('submit', formSendFoot);

async function formSendFoot(e){
    e.preventDefault();

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('modal-form-status');
    statusMessage.textContent = message.loading;
    formFoot.appendChild(statusMessage);

    function removeStatusMessage(){
        formFoot.removeChild(statusMessage);
        modal[1].classList.remove('modal-active');
    }

    fetch('/mailer/smart.php', {
        method: 'POST',
        body: new FormData(form)
    }).then(async res => {
        if (res.status == 200) { // ok
            statusMessage.textContent = message.success;
            formFoot.reset(); 
            setTimeout(removeStatusMessage, 4000);
        }
        if (res.status != 200) {
            statusMessage.textContent = message.failure;
            setTimeout(removeStatusMessage, 4000);
        }
    });
}

// Модальное окно политики конфидециальности
const confidecial = document.querySelectorAll('.confidecial');

confidecial.forEach(item => {
    item.addEventListener('click', () =>{
        modal[2].classList.add('modal-active');
    });

});

modalCross[2].addEventListener('click', () =>{
    modal[2].classList.remove('modal-active');
});
modal[2].addEventListener('click', (e) =>{
    if (e.target === modal[2]){
        modal[2].classList.remove('modal-active');
    }
});

//Плавный скролл
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
  
        let href = this.getAttribute('href').substring(1);
  
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
  
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});