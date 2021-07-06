$(document).ready(function(){
    $(document).on("click", ".heading-man-2", function(){
        $(".man-info").hide();
        $(".man-info-2").show(500);
        $(".man-info-3").hide();
    })

    $(document).on("click", ".heading-man-3", function(){
        $(".man-info-2").hide();
        $(".man-info-3").show(500);
        $(".man-info").hide();
    })

    $(document).on("click", ".heading-man", function(){
        $(".man-info-2").hide();
        $(".man-info").show(500);
        $(".man-info-3").hide();
    })

    $(document).on("click", ".open-map", function(){
        $(".locate-me").show(1000);
    })

    $(document).on("click", ".fa-search", function(){
        $(".reach-items").show(500);
    })

    $(document).on("click", ".x-search", function(){
        $(".reach-items").hide(500);
    })

    $(document).on("click", ".close-panel", function(){
        $(".locate-me").hide(1000);
    })
    $(document).on("click", ".close-panel", function(){
        $(".menu-2").hide(1000);
    })
    $(document).on("click", ".hamburger-none", function(){
        $(".menu-2").hide(1000);
    })

    $(document).on("click", ".hamb-menu", function(event){
        $(".menu-2").show(1000);
        $(".hamburger-none").show();
        $(".hamb-menu").hide(1000);  
        // $(".fa-times").css({
        //     "display":"block"
        // });
    })

        $('.membership').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,

      });

      $('.slider-blog').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false

      });

})