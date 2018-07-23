$(document).ready(function(){


	$(".careers-ul li").click(function(e) {
	  e.preventDefault();
	  $(".careers-ul li").removeClass('active');
	  $(this).addClass('active');
	});

    $('.check-f input').click(function(e) {
      e.preventDefault();
      $(this).attr('checked', 'checked');
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


	$('.btn-down-1').click(function(){
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});


    $('.footer-form').on('submit', checkEmail);
    $('.popup-form-mail').on('submit', sendEmail);

    function checkEmail (e) {
        e.preventDefault();
        var $form = $(this);
        var hasError = false;
        var $mailInput = $form.find('input[name="email"]');
        var valMail = $mailInput.length > 0 ? $mailInput.val() : '';
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if (valPhone == '' && pattern.test(valMail) == false) {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
        } else {
            $.fancybox.open({src  : '#selectableModal-subscribe', type : 'inline',});
        }

        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);

        if (hasError) {
            return false;
        }

    }

    function sendEmail (e) {
        e.preventDefault();
        var $form = $('.footer-form');
        var hasError = false;
        var $mailInput = $form.find('input[name="email"]');
        var valMail = $mailInput.length > 0 ? $mailInput.val() : '';
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if (valPhone == '' && pattern.test(valMail) == false) {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
            $.fancybox.close(true);
        }
        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);
        if (hasError) {
            return false;
        }
        var obj = {
            mail: valMail,
        };
        $.ajax({
            type: "POST",
            url: "/subscribe.php",
            data: obj,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            beforeSend: function(){
            },
            success: function(html){
                $mailInput.val("");
                $.fancybox.close(true);
            },
        });
    }

    

});