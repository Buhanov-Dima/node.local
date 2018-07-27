$(document).ready(function(){


    jQuery.scrollSpeed(100, 800);

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
    $('.contacts-form').on('submit', checkForm);
    $('.popup-form').on('submit', sendForm);

    function checkEmail (e) {
        e.preventDefault();
        var $form = $(this);
        var hasError = false;
        var $mailInput = $form.find('input[name="email"]');
        var valMail = $mailInput.length > 0 ? $mailInput.val() : '';
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if (valMail == '' && pattern.test(valMail) == false) {
            $mailInput.addClass('invalid_text_field');
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

    function checkForm (e) {
        e.preventDefault();
        var $form = $(this);
        var hasError = false;
        var $mailInput = $form.find('input[name="email"]');
        var $nameInput = $form.find('input[name="name"]');
        var $phoneInput = $form.find('input[name="phone"]');
        var valMail = $mailInput.length > 0 ? $mailInput.val() : '';
        var valPhone = $phoneInput.length > 0 ? $phoneInput.val() : '';
        var valName = $nameInput.length > 0 ? $nameInput.val() : '';
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if (valMail == '' && pattern.test(valMail) == false) {
            $mailInput.addClass('invalid_text_field');
            hasError = true;
        }

        if (valName == '') {
            $nameInput.addClass('invalid_text_field');
            hasError = true;
        }

        if (valPhone == '') {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
        }

        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);

        if (hasError) {
            return false;
        } else {
        	$.fancybox.open({src  : '#selectableModal', type : 'inline',});
        }

    }

    function sendEmail (e) {
        e.preventDefault();
        var $form = $('.footer-form');
        var hasError = false;
        var $mailInput = $form.find('input[name="email"]');
        var valMail = $mailInput.length > 0 ? $mailInput.val() : '';
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if (valMail == '' && pattern.test(valMail) == false) {
            $mailInput.addClass('invalid_text_field');
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

    function sendForm (e) {
        e.preventDefault();
        var $form = $('.contacts-form');
        var hasError = false;
        var $mailInput = $form.find('input[name="email"]');
        var $nameInput = $form.find('input[name="name"]');
        var $phoneInput = $form.find('input[name="phone"]');
        var $companyInput = $form.find('input[name="company"]');
        var $websiteInput = $form.find('input[name="website"]');
        var $businessInput = $form.find('input[name="business"]');
        var $subjectInput = $form.find('input[name="subject"]');
        var $messageInput = $form.find('input[name="message"]');
        var valMail = $mailInput.length > 0 ? $mailInput.val() : '';
        var valPhone = $phoneInput.length > 0 ? $phoneInput.val() : '';
        var valName = $nameInput.length > 0 ? $nameInput.val() : '';
        var valcompany = $companyInput.length > 0 ? $companyInput.val() : '';
        var valwebsite = $websiteInput.length > 0 ? $websiteInput.val() : '';
        var valbusiness = $businessInput.length > 0 ? $businessInput.val() : '';
        var valsubject = $subjectInput.length > 0 ? $subjectInput.val() : '';
        var valmessage = $messageInput.length > 0 ? $messageInput.val() : '';
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if (valMail == '' && pattern.test(valMail) == false) {
            $mailInput.addClass('invalid_text_field');
            hasError = true;
        }

        if (valName == '') {
            $nameInput.addClass('invalid_text_field');
            hasError = true;
        }

        if (valPhone == '') {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
        }

        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);

        if (hasError) {
            return false;
        }

        var obj = {
            mail: valMail,
            phone: valPhone,
            name: valName,
            company: valcompany,
            website: valwebsite,
            business: valbusiness,
            subject: valsubject,
            message: valmessage,
        };

        $.ajax({
            type: "POST",
            url: "/sendform.php",
            data: obj,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            beforeSend: function(){
            },
            success: function(html){
                $mailInput.val("");
                $phoneInput.val("");
                $nameInput.val("");
                $companyInput.val("");
                $websiteInput.val("");
                $businessInput.val("");
                $subjectInput.val("");
                $messageInput.val("");
                $.fancybox.close(true);
            },
        });
    };

    
 

});