var $titleBtn = $('.titleBtn')
var $titleDiv = $('.titleDiv')
var $keywordInput = $('.keyword-input')

$titleBtn.on('click', (event) => {
  event.preventDefault();
//fetch title from api

function showTitle(resp) {
  $titleDiv.text(resp.title)
}
//fetch title from api
$.ajax({
  url: 'http://localhost:4567/api/titles',
  data: { keyword: $keywordInput.val()
  }
}).done(showTitle)
//display it on page somewhere

})
