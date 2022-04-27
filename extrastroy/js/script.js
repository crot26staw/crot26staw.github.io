'use strict';
// Слайдер
const allPhoto = document.querySelectorAll('.work-img');
const mainPhoto = document.querySelectorAll('.work-main-img');
const nextArrow = document.querySelector('.work-next-arrow');
const prevArrow = document.querySelector('.work-prev-arrow');

function hideSlide(item, clas) {
  item.forEach (item => {
    item.classList.remove(clas);
  });
}
hideSlide(mainPhoto, 'work-main-img-active');
hideSlide(allPhoto, 'work-img-active');

function showSlide(item, i, clas) {
  item[i].classList.add(clas);
}

let index = 0;
showSlide(mainPhoto, index, 'work-main-img-active');
showSlide(allPhoto, index, 'work-img-active');

nextArrow.addEventListener('click', () => {
  hideSlide(mainPhoto, 'work-main-img-active');
  if(index < mainPhoto.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }
  showSlide(mainPhoto ,index, 'work-main-img-active');
  hideSlide(allPhoto, 'work-img-active');
  showSlide(allPhoto, index, 'work-img-active');
});

prevArrow.addEventListener('click', () => {
  hideSlide(mainPhoto, 'work-main-img-active');
  index = index - 1;
  if(index < 0) {
    index = mainPhoto.length - 1;
  } 
  showSlide(mainPhoto ,index, 'work-main-img-active');
  hideSlide(allPhoto, 'work-img-active');
  showSlide(allPhoto, index, 'work-img-active');
});

allPhoto.forEach(function(item, i) {
  item.addEventListener('click', () => {
    hideSlide(allPhoto, 'work-img-active');
    hideSlide(mainPhoto, 'work-main-img-active');
    item.classList.add('work-img-active');
    index = i;
    showSlide(mainPhoto ,index, 'work-main-img-active');
  });
});

