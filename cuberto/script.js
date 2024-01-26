Shery.mouseFollower();

Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.hoverWithMediaCircle(".hvr", {
  videos: [
    "//cdn.cuberto.com/cb/home/hero/1.mp4",
    "//cdn.cuberto.com/cb/showreel/1.mp4",
    "//cdn.cuberto.com/cb/projects/puntopago/cover.mp4",
  ],
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: "#last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power2,
});

const sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 3,
  config: {
    uFrequencyX: { value: 10.69, range: [0, 100] },
    uFrequencyY: { value: 12.98, range: [0, 100] },
    uFrequencyZ: { value: 16.03, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 25.53 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.5984496124031008 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 1.8015503875968992 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.34, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },

  slideStyle: (setScroll) => {
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: (prog) => {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
