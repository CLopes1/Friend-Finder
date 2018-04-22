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

        //Store user input in a variable and key into the scores parameter
        var surveyInput = req.body; // where the body parser shines
        scoreArr = ('userData', surveyInput.scores);
        
        //Converts the scores array from a list of strings to a list of integers
        //stringArr.map(Number) will convert an array of strings to an array of numbers
        var numbers = scoreArr.map(Number);
        console.log(numbers)
        
        //Gets total sum of integers in the 
        function getSum(total, num) {
            return total + num;
        }
        
        surveyTotal = numbers.reduce(getSum);
        console.log("the total is = " + surveyTotal)


        // Loop over friends list, do a comparison to find best match
        // for (var i = 0; i < friends.length; i++) {
        // console.log("console logging i" + i)
        // }



        // return best match
        res.json(friends);
    })

}