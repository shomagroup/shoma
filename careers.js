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

// timestamp setup
function timestamper() {
const date = new Date();
const year = new Intl.DateTimeFormat('en',{year:'2-digit'}).format(date);
const month = new Intl.DateTimeFormat('en',{month:'short'}).format(date);
const weekday = new Intl.DateTimeFormat('en',{weekday:'short'}).format(date);
const day = new Intl.DateTimeFormat('en',{day:'2-digit'}).format(date);
const time = new Intl.DateTimeFormat('en',{hour:'2-digit', minute:'2-digit', hour12:false}).format(date);
var timestamp = `${time} ${weekday} ${month} ${day} ${year}`;
$("input[timestamper]").val(timestamp);
}
//
function locationer() {
if (navigator.geolocation) {
fetch('https://ipapi.co/json')
.then((response) => response.json())
.then((data) => {
$("input[name='country']").val(data.country_name);
$("input[name='state']").val(data.region);
$("input[name='city']").val(data.city);
});
}}

$('.cl-list-item').on('click', function() {
$(this).siblings('.cl-list-item').removeClass('open');
if ($(this).is('.open')) {
$(this).removeClass('open');
} else {$(this).addClass('open');}
});

$('.application-link').on('click', function() {
$('popup-1 form select option').removeAttr('selected', 'selected');
let position = $(this).attr('position');
$('.popup-1 form select option[value="'+position+'"]').attr('selected', 'selected');
$('.popup-1').addClass('open');
$('.popup-1 form select').attr('readonly', 'readonly');
$('form:not([low-priority]) .info-thing').attr('switch', 'on');
$('form:not([low-priority]) .info-thing').text('You are applying for a '+position+' position');
});

$('[popup-close]').on('click', function() {
$('popup-1 form select option').removeAttr('selected', 'selected');
$('.popup-1').removeClass('open');
});

$('form[low-priority] select[name="desired-position"]').on('change', function() {
if (!($('form[low-priority] select[name="desired-position"] option:selected').val() == '')) {
$('form[low-priority] .info-thing').text('You are applying for position in the'+$('form[low-priority] select[name="desired-position"] option:selected').val()+' department');

$('form[low-priority] .info-thing').attr('switch', 'on');
} else {$('form[low-priority] .info-thing').attr('switch', 'off');}
});
$('.hidden-fields').on('click', function() {
if ($(this).closest('form').is('[low-priority]')) {
$(this).closest('form').find('input[name="priority"]').val('low');
} else {$(this).closest('form').find('input[name="priority"]').val('high');}
});
