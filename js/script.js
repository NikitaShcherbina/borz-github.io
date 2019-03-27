$(document).ready(function(){
	$('.single-item').slick({
		infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    variableWidth: true,
	});
	$('.single-item2').slick({
		infinite: true,
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    variableWidth: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                centerMode: true,
              }
        }]
	});
    $('.single-item3').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
    });
    $(function() {
      $(".slider__item").each(function(i) {
        $("<div><h3><img src='img/product/img" + ++i + ".png'></h3></div>").appendTo(".slider-nav");
      });
      $(".slider-wrap").slick({
        slidesToShow: 1,
        asNavFor: ".slider-nav",
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true
      });
      $(".slider-nav").slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-wrap",
        nextArrow: ".slider__next",
        prevArrow: ".slider__prev",
        focusOnSelect: true
      });
    });
	$(function() {
        $("[data-fancybox]").fancybox();
    });

    $(".nav").load("nav_and_footer.html .nav_holder", function(){
        $(".bg_bag").click(function(){
          if ($(".bag-open").css("opacity") == "0") {
            $(".bag-open").addClass("open");
          } else {
            $(".bag-open").removeClass("open");
          }
        });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".bag"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".bag-open").removeClass("open"); // скрываем его
            }
        });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div1 = $(".search"); // тут указываем ID элемента
            if (!div1.is(e.target) // если клик был не по нашему блоку
                && div1.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".search input").removeClass("active"); // скрываем его
            }
        });
        $(".search img").click(function(){
            $(".search input").toggleClass("active");
        });
        if ($(window).width() > 1200) {
            $(".nav ul li").hover(
                function(){
                $(this).find(".menu-open").stop().slideDown("fast");
                $(this).find(".link").css("color", "#d4bb55");
                },
                function(){
                    $(this).find(".link").css("color", "");
                    $(this).find(".menu-open").stop().slideUp("fast");
                }
            );
        }
        $(".menu-open").hide();
        $('.show-menu-btn').on('click', function() {
            $(this).toggleClass('open');
            $('.overlay-menu').toggleClass('active');
            $('body').toggleClass('menu-opened');
            return false;
        });
        $(".show-menu-btn").click(function(){
            $("header .nav ul").slideToggle("fast");
            $(".menu-open").slideUp("fast");
        });
        if ($(window).width() < 1200) {
            $("header .nav ul").hide();
            $(".open_menu").click(function(){
              $(".menu-open").slideUp("fast");
              $(this).siblings(".menu-open").stop().slideToggle("fast");
            });
        }
    });
    $(".nav2").load("nav_and_footer.html .nav2_holder");
    $(".footer").load("nav_and_footer.html .footer", function(){
        if ($(window).width() < 1580) {
            $(".footer > .container").removeClass("width2");
        };
    });
    $(".popup-forma2").load("nav_and_footer.html .popup-forma2", function(){
      $('.form-trigger').on('click', function() {
        $(this).toggleClass('is-clicked');
        $('.popup-forma2').toggleClass('is-active');
        return false;
      });
      $('.popup-close').on('click', function() {
          $('.form-trigger').removeClass('is-clicked');
          $('.popup-forma2').removeClass('is-active');
          return false;
      });
      $('.popup-forma2__cover').on('click', function() {
          $('.form-trigger').removeClass('is-clicked');
          $('.popup-forma2').removeClass('is-active');
          return false;
      });
      $(window).keydown(function(e) {
          if ($('.popup-forma2').hasClass('is-active')) {
              if (e.which === 27) {
                  $('.form-trigger').removeClass('is-clicked');
                  $('.popup-forma2').removeClass('is-active');
              }
          }
      });
       $("#Phone_popup").intlTelInput(
        {
          utilsScript       : 'js/utils.js',
          defaultCountry    : 'auto',
          separateDialCode  : false,
          nationalMode      : false,
          initialCountry    : 'auto',
          geoIpLookup       : function (callback) {
            $.get("https://ipinfo.io", function () {
            }, "jsonp").always(function (resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },
          preferredCountries: ['ua', 'ru', 'by', 'kz']
        });
    });

    var cont_f_w = $("header .container").outerWidth(true);
    var cont_w = $("header .container").outerWidth();
    var width_nav = (cont_f_w - cont_w)/2;
    $(".nav2").width(width_nav);
     if ($(window).width() < 1900) {
        $(".sizing-man .container, .sizing-wooman .container").removeClass("width2");
     };
     new WOW().init();
     

    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 0, 15000 ],
      step: 50,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + "₽" );
        $( "#amount2" ).val( ui.values[ 1 ] + "₽" );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "₽" );
    $( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ) + "₽" );

    $(".size-open span").click(function(){
      $(".size-open span").removeClass("active");
      $(this).addClass("active");
      $(".text4 .select .select-size").text($(this).text());
    })
});


$(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });




     $(".opis-top div").click(function(){
        $(".opis-top div").removeClass("activ-opis");
        $(".opis-top div").addClass("off-opis");
        $(this).removeClass("off-opis").addClass("activ-opis");
     });
     

     $(".info-button div").click(function(){
      $(".info-button div").removeClass("info-activ");
      $(this).addClass("info-activ");
     });

     $(".right3").click(function(){
      $(".info-text").hide("fast");
      $(".info-text2").show("fast");
     });
     $(".left3").click(function(){
      $(".info-text2").hide("fast");
      $(".info-text").show("fast");
     });
     $(".info-text2").hide("");
     $(".otz").hide("");
     $(".opis2").click(function(){
      $(".opis-bottom .width2").hide("fast");
      $(".opis-bottom .otz").show("fast");
     });
     $(".opis1").click(function(){
      $(".opis-bottom .width2").show("fast");
      $(".opis-bottom .otz").hide("fast");
     });

     $(".sortirovka div").click(function(){
      $(".right .select").text($(this).text());
      $("body").hover();
     })

     $(".filter-top .right p img").click(function(){
      if($(".sortirovka").css("display") == "none") {
        $(".filter-top .right p img").css("transform", "rotate(180deg)");
      } else {
        $(".filter-top .right p img").css("transform", "rotate(0deg)")
      }
      $(".sortirovka").slideToggle("fast");
     })
 });