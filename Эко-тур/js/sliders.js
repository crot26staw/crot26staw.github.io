// Слайдер из блока "Почему мы"
$('.sliders-adv').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sliders-nav-adv'
  });
$('.sliders-nav-adv').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.sliders-adv',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
});

// Слайдер с комментариями
$('.reviews-wrapper-main').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 899,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});

// Слайдеры со страницы Туры

// Слайдер со страницы Туры Первый слайдер
$('.excurs-sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.excurs-nav-sliders'
});
$('.excurs-nav-sliders').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.excurs-sliders',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 899,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});

// Слайдер со страницы Туры  в блоке Проживание

$('.residence-sliders').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 899,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2
      }
    }
  ]
});

// Слайдер со страницы Туры  с комментариями
$('.reviews-wrapper-tours').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 899,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});

// Слайдер страницы детального просмотра гостевых домов

$('.ryabin-sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.ryabin-nav-sliders'
});
$('.ryabin-nav-sliders').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.ryabin-sliders',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 899,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3
      }
    }
  ]
});

// Слайдер страницы детального просмотра гостевых домов блок Номера
