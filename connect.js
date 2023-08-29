$('.faux-button').on('click', function() {
timestamper();
locationer();
if ($(this).closest('form').is('[low-priority]')) {
$(this).closest('form').find('input[priority]').val('low');
} else {$(this).closest('form').find('input[priority]').val('high'); }
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