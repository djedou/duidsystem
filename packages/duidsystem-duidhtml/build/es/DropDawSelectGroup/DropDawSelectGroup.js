import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';

const DropDawSelectGroup = props => {
  let {
    optGroupItems,
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
  }, selectProps), optGroupItems.map(item => {
    return React.createElement("optgroup", _extends({
      key: item.groupId
    }, item.groupProps), item.optItems.map(el => {
      return React.createElement("option", _extends({
        key: el.optId,
        value: el.value
      }, el.optProps), el.value);
    }));
  })));
};

DropDawSelectGroup.propTypes = {
  optGroupItems: PropTypes.arrayOf(PropTypes.object),
  selectProps: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  selectStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  labelProps: PropTypes.shape({
    name: PropTypes.string,
    htmlFor: PropTypes.string
  }),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
export default DropDawSelectGroup;