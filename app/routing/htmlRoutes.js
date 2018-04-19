var path = require('path');


module.exports = function(app) {
    app.get('/', function (req, res) {
        //  res.sendFile('home.html')
        //res.sendFile('home.html', { root: __dirname })
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get('/survey', function (req, res) {
        //  res.sendFile('home.html')
        //res.sendFile('survey.html', { root: __dirname })
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
}