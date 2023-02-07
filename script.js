// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// write a function that takes in use input (based on our acceptance criteria) and returns a password string
function generatePassword() {
  var passwordString = "";

  // do stuff

  return passwordString;
}