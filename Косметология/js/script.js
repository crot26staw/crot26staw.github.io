$(document).ready(function(){
    $('.services-carousel').slick({
      speed: 1500,
      prevArrow: '<button type="button" class="slick-prev"><img src="../Косметология/images/icons/Prev.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../Косметология/images/icons/Next.png"></button>'
    });
  });

let licenseTabs = document.querySelectorAll('license-patent-info');
let licenseTabsNum = document.querySelectorAll('.license-patent-num'); 
let licenseTabsText = document.querySelectorAll('.license-patent-text'); 
// Первые табы
function hideTabContent() {

    licenseTabsNum.forEach(item => {
      item.classList.remove('license-patent-num-active');
    });

    licenseTabsText.forEach(item => {
      item.classList.remove('license-patent-text-active');
    });
}

function showTabContent(i) {
    licenseTabsNum[i].classList.add('license-patent-num-active');
    licenseTabsText[i].classList.add('license-patent-text-active');
}

hideTabContent();
showTabContent(2);

licenseTabsNum.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideTabContent();
      showTabContent(i);
    });
});

licenseTabsText.forEach((item, i) => {
  item.addEventListener('click', () => {
    hideTabContent();
    showTabContent(i);
  });
});
// Модальное окно
const modal = document.querySelector('.modal');
const showModal = document.querySelector('.nav-btn');
const closeModal = document.querySelector('[data-close]');

showModal.addEventListener('click', () => {
  modal.classList.add('modal-active');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('modal-active');
});

//Вторые табы

const tabsRecomend = document.querySelectorAll('.recomend-prof');
const tabsText = document.querySelectorAll('.recomend-text-descr');

tabsRecomend[0].classList.add('recomend-active');
tabsText[0].classList.add('recomend-text-descr-active');

function delColor() {
  tabsRecomend.forEach(item => {
    item.classList.remove('recomend-active');
  });
}
function delText() {
  tabsText.forEach(item => {
    item.classList.remove('recomend-text-descr-active');
  });
}

tabsRecomend.forEach((item, i) => {
  item.addEventListener('click', () => {
    let num = i;
    delColor();
    delText();
    tabsRecomend[i].classList.add('recomend-active');
    tabsText[num].classList.add('recomend-text-descr-active');
  });
});