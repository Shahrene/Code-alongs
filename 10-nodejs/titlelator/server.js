const express = require('express')

const app = express()

const _ = require('lodash')

const request = require('request') //3rd party module

const querystring = require('querystring') // built in module

const PORT = 4567;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

// using templates & storing them in views
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public')) // calls the style.css static file

app.use(function(req, res, next) {
  next()
})

app.get('/', (req, res) => {
res.render('home') //.ejs is implied
})

app.get('/titlelate', (req, res) => {
  const titles = ['talk1', 'talk2', 'talk3']
  const talkTitle = _.sample(titles)
  res.send(`${req.query.keyword} ${talkTitle}`)

})

app.get('/details', (req, res) => {

  const qs = {
    apikey: '2f6435d9',
    t: req.query.title
  }
 const url = `http://omdbapi.com/?${querystring.stringify(qs)}`;
 const options = {
   url: url,
   json: true
 }
 request(options, function(err, omdbRes, data) {
   res.render('details', {movie: data})
 })
})

app.get('/about', (req, res) => {
  res.send('about me')
})
