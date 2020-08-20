const form = document.querySelector("#form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const svg = document.querySelectorAll(".svg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!firstname.value) {
    displayErrorMessage(firstname, "First Name cannot be empty");
  } else {
    removeError(firstname);
  }

  if (!lastname.value) {
    displayErrorMessage(lastname, "Last Name cannot be empty");
  } else {
    removeError(lastname);
  }

  if (!email.value) {
    displayErrorMessage(email, "email cannot be empty");
  } else if (!isValid(email)) {
    displayErrorMessage(email, "Looks like this is not an email");
  } else {
    removeError(email);
  }

  if (!password.value) {
    displayErrorMessage(password, "password cannot be empty");
  } else {
    removeError(password);
  }
});

// Displaying error for incorrect input
const displayErrorMessage = (label, message) => {
  label.parentNode.querySelector("small").innerText = message;
  label.parentNode.querySelector("small").style.opacity = "1";
  label.style.border = "1px solid hsl(0, 100%, 74%)";
  label.style.color = "hsl(0, 100%, 74%)";
  svg.forEach((s) => {
    s.style.opacity = "1";
  });
};

// Removing the error
const removeError = (label) => {
  label.parentNode.querySelector("small").style.opacity = "0";
  label.style.border = "1px solid hsl(246, 25%, 77%)";
  label.style.color = "black";
  svg.forEach((s) => {
    s.style.opacity = "0";
  });
};

// Email Validation using Regex
function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
