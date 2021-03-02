import React from 'react';
import {cardFooterStyles} from './cardFooterStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardFooter = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardFooterStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default CardFooter;