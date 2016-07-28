'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator() {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Calculator).call(this));

    _this.state = {};
    _this.state._input = 0;
    _this.state._prev = 0;
    _this.state._toZero = false;
    _this.state._symbol = null;
    return _this;
  }

  _createClass(Calculator, [{
    key: 'handlePercentage',
    value: function handlePercentage() {
      this.setState({ _input: this.state._input / 100, _toZero: true });
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      this.setState({ _input: "0" });
    }
  }, {
    key: 'handlePlusMinus',
    value: function handlePlusMinus(e) {
      this.setState({ _input: this.state._input > 0 ? -this.state._input : Math.abs(this.state._input) });
    }
  }, {
    key: 'handleCalculate',
    value: function handleCalculate(e) {
      var value = this.refs.calcInput.props.value;
      if (this.state._symbol) {
        switch (this.state._symbol) {
          case "+":
            this.setState({ _input: (Number(this.state._prev) || 0) + Number(value), _symbol: null });
            break;
          case "-":
            this.setState({ _input: (Number(this.state._prev) || 0) - Number(value), _symbol: null });
            break;
          case "/":
            this.setState({ _input: (Number(this.state._prev) || 0) / Number(value), _symbol: null });
            break;
          case "*":
            this.setState({ _input: (Number(this.state._prev) || 0) * Number(value), _symbol: null });
            break;
        }
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var input = Number(this.state._input) || "";
      if (this.state._toZero) {
        this.setState({ _toZero: false });
        input = "";
      }
      if (isNaN(e.target.value)) {
        this.setState({ _toZero: true,
          _prev: this.state._input,
          _symbol: e.target.value
        });
      } else {
        this.setState({ _input: input + e.target.value });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ _input: e.target.value });
    }
  }, {
    key: 'calc',
    value: function calc() {
      return _react2.default.createElement(
        'div',
        { id: 'calculator' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { md: 12 },
          _react2.default.createElement(_reactBootstrap.Input, { type: 'text', className: 'calcInput', ref: 'calcInput', defaultValue: '0',
            onChange: this.handleChange.bind(this), value: this.state._input }),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', onClick: this.handleClear.bind(this) },
            'C'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', onClick: this.handlePlusMinus.bind(this) },
            String.fromCharCode(177)
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', onClick: this.handlePercentage.bind(this) },
            '%'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '/', onClick: this.handleClick.bind(this) },
            String.fromCharCode(247)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '7', onClick: this.handleClick.bind(this) },
            '7'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '8', onClick: this.handleClick.bind(this) },
            '8'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '9', onClick: this.handleClick.bind(this) },
            '9'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '*', onClick: this.handleClick.bind(this) },
            String.fromCharCode(215)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '4', onClick: this.handleClick.bind(this) },
            '4'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '5', onClick: this.handleClick.bind(this) },
            '5'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '6', onClick: this.handleClick.bind(this) },
            '6'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '-', onClick: this.handleClick.bind(this) },
            '-'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '1', onClick: this.handleClick.bind(this) },
            '1'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '2', onClick: this.handleClick.bind(this) },
            '2'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '3', onClick: this.handleClick.bind(this) },
            '3'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', value: '+', onClick: this.handleClick.bind(this) },
            '+'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc wide', value: '0', onClick: this.handleClick.bind(this) },
            '0'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'calc', onClick: this.handleCalculate.bind(this) },
            '='
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { md: 12 },
          _react2.default.createElement(
            'h2',
            null,
            'Calculator'
          ),
          this.calc()
        )
      );
    }
  }]);

  return Calculator;
}(_react2.default.Component);

exports.default = Calculator;