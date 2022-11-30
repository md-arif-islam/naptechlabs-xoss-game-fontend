$(document).ready(function () {
  $("#sidebar__close i").on("click", function () {
    $(".header__sidebar").css("left", "-1000px");
  });

  $("#collapse__items--btn").on("click", function () {
    var x = document.getElementById("collapse__items");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  });

  $("#header__notification--btn").on("click", function () {
    var z = document.getElementById("header__notification");
    if (z.style.display === "block") {
      z.style.display = "none";
    } else {
      z.style.display = "block";
    }
  });

  $("#sidebar__toggle--btn").on("click", function () {
    var y = document.getElementById("header__sidebar");
    if (y.style.left === "0px") {
      y.style.left = "-1000px";
    } else {
      y.style.left = "0";
    }
  });

  // -------------------slilder game-------//
  $(".slider__items").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // -------------------- icon slider start---------//
  $(".icon__card__items").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // //  ----------------------- icon slider end//
  // ========================hover 1============//
  $(".slider__item--icon").css("transition", "all 0.5s");
  $(".hover1").hover(
    function () {
      $(".icon-hover-red1").css("opacity", 1);
      $(".icon-hover-white1").css("opacity", 0);
    },
    function () {
      $(".icon-hover-red1").css("opacity", 0);

      $(".icon-hover-white1").css("opacity", 1);
    }
  );
  // ========================hover 2============//
  $(".hover2").hover(
    function () {
      $(".icon-hover-red2").css("opacity", 1);
      $(".icon-hover-white2").css({ opacity: 0 });
    },
    function () {
      $(".icon-hover-red2").css({ opacity: 0 });
      $(".icon-hover-white2").css({ opacity: 1 });
    }
  );
  // ========================hover 3============//

  $(".hover3").hover(
    function () {
      $(".icon-hover-red3").css("opacity", 1);
      $(".icon-hover-white3").css("opacity", 0);
    },
    function () {
      $(".icon-hover-red3").css("opacity", 0);
      $(".icon-hover-white3").css("opacity", 1);
    }
  );
  // ========================hover 4============//

  $(".hover4").hover(
    function () {
      $(".icon-hover-red4").css("opacity", 1);
      $(".icon-hover-white4").css("opacity", 0);
    },
    function () {
      $(".icon-hover-red4").css("opacity", 0);
      $(".icon-hover-white4").css("opacity", 1);
    }
  );
});
