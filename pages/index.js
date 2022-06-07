const PopupPhoto = document.querySelector(".popup-photo");
const PhotoGridImage = document.querySelector(".photo-grid__image");
const PhotoGridList = document.querySelector(".photo-grid__list");
const headerDomElement = document.querySelector(".header");
const headerSiteNav = document.querySelector(".header__nav");
const burgerButton = document.querySelector(".header__burger-menu");

function openPopup() {
  PopupPhoto.classList.add("popup-photo_opened");
}

function closePopup() {
  PopupPhoto.classList.remove("popup-photo_opened");
}

function addPhotoInPopup(element) {
  PopupPhoto.querySelector(".popup-photo__item").src = element.src;
}

//выпадающее меню сайта
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
})

PhotoGridList.addEventListener("click", (evt) => {
  addPhotoInPopup(evt.target);
  openPopup();
});
  
PopupPhoto.addEventListener("click", () => closePopup());

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
});
