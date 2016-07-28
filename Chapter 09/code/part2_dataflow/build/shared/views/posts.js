'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Posts).apply(this, arguments));
  }

  _createClass(Posts, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      function createmarkup(html) {
        return { __html: html };
      };
      return _react2.default.createElement(
        'ul',
        null,
        this.props.posts.map(function (post, i) {
          return _react2.default.createElement(
            'li',
            { key: i },
            _react2.default.createElement(
              'a',
              { onClick: _this2.props.onClickHandler.bind(_this2, i) },
              post.title
            ),
            _this2.props.activePost === i ? _react2.default.createElement('div', { style: { marginBottom: 15 },
              dangerouslySetInnerHTML: createmarkup(post.body) }) : _react2.default.createElement('div', null)
          );
        })
      );
    }
  }]);

  return Posts;
}(_react.Component);

exports.default = Posts;

Posts.propTypes = {
  posts: _react.PropTypes.array.isRequired,
  activePost: _react.PropTypes.number.isRequired
};