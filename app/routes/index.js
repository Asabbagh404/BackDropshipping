var express = require('express');
var reverse = express.Router();

var reverse_controller = require('../controllers/reverseController');
// Home page route.
reverse.get('/', function (req, res) {
    res.send('no path');
});

// About page route.
reverse.get('/reverse', function (req, res) {
    res.send('no parameters');
});

reverse.get('/reverse/:url', reverse_controller.index);

module.exports = reverse;