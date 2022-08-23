const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("text-field__input_valid");
    input.classList.remove("text-field__input_invalid");
    input.nextElementSibling.textContent = "";
    if (input.checkValidity()) {
      input.classList.add("text-field__input_valid");
      input.nextElementSibling.textContent = "Отлично!";
    } else {
      input.classList.add("text-field__input_invalid");
      input.nextElementSibling.textContent = input.validationMessage;
    }
  });
});

// ======================= form add
const formAdd = document.querySelector("#form__add");

formAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = formAdd.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("text-field__input_valid");
    input.classList.remove("text-field__input_invalid");
    input.nextElementSibling.textContent = "";
    if (input.checkValidity()) {
      input.classList.add("text-field__input_valid");
      input.nextElementSibling.textContent = "Отлично!";
    } else {
      input.classList.add("text-field__input_invalid");
      input.nextElementSibling.textContent = input.validationMessage;
    }
  });
});


// form reg 

const formReg = document.querySelector("#form__reg");

formReg.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = formReg.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("text-field__input_valid");
    input.classList.remove("text-field__input_invalid");
    input.nextElementSibling.textContent = "";
    if (input.checkValidity()) {
      input.classList.add("text-field__input_valid");
      input.nextElementSibling.textContent = "Отлично!";
    } else {
      input.classList.add("text-field__input_invalid");
      input.nextElementSibling.textContent = input.validationMessage;
    }
  });
});

// nav

const registration = document.querySelector("#registration");
const add = document.querySelector("#add");
const main = document.querySelector("#main");
const pageAdd = document.querySelector("#page__add");
const pageMain = document.querySelector("#page__main");
const pageRegistration = document.querySelector("#page__registration");

add.addEventListener("click", () => {
  pageAdd.style.display = "block";
  pageMain.style.display = "none";
  pageRegistration.style.display = "none";
  add.classList.add("nav_active");
  main.classList.remove("nav_active");
  registration.classList.remove("nav_active");
});

main.addEventListener("click", () => {
  pageMain.style.display = "block";
  pageAdd.style.display = "none";
  pageRegistration.style.display = "none";
  main.classList.add("nav_active");
  add.classList.remove("nav_active");
  registration.classList.remove("nav_active");
});

registration.addEventListener("click", () => {
  pageRegistration.style.display = "block";
  pageMain.style.display = "none";
  pageAdd.style.display = "none";
  registration.classList.add("nav_active");
  add.classList.remove("nav_active");
  main.classList.remove("nav_active");
});
