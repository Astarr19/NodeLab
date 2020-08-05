"use strict";
let http = require('http');
let quotes = require('./quotes');
let server = (req, res) => {
    res.writeHead(200, {"Content-type": "Text/plain"});
    let random = Math.floor(Math.random() * facts.length);
    res.write(quotes[random]);
    res.end();
}
http.createServer(server).listen(8080);