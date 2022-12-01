export default class FormValidator {
    constructor(configObject, formElement) {
      this._inputSelector = configObject.inputSelector;
      this._submitButtonSelector = configObject.submitButtonSelector;
      this._inactiveButtonClass = configObject.inactiveButtonClass;
      this._inputErrorClass = configObject.inputErrorClass;
      this._errorClass = configObject.errorClass;
      this._form = formElement;
    }
  
    _isValid(formElement, inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this.errorClass);
    }
  
    _hideInputError(inputElement) {
      const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  
    _setEventListeners() {
      const inputList = Array.from(
        this._form.querySelectorAll(this._inputSelector),
      );
      const buttonElement = this._form.querySelector(this._submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement);
  
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._isValid(this._form, inputElement);
          this._toggleButtonState(inputList, buttonElement);
        });
      });
    }
  
    enableValidation() {
      this._setEventListeners();
    }
  
    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }
  
    _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.setAttribute("disabled", "");
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute("disabled", "");
      }
    }
  
    resetValidation() {
      const inputList = Array.from(
        this._form.querySelectorAll(this._inputSelector),
      );
      const buttonElement = this._form.querySelector(this._submitButtonSelector);
      inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute("disabled", "");
    }
  }