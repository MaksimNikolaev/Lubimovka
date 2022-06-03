//выпадающее меню сайта

const headerSiteNav = document.querySelector(".header__nav");
const burgerButton = document.querySelector(".header__burger-menu");

function toggleSiteNav() {
  headerSiteNav.classList.toggle("header__nav_active");
}

burgerButton.addEventListener("click", toggleSiteNav);
