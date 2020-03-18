import AnimateOnScroll from "./modules/animate-on-scroll";

const hexagons = document.querySelectorAll(".hexagon__wrapper");
const skillBarsPercentages = document.querySelectorAll(".about__skills");

new AnimateOnScroll(hexagons, 80, "reveal", "reveal--visible");
new AnimateOnScroll(
  skillBarsPercentages,
  90,
  "come-from-right",
  "come-from-right--visible"
);
