exports.home = function (req, res) {
    console.log('Hello');
    res.send('Garrett Warner');
};

exports.about = function (req, res) {
    res.send('Welcome to about us page');
};

exports.contact = function (req, res) {
    res.send('Welcome to contact us page');
};