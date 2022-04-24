// Assignment Code
var generateBtn = document.querySelector("#generate");

var finalPassword = "";
var superArray = [];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*",",",".","?","/",";",":","-","_","[","]","(",")","{","}","|","~","=","<",">"];

var length = prompt("How many characters do you want your password to be (between 8 and 128)?", "");
console.log("Password length: "+ length);

if (length < 8 && length > 128) {
    var length = alert("The number must be between 8 and 128 characters. How many characters do you want?")
}else {
    var lowerCase = confirm("Would you like lowercase letters?")
    console.log(lowerCase);
if (lowerCase === true) {
    superArray = superArray.concat(lower);
}
console.log(superArray);

var upperCase = confirm("Would you like uppercase letters?");
console.log(upperCase);
if (upperCase === true) {
    superArray = superArray.concat(upper);
}
console.log(superArray);

var usernumber = confirm("Would you like numbers?");
console.log("Numbers: "+ usernumber);
if (usernumber === true) {
    superArray = superArray.concat(numbers);
}
console.log(superArray);

var symbols = confirm("Would you like any symbols?");
console.log("Symbols: " + symbols);
 
if (symbols === true) {
    superArray = superArray.concat(symbols);
}
console.log(superArray);

function generatePassword() {
    console.log("length: " + length)
    for (let i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * superArray.length);
        var random = superArray[randomIndex];
        console.log("random: " + random)

       finalPassword += random
       console.log("final password: " + finalPassword);
    }
    return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
