import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { colStyles } from './colStyle';
import { getStyles, getClassesNames } from '../styles/stylesMarker';
import PropTypes from 'prop-types';
var classesProps = ["col", "xl", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
"lg", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
"md", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
"sm", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
"xs" // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
];
var propTypes = process.env.NODE_ENV !== "production" ? {
  as: PropTypes.elementType
} : {};
var defaultProps = {
  as: 'div'
};

var Col = function Col(_ref) {
  var styles = _ref.styles,
      classes = _ref.classes,
      children = _ref.children,
      resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

  var getParameters = function getParameters() {
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
    return {
      classesState: classesValue,
      propsRes: resProps
    };
  };

  var params = getParameters();
  var classesList = getStyles(colStyles, styles, params.classesState);
  var newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, params.propsRes), children);
};

process.env.NODE_ENV !== "production" ? Col.propTypes = propTypes : void 0;
Col.defaultProps = defaultProps;
export default Col;