//INTRO ANIMATIONS
const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.fromTo(".text", {opacity: 0}, {opacity: 1, duration: 2})
  .to(".text", { opacity: 0, duration: 2}, "-=0.5")
  .to(".slider", { y: "-100%", duration: 1})
  .to(".intro-content", { y: "-100%", duration: 1}, "-=1")