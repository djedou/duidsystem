import React from 'react';
import PropTypes from 'prop-types';

const ButtonReset = (props) =>{

  let {children, style, ...prop} = props;
  return (
    <button
      type="reset"
      className = {style}
      {...prop}
    >
      {children}
    </button>
  )

}




ButtonReset.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  autofocus: PropTypes.bool,
  formaction: PropTypes.string,
  formmethod: PropTypes.oneOf(["get","post","put","delete"]),
  formenctype: PropTypes.oneOf(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]), 
  formtarget: PropTypes.oneOf(["_self", "_parent", "_top", "_blank"]),
  formnovalidate: PropTypes.bool,
  autocomplete: PropTypes.oneOf(["on","off"]),
}

export default ButtonReset;