console.log('guessing game');

// Guessing game
//setup a secret number
//the user should be asked to guess a number
//output a happy message if the guess is correct
//output a sad message if the guess is wrong, ask to guess the number again

var secret = 42;
var input;

while (input !== secret) {
  input = Number(prompt('Enter a number between 1-50'));
//input = Number(input) can be used alternatively


//debugger
  if (input === secret) {
    console.log('you lucky thing');
  } else {
//debugger
    console.log('try again');
  }
}
