import 'slick-carousel'
import $ from 'jquery'

$(function() {
  $('.slick').slick({
    dots: true,
    autoplay: true,
    mobileFirst: true,
    arrows: false,
    responsive: [{
      breakpoint: 575,
      settings: {
        arrows: true
      }
    }]
  })
})
