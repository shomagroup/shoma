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

// BETA CHECK
$('.update-check').text('draggyBeta7.2');
$('.update-check').addClass('show');
setTimeout(function() {
    $('.update-check').removeClass('show');
}, 1500);

// ClASS CLENSER
$('.active').removeClass('active');
// INIT SET

// LANGUAGE SETTING 
$('.language[en]').addClass('active');

// ------ CURSOR HOVER -----
// WHITE
$('[white]').on('mouseover', function() {
    $('.cursor').addClass('white');
});
$('[white]').on('mouseout', function() {
    $('.cursor').removeClass('white');
});
$('[draggy]').on('mouseover', function() {
    $('.cursor').addClass('draggy');
    $('.c-info').text('DRAG');
    $('a').on('mouseover', function() { $('.cursor').removeClass('draggy'); });
    $('a').on('mouseout', function() { $('.cursor').addClass('draggy'); });
});
$('[draggy]').on('mouseout', function() {
    $('.cursor').removeClass('draggy');
});
// LINK HOVER
$('a').on('mouseover', function() {
    $('.c-info').text($(this).attr('info'));

    if ($(this).attr('info') && $(this).attr('white')) {
        $('.cursor').addClass('active white');
        $('.c-info').addClass('active');
    } else if ($(this).attr('info')) {
        $('.cursor').addClass('active');
        $('.c-info').addClass('active');
    } else if ($(this).attr('white')) {
        $('.cursor').addClass('active white');
    } else {
        $('.cursor').addClass('active');
    }
});
$('a').on('mouseout', function() {
    $('.c-info').text($(this).attr('info'));
    if ($(this).attr('info') && $(this).attr('white')) {
        $('.cursor').removeClass('active white');
        $('.c-info').removeClass('active');
    } else if ($(this).attr('info')) {
        $('.cursor').removeClass('active');
        $('.c-info').removeClass('active');
    } else if ($(this).attr('white')) {
        $('.cursor').removeClass('active white');
    } else {
        $('.cursor').removeClass('active');
    }
});

// MENU
$('.m-button').on('click', function() {
    $('.menu').toggleClass('active');
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
$('.m-link').on('mouseover mouseout', function() {
    $(this).siblings().toggleClass('nothovered');
});