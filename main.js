// Update Log
let codeVer = '23.06.19 0.1';
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
});
$('[draggy]').on('mouseout mouseleave', function() {
    $('.cursor').removeClass('draggy');
});

$('[info]').on('mouseover mouseenter', function() {
    $('.c-info').text($(this).attr('info'));
    $('.c-info').addClass('active');
});
$('[info]').on('mouseout mouseleave', function() {
    $('.c-info').removeClass('active');
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
document.querySelectorAll('.track').forEach(dragabble => {
    let isDown = false;
    let startX;
    let scrollLeft;
    dragabble.addEventListener('mousedown', (e) => {
        isDown = true;
        dragabble.classList.add('active');
        startX = e.pageX - dragabble.offsetLeft;
        scrollLeft = dragabble.scrollLeft;
        cancelMomentumTracking();
    });
    dragabble.addEventListener('mouseleave', () => {
        isDown = false;
        dragabble.classList.remove('active');
    });
    dragabble.addEventListener('mouseup', () => {
        isDown = false;
        dragabble.classList.remove('active');
        beginMomentumTracking();
    });
    dragabble.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - dragabble.offsetLeft;
        const walk = (x - startX) * 1.1; //scroll-fast
        var prevScrollLeft = dragabble.scrollLeft;
        dragabble.scrollLeft = scrollLeft - walk;
        velX = dragabble.scrollLeft - prevScrollLeft;
    });
    // Momentum 
    var velX = 0;
    var momentumID;

    function beginMomentumTracking() {
        cancelMomentumTracking();
        momentumID = requestAnimationFrame(momentumLoop);
    }

    function cancelMomentumTracking() {
        cancelAnimationFrame(momentumID);
    }

    function momentumLoop() {
        dragabble.scrollLeft += velX;
        velX *= 0.95;
        if (Math.abs(velX) > 0.5) {
            momentumID = requestAnimationFrame(momentumLoop);
        }
    }
});