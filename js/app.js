
$('.temp').toggleClass(function() {
    $(this).closest('.temp').find('.temp').toggleClass();
    return false;
  });