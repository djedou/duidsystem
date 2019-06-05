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

var InputCheckbox = function InputCheckbox(props) {
  var value = props.value,
      labelProps = props.labelProps,
      style = props.style,
      others = (0, _objectWithoutProperties2["default"])(props, ["value", "labelProps", "style"]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("label", (0, _extends2["default"])({}, labelProps, {
    className: style
  }), _react["default"].createElement("input", (0, _extends2["default"])({
    type: "checkbox",
    value: value
  }, others)), value));
};

InputCheckbox.propTypes = {
  onClick: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  form: _propTypes["default"].string,
  autofocus: _propTypes["default"].bool,
  style: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  required: _propTypes["default"].bool,
  checked: _propTypes["default"].bool,
  labelProps: _propTypes["default"].object
};
var _default = InputCheckbox;
exports["default"] = _default;