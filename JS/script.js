ShowWelcomePopup();

function ShowWelcomePopup() {
  let userName = prompt("Please enter your name:");
  if (userName != "") {
    document.getElementById("welcome-user").innerHTML = userName;
  }
}

function ValidateForm() {
  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const messageInput = document.getElementById("message-input");

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === ""
  ) {
    alert("Please fill out all fields.");
    return false;
  } else {
    document.getElementById("message-output").innerHTML =
      "Thank you, " + nameInput.value + "! Your message has been sent.";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    return true;
  }
}
