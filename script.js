// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = window.prompt("Enter the length of password you would like");

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