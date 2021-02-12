"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _rowStyle = require("./rowStyle");

var _stylesMarker = require("../styles/stylesMarker");

var classesProps = ["row", "lg", "md", "sm", "xl", "xxl", "xs"];

var Row = function Row(props) {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      classesState = _useState2[0],
      setClasses = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      stylesValue = _useState4[0],
      setStylesValue = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      childrenObj = _useState6[0],
      setChildrenObj = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      resProps = _useState8[0],
      setResProps = _useState8[1];

  (0, _react.useEffect)(function () {
    var styles = props.styles,
        classes = props.classes,
        children = props.children,
        resProps = (0, _objectWithoutProperties2["default"])(props, ["styles", "classes", "children"]);
    setStylesValue(styles);
    setChildrenObj(children);
    setResProps(resProps);
    var sizePrefix = 'row_cols';
    var classesValue = ["row"];
    classesProps.forEach(function (brkPoint) {
      var propValue = resProps[brkPoint];
      delete resProps[brkPoint];
      var cols;

      if (propValue != null) {
        cols = propValue;
      }

      var infix = brkPoint !== 'xs' ? "_".concat(brkPoint) : '';
      if (cols != null) classesValue.push("".concat(sizePrefix).concat(infix, "_").concat(cols));
    });

    if (classes !== undefined && Array.isArray(classes)) {
      classes.forEach(function (cl) {
        if (!classesValue.includes(cl)) classesValue.push(cl);
      });
    }

    setClasses(classesValue);
  }, [props]);
  var classesList = (0, _stylesMarker.getStyles)(_rowStyle.rowStyles, stylesValue, classesState);
  var newClasseName = (0, _stylesMarker.getClassesNames)(classesList);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: newClasseName
  }, resProps), childrenObj);
};

var _default = Row;
exports["default"] = _default;