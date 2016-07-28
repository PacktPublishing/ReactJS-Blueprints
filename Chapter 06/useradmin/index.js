'use strict';
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

var app = express();
app.use(cors({credentials: true, origin: true}));
mongoose.connect(process.env.MONGOLAB_URI ||
  'mongodb://localhost/memberapp/users');

var appToken = '1234567890';

passport.use(new Strategy(
    function (token, cb) {
      //console.log(token);
      if (token === appToken) {
        return cb(null, true);
      }
      return cb(null, false);
    })
);

var userSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: String
});

var searchDb = mongoose.model('users', userSchema);

var routes = function (app) {
  app.use(bodyparser.json());

  app.get('/login',
   passport.authenticate('bearer', {session: false}),
    function (req, res) {
        res.json(({"message":"GET is not allowed. Please POST request with username and password."}));
    });

  app.post('/login',
   passport.authenticate('bearer', {session: false}),
    function (req, res) {
      console.log(req.body);
      var username = req.body.username;
      var password = req.body.password;

      searchDb.find({login: username}, function (err, data) {
        res.json(data);
      });
    });

}
var router = express.Router();
routes(router);
app.use('/v1', router);
var port = 5000;
app.listen(process.env.PORT || port, function () {
  console.log('server listening on port ' + (process.env.PORT || port));
});
