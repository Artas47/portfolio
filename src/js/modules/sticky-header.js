import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

export default class StickyHeader {
  constructor() {
    this.header = document.querySelector(".header");
    this.pageSections = document.querySelectorAll(".page-section");
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.runOnScroll(), 200)
    );
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHight = window.innerHeight;
      })
    );
  }

  runOnScroll() {
    this.determineScrollDirection();
    if (window.scrollY >= 200) {
      this.header.classList.add("header--dark");
    } else {
      this.header.classList.remove("header--dark");
    }

    this.pageSections.forEach(el => this.calcSection(el));
  }

  determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = "down";
    } else {
      this.scrollDirection = "up";
    }
    this.previousScrollY = window.scrollY;
  }

  calcSection(el) {
    if (
      window.scrollY + this.browserHeight > el.offsetTop &&
      window.scrollY < el.offsetTop + el.offsetHeight
    ) {
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (
        (scrollPercent < 50 &&
          scrollPercent > -0.1 &&
          this.scrollDirection === "down") ||
        (scrollPercent < 33 && this.scrollDirection === "up")
      ) {
        let matchingLink = el.getAttribute("data-link");
        document
          .querySelectorAll(`.header__list a:not(${matchingLink})`)
          .forEach(el => el.classList.remove("active"));
        document.querySelector(matchingLink).classList.add("active");
      }
    }
  }
}
