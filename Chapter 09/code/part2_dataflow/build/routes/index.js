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

var _news = require('../shared/views/news');

var _news2 = _interopRequireDefault(_news);

var _reactRedux = require('react-redux');

var _actions = require('../shared/actions');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    receivePosts: {
      posts: 'posts' in state ? state.posts : [],
      isFetching: 'isFetching' in state ? state.isFetching : true,
      lastUpdated: 'lastUpdated' in state ? state.lastUpdated : null
    }
  };
}

function mapDispatchToProps(dispatch) {
  return { fetchPostsIfNeeded: _actions.fetchPostsIfNeeded, dispatch: dispatch };
}

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', name: 'Shared App', component: _layout2.default },
  _react2.default.createElement(_reactRouter.Route, { name: 'About', path: 'about', component: _about2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Calculator', path: 'calculator', component: _calculator2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'News', path: 'news', component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_news2.default) }),
  _react2.default.createElement(_reactRouter.IndexRoute, { name: 'Welcome', component: _app2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', name: 'Error', component: _error2.default })
);
exports.routes = routes;