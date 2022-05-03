
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

// Модальное окно отправка формы

const showModal = document.querySelectorAll('.services-item-btn');
const hideModal = document.querySelector('.modal-form-cross');
const modalForm = document.querySelector('.modal-form');
const form = document.querySelector('form');


function openModal(){
  modalForm.classList.add('modal-form-active');
}

function closeModal(){
  modalForm.classList.remove('modal-form-active');
}

showModal.forEach(btn => {
  btn.addEventListener('click', ()=> {
    openModal();
  });
});

hideModal.addEventListener('click', ()=> {
  closeModal();
});

modalForm.addEventListener('click', (e) => {
  if(e.target === modalForm || e.target.getAttribute('data-close') == ''){
    closeModal();
  }
});

const message = {
  loading: 'Загрузка...',
  success: 'Спасибо! Скоро мы с вами свяжемся',
  failure: 'Произошла ошибка...'
};

form.addEventListener('submit', formSend);

async function formSend(e) {  // Отправка формы без обновления страницы
  e.preventDefault();

  let statusMessage = document.createElement('div');
  statusMessage.classList.add('modal-form-status');
  statusMessage.textContent = message.loading;
  form.appendChild(statusMessage);

  fetch('/mailer/smart.php', {
    method: 'POST',
    body: new FormData(form)
  }).then(async res => {
    if (res.status == 200) { // ok
      statusMessage.textContent = message.success;
      form.reset();
    }
    if (res.status != 200) {
      statusMessage.textContent = message.failure;
    }
  });
}

// Бургер

const nav = document.querySelector('nav');
const burger = document.querySelector('.burger-menu');

burger.addEventListener('click', () =>{
  burger.classList.toggle('burger-menu-active');
  nav.classList.toggle('nav-active');
});

// Плавный скролл

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

