import React from 'react';
import {cardBodyStyles} from './cardBodyStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardBody = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardBodyStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default CardBody;