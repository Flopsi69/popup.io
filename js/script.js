$(document).ready(function(){
  $('.open-popup-link').click(function(e){
    e.preventDefault();
    $('.shadow-popup').fadeIn();
  })


  $('.form-wrapper .close-popup').click(function(e){
    e.preventDefault();
    $('.shadow-popup').fadeOut();
  })
})