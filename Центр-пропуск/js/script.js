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

