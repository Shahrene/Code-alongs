

const express = require('express')

const app = express()

const _ = require('lodash')

const cors = require('cors')

const PORT = 4567;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.use(cors())

app.get('/', (req, res) => {
})

app.get('/api/titles', () => {
  const titles = [
    'dogs',
    'cats',
    'penguins',
    'cows'
  ]

  res.json(titles)
})

app.get('/api/titles', (req, res) => {
  const titles = [
    'title1',
    'title2',
    'title3',
    'title4',
    'title5'
  ]
  var data = {
    title: _.sample(titles)
  }
  res.json(data)
})
