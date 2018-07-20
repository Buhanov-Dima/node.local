$(document).ready(function(){

var timerId = '0';
   
    if ($(window).width()>768) {

        document.onscroll = function() {onWheel();};
    }


    function onWheel(e) {
        
        var top = $(window).scrollTop();
        var yes = $("#block-2").offset().top;
        
          if(top > yes/1.4 && $('.news3').hasClass('active')==false && timerId == '0') {

          	timerId = setInterval(function() {
            
              if ($('.news-r2').hasClass('active')==true) {
                $('.news-r2').removeClass('active');
                $('.news3').addClass('active').animate({opacity: 1}, 600);
                clearInterval(timerId);
              }

              if ($('.news2').hasClass('active')==true) {
                $('.news2').removeClass('active');
                $('.news-r2').addClass('active').animate({opacity: 1}, 600);
              }

              if ($('.news-r1').hasClass('active')==true) {
                $('.news-r1').removeClass('active');
                $('.news2').addClass('active').animate({opacity: 1}, 600);
              }

              if ($('.news1').hasClass('active')==true) {
                $('.news1').removeClass('active');
                $('.news-r1').addClass('active').animate({opacity: 1}, 600);
              }

              if ($('.news').hasClass('active')!=true && $('.news-r').hasClass('active')!=true) {
                $('.news1').addClass('active').animate({opacity: 1}, 600);
              }

            }, 2500);

          }
    }

                
 


});