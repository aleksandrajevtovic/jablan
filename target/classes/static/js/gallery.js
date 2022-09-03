// gallery page scroll
const tlContentLtr = gsap.timeline({
  scrollTrigger: {
    trigger: ".gridWrapper .box",
    start: "-200%",
    end: "50%",
    // markers: true,
    // scrub: true,
    // pinSpacing:false,
  },
});

tlContentLtr.fromTo(
  ".gridWrapper .box",
  { opacity: 0, y: "40%" },
  { opacity: 1, y: "0%", duration: 0.7 }
);
