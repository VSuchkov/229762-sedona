var link = document.querySelector(".btn-search");
var popup = document.querySelector(".order-form");
var dateEnter = popup.querySelector("[name=date-enter]");
var dateOut = popup.querySelector("[name=date-out]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("dateEnter");
var adultsPlus = popup.querySelector(".adults-plus");
var childrenPlus = popup.querySelector(".children-plus");
var adultsMinus = popup.querySelector(".adults-minus");
var childrenMinus = popup.querySelector(".children-minus");
var childrenGuests = popup.querySelector("#children");
var adultsGuests = popup.querySelector("#adults");

  popup.classList.add("order-form-hidden");

  adultsMinus.addEventListener("click", function(event) {
  event.preventDefault();
    adultsGuests.value = parseInt(adultsGuests.value) - 1;
    if(adultsGuests.value < 0) {
      adultsGuests.value = 0;
    }
  });

  adultsPlus.addEventListener("click", function(event) {
  event.preventDefault();
    adultsGuests.value = parseInt(adultsGuests.value) + 1;
    if (adultsGuests.value > 9) {
      adultsGuests.value = 9;
    }
  });

  childrenMinus.addEventListener("click", function(event) {
    event.preventDefault();
    childrenGuests.value = parseInt(childrenGuests.value) - 1;
    if(childrenGuests.value < 0) {
      childrenGuests.value = 0;
    }
  });

  childrenPlus.addEventListener("click", function(event) {
    event.preventDefault();
    childrenGuests.value = parseInt(childrenGuests.value) + 1;
    if (childrenGuests.value > 9) {
      childrenGuests.value = 9;
    }
  });

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("order-form-show");
    popup.classList.remove("modal-error");
    if (storage) {
      dateEnter.value = storage;
      dateOut.focus();
    } else {
    dateEnter.focus();
    }
  });

  form.addEventListener("submit", function(event){
    if (!dateEnter.value || !dateOut.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль!");
    } else {
    localStorage.setItem("dateEnter", dateEnter.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("order-form-show")) {
        popup.classList.remove("order-form-show");
        popup.classList.remove("modal-error");
      }
    }
  });