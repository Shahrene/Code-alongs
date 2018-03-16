console.log('arrays');

//Create an array of the days of the week
var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//Remove Sunday from the last postion and move it to the first position. Use array methods.
daysOfTheWeek.pop();
daysOfTheWeek.unshift('Sunday');


//The first inner array should be the weekdays
//The second inner array should be the weekend days
var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var weekend = ['Saturday', 'Sunday'];

// Remove either the weekdays or the weekends
var daysOfTheWeek = [weekdays, weekend];
daysOfTheWeek.pop()
// Sort the remaining days alphabetically
daysOfTheWeek.sort()

console.log(daysOfTheWeek)
