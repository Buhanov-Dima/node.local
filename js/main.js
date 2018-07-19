$(document).ready(function(){


	$(".careers-ul li").click(function(e) {
	  e.preventDefault();
	  $(".careers-ul li").removeClass('active');
	  $(this).addClass('active');
	});

	  $(".btn-eon").click(function(e) {
	    e.preventDefault();
	    $(".btn-eon ").removeClass('active');
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

    $(".btn-md-open a").click(function(e) {
        e.preventDefault();
        $(".btn-md-open a").removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('id');
        $('.tech-b3').not(id).css({'display':'flex'});
        $(id).fadeIn(1500);
    });


	$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top-130}, 1000);
        return false;
	});

});