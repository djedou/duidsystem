import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';

const InputButton = props => {
  let {
    style,
    name
  } = props,
      others = _objectWithoutPropertiesLoose(props, ["style", "name"]);

  return React.createElement(React.Fragment, null, React.createElement("input", _extends({
    type: "button",
    className: style,
    value: name,
    name: name
  }, others)));
};

InputButton.propTypes = {
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  autofocus: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
export default InputButton;