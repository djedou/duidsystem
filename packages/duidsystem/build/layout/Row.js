"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _rowStyle = require("./rowStyle");

var _stylesMarker = require("../styles/stylesMarker");

var classesProps = ["row", "lg", "md", "sm", "xl", "xxl", "xs"];

var Row = function Row(_ref) {
  var styles = _ref.styles,
      classes = _ref.classes,
      children = _ref.children,
      resProps = (0, _objectWithoutProperties2["default"])(_ref, ["styles", "classes", "children"]);

  var getParameters = function getParameters() {
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

    return {
      classesState: classesValue,
      propsRes: resProps
    };
  };

  var params = getParameters();
  var classesList = (0, _stylesMarker.getStyles)(_rowStyle.rowStyles, styles, params.classesState);
  var newClasseName = (0, _stylesMarker.getClassesNames)(classesList);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: newClasseName
  }, params.propsRes), children);
};

var _default = Row;
exports["default"] = _default;