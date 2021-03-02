import React from 'react';
import {cardGroupStyles} from './cardGroupStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardGroup = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardGroupStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default CardGroup;