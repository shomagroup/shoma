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
$(this).attr('info', 'Close')
}
});
//make tex tagger lowercase for filter
$('.tagger p').text(function(i, text) {
return text.toLowerCase();
});
//filter for searchbar
$('input.search').on('input', function() {
var searchValue = $(this).val().toLowerCase();
$('.tagger p').closest('.project').hide();
$('.tagger p').filter(':contains(' + searchValue + ')')
.closest('.project').show();
});