// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path');

// new express app
var app = express()

// middleware
app.use(express.static(path.join(__dirname, 'app/public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//htmlRoutes(app);
var htmlRoutes = require('./app/routing/htmlRoutes')(app);

//This is new - testing
çrequire('./app/routing/apiRoutes')(app);

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
