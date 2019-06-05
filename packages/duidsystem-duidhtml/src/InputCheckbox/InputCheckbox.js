import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = (props) =>{

    const {value, labelProps, style, ...others} = props;
    return (
        <>
            <label
                {...labelProps}
                className={style}
            >
                <input
                    type="checkbox"
                    value={value}
                    {...others}
                />
                {value}
            </label>
        </>
       
    )
}

InputCheckbox.propTypes = {
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    autofocus: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    required: PropTypes.bool,
    checked: PropTypes.bool,
    labelProps: PropTypes.object,
}

export default InputCheckbox;