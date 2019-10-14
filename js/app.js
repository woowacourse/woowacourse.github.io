const APP = (() => {
    'use strict';

    const loadHeader = () => {
        fetch('../include/header.html')
        .then(response => { return response.text() })
        .then(header => document.querySelector('#header-template').innerHTML = header)
    }

    const loadFooter = () => {
        fetch('../include/footer.html')
        .then(response => { return response.text() })
        .then(footer => document.querySelector('#footer-template').innerHTML = footer)
    }

    const initNavbar = () => {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY
            const headerAreaClassList = document.querySelector('.header_area').classList
            scroll ? headerAreaClassList.add('navbar_fixed') : headerAreaClassList.remove('navbar_fixed')
        });
    }

    const initPreloader = () => {
        const preloader = document.getElementById('ctn-preloader')
        preloader.classList.add('loaded')
        if (preloader.classList.contains('loaded')) {
            setTimeout(() => {
                document.getElementById('ctn-preloader').remove()
            }, 500)
        }
    }

    const initMainImgSlider = () => {
        const slider = $(".main_slider")
        if (slider.length) {
            slider.owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                dots: false,
                nav:false,
                autoplay: true,
                slideSpeed: 300,
                mouseDrag: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                responsiveClass:true,
            })
        }
    }

    const init = () => {
        loadHeader()
        initNavbar()
        initMainImgSlider()
        loadFooter()
        initPreloader()
    }

    return {
        init: init,
    }
})()

APP.init()
