// Assignment Code
var generateBtn = document.querySelector("#generate");

var selectedTypes = "";

//these are the four sets of characters that the password generator can pull from
var keys = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "~!@#$%^&*()_-+=[]{};:/?.>,<",
}

//this array organizes the different character sets so they can be referenced by another function
// var getKey = [
//   function upper() {
//     return keys.upper[Math.floor(Math.random() * keys.upper.length)];
//   },
//   function lower() {
//     return keys.lower[Math.floor(Math.random() * keys.lower.length)];
//   },
//   function numbers() {
//     return keys.numbers[Math.floor(Math.random() * keys.numbers.length)];
//   },
//   function special() {
//     return keys.specials[Math.floor(Math.random() * keys.special.length)];
//   }
// ];

//these are the prompts to enter password length and desired character types
// var passLength = prompt("How long do you want your password to be?")
// var upper = confirm("Do you want capital letters?")
// var lower = confirm("Do you want lowercase letters?")
// var numbers = confirm("Do you want numbers?")
// var special = confirm("Do you want special characters?")

function generatePassword() {
  var passLength = prompt("How long do you want your password to be?")

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var wantsUpper = confirm("Do you want capital letters?")
  var wantsLower = confirm("Do you want lowercase letters?")
  var wantsNumbers = confirm("Do you want numbers?")
  var wantsSpecial = confirm("Do you want special characters?")    

  console.log(passLength)
  console.log(wantsUpper)
  console.log(wantsLower)
  console.log(wantsNumbers)
  console.log(wantsSpecial)

  var password = ""

  if(wantsUpper){
    selectedTypes += keys.upper;
  }

  if(wantsLower){
    selectedTypes += keys.lower;
  }
  if(wantsNumbers){
    selectedTypes += keys.numbers;
  }
  if(wantsSpecial){
    selectedTypes += keys.special;
  }

  if(!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert("Please select at least one character type")
  }

for(i =0; i < passLength; i++) {
  password += selectedTypes.charAt(Math.floor(Math.random() * selectedTypes.length))
}

return password

}


// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when the button is clicked, this line causes the function writePassword to run


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page