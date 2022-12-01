import "../pages/index.css";

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./utils.js";

//edit profile
const popupProfile = document.querySelector("#edit-profile");
const profileEdit = document.querySelector(".button_edit");
const popupProfileToggle = document.querySelector("#profile-toggle");
const allPopup = document.querySelectorAll(".popup");

profileEdit.addEventListener("click", setEventListeners);
popupProfile.addEventListener("click", setEventListeners);
popupProfileToggle.addEventListener("click", setEventListeners);

const formProfileElement = document.querySelector("#edit-profile-form");
const profileFormSubmit = formProfileElement.querySelector("#save-profile");

profileFormSubmit.onclick = setEventListeners;

let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

profileName.textContent = "Jacques Costeau";
profileAbout.textContent = "Explorer";

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const aboutInput = document.querySelector("#about");

  const profileName = document.querySelector(".profile__name");
  const profileAbout = document.querySelector(".profile__about");

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}

formProfileElement.addEventListener("submit", handleProfileFormSubmit);

//add new card
const cardsContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector(".template");

const popupAddCard = document.querySelector("#popup-add-card");
const cardAdd = document.querySelector(".button_add");
const popupAddCardToggle = document.querySelector("#add-card-toggle");
const cardFormSubmit = document.querySelector("#add-card-form");

cardAdd.addEventListener("click", setEventListeners);
popupAddCard.addEventListener("click", setEventListeners);
popupAddCardToggle.addEventListener("click", setEventListeners);

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const titleInput = document.querySelector("#title").value;
  const imageInput = document.querySelector("#image").value;
  cardsContainer.prepend(addCard(imageInput, titleInput));
  document.querySelector("#title").value = "";
  document.querySelector("#image").value = "";

  cardFormSubmit.classList.toggle("popup_opened");
}

cardFormSubmit.addEventListener("submit", handleCardFormSubmit);

//expand image poupup
function handleImagePopup(evt) {
  evt.preventDefault();
  const cardElement = evt.target.closest(".card");
  const imagePopup = cardElement.querySelector(".popup_image");
  imagePopup.classList.toggle("popup_opened");
}

// set initial cards
export const initialCards = [
  {
    title: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

initialCards.forEach((item) => {
  cardsContainer.append(addCard(item.link, item.title));
});

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".button_save",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "popup__input-type_error",
  errorClass: "popup__input-error_active",
});
