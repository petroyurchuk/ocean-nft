const burgerBtn = document.querySelector(".header__burger-btn");
const burgerWrapper = document.querySelector(".header__burger-wrapper");

function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

burgerBtn.addEventListener("click", () => {
  burgerWrapper.classList.toggle("header__burger-wrapper_open");
  burgerBtn.classList.toggle("header__burger-btn_open");
  if (burgerWrapper.classList.contains("header__burger-wrapper_open")) {
    disableScroll();
    return;
  }
  enableScroll();
});
