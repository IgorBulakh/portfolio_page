$(function () {
  $(".menu__link, .logo, .header__link").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  /* 
  $(window).scroll(function () {
    var heightScroll = $(window).offset().top;
    
    if (heightScroll > 100) {
      $(".header__inner").addClass("header-fixed");
    } else {
      $(".header__inner").removeClass("header-fixed");
    }
  });  
*/

  $(window).scroll(function () {
    var heightScroll = $(window).scrollTop();

    if (heightScroll > 128) {
      $(".header__inner").addClass("header__fixed");
    } else {
      $(".header__inner").removeClass("header__fixed");
    }
  });

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

  $(".burger, .menu a").on("click", function () {
    $(".burger").toggleClass("burger--active");
    $(".menu").toggleClass("menu__active");
  });

  var mixer = mixitup(".gallery__content");
});
