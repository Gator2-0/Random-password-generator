// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordGenerated = generatePassword(
    getPwdLength(),
    getUpperChar(),
    getLowerChar(),
    getNumericChar(),
    getSpecialChar()
  );
  var passwordText = document.querySelector("#password");
  
  
  
  passwordText.value = passwordGenerated;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate the password based on a set of user-input criteria
//
function generatePassword(l, up, lo, nu, sp){
  var password;
  var specialList = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  var letterList = 'abcdefghijklmnopqrstuvwxyz';

  for (let index = 0; index < l; index++) {
    var randomchar = Math.floor(Math.random() * 4);
    if(randomchar == 0 && up){//return a random uppercase letter
      var upperLetterChosen = letterList.substring(
        Math.floor(Math.random() * (letterList.length + 1)),
        1
      )
      password += upperLetterChosen.toUpperCase;
      index++

    }else if(randomchar == 1 && lo){//return a random lowercase letter
      var lowerLetterChosen = letterList.substring(
        Math.floor(Math.random() * (letterList.length + 1)),
        1
      )
      password += lowerLetterChosen;
      index++

    }else if(randomchar == 2 && nu){//return a random numeric value from 0 to 9
      var numChosen  = Math.floor(Math.random() * 10);
      password += numChosen;
      index++

    }else if(randomchar == 3 && sp){//return a random special character
      var specCharChosen = specialList.substring(
        Math.floor(Math.random()*(specialList.length +1)),
        1
      )
      password += specCharChosen;
      index++;

    }
    /*in case the user did not want the selected choice. 
    ie: no uppercase wanted but randomChar = 0  
    then the code will run again until a valid choice is chosen*/      
  }

  return password;
}

//gathering criteria from user:
//password length 8 -128 - need to make some protection working
function getPwdLength(){
  var validLength = true
  while(validLength){ //check that the value is comprised between 8 and 128, or prompt again.
    var pwdLength = prompt('Choose a password length(from 8 to 128)','Type a number from 8 to 128')
    if(pwdLength >= 8 && pwdLength <= 128){
      console.log()
      validLength = false;
      return pwdLength;

      
    }else{
      alert('Please choose a value between 8 and 128.');
      console.log('the user choice was not between 8 and 128');
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
