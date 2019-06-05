import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';

var ButtonReset = function ButtonReset(props) {
  var children = props.children,
      style = props.style,
      prop = _objectWithoutProperties(props, ["children", "style"]);

  return React.createElement("button", _extends({
    type: "reset",
    className: style
  }, prop), children);
};

ButtonReset.propTypes = {
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
  autocomplete: PropTypes.oneOf(["on", "off"])
};
export default ButtonReset;