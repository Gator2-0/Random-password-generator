// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var a = getPwdLength();
  var b = getSpecialChar();
  console.log('special character choice is: ' + b);
  //passwordText.value = password;
  passwordText.value = a + b;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate the password based on a set of user-input criteria
//
function generatePassword(l, up, lo, nu, sp){
  var password;
  var specialList = [];

  for (let index = 0; index < l; index++) {
    var randomchar = Math.floor(Math.random() * 4);
    if(randomchar == 0){

    }
    
  }
}

//gatherinmg criteria from user:
//password length 8 -128 - need to make some protection working
function getPwdLength(){
  var validLength = true
  while(validLength){
    var pwdLength = prompt('Choose a password length(from 8 to 128)','Type a number from 8 to 128')
    if(8<=pwdLength<=128){
      validLength = false;
      return pwdLength;
      
    }else{
      alert('Please choose a value between 8 and 128.')
    }
    
  }
  
  
}
//special character - upper, lower, numeric, special
function getUpperChar(){
  var upper = confirm('do you want uppercase?');
  console.log(upper);
  return upper;
}

function getNumericChar(){
  var numeric = confirm('Do you want numeric character?')

  return numeric;
}

function getLowerChar(){
  var lower =  confirm('do you want lowercase?');
  return lower;
}

function getSpecialChar(){
  var special = confirm('Do you want special characters?');
  return special;
}
