import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';

var InputButton = function InputButton(props) {
  var style = props.style,
      name = props.name,
      others = _objectWithoutProperties(props, ["style", "name"]);

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