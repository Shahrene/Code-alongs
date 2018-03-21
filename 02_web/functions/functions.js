

// var numbers = [1, 2, 3, 4];
// var total = 0;
// for (var index = 0; index < numbers.length; index++) {
//   total = total + numbers[index];
// }
// console.log(total);

//same expression, however incorporating a function
var sum = function(arrOfNum) {
  var total = 0;

  for (var index = 0; index < arrOfNum.length; index++) {
    total = total + arrOfNum[index];
  }
  return total;
}
var numbers = [1, 2, 3, 4];
var result = sum(numbers);
console.log(result);

// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var calculateAge = function(birthDate, currentYear) {
  var birthDate = 2000;
  var currentYear = 2018;

var age = currentYear-birthDate; {
  var ageBeforeBirth = age - 1;
  var message = ('You are either ' + ageBeforeBirth  + ' or ' + age);
}
}
calculateAge();
console.log(message);

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var lengths = function(arrOfStrings) {
  var arrOfNums = []
  for (var i = 0; i < arrOfStrings).length; i++) {
    arrOfNums.push(arrOfStrings[i].length)
  }
  return arrOfNums
}

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(num1, num2, num3) {
  var result = Math.pow(num1*num2, num3);
  console.log(result);
}

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

var wordReverse = function(str) {
  return str.split("").reverse().join("");
}
wordReverse("hello");
