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

   
    if ($(window).width()>768) {

        document.onscroll = function() {onWheel();};
    }


    function onWheel(e) {
        
        var top = $(window).scrollTop();
        var yes = $("#block-2").offset().top;
        
          if(top > yes/1.3 && $('.news3').hasClass('active')==false) {
            
              if ($('.news-r2').hasClass('active')==true) {
                $('.news-r2').removeClass('active');
                $('.news3').addClass('active').animate({opacity: 1}, 400);
              }

              if ($('.news2').hasClass('active')==true) {
                $('.news2').removeClass('active');
                $('.news-r2').addClass('active').animate({opacity: 1}, 400);
              }

              if ($('.news-r1').hasClass('active')==true) {
                $('.news-r1').removeClass('active');
                $('.news2').addClass('active').animate({opacity: 1}, 400);
              }

              if ($('.news1').hasClass('active')==true) {
                $('.news1').removeClass('active');
                $('.news-r1').addClass('active').animate({opacity: 1}, 400);
              }

              if ($('.news').hasClass('active')!=true && $('.news-r').hasClass('active')!=true) {
                $('.news1').addClass('active').animate({opacity: 1}, 400);
              } 

          }
    }

                
 

   
    


  

   
   /*$('#block-2').bind('mousewheel DOMMouseScroll', function(e) {
    var scrollTo = null;
    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }
    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }});*/

});