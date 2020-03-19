export default class onSkillMouseover {
  constructor() {
    this.skills = document.querySelectorAll(".about__skill-bar");
    this.divToShow = document.querySelector(".about__skills__description");
    this.events();
  }

  events() {
    this.skills.forEach(el => {
      let skill = el.childNodes[1].textContent;

      el.addEventListener("mouseover", () => {
        this.divToShow.style = "opacity: 1;";
        el.style = "outline: 2px solid #2ecc71;";
        switch (skill) {
          case "HTML5":
            return (this.divToShow.innerHTML =
              "I'm always trying to keep my HTML well organized, semantic and easy to maintain. I also use BEM naming.");
          case "CSS3":
            return (this.divToShow.innerHTML =
              "I'm working usually with SASS preprocessor in my projects. Flexbox and grid are my favorite CSS3 features. I also know how to create simple animations.");
          case "JAVASCRIPT":
            return (this.divToShow.innerHTML =
              "I'm using Javascript's newest features to keep my code modern and clean. I know almost all the ES6 features and know how to use them.");
          case "REACT":
            return (this.divToShow.innerHTML =
              "When I first started to learn React I knew it is the library that I want to work and improve with. In my projects I'm using hooks, context api, styled-components, react-router.");
          case "REDUX":
            return (this.divToShow.innerHTML =
              "Redux was pretty hard to understand at the beginning but now I sometimes can't imagine working without redux. I'm using redux-saga, redux-thunk, reselect.");
          case "GIT":
            return (this.divToShow.innerHTML =
              "I'm daily working with GIT. Creating branches, updating local/remote repo, stashing, logging is nothing new to me. I know the difference between merge and rebase.");
          case "JEST":
            return (this.divToShow.innerHTML =
              "I'm still learning jest with react-testing-library. You can check my tests in currency-transactions-app and movie-search project that I have on my github.");
          case "TYPESCRIPT":
            return (this.divToShow.innerHTML =
              "I know the very basics. Still learning.");
          default:
            return (this.divToShow.innerHTML = "err");
        }
      });
      el.addEventListener("mouseout", () => {
        this.divToShow.style = "opacity: 0; height:0;";
        el.style = "outline: 2px solid transparent";
      });
    });
  }
}
