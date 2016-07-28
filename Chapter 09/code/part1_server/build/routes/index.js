'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('../shared/views/app');

var _app2 = _interopRequireDefault(_app);

var _error = require('../shared/views/error');

var _error2 = _interopRequireDefault(_error);

var _layout = require('../shared/views/layout');

var _layout2 = _interopRequireDefault(_layout);

var _about = require('../shared/views/about');

var _about2 = _interopRequireDefault(_about);

var _calculator = require('../shared/views/calculator');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', name: 'Shared App', component: _layout2.default },
  _react2.default.createElement(_reactRouter.Route, { name: 'About', path: 'about', component: _about2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Calculator', path: 'calculator', component: _calculator2.default }),
  _react2.default.createElement(_reactRouter.IndexRoute, { name: 'Welcome', component: _app2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', name: 'Error', component: _error2.default })
);
exports.routes = routes;