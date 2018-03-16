
/*
The Fortune Teller
Store the following into variables:
number of children
partner's name
geographic location
job title

output the fortune to the screen like so:
You will be X in Y, and married to Z with N kids

*/
var numberOfChildren = 7
var partnersName = 'john'
var geographicLocation = 'USA'
var jobTitle = 'the president'

var fortune = ('You will be ' + jobTitle + ' in ' + geographicLocation + ' and married to ' + partnersName + ' with ' + numberOfChildren + ' kids.');
console.log(fortune);

/*
Write a program to work out the area of a rectangle
collect the width & height from the user
calculate an area
display the result
*/

var firstNumber = Number(prompt('Enter first number'));
var secondNumber = Number(prompt('Enter second number'));
var sum = firstNumber+secondNumber;
console.log('the total is ' + sum);
