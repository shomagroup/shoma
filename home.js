
//HERO ANIMATION//
var hero = document.querySelector('.hero');
var logo = document.querySelector('.logosvg');
var heroLight = document.querySelector('.hero-light');
var heroXtra = document.querySelector('#heroeXtra');

////////////////////////////////////////////

hero.addEventListener('mousemove', logoMove);

function logoMove(e) {

const heroWidthSetter = hero.offsetWidth;

if (heroWidthSetter > 992) {
    var heroWidth = hero.offsetWidth;
    var heroHeight = hero.offsetHeight;
    var setBlur = 6;
    var opacitea = 1;
}

if (heroWidthSetter < 992 && heroWidthSetter > 768) {
    var heroWidth = hero.offsetWidth * 1.2;
    var heroHeight = hero.offsetHeight * 1.2;
    var setBlur = 4;
    var opacitea = .75;
}

if (heroWidthSetter < 768) {
    var heroWidth = (hero.offsetWidth * 1.3);
    var heroHeight = (hero.offsetHeight * 1.3);
    var setBlur = 4;
    var opacitea = .75;
}


const centerX = hero.offsetLeft + heroWidth / 2;
const centerY = hero.offsetTop + heroHeight / 2;

const heroMouseX = ((e.clientX - centerX) / 9 / heroWidth * 105).toFixed(1);
const heroMouseY = ((e.clientY - centerY) / 9 / heroHeight * 106).toFixed(1);

const heroMouseOpposeX = heroMouseX * -1;
const heroMouseOpposeY = heroMouseY * -1;

//const heroMouseXper = ((e.clientX - centerX)/6/heroWidth*1205).toFixed(0);
//const heroMouseYper = ((e.clientY - centerY)/6/heroHeight*1208).toFixed(0);

const heroMouseYper2 = ((e.clientY) / 16).toFixed(2);
const heroXtraX = (heroMouseX / 2.2).toFixed(2);

    ////////////////////////////////////////////

heroLight.style.transform = `translateX(${e.pageX}px) translateY(${e.pageY}px)`;
$('#lineargradient').attr('x1', heroXtraX);
$(heroXtra).attr('offset', heroMouseYper2 + '%');

    ////////////////////////////////////////////

this.querySelectorAll('.logosvg').forEach(logoSvg => {
logoSvg.style.filter = `drop-shadow(${heroMouseOpposeX}px ${heroMouseOpposeY}px ${setBlur}px rgba(119, 119, 119, ${opacitea})) drop-shadow(${heroMouseX}px ${heroMouseY}px ${setBlur}px rgba(17, 17, 17, ${opacitea}))`;
    });

}
//closeing logoMove
//END HERO ANIMATION//


// HERO SECTION 1 SCROLL TRANSITION

let hs1In = gsap.timeline({
        scrollTrigger: {
            trigger: ".hs1",
            start: "25% 65%",
            end: "85% 50%",
            scrub: 1
        }
    })
    .from('.hs1-card', {
        y: "50%",
        opacity: 0,
        duration: 6,
        stagger: 6.5
    })
    .to('.hs1-card', {
        y: "-50%",
        opacity: 0,
        duration: 6,
        stagger: 6.5
    });

// END OF HERO SECTION 1 SCROLL TRANSITION

// PROJECT SLIDER
$('.p-card').on('mouseover mouseenter', function() {
$(this).siblings('.p-card').addClass('not-hover');
});
$('.p-card').on('mouseout mouseleave', function() {
$(this).siblings('.p-card').removeClass('not-hover');
});
// PROJECT SLIDER

// -- PRESS -- //
//close
$('.press-above-bg, .press-close').on('click', function() {
$(this).closest('.track').attr('draggy', '');

$(this).closest('.press-above').removeClass('open');
$('.press-article-link').removeClass('open');
});

//open
$('.press-article-link').on('click', function() {

$(this).closest('.track').removeAttr('draggy', '');

$(this).siblings('.press-article-link').removeClass('open');
$(this).addClass('open');
$(this).closest('.track').find('.press-above').addClass('open');

$('.press-above .press-day').text($(this).attr('day'));
$('.press-above .press-month-year:nth-child(1)').text($(this).attr('month'));
$('.press-above .press-month-year:nth-child(2)').text($(this).attr('year'));
$('.press-above .press-publisher:nth-child(1)').text($(this).attr('publisher'));
$('.press-above .press-publisher:nth-child(2)').text($(this).attr('project'));
$('.press-above .press-title').text($(this).attr('title'));
$('.press-above .press-p').text($(this).attr('highlight'));
$('.press-above .press-external-link').attr('href', $(this).attr('link'));
});