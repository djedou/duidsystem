import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';

const DropDawSelect = props => {
  let {
    optionItems,
    selectProps,
    labelProps,
    labelStyle,
    selectStyle
  } = props;
  return React.createElement(React.Fragment, null, React.createElement("label", {
    className: labelStyle,
    htmlFor: labelProps.htmlFor
  }, labelProps.name), React.createElement("select", _extends({
    className: selectStyle
  }, selectProps), optionItems.map(item => {
    const {
      optionItemProps
    } = item;
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