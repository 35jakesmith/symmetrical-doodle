// Assignment code here

// called variables
const characters = {
lower: 'abcdefghijklmnopqrstuvwxyz',
upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
num: '123456789',
spec: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};


function generatePassword() {
  // prompt of password length
  var length = window.prompt("How many characters would you like?")
  
  // if they select anything less than 8 or more than 128
  if (length < 8 || length > 128){
    alert("Password length must be between 8 and 128 characters. Please click 'Generate Password' again.")
    return ""
  }
  
  // if they select the right parameters continue with the function

  // password generate variable
  var passwordGen = "";

  // prompt of lowercase letters
  var lower = confirm("Would you like lowercase letters in your password?")
  if (lower) {
    passwordGen += characters.lower
  };

 // prompt of uppercase letters
  var upper = confirm("Would you like uppercase letters in your password?")
  if (upper) {
    passwordGen += characters.upper
  };

  // prompt of numbers
  var num = confirm("Would you like numbers in your password?")
  if (num) {
    passwordGen += characters.num
  };

  // prompt of special characters
  var spec = confirm("Would you like special characters in your password?")
  if (spec) {
    passwordGen += characters.spec
  };

  // if no character types are selected
  if (passwordGen.length == 0) {
    alert("Select at least one character type. Please click 'Generate Password' again.")
    return ""
  }

  // variable of password
  var password = "";

  for (let i = 0; i < length; i++) {
    password += passwordGen[Math.floor(Math.random() * passwordGen.length)]
  };
  
// The final password
  return password;
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