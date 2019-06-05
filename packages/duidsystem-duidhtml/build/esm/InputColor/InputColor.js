import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';

var InputColor = function InputColor(props) {
  var colorTitle = props.colorTitle,
      labelProps = props.labelProps,
      style = props.style,
      colorProps = _objectWithoutProperties(props, ["colorTitle", "labelProps", "style"]);

  return React.createElement(React.Fragment, null, React.createElement("label", _extends({
    className: style
  }, labelProps), colorTitle), React.createElement("input", _extends({
    type: "color",
    id: labelProps.htmlFor
  }, colorProps)));
};

InputColor.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  autofocus: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  list: PropTypes.string,
  labelProps: PropTypes.object,
  colorTitle: PropTypes.string
};
export default InputColor;