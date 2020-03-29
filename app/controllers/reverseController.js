// Display list of all books.
exports.index = function (req, res) {
    if (req.query.url) {
        res.send(req.query.url);
    } else {
        res.send('no parameters');
    }
};