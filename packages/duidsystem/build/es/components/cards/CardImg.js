import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { cardImgStyles } from './cardImgStyle';
import { getStyles, getClassesNames } from '../../styles/stylesMarker';

const CardImg = (_ref) => {
  let {
    styles,
    classes,
    children
  } = _ref,
      resProps = _objectWithoutPropertiesLoose(_ref, ["styles", "classes", "children"]);

  const classesList = getStyles(cardImgStyles, styles, classes);
  const newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("img", _extends({
    className: newClasseName,
    alt: "duidsystem_img"
  }, resProps), children);
};

export default CardImg;