import React from 'react';
import PropTypes from 'prop-types';

const InputColor = (props) =>{

    let {colorTitle, labelProps, style, ...colorProps} = props;
    return (
        <>
            <label
                className={style}
                {...labelProps}
            >
                {colorTitle}
            </label>
            <input
                type="color"
                id={labelProps.htmlFor}
                {...colorProps}
            />
        </>
       
    )
}

InputColor.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    autofocus: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    list: PropTypes.string,
    labelProps: PropTypes.object,
    colorTitle: PropTypes.string,
}

export default InputColor;