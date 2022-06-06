const PopupPhoto = document.querySelector(".popup-photo");
const PhotoGridImage = document.querySelector(".photo-grid__image");
const PhotoGridList = document.querySelector(".photo-grid__list");

function openPopup() {
  PopupPhoto.classList.add("popup-photo_opened");
}

function closePopup() {
  PopupPhoto.classList.remove("popup-photo_opened");
}

function addPhotoInPopup(element) {
  PopupPhoto.querySelector(".popup-photo__item").src = element.src;
}

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
