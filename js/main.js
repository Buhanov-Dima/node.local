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

    NewsRotator();
    setInterval(NewsRotator, 4000);
    
});


var newsIndex = 1;
function NewsRotator() {
  $(".news").css({'opacity':'0', 'transition':'.7s'});
  $(".news" + newsIndex).css({'opacity':'1', 'transition':'.7s'});
  $(".news-r").css({'opacity':'0', 'transition':'.7s'});
  $(".news-r" + newsIndex).css({'opacity':'1', 'transition':'.7s'});
  
  var newsCount = 3;
  newsIndex++;
  if(newsIndex > newsCount) {
    newsIndex = 1;
  }
}