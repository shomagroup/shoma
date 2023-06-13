//HERO ANIMATION//
var hero = document.querySelector('.hero');
var logo = document.querySelector('.logosvg');
var heroLight = document.querySelector('.hero-light');
var heroXtra = document.querySelector('#heroeXtra');
hero.addEventListener('mousemove', logoMove);

function logoMove(e) {
    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;
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
    $('#lineargradient').attr('x1', heroXtraX);
    $(heroXtra).attr('offset', heroMouseYper2 + '%');
    heroLight.style.transform = `translateX(${e.pageX}px) translateY(${e.pageY}px)`;
    this.querySelectorAll('.logosvg').forEach(logoSvg => {
        logoSvg.style.filter = `drop-shadow(${heroMouseOpposeX}px ${heroMouseOpposeY}px 6px #777777) drop-shadow(${heroMouseX}px ${heroMouseY}px 6px #111111)`;
    });
}
//END HERO ANIMATION//


// HERO SECTION 1 SCROLL TRANSITION

let hs1In = gsap.timeline({
    scrollTrigger: {
        trigger: ".hs1",
        start: "25% 85%",
        end: "85% 50%",
        scrub: 0.8,
        markers: true
    }
});

hs1In.from('.hs1-card', {
    y: "50%",
    opacity: 0,
    duration: 3,
    stagger: 6.5
});

hs1In.to('.hs1-card', {
    y: "-50%",
    opacity: 0,
    duration: 3,
    stagger: 6.5
});

// END OF HERO SECTION 1 SCROLL TRANSITION