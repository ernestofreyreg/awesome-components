'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScreenFrame = function ScreenFrame(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'ScreenFrame' },
    children,
    _react2.default.createElement(
      'style',
      { jsx: true },
      '\n      .ScreenFrame {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: white;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: flex-start;\n      }\n    '
    )
  );
};

exports.default = ScreenFrame;