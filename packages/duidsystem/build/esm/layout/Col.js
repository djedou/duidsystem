import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { colStyles } from './colStyle';
import { getStyles, getClassesNames } from '../styles/stylesMarker';
import { elementType } from 'prop-types';
var classesProps = ["col", "xl", "lg", "md", "sm", "xs"];
var propTypes = process.env.NODE_ENV !== "production" ? {
  as: elementType
} : {};
var defaultProps = {
  as: 'div'
};

var Col = function Col(props) {
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

      if (_typeof(propValue) === 'object' && propValue != null) {
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
  var classesList = getStyles(colStyles, stylesValue, classesState);
  var newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, resProps), childrenObj);
};

process.env.NODE_ENV !== "production" ? Col.propTypes = propTypes : void 0;
Col.defaultProps = defaultProps;
export default Col;