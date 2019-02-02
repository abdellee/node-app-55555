//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world from 5555');
});
//listen to port 5555 by default
// this is to test ngix web proxy server
app.listen(process.env.PORT || 5555);
 
module.exports = app;
