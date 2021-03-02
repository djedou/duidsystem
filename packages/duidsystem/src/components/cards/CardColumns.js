import React from 'react';
import {cardColumnsStyles} from './cardColumnsStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardColumns = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardColumnsStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default CardColumns;