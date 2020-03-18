import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

export default class AnimateOnScroll {
  constructor(itemsToReveal, scrollPercent, initClassName, endClassName) {
    this.itemsToReveal = itemsToReveal;
    this.browserHight = window.innerHeight;
    this.scrollPercent = scrollPercent;
    this.initClassName = initClassName;
    this.endClassName = endClassName;
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
      if (scrollPercent < this.scrollPercent) {
        el.classList.add(this.endClassName); //
        el.isRevealed = true;
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }

  init() {
    this.itemsToReveal.forEach(el => {
      el.classList.add(this.initClassName); //
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
