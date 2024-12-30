
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let isValid = true;

  // Clear Previous Errors
  document.getElementById("usernameError").textContent = "";
  document.getElementById("usernamesuccess").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("emailsuccess").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("passwordsuccess").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";
  document.getElementById("confirmPasswordsuccess").textContent = "";

  // Validate Username
  const Username = document.querySelector(".username").value.trim();
  if (Username === "") {
    document.getElementById("usernameError").textContent = "Username is required";
    isValid = false;
  } else if (Username.length <= 3) {
    document.getElementById("usernameError").textContent = "Username must be longer than 3 characters";
    isValid = false;
  } else {
    document.getElementById("usernamesuccess").textContent = "Looks Good! 😊";
  }

  // Validate Email
  const email = document.querySelector(".email").value.trim();
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!(email.includes("@") && email.includes("."))) {
    document.getElementById("emailError").textContent = "Invalid Email. Please enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailsuccess").textContent = "Email Looks Good 👌";
  }

  // Validate Password
  const password = document.querySelector(".password").value.trim();
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must contain at least 6 characters";
    isValid = false;
  } else {
    document.getElementById("passwordsuccess").textContent = "Your Password Looks Good 🫡";
  }

  // Confirm Password Validation
  const confirmPassword = document.querySelector(".confirm-password").value.trim();
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent = "Please confirm your password";
    isValid = false;
  } else if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
    isValid = false;
  } else {
    document.getElementById("confirmPasswordsuccess").textContent = "Re-entered Password Is Correct";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});


