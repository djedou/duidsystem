import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { colStyles } from './colStyle';
import { getStyles, getClassesNames } from '../styles/stylesMarker';
import PropTypes from 'prop-types';
const classesProps = ["col", "xl", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
"lg", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
"md", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
"sm", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
"xs" // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
];
const propTypes = process.env.NODE_ENV !== "production" ? {
  as: PropTypes.elementType
} : {};
const defaultProps = {
  as: 'div'
};

const Col = (_ref) => {
  let {
    styles,
    classes,
    children
  } = _ref,
      resProps = _objectWithoutPropertiesLoose(_ref, ["styles", "classes", "children"]);

  const getParameters = () => {
    const prefix = 'col';
    const classesValue = [];
    const spans = [];
    delete resProps["as"];
    classesProps.forEach(brkPoint => {
      const propValue = resProps[brkPoint];
      delete resProps[brkPoint];
      let span;
      let offset;
      let order;

      if (typeof propValue === 'object' && propValue != null) {
        ({
          span = true,
          offset,
          order
        } = propValue);
      } else {
        span = propValue;
      }

      const infix = brkPoint !== 'xs' ? `_${brkPoint}` : '';
      if (span) spans.push(span === true ? `${prefix}${infix}` : `${prefix}${infix}_${span}`);
      if (order != null) classesValue.push(`order${infix}_${order}`);
      if (offset != null) classesValue.push(`offset${infix}_${offset}`);
    });

    if (!spans.length) {
      spans.push(prefix); // plain 'col'
    }

    if (classes !== undefined && Array.isArray(classes)) {
      classes.forEach(cl => {
        if (!classesValue.includes(cl)) classesValue.push(cl);
      });
    }

    spans.forEach(sp => {
      if (!classesValue.includes(sp)) classesValue.push(sp);
    });
    return {
      classesState: classesValue,
      propsRes: resProps
    };
  };

  let params = getParameters();
  const classesList = getStyles(colStyles, styles, params.classesState);
  const newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, params.propsRes), children);
};

process.env.NODE_ENV !== "production" ? Col.propTypes = propTypes : void 0;
Col.defaultProps = defaultProps;
export default Col;