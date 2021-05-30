

// select 
$('.form__contact-select').click(function (evt) {
  evt.preventDefault()
  if ($('.form__contact-list').hasClass('show')) {
    $('.form__contact-list').addClass('hide')
    $('.form__contact-list').removeClass('show')
  } else {
    $('.form__contact-list').addClass('show')
    $('.form__contact-list').removeClass('hide')
  }
  $('.defaul__value .form__contact-region').html($(evt.target.closest('.form__contact-region')).html())
})
