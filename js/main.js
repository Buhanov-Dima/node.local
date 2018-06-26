$(document).ready(function(){

$(".careers-ul li").click(function(e) {
  e.preventDefault();
  $(".careers-ul li").removeClass('active');
  $(this).addClass('active');
})


});
