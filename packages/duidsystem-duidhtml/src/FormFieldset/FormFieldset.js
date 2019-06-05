import React from 'react';
import PropTypes from 'prop-types';

const FormFieldset = (props) =>{

    let {children, fieldsetProps, legendProps, legendStyle, legendTitle, fieldsetStyle} = props;
    return (
        <>
            <fieldset
                className={fieldsetStyle}
                {...fieldsetProps}
            >
                <legend
                    className={legendStyle}
                    {...legendProps}
                >
                    {legendTitle}
                </legend>
                {children}
            </fieldset>
        </>
       
    )
  
}

FormFieldset.propTypes = {
    fieldsetStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fieldsetProps: PropTypes.object,
    legendStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    legendTitle: PropTypes.string,
    legendProps: PropTypes.object,
  }

export default FormFieldset;