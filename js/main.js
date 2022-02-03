$(function () {
  animation: {
    duration: 700;
  }
  // $(".slider").slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   adaptiveHeight: true,
  // });

  $(".burger").on("click", function () {
    $(".burger").toggleClass("burger--active");
    $(".menu").toggleClass("menu__active");
  });

  var mixer = mixitup(".gallery__content");
});
