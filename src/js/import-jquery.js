// import-jquery.js
import $ from 'jquery'


export default window.$ = window.jQuery = $


$(document).ready(function() {
  $('#fixed-menu-toggle').on('click', function() {
    $('#fixed-menu').slideToggle()
  })

  $('.menu-xs__close-icon').on('click', function() {
    $('#fixed-menu-toggle').trigger('click')
  })

  $('.card05').each(function() {
    let that = this
    $(this).find('.title').on('click', function() {
      $(that).find('.title').toggleClass('show')
      $(that).find('.body').slideToggle()
    })
  })




})
