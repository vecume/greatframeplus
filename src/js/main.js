//=require jquery/dist/jquery.js
//=require slick-carousel/slick/slick.js
//=require @fancyapps/fancybox/dist/jquery.fancybox.js

$(document).ready(function () {
  $(".js-open-menu-btn").on("click", function () {
    $("#main-menu").addClass("active");
  });
  $(".js-close-menu-btn").on("click", function () {
    $("#main-menu").removeClass("active");
  });
});

$(window).on("load", function () {
  $(".preloader").fadeOut();
});
