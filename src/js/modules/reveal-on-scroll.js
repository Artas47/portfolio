import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

export default class RevealOnScroll {
  constructor(itemsToReveal) {
    this.itemsToReveal = itemsToReveal;
    this.browserHight = window.innerHeight;
    this.init();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHight = window.innerHeight;
      })
    );
  }

  calcCaller() {
    this.itemsToReveal.forEach(el => {
      if (!el.isRevealed) {
        this.calculateIfScrolledTo(el);
      }
    });
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHight > el.offsetTop) {
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHight) * 100;
      if (scrollPercent < 80) {
        el.classList.add("reveal--visible");
        el.isRevealed = true;
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
      console.log(scrollPercent);
    }
  }

  init() {
    this.itemsToReveal.forEach(el => {
      el.classList.add("reveal");
      el.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
  // hideInitially() {
  //   this.itemsToReveal.forEach(el => {
  //     el.classList.add("hexagon__wrapper--reveal");
  //   });
  // }
}
