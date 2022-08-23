const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.fromTo(
  ".grid-container h1",
  { opacity: 0, y: 250, skewY: 20 },
  { opacity: 1, y: 0, skewY: 0, stagger: 0.3 }
);
tl.fromTo(
  ".grid-container img",
  { opacity: 0, y: -500 },
  { opacity: 1, y: 0 },
  "<50%"
);
tl.fromTo("header", { opacity: 0 }, { opacity: 1 }, "<");
