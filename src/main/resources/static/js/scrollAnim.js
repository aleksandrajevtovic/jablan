// about page scroll
const tlContentLtr = gsap.timeline({
  scrollTrigger: {
    trigger: ".content.ltr",
    start: "-220%",
    end: "30%",
    markers: true,
    // scrub: true,
    // pinSpacing:false,
  },
});
tlContentLtr.fromTo(
  ".content.ltr .left",
  { opacity: 0, y: "40%" },
  { opacity: 1, y: "0%", duration: 0.7 }
);
tlContentLtr.fromTo(
  ".content.ltr .right",
  { opacity: 0, y: "40%" },
  { opacity: 1, y: "0%", duration: 0.7 },
  "<"
);

const tlContentRtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content.rtl",
    start: "-220%",
    end: "100%",
    markers: true,
    // scrub: true,
    // pinSpacing:false,
  },
});

tlContentRtl.fromTo(
  ".content.rtl .left",
  { opacity: 0, y: "40%" },
  { opacity: 1, y: "0%", duration: 0.7 }
);
tlContentRtl.fromTo(
  ".content.rtl .right",
  { opacity: 0, y: "40%" },
  { opacity: 1, y: "0%", duration: 0.7 },
  "<"
);
