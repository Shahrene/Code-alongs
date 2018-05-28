

//what are the libraries that node includes?
// modules:
// - http
// - file system
// - os

var fs = require('fs');

var buffer = fs.readFileSync('ex1.js')
console.log(buffer.toString());
