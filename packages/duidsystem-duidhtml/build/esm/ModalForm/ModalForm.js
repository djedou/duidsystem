import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';

var ModalForm = function ModalForm(props) {
  var children = props.children,
      modalStyle = props.modalStyle,
      formStyle = props.formStyle,
      formProps = _objectWithoutProperties(props, ["children", "modalStyle", "formStyle"]);

  return React.createElement("dialog", {
    open: true,
    className: modalStyle
  }, React.createElement("form", _extends({
    method: "dialog",
    className: formStyle
  }, formProps), children));
};

ModalForm.propTypes = {
  modalStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  formStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  action: PropTypes.string,
  name: PropTypes.string,
  enctype: PropTypes.oneOf(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]),
  target: PropTypes.oneOf(["_self", "_parent", "_top", "_blank"]),
  acceptCharset: PropTypes.string,
  novalidate: PropTypes.bool,
  autocomplete: PropTypes.oneOf(["on", "off"])
};
export default ModalForm;