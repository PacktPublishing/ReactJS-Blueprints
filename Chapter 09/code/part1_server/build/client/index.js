'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _routes = require('../routes');

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof BOOTSTRAP_CLIENT_STATE !== "undefined") console.log(BOOTSTRAP_CLIENT_STATE);

_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { routes: _routes.routes, history: (0, _createBrowserHistory2.default)() }), document.getElementById('app'));