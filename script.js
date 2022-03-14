// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialChar = ['!','@','#','$','%','^','&','*','<','>','(',')'];
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var charLenght = 8;
var choiceArr = [];

function generatePassword() {
console.log('you clicked the button');
var password = '';
for(var i = 0; i < charLenght; i++){
  var randomLetter = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomLetter];
}
return password;
};

function getPrompts() {
  choiceArr = [];
charLenght = parseInt(prompt('Insert password length'));

if(isNaN(charLenght) || charLenght < 8 || charLenght > 128) {
alert('Character has to be a number, 8 - 128 digits.');
return false;
}

if (confirm('Would you like lowercase')) {
choiceArr = choiceArr.concat(lowerCase);
}

if (confirm('Would you like uppercase')) {
  choiceArr = choiceArr.concat(upperCase);
  }

  if (confirm('Would you like special characters')) {
    choiceArr = choiceArr.concat(specialChar);
    }

    if (confirm('Would you like numbers')) {
      choiceArr = choiceArr.concat(number);
      }

      return true;
}



// Write password to the #password input
function writePassword() {
  var correctPrompt = getPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);