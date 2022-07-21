// Vamos descobrir o formulário no DOM
let popup = document.querySelector(".popup");
let profileEdit = document.querySelector(".button_edit");
let profileToggle = document.querySelector(".button_toggle");

function openPopup() {
  popup.classList.add("popup_opened");
}

profileEdit.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileToggle.addEventListener("click", closePopup);

let formElement = document.querySelector(".popup__container"); // Use o método querySelector()

// Em seguida vem o handler do submit
// ainda não vai enviar para lugara nenhum
let profileFormSubmit = formElement.querySelector(".button_save");

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
  // Esta linha impede o navegador
  // de enviar o formulário da forma padrão.
  evt.preventDefault();
  // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
  // Explicaremos em mais detalhes posteriormente.

  // Vamos encontrar os campos de formulário do DOM
  let nameInput = formElement.querySelector("#name"); // Use querySelector()
  let jobInput = formElement.querySelector("#about"); // Use querySelector()

  // Selecione elementos onde os valores de campo serão inseridos
  let profileName = formElement.querySelector(".profile__name");
  let profileAbout = formElement.querySelector(".profile__about");

  // Insira novos valores usando textContent
  // propriedade do método querySelector()
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener("submit", handleProfileFormSubmit + closePopup);
