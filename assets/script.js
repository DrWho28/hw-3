// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){

// logic for password

    return 'Password'
}
// Write password to the #password input
function writePassword() {
  console.log(password)
  var password = generatePassword(); // 'Password'
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
