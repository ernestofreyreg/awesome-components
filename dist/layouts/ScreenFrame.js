'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScreenFrame = function ScreenFrame(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'ScreenFrame', 'data-jsx': 1508683191
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: 1508683191,
      css: '.ScreenFrame[data-jsx="1508683191"]{position:absolute;top:0;left:0;right:0;bottom:0;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}'
    })
  );
};

exports.default = ScreenFrame;