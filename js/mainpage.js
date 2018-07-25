$(document).ready(function(){

   
    if ($(window).width()>768) {

        document.onmousewheel = function(e) {onWheel2(e);};
        //window.addEventListener('mousewheel', onWheel2(), false);
    }

    function onWheel2(e) {
    	setTimeout(function(){onWheel(e);}, 0);
    }

    function scrollHandler(e) {
    	alert("3");
	    e.preventDefault();
		e.stopPropagation();
		return false; 
    }

    function onWheel(e) {

        var top = $(window).scrollTop();
        var yes = $("#block-2").offset().top;
        
          if(top >= yes && $('.news3').hasClass('active')==false) {
          	window.addEventListener('mousewheel', scrollHandler);
          	setTimeout(function(){
              if ($('.news-r2').hasClass('active')==true) {
              	$('.news-r2').animate({opacity: 0}, 600);
              	$('.news3').addClass('active').animate({opacity: 1}, 600);
              	setTimeout(function(){
              		$('.news-r2').removeClass('active');
              	}, 600);
              }

              if ($('.news2').hasClass('active')==true) {
                $('.news2').animate({opacity: 0}, 600);
                $('.news-r2').addClass('active').animate({opacity: 1}, 600);
                setTimeout(function(){
              		$('.news2').removeClass('active');
              	}, 600);
              }

              if ($('.news-r1').hasClass('active')==true) {
                $('.news-r1').animate({opacity: 0}, 600);
                $('.news2').addClass('active').animate({opacity: 1}, 600);
                setTimeout(function(){
              		$('.news-r1').removeClass('active');
              	}, 600);
              }

              if ($('.news1').hasClass('active')==true) {
                $('.news-r1').addClass('active').animate({opacity: 1}, 600);
                $('.news1').animate({opacity: 0}, 600);
                setTimeout(function(){
              		$('.news1').removeClass('active');
              	}, 600);
              }

              if ($('.news').hasClass('active')!=true && $('.news-r').hasClass('active')!=true) {
                $('.news1').addClass('active').animate({opacity: 1}, 600);
              }
            }, 600);

          } else {window.removeEventListener('scroll', scrollHandler);}
    }


});