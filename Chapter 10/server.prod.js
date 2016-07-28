var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var host = process.env.HOST|| "0.0.0.0";
var path = require("path");
var compression = require("compression");
var http = require("http");
var errorHandler = require('express-error-handler');

app.use(compression());
app.get("*", function (req, res) {
  console.log(req.path);
  var file = path.join(__dirname, "public", "assets", req.path);
  res.sendFile(file);
});

server = http.createServer(app);
app.use(function (err, req, res, next) {
  console.log(err);
  next(err);
});
app.use( errorHandler({server: server}) );

app.listen(port, host, function() {
  console.log('Server started at http://'+host+':'+port);
});

