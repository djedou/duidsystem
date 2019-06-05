import React from "react";
import PropTypes from 'prop-types';

 const Form = (props) =>{

  const {children, style, ...others} = props;

  return (
    <form
      className = {style}
      {...others}
    >
      {children}
    </form>
  )
  
}

Form.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  action: PropTypes.string,
  method: PropTypes.oneOf(["get","post"]),
  name: PropTypes.string,
  enctype: PropTypes.oneOf(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]),
  target: PropTypes.oneOf(["_self", "_parent", "_top", "_blank"]),
  acceptCharset: PropTypes.string,
  novalidate: PropTypes.bool,
  autocomplete: PropTypes.oneOf(["on","off"]),
  onSubmit: PropTypes.func,
  onReset: PropTypes.func

}


export default Form;