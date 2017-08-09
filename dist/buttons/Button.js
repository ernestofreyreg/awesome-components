'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isUrgent = function isUrgent(title) {
  if (title[0] === '!') {
    return true;
  }

  if (title[title.length - 1] === '!') {
    return true;
  }

  return false;
};

var Button = function Button(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    { className: 'Button ' + (isUrgent(title) && 'urgent'), onClick: onClick, 'data-jsx': 2876876518
    },
    title,
    _react2.default.createElement(_style2.default, {
      styleId: 2876876518,
      css: '.Button[data-jsx="2876876518"]{background-color:#007dff;color:white;padding:4px 10px;font-size:14px;border:none;border-radius:4px;outline:none;cursor:pointer}.Button.urgent[data-jsx="2876876518"]{background-color:red}'
    })
  );
};

exports.default = Button;