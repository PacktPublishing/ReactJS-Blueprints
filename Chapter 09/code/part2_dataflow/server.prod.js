'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _cpFile = require('cp-file');

var _cpFile2 = _interopRequireDefault(_cpFile);

var _expressErrorHandler = require('express-error-handler');

var _expressErrorHandler2 = _interopRequireDefault(_expressErrorHandler);

var _envs = require('envs');

var _envs2 = _interopRequireDefault(_envs);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _routes = require('./build/routes');

var _settings = require('./build/shared/settings');

var _settings2 = _interopRequireDefault(_settings);

var _server = require('react-dom-stream/server');

var _server2 = _interopRequireDefault(_server);

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _reactRedux = require('react-redux');

var _configureStore = require('./build/shared/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _fetchPosts = require('./build/shared/api/fetch-posts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8080;
var host = process.env.HOST || '0.0.0.0';
var app = (0, _express2.default)();
var http = require('http');
app.set('environment', (0, _envs2.default)('NODE_ENV', process.env.NODE_ENV || 'production'));
app.set('port', port);
app.use((0, _compression2.default)());

(0, _cpFile2.default)('assets/app.css', 'public/assets/app.css').then(function () {
  console.log('Copied app.css');
});
app.use((0, _serveStatic2.default)(_path2.default.join(__dirname, 'public', 'assets')));

var appRoutes = function appRoutes(app) {
  app.get('*', function (req, res) {
    (0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (err, redirectLocation, props) {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (props) {

        (0, _fetchPosts.fetchPostsAsync)(function (posts) {
          // Compile an initial state
          var isFetching = false;
          var lastUpdated = Date.now();
          var initialState = {
            posts: posts,
            isFetching: isFetching,
            lastUpdated: lastUpdated
          };
          // Create a new Redux store instance
          var store = (0, _configureStore2.default)(initialState);
          // Render the component to a string
          res.write('<!DOCTYPE html>\n          <html>\n            <head>\n              <meta charSet="utf-8" />\n              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />\n              <meta name="viewport" content="width=device-width, \n                initial-scale=1, maximum-scale=1, user-scalable=no"/>\n              <link async rel="stylesheet" type="text/css"\n                href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>\n              <link async rel="stylesheet" type="text/css" \n                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />\n              <link async href=\'https://fonts.googleapis.com/css?family=Bitter\' \n                rel=\'stylesheet\' type=\'text/css\'/>\n              <link async rel="stylesheet" href="/app.css" />\n                <title>' + _settings2.default.title + '</title>\n                </head>\n                 <script>\n                  window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n                 </script>\n                <body><div id="app">');
          var stream = _server2.default.renderToString(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_reactRouter.RoutingContext, props)
          ));
          stream.pipe(res, { end: false });
          stream.on("end", function () {
            res.write('</div><script src="/bundle.js"></script></body></html>');
            res.end();
          });'';
        });
      } else {
        res.sendStatus(404);
      }
    });
  });
};
var router = _express2.default.Router();
appRoutes(router);
app.use(router);

var server = http.createServer(app);
app.use(function (err, req, res, next) {
  console.log(err);
  next(err);
});

app.use((0, _expressErrorHandler2.default)({ server: server }));

app.listen(port, host, function () {
  console.log('Server started for ' + _settings2.default.title + ' at http://' + host + ':' + port);
});

