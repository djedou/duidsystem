"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Button = function Button(props) {
  var children = props.children,
      style = props.style,
      prop = (0, _objectWithoutProperties2["default"])(props, ["children", "style"]);
  return _react["default"].createElement("button", (0, _extends2["default"])({
    type: "button",
    className: style
  }, prop), children);
};

Button.propTypes = {
  style: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  form: _propTypes["default"].string,
  autofocus: _propTypes["default"].bool,
  formaction: _propTypes["default"].string,
  formmethod: _propTypes["default"].oneOf(["get", "post", "put", "delete"]),
  formenctype: _propTypes["default"].oneOf(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]),
  formtarget: _propTypes["default"].oneOf(["_self", "_parent", "_top", "_blank"]),
  formnovalidate: _propTypes["default"].bool,
  autocomplete: _propTypes["default"].oneOf(["on", "off"]),
  onClick: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
};
var _default = Button;
exports["default"] = _default;