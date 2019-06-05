import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';

var FormFieldset = function FormFieldset(props) {
  var children = props.children,
      fieldsetProps = props.fieldsetProps,
      legendProps = props.legendProps,
      legendStyle = props.legendStyle,
      legendTitle = props.legendTitle,
      fieldsetStyle = props.fieldsetStyle;
  return React.createElement(React.Fragment, null, React.createElement("fieldset", _extends({
    className: fieldsetStyle
  }, fieldsetProps), React.createElement("legend", _extends({
    className: legendStyle
  }, legendProps), legendTitle), children));
};

FormFieldset.propTypes = {
  fieldsetStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fieldsetProps: PropTypes.object,
  legendStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  legendTitle: PropTypes.string,
  legendProps: PropTypes.object
};
export default FormFieldset;