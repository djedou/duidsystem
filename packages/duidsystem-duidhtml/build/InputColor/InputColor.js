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

var InputColor = function InputColor(props) {
  var colorTitle = props.colorTitle,
      labelProps = props.labelProps,
      style = props.style,
      colorProps = (0, _objectWithoutProperties2["default"])(props, ["colorTitle", "labelProps", "style"]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("label", (0, _extends2["default"])({
    className: style
  }, labelProps), colorTitle), _react["default"].createElement("input", (0, _extends2["default"])({
    type: "color",
    id: labelProps.htmlFor
  }, colorProps)));
};

InputColor.propTypes = {
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  form: _propTypes["default"].string,
  autofocus: _propTypes["default"].bool,
  style: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  list: _propTypes["default"].string,
  labelProps: _propTypes["default"].object,
  colorTitle: _propTypes["default"].string
};
var _default = InputColor;
exports["default"] = _default;