

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