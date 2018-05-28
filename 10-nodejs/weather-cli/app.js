

// send request to api
// console log temperature
// in lib.js you have a function to convert f to c
// require it in this file and use it

var request = require('request');
var lib = require('./lib');
var city = process.argv[2]
var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=150fe397273b0898d4e8b500237412d9"

request(url, function (error, response, body) {
var resp = JSON.parse(body)
console.log(resp.main.temp)
});
