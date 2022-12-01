import { initialCards } from "./index.js";

export default class Card {
  constructor(text, link, templateSelector, index, handleImagePopup) {
    this._text = text;
    this._link = link;
    this._templateSelector = templateSelector;
    this._index = index;
    this._handleImagePopup = handleImagePopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._element = cardElement;
  }

  _setListners() {
    //deleteCard
    this._element
      .querySelector(".button_delete")
      .addEventListener("click", this._deleteCard);

    //toggleLike

    this._element
      .querySelector(".button_like")
      .addEventListener("click", this._toggleLike);

    //callPopupImage

    this._element
      .querySelector(".card__image")
      .addEventListener("click", (evt) => {
        this._handleImagePopup(evt);
      });
  }

  _deleteCard(evt) {
    evt.target.closest.remove();
    this.removeEventListener("click", handleImagePopup, false);
    this.removeEventListener("click", likeCard, false);
  }

  _toggleLike() {
    this.includes("./images/like.svg")
      ? this.setAttribute("src", "./images/like_active.svg")
      : this.setAttribute("src", "./images/like.svg");
    return this;
  }

  generateCard() {
    this._getTemplate();
    this._setListners();
    this._element.querySelector(".card__text").textContent = this._text;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._text;
    return this._element;
  }
}
