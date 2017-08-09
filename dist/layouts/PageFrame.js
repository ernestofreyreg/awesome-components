'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageFrame = function PageFrame(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'PageFrame', 'data-jsx': 988627274
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: 988627274,
      css: '.PageFrame[data-jsx="988627274"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:1024px;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start}@media screen and (max-width:480px){.PageFrame[data-jsx="988627274"]{width:100%}}@media screen and (max-width:1024px){.PageFrame[data-jsx="988627274"]{width:100%}}'
    })
  );
};

exports.default = PageFrame;