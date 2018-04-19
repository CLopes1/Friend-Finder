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

var friends = [
  {
    name: "Bryan Tran",
    photo: "No Image",
    scores: [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    name: "Quinton Fults",
    photo: "No Image",
    scores: [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
];

var htmlRoutes = require('./app/routing/htmlRoutes')(app);
//htmlRoutes(app);

//This is new - testing
var apiRoutes = require('./app/routing/apiRoutes')(app);

/*app.get('/', function (req, res) {
//  res.sendFile('home.html')
res.sendFile('app/public/home.html', {root: __dirname}) 
})

app.get('/survey', function (req, res) {
  //  res.sendFile('home.html')
  res.sendFile('app/public/survey.html', {root: __dirname}) 
})*/

app.get('/api/friends', function (req, res) {
  res.json(friends)
});

app.post('/api/friends', function (req, res) {
  friends.push(req.body)

  //console.log('req', req);
  var userData = req.body; // where the body parser shines
  console.log('userData', userData);

  // loop over friends and find best match
  for (var i = 0; i < friends.length; i++) {
    console.log("console logging i" + i)
  }

  // add new friend to friends array

  // return best match
  res.json(friends);

});

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
