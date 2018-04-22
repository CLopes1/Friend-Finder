//Pull in required dependencies
var path = require('path');

//Import the friends list
var friends = require('../data/friends.js');

//Export the API routes so that they're avaialble outside of this file
module.exports = function (app) {


    //Displays friends list
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })

    //Post new entry to the friends array
    app.post('/api/friends', function (req, res) {
        friends.push(req.body)

        //console.log('req', req);
        var userData = req.body; // where the body parser shines
        console.log('userData', userData);

        //Grab new friend's data

        // add new friend to friends array

        // loop over friends list, do a comparison to find best match
        for (var i = 0; i < friends.length; i++) {
            console.log("console logging i" + i)
        }

        

        // return best match
        res.json(friends);
    })

}