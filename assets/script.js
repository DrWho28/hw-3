/*// Assignment Code
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

  //passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/

// DOM elements 
const resultEL =document.getElementById("results")
const lengthEL =document.getElementById("lengthEL")
const uppercaseEL =document.getElementById("uppercase")
const lowercaseEL =document.getElementById("lowercase")
const numberEL =document.getElementById("numbers")
const symbolEL =document.getElementById("symbol")
const generateEL =document.getElementById("generate")
const clipboardEL =document.getElementById("clipboard")
const modal =document.getElementById("options")

 const RandomFunc ={
   number:getRadomNumber,
   lower:getRandomLower,
   symbol:getRandomSymbol,
   upper:getRandomUpper,
 }

 /*generateEL.addEventListener ("click", (e) => {
  //e.preventDefault()
  //console.log(modal)
  //modal.style.display="flex"
}) */

// generator function - https://www.w3schools.com/html/html_charset.asp

function getRandomLower () {
return string.fromCharCode(Math.floor (Math.random()* 26) + 97);
}
function getRandomUpper (){
  return string.fromCharCode(Math.floor (Math.random()* 26) + 65)
}
function getRandomSymbol(){
  const symbol ='!,@,#,$,%,^,&,*,(,),_,+,{,},|,",:,<,>,?,,/,.,;,],[,],';
  return Symbol[Math.floor (Math.random() * Symbol.length )];
}

function getRadomNumber (){
  return string.fromCharCode(Math.floor (Math.random()* 10) + 48)
}
 
modal.addEventListener("submit", (e) => {
e.preventDefault()
const uppercase = uppercaseEL.value === "y"
const lowercase= lowercaseEL.value === "y"
const number= numberEL.value (=== "y")
const symbol=symbolEl.value (=== "y")
function generatePassword (upper,lower,num,sym){
let password=""
if (upper === true){
password += getRandomUpper()}
if (lower === true){
  password += getRandomLower()}
if (num === true){
  password += getRadomNumber()}
  if (sym === true){
    password += getRandomSymbol()}

document.getElementById("password")
.innerHTML=password
return password
  }
modal.style.display=""
console.log(password)
})

