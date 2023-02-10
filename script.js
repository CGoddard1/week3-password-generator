// Assignment Code
var generateBtn = document.querySelector("#generate");

//prompt to ask for password length
function generatePassword() {
  var passLength = window.prompt("Enter the length of password you would like");

//return prompt if length is too short or too long
if (passLength < 8 || passLength > 128) {
  window.alert("Your password MUST be between 8 and 128 characters.")
  return;
}

//Prompts
var lowercase = window.confirm("Would you like your password to include lowercase characters?");
var uppercase = window.confirm("Would you like your password to include uppercase characters?");
var numbers = window.confirm("Would you like your password to include numbers?");
var specialchar = window.confirm("Would you like your password to include special characters?")

//list of characters for the password
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//empty array for user's choices
var passwordContainer = [];

//If a user wants these characters, these IF statements will be pushed into the empty Array
if (lowercase === true) {
  passwordContainer.push(lowercaseList);
}

if (uppercase === true) {
  passwordContainer.push(uppercaseList);
}

if (numbers === true) {
  passwordContainer.push(numbersList);
}

if (specialChar === true) {
  passwordContainer.push(specialCharList);
}

//if user doesn't confirm anything, automatically uses lowercase characters
if (passLength.length === 0) {
  passwordContainer.push(lowercaseList);
}

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
  var passwordText = "";

  // do stuff

  return passwordText;
}