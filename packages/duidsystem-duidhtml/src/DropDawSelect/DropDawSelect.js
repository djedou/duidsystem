import React from 'react';
import PropTypes from 'prop-types';

const DropDawSelect = (props) =>{

    let {optionItems, selectProps, labelProps, labelStyle, selectStyle} = props;
    return (
        <>
            <label 
                className = {labelStyle}
                htmlFor = {labelProps.htmlFor}
            >
                {labelProps.name}
            </label>
            <select
                className = {selectStyle}
                {...selectProps}
            >
                { 
                    optionItems.map((item) =>{
                        const {optionItemProps} = item
                        return(
                            <option 
                                key={item.value}
                                value={item.value}
                                {...optionItemProps}
                            >
                            {item.value}
                            </option>
                        )
                    })
                }
            </select>
        </>
       
    )
  
}

DropDawSelect.propTypes = {
    optionItems: PropTypes.arrayOf(PropTypes.object),
    selectProps: PropTypes.shape({
        id: PropTypes.string,
    }),
    selectStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    labelProps: PropTypes.shape({
        name: PropTypes.string,
        htmlFor: PropTypes.string,
    }),
    labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }



export default DropDawSelect;