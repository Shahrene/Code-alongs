var fs = require('fs');

//call back has a signature
fs.readFile('ex1.js', function(err, data) {
 console.log(data.toString);
});
