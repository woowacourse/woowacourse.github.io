$(document).ready(function() {
    $(function(){
        "use strict";
        $(window).scroll(function() {
            var nav = $(".navbar")
            if (nav.offset().top > 10)  {
                nav.addClass("bg-white").addClass("border bottom");
                nav.removeClass("no-border");
                $(".navbar ul li a").removeClass("text-white");

                $(".logo-white").addClass('d-none');
                $(".logo-dark").removeClass('d-none');
            } else {
                nav.addClass("no-border");
                nav.removeClass("bg-white").removeClass("border bottom");
                $(".navbar ul li a").addClass("text-white");

                $(".logo-white").removeClass('d-none');
                $(".logo-dark").addClass('d-none');
            }
        });
    });
});