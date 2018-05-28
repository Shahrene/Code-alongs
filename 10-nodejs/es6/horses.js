var horses = [
  {
    name: 'maythehorsebewithu',
    active: true,
    country: 'AUS',
    yearOfBirth: 2000,
    hourlyRate: 30,
    hoursWorked: 2000
  },
  {
    name: 'my wife knows everthing',
    active: true,
    country: 'USA',
    yearOfBirth: 2007,
    hourlyRate: 50,
    hoursWorked: 2500
  },
  {
    name: 'arrrrr',
    active: true,
    country: 'USA',
    yearOfBirth: 2004,
    hourlyRate: 30,
    hoursWorked: 2000
  },
  {
    name: 'hoof hearted',
    active: false,
    country: 'AUS',
    yearOfBirth: 1981,
    hourlyRate: 88,
    hoursWorked: 900
  },
  {
    name: 'pony',
    active: false,
    country: 'AUS',
    yearOfBirth: 2003,
    hourlyRate: 12,
    hoursWorked: 9000
  },
  {
    name: 'sunny boy',
    active: true,
    country: 'AUS',
    yearOfBirth: 2003,
    hourlyRate: 42,
    hoursWorked: 6450
  }
]

// var totalEarnings = 0
//
//
// var ausHorses = function(horse) {
//  if horses.country === 'AUS'
//
// }

function isAussie(horses) {
  return horses.country === 'AUS'
}
//alternative
//const isAussie = horse => horse.country === 'AUS'

function calcEarnings(horses) {
  return horses.hourlyRate * horses.hoursWorked
}

function sum(total, num) {
  return total + num //total takes the hours worked of each horse and num adds each one
}


var result = horses
  .filter(isAussie)
  .map(calcEarnings)
  .reduce(sum)


console.log(result)
