import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  let {
    children,
    style
  } = props,
      prop = _objectWithoutPropertiesLoose(props, ["children", "style"]);

  return React.createElement("button", _extends({
    type: "button",
    className: style
  }, prop), children);
};

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  autofocus: PropTypes.bool,
  formaction: PropTypes.string,
  formmethod: PropTypes.oneOf(["get", "post", "put", "delete"]),
  formenctype: PropTypes.oneOf(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]),
  formtarget: PropTypes.oneOf(["_self", "_parent", "_top", "_blank"]),
  formnovalidate: PropTypes.bool,
  autocomplete: PropTypes.oneOf(["on", "off"]),
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};
export default Button;