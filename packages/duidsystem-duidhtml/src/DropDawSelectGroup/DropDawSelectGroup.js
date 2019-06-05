import React from 'react';
import PropTypes from 'prop-types';

const DropDawSelectGroup = (props) =>{

    let {optGroupItems, selectProps, labelProps, labelStyle, selectStyle} = props;
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
                    optGroupItems.map((item) =>{
                        return(
                            <optgroup
                                key={item.groupId}
                                {...item.groupProps}
                            >
                                {
                                    item.optItems.map((el)=>{
                                        return(
                                            <option 
                                                key={el.optId}
                                                value={el.value}
                                                {...el.optProps}
                                            >
                                                {el.value}
                                            </option>
                                        )
                                    })
                                }
                            </optgroup>
                        )
                    })
                }
            </select>
        </>
       
    )
  
}


DropDawSelectGroup.propTypes = {
    optGroupItems: PropTypes.arrayOf(PropTypes.object),
    selectProps: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }),
    selectStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    labelProps: PropTypes.shape({
        name: PropTypes.string,
        htmlFor: PropTypes.string,
    }),
    labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}


export default DropDawSelectGroup;