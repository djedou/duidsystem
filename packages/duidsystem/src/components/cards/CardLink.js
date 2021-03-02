import React from 'react';
import {cardLinkStyles} from './cardLinkStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardLink = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardLinkStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <a className={newClasseName} {...resProps}> 
            {children}
        </a>
    )
}


export default CardLink;