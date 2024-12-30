
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


// document.getElementById("username").addEventListener("blur",()=>{
//     const username=document.getElementById("username").value.trim();
//     const usernamesuccess=document.getElementById("usernamesuccess");
//     const usernameError = document.getElementById("usernameError");
//     usernamesuccess.textContent='';
//     usernameError.textContent='';

//     if(username===''){
//         usernameError.textContent="UserName Is Required Field!"
//     }else if(username.lenght<3){
//         usernameError.textContent = "Username must be longer than 3 characters";
//     }else{
//         usernamesuccess.textContent = "Username Looks Good 😊";
//     }
// })

// document.getElementById("email").addEventListener("blur",()=>{
//     const emailError=document.getElementById("emailError");
//     const emailsuccess=document.getElementById("emailsuccess");
//     const email=document.getElementById("email").value.trim();

//     emailError.textContent = "";
//     emailSuccess.textContent = "";

//     if (email === "") {
//         emailError.textContent = "Email is required";
//       } else if (!(email.includes("@") && email.includes("."))) {
//         emailError.textContent = "Invalid Email. Please enter a valid email.";
//       } else {
//         emailsuccess.textContent = "Email Looks Good 👌";
//       }
// })

// document.getElementById("password").addEventListener("blur",()=>{
//     const passwordError=document.getElementById("passwordError");
//     const passwordsuccess=document.getElementById("passwordsuccess");
//     const password=document.getElementById("passwordsuccess").value.trim();

//     passwordError.textContent = "";
//     passwordSuccess.textContent = "";
  
//     if (password === "") {
//       passwordError.textContent = "Password is required";
//     } else if (password.length < 6) {
//       passwordError.textContent = "Password must contain at least 6 characters";
//     } else {
//       passwordSuccess.textContent = "Your Password Looks Good 🫡";
//     }
// })

// document.querySelector(".confirm-password").addEventListener("blur", () => {
//     const confirmPassword = document.querySelector(".confirm-password").value.trim();
//     const password = document.querySelector(".password").value.trim();
//     const confirmPasswordError = document.getElementById("confirmPasswordError");
//     const confirmPasswordSuccess = document.getElementById("confirmPasswordsuccess");
  
//     confirmPasswordError.textContent = "";
//     confirmPasswordSuccess.textContent = "";
  
//     if (confirmPassword === "") {
//       confirmPasswordError.textContent = "Please confirm your password";
//     } else if (confirmPassword !== password) {
//       confirmPasswordError.textContent = "Passwords do not match";
//     } else {
//       confirmPasswordSuccess.textContent = "Re-entered Password Is Correct";
//     }
//   });