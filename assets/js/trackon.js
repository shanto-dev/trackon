$(document).ready(function () {
    $(window).on("scroll", function () {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition > 250) {
            $(".main_header").addClass("trk_header_sticky");
        } else {
            $(".main_header").removeClass("trk_header_sticky");
        }
    });
    var show_btn = $('.main_header__search');

    show_btn.click(function () {
        $("#myInput").modal('show');
    });

    // Shuffle 
    $(window).on('load', function () {
        if ($(".shuffle_wrap").length > 0) {
            var Shuffle = window.Shuffle;
            var $grid = new Shuffle(document.querySelector('.shuffle_wrap'), {
                itemSelector: '.shuf_item',
                sizer: '.shuf_sizer',
            });

            $('.filter_nav li').on('click', function () {
                $('.filter_nav li').removeClass('active');
                $(this).addClass('active');
                var groupName = $(this).attr('data-group');
                $grid.filter(groupName);
            });
        }
    });

    if ($('.post_thumbCarousel').length > 0) {
        $('.post_thumbCarousel').each(function () {
            var $this = $(this);
            $this.owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: true,
                navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    }
                }
            });
        });
    }

    // Nice select 
    if ($('.ps_cat_select').length > 0) {
        $('.ps_cat_select').niceSelect();
    }

    // Popup Nav 
    $('.menu_btn').on('click', function (e) {
        e.preventDefault();
        $('.popup_menubar_sec').toggleClass('active');
    });
    $('.popup_menubar_overlay, #popup_nav_Closer').on('click', function () {
        $('.popup_menubar_sec').removeClass('active');
        $("body").removeClass("menu__open");
    });
    





})






// scroll Prallax 
window.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;

    // Hero section parallax
    const heroParallax = document.getElementById("hero_parallax");
    if (heroParallax) {
        let heroOffset = heroParallax.offsetTop;
        heroParallax.style.backgroundPositionY = (scrollPosition - heroOffset) * 0.7 + "px";
    }

    // Review section parallax
    const revParallax = document.getElementById("review_parallax");
    if (revParallax) {
        let reviewOffset = revParallax.offsetTop;
        revParallax.style.backgroundPositionY = (scrollPosition - reviewOffset) * 0.7 + "px";
    }
    // Service section parallax
    const servParallax = document.getElementById("serviceTwo_prallax");
    if (revParallax) {
        let reviewOffset = servParallax.offsetTop;
        servParallax.style.backgroundPositionY = (scrollPosition - reviewOffset) * 0.5 + "px";
    }

    // Lookbook section parallax
    const slkbkParallax = document.getElementById("lookbookOne_prallax");
    if (revParallax) {
        let reviewOffset = slkbkParallax.offsetTop;
        slkbkParallax.style.backgroundPositionY = (scrollPosition - reviewOffset) * 0.5 + "px";
    }
});