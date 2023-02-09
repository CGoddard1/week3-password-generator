// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = window.prompt("Enter the length of password you would like");

if (passLength < 8 || passLength > 128) {
  window.alert("Your password MUST be between 8 and 128 characters.")
  return;
}

var length = window.prompt("choose password length between 8 and 128 characters")

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// function generatePassword(){
//   var length = 8;
//   char = "abcdefghijklmnopqrstuvwkyz";
//   num = "1234567890";
//   passwordText = [""];
//    for(i=0;i < length; i++){
//      passwordText += char.charAt(Math.floor(Math.random() * char.length));
//    }
//    return passwordText;
//   };
  
//   console.log(generatePassword());
  
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