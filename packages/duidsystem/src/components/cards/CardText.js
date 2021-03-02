import React from 'react';
import {cardTextStyles} from './cardTextStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const cardText = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardTextStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <p className={newClasseName} {...resProps}> 
            {children}
        </p>
    )
}


export default cardText;