//выпадающее меню сайта

const headerSiteNav = document.querySelector(".header__site-nav");
const burgerButton = document.querySelector(".header__burger-menu");

function toggleSiteNav() {
  headerSiteNav.classList.toggle("header__site-nav_active");
}

burgerButton.addEventListener("click", toggleSiteNav);
