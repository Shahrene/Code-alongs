

var listItems = document.querySelectorAll('li');
var completedItemsSpan = document.querySelector('span');

//add event handler for clicks
//call back function - signature
var markAsDone = function(event) {
  if (event.target.classList.contains('done')) {
  event.target.classList.remove('done');
} else {
  event.target.classList.add('done');
}
  completedItemsSpan.textContent = document.querySelectorAll('.done').length;
}

listItems.forEach(function(item) {
  item.addEventListener('click', markAsDone);
 });

//in a for loop
// var markAsDone = function(event) {
  //event.target.style.textDecoration = 'line-through';
//}

//for (cvar i = 0; i < listItems.length; i++) {
  //listItems[i].addEventListener('click', markAsDone)
//}
