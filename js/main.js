$(document).ready(function(){

    var sost = 0;

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


    if ($(window).width()>992) {

        $(window).scroll(function(){

            
            var top = $(window).scrollTop();
            var yes = $("#block-2").offset().top;

            if(top > yes && sost != 5) {
                $(window).scrollTop( $("#block-2").offset().top );

                document.onmousewheel = function (e) {
                  e.preventDefault();

                  if (sost == 0) {
                    sost = 1;
                    $('.news1').addClass('active');
                  }
                  if (sost == 1) {
                    sost = 2;
                    $('.news1').removeClass('active');
                    $('.news-r1').addClass('active');
                  }
                  if (sost == 2) {
                    sost = 3;
                    $('.news-r1').removeClass('active');
                    $('.news2').addClass('active');
                  }
                  if (sost == 3) {
                    sost = 4;
                    $('.news2').removeClass('active');
                    $('.news-r2').addClass('active');
                  }
                  if (sost == 4) {
                    sost = 5;
                    $('.news3').removeClass('active');
                    $('.news-r2').addClass('active');
                  }

                }


            }
            /*
        
            if ($(this).scrollTop() > 800 && $(this).scrollTop() < 1000)  {

                $('.news').removeClass('active');
                $('.news-r').removeClass('active');
                $('.news1').addClass('active');
            }

            if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1200)  {

                $('.news').removeClass('active');
                $('.news-r').removeClass('active');
                $('.news-r2').addClass('active');

            }
            */


        });

    }



   

});