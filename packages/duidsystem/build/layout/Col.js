"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _colStyle = require("./colStyle");

var _stylesMarker = require("../styles/stylesMarker");

var _propTypes = require("prop-types");

var classesProps = ["col", "xl", "lg", "md", "sm", "xs"];
var propTypes = process.env.NODE_ENV !== "production" ? {
  as: _propTypes.elementType
} : {};
var defaultProps = {
  as: 'div'
};

var Col = function Col(props) {
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
    var prefix = 'col';
    var classesValue = [];
    var spans = [];
    delete resProps["as"];
    classesProps.forEach(function (brkPoint) {
      var propValue = resProps[brkPoint];
      delete resProps[brkPoint];
      var span;
      var offset;
      var order;

      if ((0, _typeof2["default"])(propValue) === 'object' && propValue != null) {
        var _propValue$span = propValue.span;
        span = _propValue$span === void 0 ? true : _propValue$span;
        offset = propValue.offset;
        order = propValue.order;
      } else {
        span = propValue;
      }

      var infix = brkPoint !== 'xs' ? "_".concat(brkPoint) : '';
      if (span) spans.push(span === true ? "".concat(prefix).concat(infix) : "".concat(prefix).concat(infix, "_").concat(span));
      if (order != null) classesValue.push("order".concat(infix, "_").concat(order));
      if (offset != null) classesValue.push("offset".concat(infix, "_").concat(offset));
    });

    if (!spans.length) {
      spans.push(prefix); // plain 'col'
    }

    if (classes !== undefined && Array.isArray(classes)) {
      classes.forEach(function (cl) {
        if (!classesValue.includes(cl)) classesValue.push(cl);
      });
    }

    spans.forEach(function (sp) {
      if (!classesValue.includes(sp)) classesValue.push(sp);
    });
    setClasses(classesValue);
  }, [props]);
  var classesList = (0, _stylesMarker.getStyles)(_colStyle.colStyles, stylesValue, classesState);
  var newClasseName = (0, _stylesMarker.getClassesNames)(classesList);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: newClasseName
  }, resProps), childrenObj);
};

process.env.NODE_ENV !== "production" ? Col.propTypes = propTypes : void 0;
Col.defaultProps = defaultProps;
var _default = Col;
exports["default"] = _default;