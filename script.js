var uppercase_char_codes = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase_char_codes = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number_char_codes = ["0","1","2","3","4","5","6","7","8","9"];
var special_char_codes = ["&","!","#","$","%"];

var randomChoice = function(param) {
  var i = Math.floor(Math.random() * param.length);
  var computerChoice = param[i];
  return computerChoice
}

var passwordLength = prompt("Enter a number between 7 and 129");

var newArray = [];

var getUserInput = function() {    

    var passwordLower = prompt("Would you like to use lowercase letters? y/n");
    if (passwordLower == "y") {
      var lowercase = randomChoice(lowercase_char_codes)
      newArray.push(lowercase);
      console.log(lowercase)
    }

    var passwordUpper = prompt("Would you like to use uppercase letters? y/n");
    if (passwordUpper == "y") {
      var uppercase = randomChoice(uppercase_char_codes)
      newArray.push(uppercase);
      console.log(uppercase)
    }

    var passwordNumber = prompt("Would you like to use numbers? y/n");
    if (passwordNumber == "y") {
      var number = randomChoice(number_char_codes)
      newArray.push(number);
      console.log(number)
    }

    var passwordSpecial = prompt("Would you like to use special characters? y/n");
    if (passwordSpecial == "y") {
      var special = randomChoice(special_char_codes)
      var specialString = special.toString();
      newArray.push(specialString);
      console.log(special)
    } 
}

getUserInput()
console.log(newArray)

var generatePassword = function(newArray) {
  let generatedPassword = ""
  for (var i=0; i < passwordLength; i++) { 
  let datRando = randomChoice(newArray)
  generatedPassword += datRando
  document.getElementById("password").innerHTML = generatedPassword;
 }
  console.log(generatedPassword)
 
}
generatePassword(newArray)

  

  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  generateBtn.addEventListener("click", getUserInput);