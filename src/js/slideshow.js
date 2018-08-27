import 'slick-carousel';

$(function() {
  $('#slideshow').slick({
    dots: true,
    autoplay: true,
    mobileFirst:true,
    arrows:false,
    responsive:[
      {
        breakpoint: 575,
        settings: {
          arrows:true
      }
      }
    ]
  })
})

