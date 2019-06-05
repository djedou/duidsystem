import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';

var DropDawSelect = function DropDawSelect(props) {
  var optionItems = props.optionItems,
      selectProps = props.selectProps,
      labelProps = props.labelProps,
      labelStyle = props.labelStyle,
      selectStyle = props.selectStyle;
  return React.createElement(React.Fragment, null, React.createElement("label", {
    className: labelStyle,
    htmlFor: labelProps.htmlFor
  }, labelProps.name), React.createElement("select", _extends({
    className: selectStyle
  }, selectProps), optionItems.map(function (item) {
    var optionItemProps = item.optionItemProps;
    return React.createElement("option", _extends({
      key: item.value,
      value: item.value
    }, optionItemProps), item.value);
  })));
};

DropDawSelect.propTypes = {
  optionItems: PropTypes.arrayOf(PropTypes.object),
  selectProps: PropTypes.shape({
    id: PropTypes.string
  }),
  selectStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  labelProps: PropTypes.shape({
    name: PropTypes.string,
    htmlFor: PropTypes.string
  }),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
export default DropDawSelect;