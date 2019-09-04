(function($) {
    $(document).ready(function() {


        /* Слайдшоу */

        $('.owl-carousel').owlCarousel({
            items: 1,
            margin: 0,
            /* nav: true,*/
            loop: true

        });



        $(".header").on("click", function() {
            $("#menu").show();
        });

        /* Обратная связь */
        /* Всплывающие окна */

        $('.lp-mfp-inline').magnificPopup({
            type: 'inline'
        });
        /*  $('#lp-fb1').wiFeedBack({
              fbScript: 'blocks/wi-feedback.php',
              fbLink: '.lp-fb1-link',
              fbColor: 'rgba(65, 107, 87, 0.75);'
          });*/

        /*menu text*/
        $(".mm-navbar__title").text("основное меню сайта")
        console.log($(".mm-navbar__title").text());


        // Анимация сообщения о результате
        /*   var showmsg = new TimelineMax();
           showmsg.add(TweenMax.to(".msg", 0.7, { opacity: 1, y: -40, ease: Expo.easeOut }));
           showmsg.add(TweenMax.to(".msg", 0.7, { opacity: 0, y: 0, ease: Expo.easeOut, delay: 2 }));
           showmsg.pause();*/

        // Анимация плашки слова "подождите"
        /*  var loadanim = TweenLite.to(".loading", 1, { autoAlpha: 0.8 });
          loadanim.pause();*/

        // Отправка данных на сервер
        $('#form').trigger('reset');
        $(function() {
            'use strict';
            $('#form').on('submit', function(e) {
                $('.msg').removeClass('error success');
                $('input').removeClass('inputerror');
                loadanim.play();
                e.preventDefault();
                $.ajax({
                    url: 'send.php',
                    type: 'POST',
                    contentType: false,
                    processData: false,
                    data: new FormData(this),
                    success: function(msg) {
                        console.log(msg);
                        if (msg == 'ok') {
                            $('#form').trigger('reset');
                            $('.amount').text('Выберите файлы');
                            $('label').removeClass('active');
                            $('.msg').text('Сообщение успешно отправлено').addClass('success');
                            showmsg.restart();
                            loadanim.duration(0.3).reverse();
                        } else {
                            if (msg == 'mailerror') {
                                $("#email").addClass('inputerror');
                            }
                            $('.msg').text('Ошибка. Сообщение не отправлено').addClass('error');
                            showmsg.restart();
                            loadanim.duration(0.3).reverse();
                        }
                    }
                });
            });
        });
        if ($(window).width() >= '994') {

            $(".sidebar").height($(".slideshow_container").height() + "px");
        }




    });
})(jQuery);


/*mobile menu*/

/*function menu() {*/

document.addEventListener(
    "DOMContentLoaded", () => {
        if (document.documentElement.clientWidth < 994) {
            new Mmenu("#menu", {
                "navbars": [{
                        "position": "top"
                    },
                    {
                        "position": "bottom",
                        "content": [
                            ""
                        ]
                    }
                ],
                "extensions": [
                    "border-none"
                ]
            });
        };




        function resizeContent() {
            let q = document.getElementById("slideshow").clientHeight;
            document.getElementById("sidebar").style.height = q + "px";
        };

        window.onresize = function() {
            if (document.documentElement.clientWidth >= 994) { setTimeout(resizeContent, 100); }

        }
    }
)

/*};*/
/*document.addEventListener("DOMContentLoaded", menu());*/
/*window.addEventListener("resize", menu(), false);*/