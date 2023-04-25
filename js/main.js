
'use strict'
$(document).ready(function () {
    /*попап*/

    function openPopup(id) {
        $(".js-popup[data-id-popup='" + id + "']").fadeIn(300);
        $('body').addClass('lock1');
    }

    function close_popup() {
        $('.js-popup').fadeOut(300);
        $('body').removeClass('lock1');
    }

    $('.js-popup__close').click(close_popup);

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');
        openPopup(index_btn_popup);
    });

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });



    // show and hide blocks in blog__list

    $(".blog__link").click(function(e) {
        e.preventDefault(); 
 
     let ths = $(this);
     let clos = ths.next('.submenu');
     let currentArrow = ths.find($(".icons-arrow"));
         if(clos.is(":visible")) {
            clos.slideUp(300);
             currentArrow.removeClass('active');
         }
         else {
             $(".icons-arrow").removeClass('active');
             $('.submenu').slideUp(300);
             clos.slideDown(300);
             currentArrow.addClass('active');
         }
    });

    // input text in up

    $('.requirements__input').focusin(function(e){
        $(this).prev(".requirements__label").css("opacity", "1")
      })
      $('.requirements__input').focusout(function(e){
        $(this).prev(".requirements__label").css("opacity", "0")
      })


      // Helper function for add element box list in WOW
    WOW.prototype.addBox = function(element) {
        this.boxes.push(element);
       };

       // Init WOW.js and get instance
      var wow = new WOW();
      wow.init();

    //  Attach scrollSpy to .wow elements for detect view exit events,
    //    then reset elements and add again for animation
        $('.square').on('scrollSpy:exit', function() {
       $(this).css({
        'visibility': 'hidden',
        'animation-name': 'none'
       }).removeClass('animated');
       wow.addBox(this);
      }).scrollSpy();

    //header burger 
    let item = 0;
    $('.header__burger').click(function() {
		$('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        
        let itemList = $('.header__list > li');

        if(item) {
            itemList.removeClass('animated');
            itemList.css({'visibility':'hidden','animation-name': 'none'});
            item = 0;
        }
        else {
            itemList.addClass('animated');
            itemList.css({'visibility' : 'visible', 'animation-name':'bounceInUp'});
            item = 1;
        }
    });
    
    

    let linkButton = $('.header-message');
    let abs = $('.text-abs-port');
    let AlreadyDone = false;
    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();

        let offset = linkButton.offset().top + $(window).height();

        if (!AlreadyDone && scroll > offset) {
            linkButton.css("position", "fixed");
            AlreadyDone = true; 
        }
        let absScroll = abs.offset().top + $(window).height();
        if(scroll > absScroll) {
            abs.css("transform", "rotate(-90deg) translate(calc(-50% + 70px), -300%)")
        }
        
        
    });




    $(window).on("load resize",function(){

        if($(window).width() >= 992) {
            
            console.log($(window).width());

            $('.portfolio__item:last-child').hover(
                function() {
                    $( this ).prev().css("width", "0");
                    $( this ).css("width", "calc(100% *2 / 3)");
                },
                function() {
                    $( this ).css("width", "calc(100% / 3)");
                    $( this ).prev().css("width", "calc(100% / 3)");
                }
            );

            $('.portfolio__item:not(:last-child)').hover(
                function() {
                    $( this ).css("width", "calc(100% *2 / 3)");
                    $( this ).next().css("width", "0");
                },
                function() {
                    $( this ).next().css("width", "calc(100% / 3)");
                    $( this ).css("width", "calc(100% / 3)");
                }
            );
        }
    });

      $("#link1").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 20;
        $('body,html').animate({scrollTop: top}, 400);
    });

    
});


var layer1 = document.getElementById('layer1');
var layer2 = document.getElementById('layer2');
var layer3 = document.getElementById('layer3');

var layer4 = document.getElementById('layer4');
var layer5 = document.getElementById('layer5');
var layer6 = document.getElementById('layer6');

var speed1 = 0.02;
var speed2 = 0.04;
var speed3 = 0.03;
var delay = 800; // задержка после загрузки страницы для коректного отображения анимации элементов после загрузки страницы

// добавляем обработчик события загрузки страницы
window.onload = function() {
  // задержка перед началом эффекта параллакса
  setTimeout(function() {
    // добавляем обработчик события перемещения мыши на странице
    window.addEventListener('mousemove', function(e){
      // получаем значение координаты мыши по оси X
      var x = e.clientX;
      // получаем значение координаты мыши по оси Y
      var y = e.clientY;

      // применяем эффект параллакса к каждому слою
      layer1.style.transform = 'translateX(' + (-x * speed1) + 'px) translateY(' + (-y * speed1) + 'px)';
      layer2.style.transform = 'translateX(' + (-x * speed2) + 'px) translateY(' + (-y * speed2) + 'px)';
      layer3.style.transform = 'translateX(' + (-x * speed3) + 'px) translateY(' + (-y * speed3) + 'px)';

      layer4.style.transform = 'translateX(' + (-x * speed1) + 'px) translateY(' + (-y * speed1) + 'px)';
      layer5.style.transform = 'translateX(' + (-x * speed2) + 'px) translateY(' + (-y * speed2) + 'px)';
      layer6.style.transform = 'translateX(' + (-x * speed3) + 'px) translateY(' + (-y * speed3) + 'px)';

      // добавляем плавность к изменениям на каждом слое
      layer1.style.transition = 'transform 0.8s ease-out';
      layer2.style.transition = 'transform 1s ease-out';
      layer3.style.transition = 'transform 1.2s ease-out';

      layer4.style.transition = 'transform 3s ease-out';
      layer5.style.transition = 'transform 2.5s ease-out';
      layer6.style.transition = 'transform 1.8s ease-out';
    });

    // добавляем обработчик события скролла страницы
    window.addEventListener('scroll', function() {
      // обнуляем значения трансформации каждого слоя
      layer1.style.transform = 'translateX(0px) translateY(0px)';
      layer2.style.transform = 'translateX(0px) translateY(0px)';
      layer3.style.transform = 'translateX(0px) translateY(0px)';

      layer4.style.transform = 'translateX(0px) translateY(0px)';
      layer5.style.transform = 'translateX(0px) translateY(0px)';
      layer6.style.transform = 'translateX(0px) translateY(0px)';
    });
  }, delay);
};