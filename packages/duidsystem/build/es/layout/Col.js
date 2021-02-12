import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useEffect } from 'react';
import { colStyles } from './colStyle';
import { getStyles, getClassesNames } from '../styles/stylesMarker';
import { elementType } from 'prop-types';
const classesProps = ["col", "xl", "lg", "md", "sm", "xs"];
const propTypes = process.env.NODE_ENV !== "production" ? {
  as: elementType
} : {};
const defaultProps = {
  as: 'div'
};

const Col = props => {
  const [classesState, setClasses] = useState();
  const [stylesValue, setStylesValue] = useState();
  const [childrenObj, setChildrenObj] = useState();
  const [resProps, setResProps] = useState();
  useEffect(() => {
    const {
      styles,
      classes,
      children
    } = props,
          resProps = _objectWithoutPropertiesLoose(props, ["styles", "classes", "children"]);

    setStylesValue(styles);
    setChildrenObj(children);
    setResProps(resProps);
    const prefix = 'col';
    const classesValue = [];
    const spans = [];
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
    setClasses(classesValue);
  }, [props]);
  const classesList = getStyles(colStyles, stylesValue, classesState);
  const newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, resProps), childrenObj);
};

process.env.NODE_ENV !== "production" ? Col.propTypes = propTypes : void 0;
Col.defaultProps = defaultProps;
export default Col;