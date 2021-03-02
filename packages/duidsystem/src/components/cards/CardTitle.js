import React from 'react';
import {cardTitleStyles} from './cardTitleStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardTitle = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardTitleStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default CardTitle;