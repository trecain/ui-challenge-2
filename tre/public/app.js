'use strict';

$('.select-header').click(() => {
  $('.children').slideToggle();
  $('.drop').toggleClass('up');
});

$('.selection').click(function () {

  $('select').val($(this).index());
  $('.children').slideToggle()
  $('.select-header span').text($(this).text());
  $('.drop').toggleClass('up');
});