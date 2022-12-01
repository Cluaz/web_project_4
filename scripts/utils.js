export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (
      this._popup.classList.contains("popup_opened") &&
      evt.key === "Escape"
    ) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });

    this._popup.addEventListener("click", (evt) => {
      if (!evt.target.closest(".popup__container")) {
        this.close();
      }
    });

    this._popup
      .querySelector(".button_toggle")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
