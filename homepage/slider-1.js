const slider = document.querySelector('.people-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
});


slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});


slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    beginMomentumTracking();
});


slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.1; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
});

// Momentum 

var velX = 0;
var momentumID;

slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
});

function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
}

function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
}

function momentumLoop() {
    slider.scrollLeft += velX;
    velX *= 0.95;
    if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
    }
}

//// another slider please

const slider2 = document.querySelector('.press-container');
let isDown2 = false;
let startX2;
let scrollLeft2;

slider2.addEventListener('mousedown', (e) => {
    isDown2 = true;
    slider2.classList.add('active');
    startX2 = e.pageX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft2;
});
slider2.addEventListener('mouseleave', () => {
    isDown2 = false;
    slider2.classList.remove('active');

});
slider2.addEventListener('mouseup', () => {
    isDown2 = false;
    slider2.classList.remove('active');

});
slider2.addEventListener('mousemove', (e) => {
    if (!isDown) return; //stop function
    e.preventDefault();
    const x2 = e.pageX - slider2.offsetLeft;
    const walk2 = x2 - startX2;
    console.log(startX2);
});