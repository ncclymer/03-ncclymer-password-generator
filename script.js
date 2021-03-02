

//var passwordLower = prompt("Would you like to use lowercase letters? y/n");

//var passwordUpper = prompt("Would you like to use uppercase letters? y/n");

//var passwordNumber = prompt("Would you like to use numbers? y/n");

//var passwordSpecial = prompt("Would you like to use special characters? y/n");

//var passwordSpecialOptions = prompt("Choose one: &,!,#,$,%");


var uppercase_char_codes = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase_char_codes = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number_char_codes = ["0","1","2","3","4","5","6","7","8","9"];
var special_char_codes = ["&","!","#","$","%"];

var writePassword = function() {
  var passwordLength = prompt("Enter a number between 7 and 129");
 
  var index = Math.floor(Math.random() * uppercase_char_codes.length);
  var computerChoice = options[index];
  }

var length = 

  console.log(writePassword)

  document.getElementById("password").innerHTML = writePassword;


  function makePassword() {
    let complexity = document.getElementById("card-body")
  }
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);