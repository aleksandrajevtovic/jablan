// home page
const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.fromTo(
  ".hero-section h1",
  { opacity: 0, y: 250, skewY: 20 },
  { opacity: 1, y: 0, skewY: 0, stagger: 0.3 }
);

tl.fromTo(
  ".hero-image .image",
  { opacity: 0, y: -500 },
  { opacity: 1, y: 0 },
  "<50%"
);

tl.fromTo(
  ".home-main .images .left",
  { opacity: 0, x: 0, rotation: 0 },
  { opacity: 1, x: "-400", rotation: -10, ease: Expo.easeInOut, duration: 2 },
  "<50%"
);

tl.fromTo(
  ".home-main .images .right",
  { opacity: 0, x: 0, rotation: 0 },
  { opacity: 1, x: "180", rotation: 10, ease: Expo.easeInOut, duration: 2 },
  "<"
);

tl.fromTo(".hero-image .image", { scale: 0.8 }, { scale: 0.65 }, "<50%");

tl.fromTo("header", { opacity: 0 }, { opacity: 1 }, "<");
