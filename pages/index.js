//выпадающее меню сайта

const headerDomElement = document.querySelector(".header");
const headerSiteNav = document.querySelector(".header__nav");
const burgerButton = document.querySelector(".header__burger-menu");

function toggleSiteNav() {
  headerSiteNav.classList.toggle("header__nav_active");
  burgerButton.classList.toggle("header__burger-menu_active");
}

burgerButton.addEventListener("click", toggleSiteNav);

//если нажали мимо меню хедера,то попап закроется

document.addEventListener("click", (e) => {
  if (
    !e.path.includes(headerDomElement) &&
    headerSiteNav.classList.contains("header__nav_active")
  ) {
    toggleSiteNav();
  }
});
