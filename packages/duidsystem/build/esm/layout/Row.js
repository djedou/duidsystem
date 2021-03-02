import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { rowStyles } from './rowStyle';
import { getStyles, getClassesNames } from '../styles/stylesMarker';
var classesProps = ["row", "lg", "md", "sm", "xl", "xxl", "xs"];

var Row = function Row(_ref) {
  var styles = _ref.styles,
      classes = _ref.classes,
      children = _ref.children,
      resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

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
  var classesList = getStyles(rowStyles, styles, params.classesState);
  var newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, params.propsRes), children);
};

export default Row;