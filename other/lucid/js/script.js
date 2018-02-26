$('.nav-toggle').on('click', function(){
$('#menu').toggleClass('active');
});
$(".slick").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:2,slidesToScroll:2,

responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});