const popup = document.querySelector(".popup");
const profileEdit = document.querySelector(".button_edit");
const profileToggle = document.querySelector(".button_toggle");

function togglePopup() {
  popup.classList.toggle("popup_opened");
}

profileEdit.addEventListener("click", togglePopup);

profileToggle.addEventListener("click", togglePopup);

const formElement = document.querySelector(".popup__container");

const profileFormSubmit = formElement.querySelector(".button_save");

profileFormSubmit.onclick = togglePopup;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
  // Explicaremos em mais detalhes posteriormente.

  const nameInput = document.querySelector("#name");
  const aboutInput = document.querySelector("#about");

  const profileName = document.querySelector(".profile__name");
  const profileAbout = document.querySelector(".profile__about");

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}

formElement.addEventListener("submit", handleProfileFormSubmit);
