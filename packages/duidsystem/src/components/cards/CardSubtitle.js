import React from 'react';
import {cardSubtitleStyles} from './cardSubtitleStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardSubtitle = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardSubtitleStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default CardSubtitle;