// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ---------------------------------------------------------------------------------------------
var charactersArr = []
var upperAlphabetChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerAlphabetChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var passwordArrayCharacters = []
var generatedPassword = []
var deniedCharacters = []

// Write password to the #password input
function writePassword() {

  // ---------------------------------------------------------------------------------------------
  var passwordCharLength = prompt('How long do you want your password?')
  var passwordLength = parseInt(passwordCharLength);
  if(passwordLength >= 8 && passwordLength <= 128) {
    alert('Your password will be ' + passwordLength + ' characters.')
  } else {
    alert('Your password length must be between 8 and 128 characters and must be a number.')
    // return false;
  }

  var confirmLowercase = confirm('Do you want Lowercase letters in your password?');

  console.log(confirmLowercase)

  var confirmUppercase = confirm('Do you want Uppercase letters in your password?');

  var confirmNumbers = confirm('Do you want Numbers in your password?');

  var confirmSpecialCharacters = confirm('Do you want any special characters in your password?')

  var checkConfirmsArr = [confirmLowercase, confirmUppercase, confirmNumbers, confirmSpecialCharacters]
  function selectCharacters() {
    for ( i = 0; i < checkConfirmsArr.length; i++) {
      if(checkConfirmsArr[i] === false) {
        deniedCharacters.push(checkConfirmsArr[i])
      } else {
        charactersArr.push(checkConfirmsArr[i])
      }
    }
  }
  // console.log(checkConfirmsArr.length)
  //var password = generatePassword();
  for (i=0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charactersArr.length)
    var randomSelect = Math.floor(Math.random() * charactersArr[randomIndex].length)
    var randomSelectedCharacter = charactersArr[randomIndex][randomSelect];
    passwordArrayCharacters.push(randomSelectedCharacter);
    generatedPassword = passwordArrayCharacters.join('')
  }


  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword;
    
}



// console.log(passwordCharLength)

// console.log(passwordLength);


// console.log(typeof passwordLength)

// var charactersArr = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']]

// console.log(charactersArr)
//  console.log(charactersArr.length)

// var randomIndex = Math.floor(Math.random() * charactersArr.length)
// console.log(randomIndex)
// var randomSelect = Math.floor(Math.random() * charactersArr[randomIndex].length)
// console.log(randomSelect)
// var randomSelectedCharacter = charactersArr[randomIndex][randomSelect];


// function generatePassword() {
//   }
//   return generatedPassword
// }

// writePassword()
