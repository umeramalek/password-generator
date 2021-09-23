// variable for input 
var password = document.getElementById("passwordBox")

// variable for characters
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = "!@#$%^&-+*><"

// to activate the generate button
for (var i = 0; i <= characterLenght; i++) {
    var randomNumber = Math.floor(Math.random() * uppperLetters.length);
    password += upperLetters.substring(randomNumber, randomNumber +1);
   }
   document.getElementById("password").value = password;


   // prompt a message asking for character lenght
let characterLenght = prompt("How many characters do you want your password?");
// setting a max and min for the password 8-128 characters and if more or less than that, need to decide a proper lenght
if (characterLenght < 8 || characterLenght >= 128) {
    alert("value should be between 8-128 characters ")




// activating the copy button 
const copyPwd = document.getElementById("passwordBox");
copyPwd.addEventListener("click"); {
    password.select();
    //   document.execCommand("copy");
     alert("Password Copied");
}   
