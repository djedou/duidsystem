import React from 'react';
import PropTypes from 'prop-types';

const InputButton = (props) =>{

    let {style, name, ...others} = props;
    return (
        <>
            <input
                type="button"
                className={style}
                value={name}
                name={name}
                {...others}
            />
        </>
       
    )
  
}

InputButton.propTypes = {
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onSubmit: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    autofocus: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default InputButton;