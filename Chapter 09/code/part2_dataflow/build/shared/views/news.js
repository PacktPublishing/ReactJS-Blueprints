'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _posts = require('./posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {};
    _this.state._activePost = -1;
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var fetchPostsIfNeeded = _props.fetchPostsIfNeeded;
      var dispatch = _props.dispatch;

      dispatch(fetchPostsIfNeeded());
    }
  }, {
    key: 'handleClickCallback',
    value: function handleClickCallback(i) {
      this.setState({ _activePost: i });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$receivePosts = this.props.receivePosts;
      var posts = _props$receivePosts.posts;
      var isFetching = _props$receivePosts.isFetching;
      var lastUpdated = _props$receivePosts.lastUpdated;
      var _activePost = this.state._activePost;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          lastUpdated && _react2.default.createElement(
            'span',
            null,
            'Last updated at ',
            new Date(lastUpdated).toLocaleTimeString(),
            '.'
          )
        ),
        posts && isFetching && posts.length === 0 && _react2.default.createElement(
          'h2',
          null,
          'Loading...'
        ),
        posts && !isFetching && posts.length === 0 && _react2.default.createElement(
          'h2',
          null,
          'Empty.'
        ),
        posts && posts.length > 0 && _react2.default.createElement(
          'div',
          { style: { opacity: isFetching ? 0.5 : 1 } },
          _react2.default.createElement(_posts2.default, { posts: posts, activePost: _activePost,
            onClickHandler: this.handleClickCallback.bind(this) })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  receivePosts: _react2.default.PropTypes.shape({
    posts: _react.PropTypes.array.isRequired,
    isFetching: _react.PropTypes.bool.isRequired,
    lastUpdated: _react.PropTypes.number
  }),
  dispatch: _react.PropTypes.func.isRequired,
  fetchPostsIfNeeded: _react.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    receivePosts: {
      posts: 'posts' in state ? state.posts : [],
      isFetching: 'isFetching' in state ? state.isFetching : true,
      lastUpdated: 'lastUpdated' in state ? state.lastUpdated : null
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);