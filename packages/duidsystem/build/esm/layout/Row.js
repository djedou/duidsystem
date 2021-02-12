import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { rowStyles } from './rowStyle';
import { getStyles, getClassesNames } from '../styles/stylesMarker';
var classesProps = ["row", "lg", "md", "sm", "xl", "xxl", "xs"];

var Row = function Row(props) {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      classesState = _useState2[0],
      setClasses = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      stylesValue = _useState4[0],
      setStylesValue = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      childrenObj = _useState6[0],
      setChildrenObj = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      resProps = _useState8[0],
      setResProps = _useState8[1];

  useEffect(function () {
    var styles = props.styles,
        classes = props.classes,
        children = props.children,
        resProps = _objectWithoutProperties(props, ["styles", "classes", "children"]);

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
  var classesList = getStyles(rowStyles, stylesValue, classesState);
  var newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, resProps), childrenObj);
};

export default Row;