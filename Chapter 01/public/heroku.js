var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var compression = require('compression');
var basicAuth = require('basic-auth');

app.use(compression());

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  }

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  if (user.name === 'guest' && user.pass === 'letmein') {
    return next();
  } else {
    return unauthorized(res);
  }
};

// allowed file types
app.get(['*.js','*.ico','*.png','*.jpg','*.css','bundle.js.map'], function (req, res) {
	res.sendFile(__dirname+"/"+req.path);
});

// all other requests will be routed to index.html
app.get('*', auth, function (req, res) {
	res.sendFile(__dirname+"/index.html");
});

app.listen(port, function () {
});