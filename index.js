/*I noticed the sample used express, is there a reason I should use that instead of http?*/
const http = require('http');

// Create a server object
const server = http.createServer(function (req, res) {
    // http header
    res.writeHead(200, {'Content-Type': 'text/html'});

    const url = req.url;
    /*The guides I found said I needed an if/then statement, so... I guess this first bit is filler for now?*/
    if (url === '/about') {
        res.write(' Welcome to about us page');
        res.end();
    } else {
    /*Name of a person I know is required, so here's the name of my husband*/
        res.write('Garrett Warner');
        res.end();
    }
});

// The server object listens on port 3000
server.listen(3000, function () {
    console.log("server start at port 3000");
});
