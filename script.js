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
  console.log(passwordGenerated);
  passwordText.value = passwordGenerated;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate the password based on a set of user-input criteria
//
function generatePassword(l, up, lo, nu, sp){
  var password = '';
  var specialList = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  var letterList = 'abcdefghijklmnopqrstuvwxyz';
  console.log('Now starting password generation...')
  console.log('l='+l);

  for (let index = 0; index < l; index++) {
    var randomchar = Math.floor(Math.random() * 4);
    console.log('randomChar='+ randomchar+' index='+ index);
    if(randomchar == 0 && up){//return a random uppercase letter
      var subStart = Math.floor(Math.random() * (letterList.length + 1)) ;
      var upperLetterChosen = letterList.substring(
        subStart,
        subStart + 1
      )
      console.log(upperLetterChosen.toLowerCase());
      password += upperLetterChosen.toUpperCase();
      index++

    }else if(randomchar == 1 && lo){//return a random lowercase letter
      var subStart = Math.floor(Math.random() * (letterList.length + 1)) ;
      var lowerLetterChosen = letterList.substring(
        subStart,
        subStart + 1
      )
      console.log(lowerLetterChosen);
      password += lowerLetterChosen;
      index++

    }else if(randomchar == 2 && nu){//return a random numeric value from 0 to 9
      var numChosen  = Math.floor(Math.random() * 10);
      console.log(numChosen);
      password += numChosen;
      index++

    }else if(randomchar == 3 && sp){//return a random special character
      var subStart = Math.floor(Math.random() * (specialList.length + 1)) ;
      var specCharChosen = specialList.substring(
        subStart,
        subStart + 1
      )
      console.log(specCharChosen);
      password += specCharChosen;
      index++;

    }
    index--;
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
      console.log('The password length should be: '+ pwdLength);
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
  console.log('uppercase: '+ upper);
  return upper;
}

function getNumericChar(){
  var numeric = confirm('Do you want numeric character?')
  console.log('Numeric: '+ numeric);
  return numeric;
}

function getLowerChar(){
  var lower =  confirm('do you want lowercase?');
  console.log('Lowercase: '+ lower);
  return lower;
}

function getSpecialChar(){
  var special = confirm('Do you want special characters?');
  console.log('special characters: '+ special);
  return special;
}
