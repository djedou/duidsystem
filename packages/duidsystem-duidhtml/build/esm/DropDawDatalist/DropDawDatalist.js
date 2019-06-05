import React from 'react';
import PropTypes from 'prop-types';

var DropDawDatalist = function DropDawDatalist(props) {
  var optionItems = props.optionItems,
      inputProps = props.inputProps,
      datalistProps = props.datalistProps,
      labelProps = props.labelProps,
      inputStyle = props.inputStyle,
      datalistStyle = props.datalistStyle,
      labelStyle = props.labelStyle;
  return React.createElement(React.Fragment, null, React.createElement("label", {
    htmlFor: labelProps.htmlFor,
    className: labelStyle
  }, labelProps.name), React.createElement("input", {
    type: "text",
    id: inputProps.id,
    list: inputProps.list,
    className: inputStyle
  }), React.createElement("datalist", {
    id: datalistProps.id
  }, optionItems.map(function (item) {
    return React.createElement("option", {
      key: item,
      value: item
    });
  })));
};

DropDawDatalist.propTypes = {
  optionItems: PropTypes.arrayOf(PropTypes.string),
  inputProps: PropTypes.shape({
    id: PropTypes.string,
    list: PropTypes.string
  }),
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  datalistProps: PropTypes.shape({
    id: PropTypes.string
  }),
  labelProps: PropTypes.shape({
    name: PropTypes.string,
    htmlFor: PropTypes.string
  }),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
export default DropDawDatalist;