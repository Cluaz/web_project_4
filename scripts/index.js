const popupProfile = document.querySelector("#edit-profile");
const profileEdit = document.querySelector(".button_edit");
const popupProfileToggle = document.querySelector("#profile-toggle");

function toggleProfilePopup() {
  popupProfile.classList.toggle("popup_opened");
}

profileEdit.addEventListener("click", toggleProfilePopup);

popupProfileToggle.addEventListener("click", toggleProfilePopup);

const formProfileElement = document.querySelector("#edit-profile-form");
const profileFormSubmit = formProfileElement.querySelector("#save-profile");

profileFormSubmit.onclick = toggleProfilePopup;

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

const cardsContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector(".template");

const popupAddCard = document.querySelector("#popup-add-card");
const cardAdd = document.querySelector(".button_add");
const popupAddCardToggle = document.querySelector("#add-card-toggle");
const cardFormSubmit = document.querySelector("#add-card-form");

function toggleAddCardPopup() {
  popupAddCard.classList.toggle("popup_opened");
}

cardAdd.addEventListener("click", toggleAddCardPopup);
popupAddCardToggle.addEventListener("click", toggleAddCardPopup);

//eu preferi utilizar as classes quando possível, remover as id's que não estavam sendo utilizadas e transformar a que restou em classe também, pois ao usar o removeAttribute as outras funções não estavam funcionando.
function addCard(imageInput, titleInput) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardLike = cardElement.querySelector(".button_like");
  const cardDelete = cardElement.querySelector(".button_delete");
  const popupCardToggle = cardElement.querySelector(".popup_card");

  cardImage.src = imageInput;
  cardImage.alt = titleInput;

  cardElement.querySelector(".card__title").textContent = titleInput;
  cardElement.querySelector(".popup__image").src = imageInput;
  cardElement.querySelector(".popup__title").textContent = titleInput;

  cardLike.addEventListener("click", likeCard);
  cardImage.addEventListener("click", handleCardPopup);
  popupCardToggle.addEventListener("click", handleCardPopup);
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

  toggleAddCardPopup();
}

cardFormSubmit.addEventListener("submit", handleCardFormSubmit);

function toggleCardPopup() {
  cardPopup.classList.toggle("popup_opened");
}

function handleCardPopup(evt) {
  evt.preventDefault();
  const cardElement = evt.target.closest(".card");
  const cardPopup = cardElement.querySelector("[name='popup-card']");
  cardPopup.classList.toggle("popup_opened");
}

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

function likeCard(evt) {
  const likeImage = evt.currentTarget.querySelector(".button__image_like");
  const srcImage = likeImage.getAttribute("src");

  srcImage.includes("./images/like.svg")
    ? likeImage.setAttribute("src", "./images/like_active.svg")
    : likeImage.setAttribute("src", "./images/like.svg");

  return likeImage;
}

function deleteCard(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
  cardElement.removeEventListener("click", handleCardPopup, false);
  cardElement.removeEventListener("click", likeCard, false);
}
