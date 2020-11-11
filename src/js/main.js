//=require jquery/dist/jquery.js
//=require slick-carousel/slick/slick.js
//=require @fancyapps/fancybox/dist/jquery.fancybox.js

$(document).ready(function () {
  $(".js-open-menu-btn").on("click", function () {
    $("#main-menu").addClass("active");
    $("body").addClass("overflow-hidden");
  });
  $(".js-close-menu-btn").on("click", function () {
    $("#main-menu").removeClass("active");
    $("body").removeClass("overflow-hidden");
  });

  $(".js-awards-slider").slick({
    rows: 0,
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    nextArrow: ".js-awards-next",
    prevArrow: ".js-awards-prev",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(window).on("load", function () {
  $(".preloader").fadeOut();
});
