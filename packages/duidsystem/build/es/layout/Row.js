import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { rowStyles } from './rowStyle';
import { getStyles, getClassesNames } from '../styles/stylesMarker';
const classesProps = ["row", "lg", "md", "sm", "xl", "xxl", "xs"];

const Row = (_ref) => {
  let {
    styles,
    classes,
    children
  } = _ref,
      resProps = _objectWithoutPropertiesLoose(_ref, ["styles", "classes", "children"]);

  const getParameters = () => {
    const sizePrefix = 'row_cols';
    const classesValue = ["row"];
    classesProps.forEach(brkPoint => {
      const propValue = resProps[brkPoint];
      delete resProps[brkPoint];
      let cols;

      if (propValue != null) {
        cols = propValue;
      }

      const infix = brkPoint !== 'xs' ? `_${brkPoint}` : '';
      if (cols != null) classesValue.push(`${sizePrefix}${infix}_${cols}`);
    });

    if (classes !== undefined && Array.isArray(classes)) {
      classes.forEach(cl => {
        if (!classesValue.includes(cl)) classesValue.push(cl);
      });
    }

    return {
      classesState: classesValue,
      propsRes: resProps
    };
  };

  let params = getParameters();
  const classesList = getStyles(rowStyles, styles, params.classesState);
  const newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, params.propsRes), children);
};

export default Row;