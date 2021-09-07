/**
 *
 * @license utilities.js 1.0 Variables
 * Copyright 2021 Bolt Reactor (Private) Ltd. All rights reserved.
 *
 */

/*
 * Toggles MDC Drawer.
 * */
$(document).ready(function () {
    const $mdcTriggerDrawer = $(".js-trigger-mdc-drawer");
    const $mdcDrawer = $(".js-mdc-drawer");
    const $mdcCloseDrawer = $(".js-close-drawer");
    $mdcTriggerDrawer.click(function () {
        $("html").addClass("overflow-hidden");
        $mdcDrawer.addClass("mdc-drawer--open mdc-drawer--animate mdc-drawer--opening");
        setTimeout(function () {
            $mdcDrawer.removeClass("mdc-drawer--opening mdc-drawer--animate");
        }, 500);
    });
    $mdcCloseDrawer.click(function () {
        $mdcDrawer.removeClass("mdc-drawer--open");
        $mdcDrawer.addClass("mdc-drawer--closing");
        setTimeout(function () {
            $mdcDrawer.removeClass("mdc-drawer--closing");
        }, 500);
        $("html").removeClass("overflow-hidden");
    });
});

/*
 * Toggles top app bar shadow
 * */
$(document).ready(function () {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll >= 128) {
            $(".js-top-app-bar").addClass("mdc-top-app-bar--shadow");
        } else {
            $(".js-top-app-bar").removeClass("mdc-top-app-bar--shadow");
        }
    });
});

/*
 * Toggles top app bar background color
 * */
$(document).ready(function () {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll >= 128) {
            $(".js-top-app-bar-bg").removeClass("bg-transparent");
        } else {
            $(".js-top-app-bar-bg").addClass("bg-transparent");
        }
    });
});

/*
 * Toggles side menu 1
 * */
$(document).ready(function () {
    const $TriggerSideMenu1 = $(".js-toggle-side-menu1");
    const $MainPage = $(".page");
    $TriggerSideMenu1.click(function () {
        $MainPage.toggleClass("side-menu-open");
    });
});

// $(document).ready($(window).bind("resize", checkPosition));
//
// function checkPosition() {
//     const $MainPage = $(".page");
//     if ($(window).width() < 1024) {
//         $MainPage.removeClass("side-menu-open");
//     } else {
//         $MainPage.addClass("side-menu-open");
//     }
// }

/*
 * Swiper carousel
 * */
$(document).ready(function () {
    var mySwiper = new Swiper('.swiper1', {
        speed: 5,
        cssMode: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        }
    });
    var mySwiperFreeMode = new Swiper('.swiper2', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

    });
});

/* Accordion */
$(document).ready(function () {
    var elements = document.getElementsByClassName("accordion__column");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {

            // remove class from sibling

            var el = elements[0];
            while (el) {
                if (el.tagName === "DIV") {
                    //remove class
                    el.classList.remove("active-accordion");

                }
                // pass to the new sibling
                el = el.nextSibling;
            }

            this.classList.add("active-accordion");
        };
    }
});