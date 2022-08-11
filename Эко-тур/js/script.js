"use strict"

const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');

burger.addEventListener('click', () =>{
  burger.classList.toggle('burger-menu-active')
  nav.classList.toggle('nav-active')
})

const width = window.screen.width;
console.log(width);

//Страница Туры, блок Проживание-выезжающий список

const residenceDropDawnList = {
  arrow: document.querySelectorAll('.residence-item-arrow'),
  item: document.querySelectorAll('.residence-wrapper'),
  block: document.querySelectorAll('.residence-item-top-minwrapp')
}

residenceDropDawnList.block.forEach(function(item, i){
  item.addEventListener('click', () =>{
    residenceDropDawnList.arrow[i].classList.toggle('residence-item-arrow-active')
    residenceDropDawnList.item[i].classList.toggle('residence-wrapper-active')
  })
})

residenceDropDawnList.arrow.forEach(function(arrow, i){  //Разворачиваем и закрывает по стрелочке
  arrow.addEventListener('click', () =>{
    residenceDropDawnList.arrow[i].classList.toggle('residence-item-arrow-active')
    residenceDropDawnList.item[i].classList.toggle('residence-wrapper-active')
  })
})
//Страница Туры, блок Цены-выезжающий список

const priceDropDawnList = {
  arrow: document.querySelectorAll('.price-item-arrow'),
  item: document.querySelectorAll('.price-min-bot-wrapp'),
  block: document.querySelectorAll('.price-item')
}

priceDropDawnList.block.forEach(function(item, i){
  item.addEventListener('click', () =>{
    priceDropDawnList.arrow[i].classList.toggle('price-item-arrow-active')
    priceDropDawnList.item[i].classList.toggle('price-min-bot-wrapp-active')
  })
})

priceDropDawnList.arrow.forEach(function(arrow, i){
  arrow.addEventListener('click', () =>{
    priceDropDawnList.arrow[i].classList.toggle('price-item-arrow-active')
    priceDropDawnList.item[i].classList.toggle('price-min-bot-wrapp-active')
  })
})

//Страница Туры, блок Важно знать-выезжающий список

const importantDropDawnList = {
  arrow: document.querySelectorAll('.important-item-arrow'),
  item: document.querySelectorAll('.important-item-lists'),
  block: document.querySelectorAll('.important-item')
}

importantDropDawnList.block.forEach(function(item, i){
  item.addEventListener('click', () =>{
    importantDropDawnList.arrow[i].classList.toggle('important-item-arrow-active')
    importantDropDawnList.item[i].classList.toggle('important-item-lists-active')
  })
})

importantDropDawnList.arrow.forEach(function(arrow, i){
  arrow.addEventListener('click', () =>{
    importantDropDawnList.arrow[i].classList.toggle('important-item-arrow-active')
    importantDropDawnList.item[i].classList.toggle('important-item-lists-active')
  })
})

// Страница контакты Чекбоксы 

const checkbox = document.querySelectorAll('.comment-form-checkbox-label')
const wrappCheck = document.querySelectorAll('.comment-form-confid')
const mainCheck = document.querySelectorAll('.comment-form-checkbox')

wrappCheck.forEach(function(check, i){
  check.addEventListener('click', function(){
    if(mainCheck[i].checked == false && !checkbox[i].classList.contains('comment-form-checkbox-label-active')){
      mainCheck[i].checked = true
      checkbox[i].classList.add('comment-form-checkbox-label-active')
    } else{
      mainCheck[i].checked = false
      checkbox[i].classList.remove('comment-form-checkbox-label-active')
    }
  })
})

// Страница контакты выезжающе списки

const contactDropDawnList = {
  arrow: document.querySelectorAll('.contact-arrow'),
  item: document.querySelectorAll('.contact-lists'),
  block: document.querySelectorAll('.contact-block')
}

contactDropDawnList.block.forEach(function(block, i){
  block.addEventListener('click', () =>{
    contactDropDawnList.arrow[i].classList.toggle('contact-arrow-active')
    contactDropDawnList.item[i].classList.toggle('contact-lists-active')
  })
})

