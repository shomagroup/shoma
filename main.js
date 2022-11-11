// CUSTOM MOUSE
(function() {
    var cursor = document.querySelector(".cursor");
    var cursorLazy = document.querySelector(".cursor-lazy");
    var cInfo = document.querySelector(".c-info");
    var cursorActive = function cursorActive(event) {
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
        cursorLazy.style.left = event.clientX + "px";
        cursorLazy.style.top = event.clientY + "px";
        cInfo.style.left = event.clientX + "px";
        cInfo.style.top = event.clientY + "px";
    };
    window.addEventListener("mousemove", cursorActive);
})();
// INIT SET

// CURSOR HOVER
$('[white]').on('mouseenter mouseleave', function() {
    $('.cursor').addClass('white');
});
$.not('[white]').on('mouseenter mouseleave', function() {
    $('.cursor').removeClass('white');
});
$('a').on('mouseenter mouseleave', function() {
    $('.c-info').text($(this).attr('info'));
    if ($(this).attr('info') && $(this).attr('white')) {
        $('.cursor').toggleClass('active white');
        $('.c-info').toggleClass('active');
    } else if ($(this).attr('info')) {
        $('.cursor').toggleClass('active');
        $('.c-info').toggleClass('active');
    } else if ($(this).attr('white')) {
        $('.cursor').toggleClass('active white');
    } else {
        $('.cursor').toggleClass('active');
    }
});

// MENU
$('.m-button').on('click', function() {
    $('.menu').toggleClass('opened');
    if ($(this).is('.active')) {
        $(this).toggleClass('active');
        $(this).attr('info', 'menu');
        $('.c-info').text('menu');
    } else {
        $(this).toggleClass('active');
        $(this).attr('info', 'close');
        $('.c-info').text('close');
    }
});
$('.m-link').on('mouseenter mouseleave', function() {
    $(this).siblings().toggleClass('nothovered');
});