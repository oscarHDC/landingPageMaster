const btnNav = document.querySelector(".btn-mobile-nav");
const iconClose = document.querySelector(".icon-close");
const iconOpen = document.querySelector(".icon-open");

const header = document.querySelector("header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  iconClose.classList.toggle("icon-display");
  iconOpen.classList.toggle("icon-hidden");
});
