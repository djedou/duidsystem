"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _cardImgStyle = require("./cardImgStyle");

var _stylesMarker = require("../../styles/stylesMarker");

var CardImg = function CardImg(_ref) {
  var styles = _ref.styles,
      classes = _ref.classes,
      children = _ref.children,
      resProps = (0, _objectWithoutProperties2["default"])(_ref, ["styles", "classes", "children"]);
  var classesList = (0, _stylesMarker.getStyles)(_cardImgStyle.cardImgStyles, styles, classes);
  var newClasseName = (0, _stylesMarker.getClassesNames)(classesList);
  return /*#__PURE__*/_react["default"].createElement("img", (0, _extends2["default"])({
    className: newClasseName,
    alt: "duidsystem_img"
  }, resProps), children);
};

var _default = CardImg;
exports["default"] = _default;