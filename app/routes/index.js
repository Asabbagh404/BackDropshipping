var express = require('express');
var reverse = express.Router();

var reverse_controller = require('../controllers/reverseController');
// Home page route.
reverse.get('/', function (req, res) {
    res.send('no path');
});

reverse.get('/reverse', reverse_controller.index);


module.exports = reverse;