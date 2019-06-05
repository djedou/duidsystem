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

var InputButton = function InputButton(props) {
  var style = props.style,
      name = props.name,
      others = (0, _objectWithoutProperties2["default"])(props, ["style", "name"]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", (0, _extends2["default"])({
    type: "button",
    className: style,
    value: name,
    name: name
  }, others)));
};

InputButton.propTypes = {
  onClick: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  name: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  form: _propTypes["default"].string,
  autofocus: _propTypes["default"].bool,
  style: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var _default = InputButton;
exports["default"] = _default;