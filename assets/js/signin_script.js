const form = document.querySelector("#signup"),
fnameField = form.querySelector(".fname-field"),
fnameInput = fnameField.querySelector(".fname"),
lnameField = form.querySelector(".lname-field"),
lnameInput = lnameField.querySelector(".lname"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");
// Email Validtion
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}
//Name validation
function checkfname() {
  if (fnameInput.value !== fnameInput.value || fnameInput.value === "") {
    return fnameField.classList.add("invalid");
  }
  fnameField.classList.remove("invalid");
}
function checklname() {
  if (lnameInput.value !== lnameInput.value || lnameInput.value === "") {
    return lnameField.classList.add("invalid");
  }
  lnameField.classList.remove("invalid");
}
// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkfname();
  checklname();
  checkEmail();
  createPass();
  confirmPass();

  //calling function on key up
  fnameInput.addEventListener("keyup", checkfname);
  lnameInput.addEventListener("keyup", checklname);
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !fnameField.classList.contains("invalid") &&
    !lnameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    document.getElementById("signup-container"). style. display = "none";
    document.getElementById("login-container"). style. display = "block";

 
  }
  
});
