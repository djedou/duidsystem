"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DropDawDatalist = function DropDawDatalist(props) {
  var optionItems = props.optionItems,
      inputProps = props.inputProps,
      datalistProps = props.datalistProps,
      labelProps = props.labelProps,
      inputStyle = props.inputStyle,
      datalistStyle = props.datalistStyle,
      labelStyle = props.labelStyle;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("label", {
    htmlFor: labelProps.htmlFor,
    className: labelStyle
  }, labelProps.name), _react["default"].createElement("input", {
    type: "text",
    id: inputProps.id,
    list: inputProps.list,
    className: inputStyle
  }), _react["default"].createElement("datalist", {
    id: datalistProps.id
  }, optionItems.map(function (item) {
    return _react["default"].createElement("option", {
      key: item,
      value: item
    });
  })));
};

DropDawDatalist.propTypes = {
  optionItems: _propTypes["default"].arrayOf(_propTypes["default"].string),
  inputProps: _propTypes["default"].shape({
    id: _propTypes["default"].string,
    list: _propTypes["default"].string
  }),
  inputStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  datalistProps: _propTypes["default"].shape({
    id: _propTypes["default"].string
  }),
  labelProps: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    htmlFor: _propTypes["default"].string
  }),
  labelStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var _default = DropDawDatalist;
exports["default"] = _default;