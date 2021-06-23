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

var upperAlphabetChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var lowerAlphabetChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var confirmLowercase = confirm('Do you want Lowercase letters in your password?');

var confirmUppercase = confirm('Do you want Uppercase letters in your password?');

var confirmNumbers = confirm('Do you want Numbers in your password?');

var confirmSpecialCharacters = confirm('Do you want any special characters in your password?')