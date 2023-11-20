$('.faux-button').on('click', function() {
timestamper();
locationer();
if ($(this).closest('form').is('[low-priority]')) {
$(this).closest('form').find('input[name="priority"]').val('low');
} else {$(this).closest('form').find('input[name="priority"]').val('high');}
setTimeout(() => {
$(this).closest('form').find('.s-button').trigger('click');
}, 800);
});

$('.cl-list-item').on('click', function() {
$(this).siblings('.cl-list-item').removeClass('open');
if ($(this).is('.open')) {
$(this).removeClass('open');
} else {$(this).addClass('open');}
});


$('[popup-close]').on('click', function() {
$('popup-1 form select option').removeAttr('selected', 'selected');
$('.popup-1').removeClass('open');
$(this).closest('.popup-1').find('form')[0].reset();
});