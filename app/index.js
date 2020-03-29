var express = require ('express');
const app = express();
var router = require('./routes/index');

app.use('/api', router);

app.listen(3005, function () {
    console.log('Example app listening on port 3005!')
});