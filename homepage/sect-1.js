function countUp(self) {
    $(".fact-1").text(Math.round(self.progress * 10).toFixed(3));
    $(".fact-2").text(Math.round(self.progress * 3).toFixed(3));
    $(".fact-3").text(Math.round(self.progress * 5));
}
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sect-1-side-copy",
        start: "50% center",
        end: "80% bottom",
        ease: "none",
        onUpdate: countUp,
        scrub: 2
    }
});
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sect-1-side-copy",
        start: "top center",
        end: "80% bottom",
        ease: "none",
        onUpdate: countUp,
        scrub: 2
    }
});
tl2.to(".img-cover", {
    transform: 'scale(2,2)',
    duration: 1,
    ease: 1
});