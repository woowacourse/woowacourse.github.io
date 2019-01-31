(function ($) {
    'use strict';

    function initTooltip() {
        tippy('#kakao-btn', {
            arrow: true,
            animation: 'shift-toward',
            placement: 'left',
            distance: 10,
            content: document.querySelector('#kakao-btn-html')
        });
        $(window).scroll(function () {
            tippy.hideAllPoppers()
        });
    }

    function init() {
        initTooltip();
    }
    init();
})(jQuery);
