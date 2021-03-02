import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { cardSubtitleStyles } from './cardSubtitleStyle';
import { getStyles, getClassesNames } from '../../styles/stylesMarker';

const CardSubtitle = (_ref) => {
  let {
    styles,
    classes,
    children
  } = _ref,
      resProps = _objectWithoutPropertiesLoose(_ref, ["styles", "classes", "children"]);

  const classesList = getStyles(cardSubtitleStyles, styles, classes);
  const newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, resProps), children);
};

export default CardSubtitle;