var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var port = process.env.PORT || 8080;
var app = express();
var compiler = webpack(config);
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');
app.use( bodyParser.json({limit:'50mb'}) );

cloudinary.config({ 
  cloud_name: 'sven-anders-robbestad', 
  api_key: '944756879793684', 
  api_secret: 'pgRsIo9ltYne8P6P1Z_BJ9hfp9E' 
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo:true,
  publicPath: config.output.publicPath
}));

var isProduction = process.env.NODE_ENV === 'production';

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname, "assets")));

app.post('/upload', function(req, res) {
  var _res = res;
  cloudinary.uploader.upload(req.body.image, function(result) { 
    _res.send(JSON.stringify(result));
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'assets','index.html'));
});



app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:'+port);
});

