// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log('you clicked the button');

//Prompt the user
//Password lenght
//Lowercase, Uppercase, Numbers, Symbols
//Display password

return'Generated password will go here!'
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);