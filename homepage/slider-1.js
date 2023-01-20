const slider1 = document.querySelector('.people-container');
let isDown = false;
let startX;
let scrollLeft;

slider1.addEventListener('mousedown', (e) => {
    isDown = true;
    slider1.classList.add('active');
    startX = e.pageX - slider1.offsetLeft;
    scrollLeft = slider1.scrollLeft;
    cancelMomentumTracking();
});


slider1.addEventListener('mouseleave', () => {
    isDown = false;
    slider1.classList.remove('active');
});


slider1.addEventListener('mouseup', () => {
    isDown = false;
    slider1.classList.remove('active');
    beginMomentumTracking();
});


slider1.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider1.offsetLeft;
    const walk = (x - startX) * 1.1; //scroll-fast
    var prevScrollLeft = slider1.scrollLeft;
    slider1.scrollLeft = scrollLeft - walk;
    velX = slider1.scrollLeft - prevScrollLeft;
});

// Momentum 

var velX = 0;
var momentumID;

slider1.addEventListener('wheel', (e) => {
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
    slider1.scrollLeft += velX;
    velX *= 0.95;
    if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
    }
}

/// Code again

const slider2 = document.querySelector('.press-container');
let isDown2 = false;
let startX2;
let scrollLeft2;

slider2.addEventListener('mousedown', (e) => {
    isDown2 = true;
    slider2.classList.add('active');
    startX2 = e.pageX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft2;
    cancelMomentumTracking();
});


slider1.addEventListener('mouseleave', () => {
    isDown2 = false;
    slider2.classList.remove('active');
});


slider2.addEventListener('mouseup', () => {
    isDown2 = false;
    slider2.classList.remove('active');
    beginMomentumTracking();
});


slider2.addEventListener('mousemove', (e) => {
    if (!isDown2) return;
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x - startX2) * 1.1; //scroll-fast
    var prevScrollLeft = slider2.scrollLeft2;
    slider2.scrollLeft2 = scrollLeft2 - walk;
    velX = slider2.scrollLeft - prevScrollLeft;
});

// Momentum 

var velX2 = 0;
var momentumID2;

slider1.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
});

function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID2 = requestAnimationFrame(momentumLoop2);
}

function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID2);
}

function momentumLoop2() {
    slider1.scrollLeft += velX;
    velX2 *= 0.95;
    if (Math.abs(velX2) > 0.5) {
        momentumID2 = requestAnimationFrame(momentumLoop2);
    }
}