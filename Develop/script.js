// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ---------------------------------------------------------------------------------------------
var arrayCharsArr =[['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']]
var charactersArr = []
var upperAlphabetChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerAlphabetChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var passwordArrayCharacters = []
var deniedCharacters = []
var generatedPassword = []


console.log(charactersArr)
// Write password to the #password input
function writePassword() {
  
  // ---------------------------------------------------------------------------------------------
  var passwordCharLength = prompt('How long do you want your password?')
  var passwordLength = parseInt(passwordCharLength);
  if(passwordLength >= 8 && passwordLength <= 128) {
    alert('Your password will be ' + passwordLength + ' characters.')
  } else {
    alert('Your password length must be between 8 and 128 characters and must be a number.')
    return;
  }
  
  var confirmLowercase = confirm('Do you want Lowercase letters in your password?');
  
  var confirmUppercase = confirm('Do you want Uppercase letters in your password?');
  
  var confirmNumbers = confirm('Do you want Numbers in your password?');
  
  var confirmSpecialCharacters = confirm('Do you want any special characters in your password?')
  var checkConfirmsArr = [confirmLowercase, confirmUppercase, confirmNumbers, confirmSpecialCharacters]

    // for ( i = 0; i < checkConfirmsArr.length; i++) {
    //   if(confirmLowercase === false) {
    //     deniedCharacters.push(arrayCharsArr[i])
    //   } else {
    //     charactersArr.push(arrayCharsArr[i])
    //   }
    //   return
    // }

    if (confirmLowercase) {
      charactersArr.push(lowerAlphabetChars)
      console.log(charactersArr);
    } 

    if (confirmUppercase) {
      charactersArr.push(upperAlphabetChars);
      console.log(charactersArr)
    } 

    if(confirmNumbers) {
      charactersArr.push(numbersArr);
      console.log(charactersArr)
    } 

    if(confirmSpecialCharacters) {
      charactersArr.push(specialChars);
      console.log(charactersArr)
    } 
    if (confirmSpecialCharacters === false && confirmUppercase === false && confirmLowercase === false && confirmNumbers === false) {
      alert("You must select at least one parameter to generate a password. Refresh the page and try again.");
    } 
    
    console.log(charactersArr)

  // if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters) {
  //   charactersArr.push(upperAlphabetChars);
  //   charactersArr.push(lowerAlphabetChars);
  //   charactersArr.push(numbersArr);
  //   charactersArr.push(specialChars);
  // } else if(confirmLowercase === false) {
  //   charactersArr.push(upperAlphabetChars);
  //   charactersArr.push(numbersArr);
  //   charactersArr.push(specialChars);
  // } else if(confirmUppercase === false) {
  //   charactersArr.push(lowerAlphabetChars);
  //   charactersArr.push(numbersArr);
  //   charactersArr.push(specialChars);
  // } else if(confirmNumbers === false) {
  //   charactersArr.push(upperAlphabetChars);
  //   charactersArr.push(lowerAlphabetChars);
  //   charactersArr.push(specialChars);
  // } else if(confirmSpecialCharacters === false) {
  //   charactersArr.push(upperAlphabetChars);
  //   charactersArr.push(lowerAlphabetChars);
  //   charactersArr.push(numbersArr);
  // }else {
  //   return alert("You must select at least one parameter to generate the password.");
  // }
  //var password = generatePassword();
  for (i=0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charactersArr.length);
    var randomSelect = Math.floor(Math.random() * charactersArr[randomIndex].length);
    var randomSelectedCharacter = charactersArr[randomIndex][randomSelect];
    console.log(randomSelectedCharacter)
    passwordArrayCharacters.push(randomSelectedCharacter);
    generatedPassword = passwordArrayCharacters.join('')
  }


  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
    
} 

// End of function writePassword()



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
