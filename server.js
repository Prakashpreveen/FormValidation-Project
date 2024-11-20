let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

// Adding event Listener

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "* Name is Required *";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "* Please Enter Full Name *";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  setTimeout(() => {
    nameError.innerHTML = "";
  }, 1000);
  return true;
}

function validateNumber() {
  let number = document.getElementById("contact-number").value;
  phoneError.innerHTML = "";

  if (number.length == 0) {
    phoneError.innerHTML = "* Phone no is Required *";
    return false;
  }
  if (number.length != 10) {
    phoneError.innerHTML = "* Phone no should be 10 digits *";
    return false;
  }
  if (isNaN(number)) {
    phoneError.innerHTML = "* Enter the Valid Number *";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  setTimeout(() => {
    phoneError.innerHTML = "";
  }, 1000);
  return true;
}

// Set up the event listener for the email input field
document
  .getElementById("contact-email")
  .addEventListener("keydown", function (event) {
    // Check if the user pressed '@'
    if (event.key === "@") {
      let email = this.value;
      event.preventDefault();
      this.value = email + "@gmail.com";
    }
  });

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  let emailError = document.getElementById("email-error");

  // Clear previous error messages
  emailError.innerHTML = "";

  // Validate the email format
  if (!email.includes("@gmail.com")) {
    emailError.innerHTML = "* Please Enter Valid Email *";
    return false;
  } else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    setTimeout(() => {
      emailError.innerHTML = "";
    }, 1000);
    return true;
  }
}
