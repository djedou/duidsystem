import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';

const InputColor = props => {
  let {
    colorTitle,
    labelProps,
    style
  } = props,
      colorProps = _objectWithoutPropertiesLoose(props, ["colorTitle", "labelProps", "style"]);

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