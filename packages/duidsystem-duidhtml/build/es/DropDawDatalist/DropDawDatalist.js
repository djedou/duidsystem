import React from 'react';
import PropTypes from 'prop-types';

const DropDawDatalist = props => {
  let {
    optionItems,
    inputProps,
    datalistProps,
    labelProps,
    inputStyle,
    datalistStyle,
    labelStyle
  } = props;
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
  }, optionItems.map(item => {
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