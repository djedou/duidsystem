import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { cardImgOverlayStyles } from './cardImgOverlayStyle';
import { getStyles, getClassesNames } from '../../styles/stylesMarker';

const CardImgOverlay = (_ref) => {
  let {
    styles,
    classes,
    children
  } = _ref,
      resProps = _objectWithoutPropertiesLoose(_ref, ["styles", "classes", "children"]);

  const classesList = getStyles(cardImgOverlayStyles, styles, classes);
  const newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, resProps), children);
};

export default CardImgOverlay;