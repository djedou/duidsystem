import React from 'react';
import {cardHeaderStyles} from './cardHeaderStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardHeader = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardHeaderStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default CardHeader;