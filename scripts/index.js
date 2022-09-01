//edit profile
const popupProfile = document.querySelector("#edit-profile");
const profileEdit = document.querySelector(".button_edit");
const popupProfileToggle = document.querySelector("#profile-toggle");
const allPopup = document.querySelectorAll(".popup");

//close popup forms
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    allPopup.forEach((popup) => {
      popup.classList.remove("popup_opened");
    });
  }
});

function toggleProfilePopup(evt) {
  if (
    evt.target.classList.contains("popup__container") ||
    evt.target.classList.contains("popup__item")
  ) {
    return;
  }
  popupProfile.classList.toggle("popup_opened");
}

profileEdit.addEventListener("click", toggleProfilePopup);
popupProfile.addEventListener("click", toggleProfilePopup);
popupProfileToggle.addEventListener("click", toggleProfilePopup);

const formProfileElement = document.querySelector("#edit-profile-form");
const profileFormSubmit = formProfileElement.querySelector("#save-profile");

profileFormSubmit.onclick = toggleProfilePopup;

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

function toggleAddCardPopup(evt) {
  if (
    evt.target.classList.contains("popup__container") ||
    evt.target.classList.contains("popup__item")
  ) {
    return;
  }
  popupAddCard.classList.toggle("popup_opened");
}

cardAdd.addEventListener("click", toggleAddCardPopup);
popupAddCard.addEventListener("click", toggleAddCardPopup);
popupAddCardToggle.addEventListener("click", toggleAddCardPopup);

function addCard(imageInput, titleInput) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardLike = cardElement.querySelector(".button_like");
  const cardDelete = cardElement.querySelector(".button_delete");
  const imagePopup = cardElement.querySelector(".popup_image");
  const popupImageButton = cardElement.querySelector(".button_toggle-card");

  cardImage.src = imageInput;
  cardImage.alt = titleInput;

  cardElement.querySelector(".card__title").textContent = titleInput;
  cardElement.querySelector(".popup__image").src = imageInput;
  cardElement.querySelector(".popup__title").textContent = titleInput;

  cardLike.addEventListener("click", likeCard);
  cardImage.addEventListener("click", handleImagePopup);
  imagePopup.addEventListener("click", toggleImagePopup);
  popupImageButton.addEventListener("click", toggleImagePopup);
  cardDelete.addEventListener("click", deleteCard);
  return cardElement;
}

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

function toggleImagePopup(evt) {
  if (
    evt.target.classList.contains("popup__container") ||
    evt.target.classList.contains("popup__image") ||
    !evt.key === "Escape"
  ) {
    return;
  }
  const cardElement = evt.target.closest(".card");
  const imagePopup = cardElement.querySelector(".popup_image");
  imagePopup.classList.toggle("popup_opened");
}

//expand image poupup
function handleImagePopup(evt) {
  evt.preventDefault();
  const cardElement = evt.target.closest(".card");
  const imagePopup = cardElement.querySelector(".popup_image");
  imagePopup.classList.toggle("popup_opened");
}

// set initial cards
const initialCards = [
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

//like card
function likeCard(evt) {
  const likeImage = evt.currentTarget.querySelector(".button__image_like");
  const srcImage = likeImage.getAttribute("src");

  srcImage.includes("./images/like.svg")
    ? likeImage.setAttribute("src", "./images/like_active.svg")
    : likeImage.setAttribute("src", "./images/like.svg");

  return likeImage;
}

//delete card
function deleteCard(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
  cardElement.removeEventListener("click", handleImagePopup, false);
  cardElement.removeEventListener("click", likeCard, false);
}
