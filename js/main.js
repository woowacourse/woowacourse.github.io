(function ($) {
    "use strict";

    function initHeader() {
        $(window).scroll(function() {
            var nav = $(".navbar")
            if (nav.offset().top > 10)  {
                nav.addClass("bg-white").addClass("border bottom");
                nav.removeClass("no-border");
                $(".navbar ul li a").removeClass("text-white");

                $(".logo-white").addClass("d-none");
                $(".logo-dark").removeClass("d-none");

                $(".nav-right.mobile-menu-btn .ti-menu").removeClass("text-white")
            } else {
                nav.addClass("no-border");
                nav.removeClass("bg-white").removeClass("border bottom");
                $(".nav-right.mobile-menu-btn .ti-menu").addClass("text-white")
                $(".nav-right.desktop-menu-btn li a").addClass("text-white");
                $(".nav-right.mobile-menu-btn .dropdown-toggle").addClass("text-white")

                $(".logo-white").removeClass("d-none");
                $(".logo-dark").addClass("d-none");
            }
        });
    }
    
    function initModal() {
        if (document.cookie.indexOf("ncookie=done") < 0){
            $("#modal-lg").modal("show")
            $("#today-close-btn").click(function () {
                setCookie( "ncookie","done",24);
                $("#modal-lg").modal("hide")
            })
        }else{
            $("#modal-lg").attr('style', 'visibility:hidden');
        }

    }

    function setCookie(name, value, expirehours) {
        var todayDate = new Date();
        todayDate.setHours( todayDate.getHours() + expirehours );
        document.cookie = name + "=" +escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }

    function init() {
        initHeader();
    }
    init();
})(jQuery);
