// write CLI program
//you can pass in a file name
//program will count the number of lines of code
//print it in the console


var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split('\n');
console.log(lines.length);
