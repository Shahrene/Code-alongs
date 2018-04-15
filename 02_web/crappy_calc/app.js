//document.querySelector
//document.querySelectorAll
//textContent - sandwiches <h1>textContent</h1>
//value: toast <input type="text">

// tip input gives you strings
// tip script runs straight away as you load

var num1Input = document.querySelector('.num1');
var num2Input = document.querySelector('.num2');
var calcBtn = document.querySelector('.calc-btn');
var resultSpan = document.querySelector('.result');

var bam = function() {
  var total = Number(num1Input.value) + Number(num2Input.value);
  console.log('total:', total);

  resultSpan.textContent = total;
}
//get the value from first input
//get the value from second input
//add it
//set text content of span to result
//set to number
//parse event, function
//
calcBtn.addEventListener('click', bam);
