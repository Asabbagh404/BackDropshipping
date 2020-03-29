// Display list of all books.
exports.index = function(req, res) {
    res.send(req.params.url + req.query.url);
};