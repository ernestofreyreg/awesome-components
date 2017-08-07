'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageFrame = function PageFrame(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'PageFrame' },
    children,
    _react2.default.createElement(
      'style',
      { jsx: true },
      '\n      .PageFrame {\n        display: inline-flex;\n        flex-grow: 1;\n        flex-direction: column;\n        width: 1024px;\n      }\n\n      @media screen and (max-width:480px) {\n        .PageFrame {\n          width: 100%;\n        }\n      }\n\n      @media screen and (max-width: 1024px) {\n        .PageFrame {\n          width: 100%;\n        }\n      }\n    '
    )
  );
};

exports.default = PageFrame;