import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { cardImgStyles } from './cardImgStyle';
import { getStyles, getClassesNames } from '../../styles/stylesMarker';

var CardImg = function CardImg(_ref) {
  var styles = _ref.styles,
      classes = _ref.classes,
      children = _ref.children,
      resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

  var classesList = getStyles(cardImgStyles, styles, classes);
  var newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("img", _extends({
    className: newClasseName,
    alt: "duidsystem_img"
  }, resProps), children);
};

export default CardImg;