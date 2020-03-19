import AnimateOnScroll from "./modules/animate-on-scroll";
import StickyHeader from "./modules/sticky-header";
import onSkillMouseover from "./modules/on-skill-mouseover";

const hexagons = document.querySelectorAll(".hexagon__wrapper");
const skillsWrapper = document.querySelectorAll(".about__skills-wrapper");

new StickyHeader();
new AnimateOnScroll(hexagons, 80, "reveal", "reveal--visible");
new AnimateOnScroll(
  skillsWrapper,
  90,
  "come-from-right",
  "come-from-right--visible"
);
new onSkillMouseover();
