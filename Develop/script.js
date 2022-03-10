// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//array to store preferenced characters
var myCharacters=[]

//get character prefernce from user
//numbers
var numbers= confirm("Do you want to use numbers?")
if (numbers=== true) {myCharacters.push( "0","1", "2", "3", "4", "5", "6", "7", "8", "9")}

//lowercase letter
var lowerCase= confirm("Do you want to use lowercase letters?")
if (lowerCase=== true) {myCharacters.push( "a","b", "c", "d", "e", "f", "g", "h", "i", "j","k","l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z")}

//uppercase letter
var upperCase= confirm("Do you want to use Uppercase letters?")
if (upperCase=== true) {myCharacters.push( "A","B", "C", "D", "E", "F", "G", "H", "I", "J","K","L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z")}

//special characters
var special = confirm("Do you want to use special characters?")
if (special=== true) {myCharacters.push( "!","#","$","%","&","'","(",",",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]", "^", "_","`","{","|","}","~")}

//check if no characters have been selected
if (myCharacters.length==0){alert("you have to choose characters"); return;}

//check password Length
passwordLengthFunc=()=>{
passwordLength= prompt("how many chatacters should your password be? (min 8, max 128)")
if (passwordLength===null){return}
else if (isNaN(passwordLength)){alert("not a number"), passwordLengthFunc()};
if (passwordLength< 8 || passwordLength> 128){alert("Password needs to be between 8 and 128 characters"),passwordLengthFunc()}
else return passwordLength}


//returned password length
var chosenPasswordLength= passwordLengthFunc();

//randomly choose characters from myCharacters array
passwordArray= []
for (let index = 0; index < chosenPasswordLength; index++) {
  passwordArray.push(myCharacters[Math.floor(Math.random() * myCharacters.length)])
  
}

//make array into string
password= passwordArray.join("")

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
