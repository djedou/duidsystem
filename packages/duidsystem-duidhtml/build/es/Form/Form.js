import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from "react";
import PropTypes from 'prop-types';

const Form = props => {
  const {
    children,
    style
  } = props,
        others = _objectWithoutPropertiesLoose(props, ["children", "style"]);

  return React.createElement("form", _extends({
    className: style
  }, others), children);
};

Form.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  action: PropTypes.string,
  method: PropTypes.oneOf(["get", "post"]),
  name: PropTypes.string,
  enctype: PropTypes.oneOf(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]),
  target: PropTypes.oneOf(["_self", "_parent", "_top", "_blank"]),
  acceptCharset: PropTypes.string,
  novalidate: PropTypes.bool,
  autocomplete: PropTypes.oneOf(["on", "off"]),
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
};
export default Form;