console.log("tiny slider is working");

$(document).ready(function () {

  console.log($(".slides").hasClass("my-slider"));
  if ($(".slides").hasClass("my-slider")) {
      tns({
          container: '.my-slider',
          items: 1,
          slideBy: 'page',
          autoplay: true
      });
  }
});