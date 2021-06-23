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

var passwordLength = prompt('How long do you want your password?')

if(passwordLength.length < 8 || passwordLength.length > 128 ) {
  alert('Your password length must be between 8 and 128 characters.')
}

var confirmLowercase = confirm('Do you want Lowercase letters in your password?');

var confirmUppercase = confirm('Do you want Uppercase letters in your password?');

var confirmNumbers = confirm('Do you want Numbers in your password?');

var confirmSpecialCharacters = confirm('Do you want any special characters in your password?')