import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';

const FormFieldset = props => {
  let {
    children,
    fieldsetProps,
    legendProps,
    legendStyle,
    legendTitle,
    fieldsetStyle
  } = props;
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