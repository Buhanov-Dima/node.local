$(document).ready(function(){

$('#par-1').paroller();
$('#par-2').paroller();
$('#par-3').paroller();
$('#par-4').paroller();
$('#par-5').paroller();
$('.wrapper-plashka').paroller();
	

  var navbar =  $('.plashka');
  var wrapper = $('#block-2');

  $(window).scroll(function(){
    var nsc = $(document).scrollTop();
    var bp1 = wrapper.offset().top;
    var bp2 = bp1 + wrapper.outerHeight()+$(window).height();
    
    if (nsc>bp1) {  navbar.css('position','fixed'); }
    else { navbar.css('position','absolute'); }
    if (nsc>bp2) { navbar.css('top', bp2-nsc); }
    else { navbar.css('top', '60px'); }
  });


});

$(function() {  

    // Custom Easing
    
    
});