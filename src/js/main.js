import AnimateOnScroll from "./modules/animate-on-scroll";
import StickyHeader from "./modules/sticky-header";

const hexagons = document.querySelectorAll(".hexagon__wrapper");
const skillBarsPercentages = document.querySelectorAll(".about__skills");

let stickyHeader = new StickyHeader();
new AnimateOnScroll(hexagons, 80, "reveal", "reveal--visible");
new AnimateOnScroll(
  skillBarsPercentages,
  90,
  "come-from-right",
  "come-from-right--visible"
);
