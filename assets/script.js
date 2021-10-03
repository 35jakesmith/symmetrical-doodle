// Assignment code here
function generatePassword() {
 // prompt of password length
  window.prompt("How many characters would you like?")

  // prompt of lowercase letters
  window.prompt("Would you like lowercase letters in your password?")

  // prompt of uppercase letters
  window.prompt("Would you like uppercase letters in your password?")

  // prompt of numbers
  window.prompt("Would you like numbers in your password?")

  // prompt of special characters
  window.prompt("Would you like special characters in your password?")

  return "This is the password";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);