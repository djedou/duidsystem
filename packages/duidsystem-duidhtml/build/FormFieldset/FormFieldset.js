"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var FormFieldset = function FormFieldset(props) {
  var children = props.children,
      fieldsetProps = props.fieldsetProps,
      legendProps = props.legendProps,
      legendStyle = props.legendStyle,
      legendTitle = props.legendTitle,
      fieldsetStyle = props.fieldsetStyle;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("fieldset", (0, _extends2["default"])({
    className: fieldsetStyle
  }, fieldsetProps), _react["default"].createElement("legend", (0, _extends2["default"])({
    className: legendStyle
  }, legendProps), legendTitle), children));
};

FormFieldset.propTypes = {
  fieldsetStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  fieldsetProps: _propTypes["default"].object,
  legendStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  legendTitle: _propTypes["default"].string,
  legendProps: _propTypes["default"].object
};
var _default = FormFieldset;
exports["default"] = _default;