'use strict';

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = Object.assign({}, _config2.default, {
  title: 'Shared App'
});
module.exports = settings;