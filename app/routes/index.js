var express = require('express');
var reverse = express.Router();

var reverseController = require('../controllers/reverse_controller');
// Home page route.
reverse.get('/', function (req, res) {
    res.send('no path');
});

reverse.get('/reverse', reverseController.index);


module.exports = reverse;