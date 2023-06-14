// Update Log
let codeVer = '23.06.14 0.0';
console.log('ver ' + codeVer);
$('.codever').text(codeVer);


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

// ClASS CLENSER
$('.active').removeClass('active');
$('.editing').removeClass('editing');


// ------ CURSOR HOVER ----- //
// IS WHITE (contents are too light for the cursor to contrast)
$('[white]').on('mouseover mouseenter', function() {
    $('.cursor').addClass('white');
});
$('[white]').on('mouseout mouseleave', function() {
    $('.cursor').removeClass('white');
});

// IS DRAGGY
$('[draggy]').on('mouseover mouseenter', function() {
    $('.cursor').addClass('draggy');
    $('.c-info').text('DRAG');
});
$('[draggy]').on('mouseout mouseleave', function() {
    $('.cursor').removeClass('draggy');
});


// HOVER ON LINK
$('a').on('mouseover mouseenter', function() {
    $('.c-info').text($(this).attr('info'));
    if ($(this).attr('draggy')) {
        $('.cursor').addClass('active');
        $('.c-info').text('VIEW');
    } else if ($(this).attr('info') && $(this).attr('white')) {
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
// Hover on a link
$('a').on('mouseout mouseleave', function() {
    if ($(this).attr('info') && $(this).attr('white')) {
        $('.cursor').removeClass('active white');
        $('.c-info').removeClass('active');
    } else if ($(this).attr('info')) {
        $('.cursor').removeClass('active');
        $('.c-info').removeClass('active');
    } else if ($(this).attr('white')) {
        $('.cursor').removeClass('active white');
        $('.c-info').removeClass('active');
    } else {
        $('.cursor').removeClass('active');
        $('.c-info').removeClass('active');
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