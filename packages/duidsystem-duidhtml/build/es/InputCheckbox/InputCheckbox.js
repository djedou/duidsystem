import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = props => {
  const {
    value,
    labelProps,
    style
  } = props,
        others = _objectWithoutPropertiesLoose(props, ["value", "labelProps", "style"]);

  return React.createElement(React.Fragment, null, React.createElement("label", _extends({}, labelProps, {
    className: style
  }), React.createElement("input", _extends({
    type: "checkbox",
    value: value
  }, others)), value));
};

InputCheckbox.propTypes = {
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  autofocus: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  required: PropTypes.bool,
  checked: PropTypes.bool,
  labelProps: PropTypes.object
};
export default InputCheckbox;