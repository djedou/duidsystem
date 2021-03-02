import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { cardTextStyles } from './cardTextStyle';
import { getStyles, getClassesNames } from '../../styles/stylesMarker';

var cardText = function cardText(_ref) {
  var styles = _ref.styles,
      classes = _ref.classes,
      children = _ref.children,
      resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

  var classesList = getStyles(cardTextStyles, styles, classes);
  var newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("p", _extends({
    className: newClasseName
  }, resProps), children);
};

export default cardText;