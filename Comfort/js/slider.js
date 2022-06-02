'use strict';

$('.product-example-slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-example-dotslides-carousel'
});
$('.product-example-dotslides-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-example-slides',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true
});