// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

// middleware
app.use(express.static(path.join(__dirname, 'app/public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

// your code here...

app.get('/home', function (req, res) {
//  res.sendFile('home.html')
res.sendFile('app/public/home.html', {root: __dirname}) 
})

app.get('/survey', function (req, res) {
  //  res.sendFile('home.html')
  res.sendFile('app/public/survey.html', {root: __dirname}) 
  })

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
