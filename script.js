// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Creating prompt
function generatePassword() {
  return prompt('Hello');
}
// lower case
function generateLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// upper case
function generateUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// random number
function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// random symbol
function generateSymbol() {
  const symbols = '!@#$%^&*';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(generatePassword());
console.log(generateLower() + generateUpper() + generateNumber() + generateSymbol());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);