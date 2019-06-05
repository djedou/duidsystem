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

var Form = function Form(props) {
  var children = props.children,
      style = props.style,
      others = (0, _objectWithoutProperties2["default"])(props, ["children", "style"]);
  return _react["default"].createElement("form", (0, _extends2["default"])({
    className: style
  }, others), children);
};

Form.propTypes = {
  style: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  action: _propTypes["default"].string,
  method: _propTypes["default"].oneOf(["get", "post"]),
  name: _propTypes["default"].string,
  enctype: _propTypes["default"].oneOf(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]),
  target: _propTypes["default"].oneOf(["_self", "_parent", "_top", "_blank"]),
  acceptCharset: _propTypes["default"].string,
  novalidate: _propTypes["default"].bool,
  autocomplete: _propTypes["default"].oneOf(["on", "off"]),
  onSubmit: _propTypes["default"].func,
  onReset: _propTypes["default"].func
};
var _default = Form;
exports["default"] = _default;