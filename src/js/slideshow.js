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

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: '.slider-nav'
  })
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    rows:2,
    mobileFirst: true,
    autoplay: true,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        rows:1,
      }
    }]
  })

})
