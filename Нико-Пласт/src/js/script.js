$('[data-modal=book]').on('click', function(){
    $('.overlay').fadeIn('slow');
});
$('.modal_close').on('click', function(){
    $('.overlay').fadeOut('slow');
})