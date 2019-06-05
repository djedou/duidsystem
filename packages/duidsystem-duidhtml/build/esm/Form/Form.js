import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from "react";
import PropTypes from 'prop-types';

var Form = function Form(props) {
  var children = props.children,
      style = props.style,
      others = _objectWithoutProperties(props, ["children", "style"]);

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