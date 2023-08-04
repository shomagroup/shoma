// Path Selected
$('.f-choice').on('click', function() {
if ($(this).is('[b2b]')) {
$('input[b2b-r]').attr('required', '1');
$('.b2b-application').addClass('open');
$('input#b2b').closest('label').trigger('click');
}
if ($(this).is('[job]')) {
$('input[job-r],select[job-r],[job-r] ~ input').attr('required', '1');
$('.job-application').addClass('open');
$('input#job').closest('label').trigger('click');
}
$(this).addClass('selected');
$('.message-sect,.faux-button').addClass('open');
inputRequired();
});

$('.f-reset-button').on('click', function() {
$(this).closest('form')[0].reset();
$('[b2b-r],[job-r],[job-r] ~ input, div:has(> label [job-r])')
.removeAttr('required');
$('.b2b-application,.job-application,.message-sect,.faux-button').removeClass('open');
$('.f-choice').removeClass('selected');
inputRequired();
});

$('.faux-button').on('click', function() {
timestamper();
if (navigator.geolocation) {
    fetch('https://ipapi.co/json')
    .then((response) => response.json())
    .then((data) => {
    $("input[name='country']").val(data.country_name);
    $("input[name='state']").val(data.region);
    $("input[name='city']").val(data.city);
    });
$('.s-button').trigger('click');
}});

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