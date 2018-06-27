$(document).ready(function(){

	$(".careers-ul li").click(function(e) {
	  e.preventDefault();
	  $(".careers-ul li").removeClass('active');
	  $(this).addClass('active');
	});

	$('.tab-box a').click(function(e) {
        e.preventDefault();
        $('.tab-box .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tech-b3').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    })


});
