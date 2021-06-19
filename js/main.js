const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".close-btn");

menuButton.addEventListener("click", () => {
  menu.classList.add("is-active");
  menuCloseButton.classList.add("is-active");
});
menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("is-active");
  menuCloseButton.classList.remove("is-active");
});
