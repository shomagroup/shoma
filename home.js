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
        logoSvg.style.filter = `drop-shadow(${heroMouseOpposeX}px ${heroMouseOpposeY}px 6px #646464) drop-shadow(${heroMouseX}px ${heroMouseY}px 6px #1a1a1a)`;
    });
}
//END HERO ANIMATION//