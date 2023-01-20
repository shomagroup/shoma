const slider1 = document.querySelector('.press-container');
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