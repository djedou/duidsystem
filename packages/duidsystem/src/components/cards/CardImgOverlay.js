import React from 'react';
import {cardImgOverlayStyles} from './cardImgOverlayStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardImgOverlay = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardImgOverlayStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default CardImgOverlay;