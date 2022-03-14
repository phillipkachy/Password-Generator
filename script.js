// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log('you clicked the button');

var specialChar = ['!','@','#','$','%','^','&','*','<','>','(',')'];
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var charLenght = 8;
//Prompt the user
function getPrompts() {
charLenght = parseInt(prompt('Insert password length'));

if(isNaN(charLenght));
}
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