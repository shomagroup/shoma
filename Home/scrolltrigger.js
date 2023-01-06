gsap.registerPlugin(ScrollTrigger);

gsap.each()
ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
    snap: 1
});


function countUp(self) {
    $(".number").text(Math.round(self.progress * 83));
}

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-wrap",
        start: "top top",
        end: "bottom bottom",
        ease: "none",
        onUpdate: countUp,
        scrub: 1
    }
});
tl.to(".land-image_photo", {
    width: "100%",
    left: "0%",
    duration: 1,
    ease: "none"
});
tl.to(".land-image_photo", {
    height: "50%",
    top: "50%",
    duration: 1,
    ease: "none"
});
tl.to(".land-image_photo", {
    width: "60%",
    left: "0%",
    duration: 1,
    ease: "none"
});
tl.to(".land-image_photo", {
    height: "25%",
    duration: 1,
    ease: "none"
});
tl.to(".land-image_photo", {
    width: "30%",
    left: "30%",
    duration: 1,
    ease: "none"
});
tl.to(".land-image_photo", {
    height: "12.5%",
    top: "62.5%",
    duration: 1,
    ease: "none"
});
tl.to(".land-image_photo", {
    width: "15%",
    duration: 1,
    ease: "none"
});
tl.to(".land-image_photo", {
    height: "6.25%",
    top: "62.5%",
    duration: 1,
    ease: "none"
});
tl.to(".land-image_photo", {
    width: "7.5%",
    left: "37.5%",
    duration: 1,
    ease: "none"
});
tl.from(
    ".land_p-wrap", {
        opacity: 0,
        top: "2em",
        duration: 0.5,
        ease: "none"
    },
    1.5
);
tl.to(
    ".land-image_img", {
        scale: "3",
        duration: 9,
        ease: "none"
    },
    0
);