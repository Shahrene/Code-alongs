console.log('toilet');

var bowl = document.querySelector('.bowl');
var flushBtn = document.querySelector('.flush')

var poop = function() {
  bowl.classList.add('poop');
}

function flush () {
  bowl.classList.remove('poop');
}

bowl.addEventListener('click', poop);
flushBtn.addEventListener('click', flush);
