// Update Log
let codeVer = '23.08.30 0.0.0';
console.log('ver ' + codeVer);
$('.codever').text(codeVer);

let url = window.location.href;

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
$('.c-wrap').removeClass('off');


// ------ CURSOR HOVER ----- //
// to turn curson off

$('[cursorOff]').on('mouseover mouseenter', function() {
$('.c-wrap').addClass('off');
});
$('[cursorOff]').on('mouseout mouseleave', function() {
$('.c-wrap').removeClass('off');
});

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
});
$('[notDraggy]').on('mouseover mouseenter', function() {
$('.cursor').removeClass('draggy');
});
$('[draggy]').on('mouseout mouseleave', function() {
$('.cursor').removeClass('draggy');
});


// HoverIn a link

$('a').on('mouseover mouseenter', function() {
if ($(this).closest('div').is('[draggy]')) {
    $('.cursor').addClass('active');
    $(this).attr('info', 'VIEW');
    $('.c-info').text($(this).attr('info'));
} else if ($(this).attr('info') && $(this).attr('white')) {
    $('.cursor').addClass('white active');
    $('.c-info').addClass('active');
} else if ($(this).attr('white') || $(this).is('.button')) {
    $('.cursor').addClass('white active');
} else {
    $('.cursor').addClass('active');
}
});

// HoverOut a link

$('a').on('mouseout mouseleave', function() {
    if ($(this).attr('info') && $(this).attr('white')) {
        $('.cursor').removeClass('active white');
        $('.c-info').removeClass('active');
    } else if ($(this).attr('info')) {
        $('.cursor').removeClass('active');
        $('.c-info').removeClass('active');
    } else if ($(this).attr('white') || $(this).is('.button')) {
        $('.cursor').removeClass('active white');
        $('.c-info').removeClass('active');
    } else {
        $('.cursor').removeClass('active');
        $('.c-info').removeClass('active');
    }
});

// ---- FORM ---- //
$('[datepicker]').attr('type', 'datetime-local');
$('[read-only]').attr('readonly', '1');


var inputRequired = function() {

$('.f-field-wrap:has(> input:not([required])~span.required-ball)').find('span.required-ball').remove();
$('.f-field-wrap:has(> select:not([required])~span.required-ball)').find('span.required-ball').remove();
$('.f-field-wrap:has(> textarea:not([required])~span.required-ball)').find('span.required-ball').remove();
$('.f-field-wrap').has('div:has(>div input:not([required]))~span.required-ball').find('span.required-ball').remove();

$('input[required], textarea[required], select[required]').closest('.f-field-wrap').not(':has(>span.required-ball)')
.append('<span class="required-ball"info="Required Field"></span>');
$('[info]').on('mouseover mouseenter', function() {
$('.c-info').text($(this).attr('info'));
$('.c-info').addClass('active');
});
$('[info]').on('mouseout mouseleave', function() {
$('.c-info').removeClass('active');
});
}
inputRequired();

// HAS INFO
$('[info]').on('mouseover mouseenter', function() {
    $('.c-info').text($(this).attr('info'));
    $('.c-info').addClass('active');
});
$('[info]').on('mouseout mouseleave', function() {
    $('.c-info').removeClass('active');
});

// ------ CURSOR HOVER ----- //

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

// ---- DRAGGABLE ---- //
document.querySelectorAll('.track[draggy]').forEach(slider => {
const preventClick = (e) => {
e.preventDefault();
e.stopImmediatePropagation();
}
let isDown = false;
var isDragged = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
isDown = true;
slider.classList.add("active");
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
})

slider.addEventListener("mouseleave", () => {
isDown = false;
slider.classList.remove("active");
});

slider.addEventListener("mouseup", e => {
isDown = false;
const elements = document.querySelectorAll("a");
if(isDragged){
for(let i = 0; i<elements.length; i++){
elements[i].addEventListener("click", preventClick);
elements[i].addEventListener("mousedown", preventClick);
elements[i].addEventListener("mouseup", preventClick);
}

} else{
for(let i = 0; i<elements.length; i++){
elements[i].removeEventListener("click", preventClick);
}}

slider.classList.remove("active");
isDragged = false;
});

slider.addEventListener("mousemove", e => {
if (!isDown) return;
isDragged =  true;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 3.5;
slider.scrollLeft = scrollLeft - walk;
});
});

// PROJECT SLIDER
$('.p-card').on('mouseover mouseenter', function() {
$(this).siblings('.p-card').addClass('not-hover');
});
$('.p-card').on('mouseout mouseleave', function() {
$(this).siblings('.p-card').removeClass('not-hover');
});
// PROJECT SLIDER


// ==PRESS== //
//close
$('.press-above-bg, .press-close').on('click', function() {

$('.press-article-link').removeClass('open');
$(this).closest('.press-above').removeClass('open');
$(this).closest('.track').attr('draggy', '');
});
//open
$('.press-article-link').on('click', function() {
$(this).closest('.press-section').find('.press-above').addClass('open');
$(this).siblings('.press-article-link').removeClass('open');
$(this).addClass('open');

$(this).closest('.press-section').find('.press-above .press-day').text($(this).attr('day'));
$(this).closest('.press-section').find('.press-above .press-month-year:nth-child(1)').text($(this).attr('month'));
$(this).closest('.press-section').find('.press-above .press-month-year:nth-child(2)').text($(this).attr('year'));
$(this).closest('.press-section').find('.press-above .press-publisher:nth-child(1)').text($(this).attr('publisher'));
$(this).closest('.press-section').find('.press-above .press-publisher:nth-child(2)').text($(this).attr('project'));
$(this).closest('.press-section').find('.press-above .press-title').text($(this).attr('title'));
$(this).closest('.press-section').find('.press-above .press-p').text($(this).attr('highlight'));
$(this).closest('.press-section').find('.press-above .press-external-link').attr('href', $(this).attr('link'));
});

// ==PRESS== end //
$.urlParam = function(name) {
var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
if (results == null) { return null; } else { return results[1] || 0; }
}


// ANIMATIONS HERE //

let hs2In = gsap.timeline({
scrollTrigger: {
trigger:'.portfolio-recent',
start: '-5% center',
end: '90% 100%',
scrub: 1
}
})
.from('.p-card-wrap:nth-child(1),.p-card-wrap:nth-child(2),.p-card-wrap:nth-child(3),.p-card-wrap:nth-child(4)', {
y: "-20%",
opacity: 0,
duration: 6,
stagger: 1
});


let hs4In = gsap.timeline({
scrollTrigger: {
trigger:'.press-section',
start: '-5% center',
end: '100% 100%',
scrub: 1
}
})
.from('.press-article', {
opacity: 0,
duration: 3,
stagger: 2
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 3;
var navbarHeight = $('#lang-swap').outerHeight();

$(window).scroll(function(event){
didScroll = true;
});

setInterval(function() {
if (didScroll) {
hasScrolled();
didScroll = false;
}
}, 250);

function hasScrolled() {
var st = $(this).scrollTop();
// Make sure they scroll more than delta
if(Math.abs(lastScrollTop - st) <= delta)
return;
// If they scrolled down and are past the navbar, add class .nav-up.
// This is necessary so you never see what is "behind" the navbar.
if (st > lastScrollTop && st > navbarHeight){
// Scroll Down
$('#lang-swap').addClass('up');
} else {
// Scroll Up
if(st + $(window).height() < $(document).height()) {
$('#lang-swap').removeClass('up');
}
}
lastScrollTop = st;
}