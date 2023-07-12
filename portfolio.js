//== [open/close Search]
$('.search-button a').on('click', function() {
if ($('.search').is('.active')) {
$('.search').removeClass('active');
$('input.search').val('');
$(this).attr('info', 'Search')
$('.portfolio-link:nth-child(2)').addClass('filtered');
$('.project').show();
} else {
$('.portfolio-link').removeClass('filtered');
$('.search').addClass('active');
$(this).attr('info', 'Close');
$('.project').show();
}
});
// Make text tagger lowercase for filter
$('.tagger p').text(function(i, text) {
return text.toLowerCase();
});
// Filter for searchbar
$('input.search').on('input', function() {
var searchValue = $(this).val().toLowerCase();
$('.tagger p').closest('.project').hide();
$('.tagger p').filter(':contains(' + searchValue + ')')
.closest('.project').show();
});
// Filter Buttons
$('.portfolio-link').on('click',function(){
$('.portfolio-link').removeClass('filtered');
$(this).addClass('filtered');
$('.project').hide();
//
if ($(this).text().includes('all')) {
$('.project').show();
}
if ($(this).text().includes('recent')) {
$('.tagger p').filter(':contains(recent)')
.closest('.project').show();
}
if ($(this).text().includes('mixed')) {
$('.tagger p').filter(':contains(mixed)')
.closest('.project').show();
}
if ($(this).text().includes('commercial')) {
$('.tagger p').filter(':contains(commercial)')
.closest('.project').show();
}
if ($(this).text().includes('residential')) {
$('.tagger p').filter(':contains(residential)')
.closest('.project').show();
}
});