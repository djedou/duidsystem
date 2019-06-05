"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DropDawSelectGroup = function DropDawSelectGroup(props) {
  var optGroupItems = props.optGroupItems,
      selectProps = props.selectProps,
      labelProps = props.labelProps,
      labelStyle = props.labelStyle,
      selectStyle = props.selectStyle;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("label", {
    className: labelStyle,
    htmlFor: labelProps.htmlFor
  }, labelProps.name), _react["default"].createElement("select", (0, _extends2["default"])({
    className: selectStyle
  }, selectProps), optGroupItems.map(function (item) {
    return _react["default"].createElement("optgroup", (0, _extends2["default"])({
      key: item.groupId
    }, item.groupProps), item.optItems.map(function (el) {
      return _react["default"].createElement("option", (0, _extends2["default"])({
        key: el.optId,
        value: el.value
      }, el.optProps), el.value);
    }));
  })));
};

DropDawSelectGroup.propTypes = {
  optGroupItems: _propTypes["default"].arrayOf(_propTypes["default"].object),
  selectProps: _propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  }),
  selectStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  labelProps: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    htmlFor: _propTypes["default"].string
  }),
  labelStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var _default = DropDawSelectGroup;
exports["default"] = _default;